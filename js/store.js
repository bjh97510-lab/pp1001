// 데이터 계층: Firebase(익명 인증 + Firestore) 또는 localStorage 폴백
// 두 모드 모두 동일한 인터페이스를 제공합니다.
(function () {
  const FB_VER = "10.12.2";
  const FB = (name) => `https://www.gstatic.com/firebasejs/${FB_VER}/firebase-${name}.js`;

  const listeners = { wrong: new Set(), stats: new Set(), vocab: new Set() };
  const emit = (key, value) => listeners[key].forEach((cb) => cb(value));

  const state = {
    mode: "local",
    uid: null,
    questions: [],
    wrong: [],
    // 과목별 통계: { history: { solved, correct }, ethics: { ... } }
    stats: {},
    // 영어 단어 학습 기록: { word: { k: 외움 여부, c: 퀴즈 정답 수, x: 퀴즈 오답 수 } }
    vocab: {},
  };

  let impl = null;
  let byId = new Map();

  const subjectOf = (q) => (q && q.subject) || "history";

  // 이전 버전의 { solved, correct } 는 한국사 통계로 간주
  function normalizeStats(s) {
    s = s || {};
    const out = {};
    for (const [k, v] of Object.entries(s)) {
      if (v && typeof v === "object") out[k] = { solved: v.solved || 0, correct: v.correct || 0 };
    }
    if (typeof s.solved === "number") {
      const h = (out.history = out.history || { solved: 0, correct: 0 });
      h.solved += s.solved;
      h.correct += s.correct || 0;
    }
    return out;
  }

  // 최신 회차 먼저, 회차 안에서는 문항 번호 순 (id: "2024_1_07", "ethics_2024_1_07")
  const idKey = (id) => {
    const m = /(\d{4})_(\d)_(\d{2})$/.exec(id);
    return m ? [+m[1], +m[2], +m[3]] : [0, 0, 0];
  };
  function setQuestions(list) {
    state.questions = list.slice().sort((a, b) => {
      const [ya, na, qa] = idKey(a.id);
      const [yb, nb, qb] = idKey(b.id);
      return yb - ya || nb - na || qa - qb || a.id.localeCompare(b.id);
    });
    byId = new Map(state.questions.map((q) => [q.id, q]));
  }
  setQuestions(window.QUESTION_BANK || []);

  // ───────────── 로컬 모드 ─────────────
  function createLocalImpl() {
    const KEY = "passvault_v1";
    const load = () => {
      try {
        return JSON.parse(localStorage.getItem(KEY)) || {};
      } catch (e) {
        return {};
      }
    };
    const data = Object.assign({ uid: null, wrong: {}, stats: {}, vocab: {} }, load());
    if (!data.uid) data.uid = "local-" + Math.random().toString(36).slice(2, 10);
    data.stats = normalizeStats(data.stats);

    const save = () => {
      try {
        localStorage.setItem(KEY, JSON.stringify(data));
      } catch (e) {
        /* 저장 불가 환경(시크릿 모드 등)에서는 메모리에만 유지 */
      }
    };
    const publish = () => {
      state.wrong = Object.entries(data.wrong).map(([id, w]) => Object.assign({ id }, w));
      state.stats = JSON.parse(JSON.stringify(data.stats));
      state.vocab = JSON.parse(JSON.stringify(data.vocab));
      emit("wrong", state.wrong);
      emit("stats", state.stats);
      emit("vocab", state.vocab);
    };

    save();
    return {
      uid: data.uid,
      start: publish,
      async recordAttempt(q, userAnswer, correct) {
        const s = (data.stats[subjectOf(q)] = data.stats[subjectOf(q)] || { solved: 0, correct: 0 });
        s.solved += 1;
        if (correct) s.correct += 1;
        if (!correct) {
          data.wrong[q.id] = {
            questionId: q.id,
            userAnswer,
            isResolved: false,
            createdAt: Date.now(),
            lastReviewedAt: null,
          };
        }
        save();
        publish();
      },
      async review(id, userAnswer, correct) {
        const w = data.wrong[id];
        if (!w) return;
        w.lastReviewedAt = Date.now();
        if (correct) w.isResolved = true;
        else w.userAnswer = userAnswer;
        save();
        publish();
      },
      async remove(id) {
        delete data.wrong[id];
        save();
        publish();
      },
      async wordAnswer(w, correct) {
        const v = (data.vocab[w] = data.vocab[w] || { k: false, c: 0, x: 0 });
        if (correct) v.c += 1;
        else v.x += 1;
        save();
        publish();
      },
      async setKnown(w, known) {
        const v = (data.vocab[w] = data.vocab[w] || { k: false, c: 0, x: 0 });
        v.k = !!known;
        save();
        publish();
      },
    };
  }

  // ───────────── Firebase 모드 ─────────────
  async function createFirebaseImpl(config) {
    const [{ initializeApp }, auth, fs] = await Promise.all([
      import(FB("app")),
      import(FB("auth")),
      import(FB("firestore")),
    ]);

    const app = initializeApp(config);

    // NFR: 오프라인 지속성 (IndexedDB 캐시, 여러 탭 지원)
    let db;
    try {
      db = fs.initializeFirestore(app, {
        localCache: fs.persistentLocalCache({ tabManager: fs.persistentMultipleTabManager() }),
      });
    } catch (e) {
      db = fs.getFirestore(app);
    }

    // FR-01/02: 익명 로그인 (기본 persistence = local → 재접속 시 같은 UID 유지)
    const a = auth.getAuth(app);
    const user = await new Promise((resolve, reject) => {
      const unsub = auth.onAuthStateChanged(a, (u) => {
        if (u) {
          unsub();
          resolve(u);
        }
      });
      auth.signInAnonymously(a).catch((err) => {
        if (!a.currentUser) reject(err);
      });
    });
    const uid = user.uid;

    const userRef = fs.doc(db, "users", uid);
    const wrongCol = fs.collection(db, "users", uid, "wrong_answers");
    const toMs = (t) => (t && typeof t.toMillis === "function" ? t.toMillis() : null);

    // 공통 기출 DB: Firestore `questions` 에 데이터가 있으면 사용, 없으면 내장 샘플 사용
    try {
      const snap = await Promise.race([
        fs.getDocs(fs.collection(db, "questions")),
        new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 4000)),
      ]);
      if (!snap.empty) {
        setQuestions(snap.docs.map((d) => Object.assign({ id: d.id }, d.data())));
      }
    } catch (e) {
      console.warn("[PassVault] questions 컬렉션을 불러오지 못해 내장 문항을 사용합니다.", e);
    }

    return {
      uid,
      start() {
        // FR-06: onSnapshot 실시간 동기화
        fs.onSnapshot(wrongCol, (snap) => {
          state.wrong = snap.docs.map((d) => {
            const v = d.data({ serverTimestamps: "estimate" });
            return {
              id: d.id,
              questionId: v.questionId,
              userAnswer: v.userAnswer,
              isResolved: !!v.isResolved,
              createdAt: toMs(v.createdAt),
              lastReviewedAt: toMs(v.lastReviewedAt),
            };
          });
          emit("wrong", state.wrong);
        });
        fs.onSnapshot(userRef, (snap) => {
          state.stats = normalizeStats(snap.exists() && snap.data().stats);
          emit("stats", state.stats);
          state.vocab = (snap.exists() && snap.data().vocab) || {};
          emit("vocab", state.vocab);
        });
      },
      async recordAttempt(q, userAnswer, correct) {
        const writes = [
          fs.setDoc(
            userRef,
            {
              stats: {
                [subjectOf(q)]: {
                  solved: fs.increment(1),
                  correct: fs.increment(correct ? 1 : 0),
                },
              },
              updatedAt: fs.serverTimestamp(),
            },
            { merge: true }
          ),
        ];
        if (!correct) {
          // FR-04: 오답 자동 저장 (문항 id 를 문서 id 로 사용 → 중복 방지)
          writes.push(
            fs.setDoc(fs.doc(wrongCol, q.id), {
              questionId: q.id,
              userAnswer,
              isResolved: false,
              createdAt: fs.serverTimestamp(),
            })
          );
        }
        // 오프라인이면 서버 응답을 기다리지 않음 (로컬 캐시에 즉시 반영됨)
        Promise.all(writes).catch((e) => console.error(e));
      },
      async review(id, userAnswer, correct) {
        // FR-08: 다시 풀어 맞히면 isResolved: true
        const patch = { lastReviewedAt: fs.serverTimestamp() };
        if (correct) patch.isResolved = true;
        else patch.userAnswer = userAnswer;
        fs.updateDoc(fs.doc(wrongCol, id), patch).catch((e) => console.error(e));
      },
      async remove(id) {
        // FR-09
        fs.deleteDoc(fs.doc(wrongCol, id)).catch((e) => console.error(e));
      },
      async wordAnswer(w, correct) {
        fs.setDoc(userRef, { vocab: { [w]: correct ? { c: fs.increment(1) } : { x: fs.increment(1) } } }, { merge: true }).catch((e) => console.error(e));
      },
      async setKnown(w, known) {
        fs.setDoc(userRef, { vocab: { [w]: { k: !!known } } }, { merge: true }).catch((e) => console.error(e));
      },
    };
  }

  window.Store = {
    state,
    async init() {
      const cfg = window.FIREBASE_CONFIG;
      if (cfg && cfg.apiKey) {
        try {
          impl = await createFirebaseImpl(cfg);
          state.mode = "firebase";
        } catch (e) {
          console.error("[PassVault] Firebase 초기화 실패 → 로컬 모드로 전환합니다.", e);
          impl = null;
        }
      }
      if (!impl) {
        impl = createLocalImpl();
        state.mode = "local";
      }
      state.uid = impl.uid;
      impl.start();
      return state;
    },
    on(key, cb) {
      listeners[key].add(cb);
      return () => listeners[key].delete(cb);
    },
    recordAttempt: (q, a, c) => impl.recordAttempt(q, a, c),
    review: (id, a, c) => impl.review(id, a, c),
    remove: (id) => impl.remove(id),
    wordAnswer: (w, c) => impl.wordAnswer(w, c),
    setKnown: (w, k) => impl.setKnown(w, k),
    question: (id) => byId.get(id),
    subjectOf,
  };
})();
