(function () {
  const SUBJECTS = window.SUBJECTS;
  const NUM = ["①", "②", "③", "④", "⑤"];
  const $main = document.getElementById("main");

  const quizKey = (s) => `passvault_quiz_${s}`;

  // concept: 개념 카드 필터, word: 영어 단어 필터
  const defaultQuiz = () => ({ exam: "전체", cat: "전체", concept: null, word: null, shuffle: false, order: null, idx: 0, selected: null });
  const defaultVault = () => ({ cat: "전체", q: "", status: "open", open: new Set(), retry: {} });
  const defaultVocab = () => ({ mode: "list", q: "", filter: "all", lv: "all", sort: "freq", hide: false, open: null, reveal: new Set(), limit: 60, quiz: null, setup: { scope: "todo", dir: "en2ko", size: 10 } });

  const ui = {
    subject: null, // null 이면 과목 선택 화면
    view: "quiz",
    // 기출 풀이(quiz)와 영어 글의 흐름(flow)은 진행 상태를 따로 가짐
    // order: 섞기 모드일 때의 문항 id 순서 (null 이면 회차·번호 순)
    quizzes: { quiz: defaultQuiz(), flow: defaultQuiz() },
    vault: defaultVault(),
    concepts: { q: "", cat: "전체", open: null },
    vocab: defaultVocab(),
  };
  const qmode = () => (ui.view === "flow" ? "flow" : "quiz");
  const Q = () => ui.quizzes[qmode()];

  // ───────────── 저장 (과목 선택, 과목별 퀴즈 위치) ─────────────
  const lsGet = (k) => {
    try {
      return JSON.parse(localStorage.getItem(k));
    } catch (e) {
      return null;
    }
  };
  const lsSet = (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  };

  function loadQuiz(subject, mode = "quiz") {
    const key = mode === "flow" ? quizKey(subject + "_flow") : quizKey(subject);
    const saved = lsGet(key) || (subject === "history" && mode === "quiz" ? lsGet("passvault_quiz") : null);
    const q = defaultQuiz();
    if (saved) {
      Object.assign(q, saved, { selected: null });
      if (saved.era && !saved.cat) q.cat = saved.era; // 이전 버전 호환
    }
    return q;
  }
  const saveQuiz = () => {
    if (!ui.subject) return;
    const { exam, cat, concept, word, shuffle, order, idx } = Q();
    const key = qmode() === "flow" ? quizKey(ui.subject + "_flow") : quizKey(ui.subject);
    lsSet(key, { exam, cat, concept, word, shuffle, order, idx });
  };

  // ───────────── 유틸 ─────────────
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const fmtDate = (ms) => {
    if (!ms) return "";
    const d = new Date(ms);
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  function toast(msg, tone) {
    const root = document.getElementById("toast-root");
    const color = tone === "bad" ? "bg-rose-600" : tone === "good" ? "bg-emerald-600" : "bg-slate-800";
    root.innerHTML = `<div class="toast-enter fixed left-1/2 -translate-x-1/2 bottom-24 z-30 ${color} text-white text-sm font-medium px-4 py-2.5 rounded-full shadow-lg" role="status">${esc(msg)}</div>`;
    clearTimeout(toast.t);
    toast.t = setTimeout(() => (root.innerHTML = ""), 2200);
  }

  const subj = () => SUBJECTS[ui.subject];
  const questionsOf = (s) => Store.state.questions.filter((q) => Store.subjectOf(q) === s);
  const wrongOf = (s) =>
    Store.state.wrong.filter((w) => {
      const q = Store.question(w.questionId);
      return q && Store.subjectOf(q) === s;
    });

  const chip = (label, active, action, extra = "") =>
    `<button data-action="${action}" data-value="${esc(label)}" ${extra}
      class="shrink-0 min-h-[44px] px-4 rounded-full text-sm font-medium border transition
      ${active ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600 hover:border-brand-500"}">${esc(label)}</button>`;

  const catChips = (current, action) =>
    `<div class="-mx-4 px-4 flex gap-2 overflow-x-auto pb-1" style="scrollbar-width:none">
      ${["전체", ...subj().categories].map((e) => chip(e, e === current, action)).join("")}
    </div>`;

  const badge = (text, cls) => `<span class="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-md ${cls}">${esc(text)}</span>`;

  // 지문 마크업: __밑줄__ → 밑줄, {A}…{/A} → [A] 괄호 범위
  // 빈칸(밑줄 3개 이상)은 밑줄 마크업보다 먼저 처리
  const rich = (s) =>
    esc(s)
      .replace(/_{3,}/g, "\u0000")
      .replace(/__(.+?)__/gs, "<u>$1</u>")
      .replace(/\u0000/g, '<span class="inline-block w-16 border-b-2 border-slate-500 align-baseline"></span>')
      .replace(/\{([A-Z가-힣])\}/g, '<span class="rng" data-l="$1">')
      .replace(/\{\/[A-Z가-힣]\}/g, "</span>");

  // 제시문(공유 지문 안내 + 지문 + 문항 전용 자료). 한국사·도덕은 passage 만 사용
  function passageBlock(q, cls = "mt-3") {
    return `
      ${q.groupLabel ? `<p class="${cls} text-sm font-bold text-slate-600">${esc(q.groupLabel)}</p>` : ""}
      ${q.passage ? `<div class="${q.groupLabel ? "mt-2" : cls} rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[15px] leading-relaxed text-slate-800 whitespace-pre-line">${rich(q.passage)}</div>` : ""}
      ${q.imageUrl ? `<img src="${esc(q.imageUrl)}" alt="자료 이미지" loading="lazy" class="mt-3 w-full rounded-xl border border-slate-200" />` : ""}
      ${imageNotice(q)}`;
  }

  const extraBlock = (q) =>
    q.extra
      ? `<div class="mt-3 rounded-xl bg-white border-2 border-slate-300 px-4 py-3 text-[15px] leading-relaxed text-slate-800 whitespace-pre-line">${rich(q.extra)}</div>`
      : "";

  function questionBody(q) {
    const hasGroup = !!q.groupLabel;
    const questionEl = `<p class="${hasGroup ? "mt-4" : ""} text-[17px] leading-relaxed font-semibold text-slate-900">${esc(q.question)}</p>`;
    // 공유 지문이 있으면 지문을 먼저, 없으면 발문을 먼저 (시험지 순서)
    return hasGroup
      ? `${passageBlock(q, "")}${questionEl}${extraBlock(q)}`
      : `${questionEl}${passageBlock(q)}${extraBlock(q)}`;
  }

  // 공식 정답표에서 복수 정답을 인정한 문항은 acceptedAnswers 로 표시
  const isCorrect = (q, i) => (q.acceptedAnswers ? q.acceptedAnswers.includes(i) : i === q.answer);
  const answerLabel = (q) =>
    (q.acceptedAnswers || [q.answer]).map((i) => `${NUM[i]} ${rich(q.options[i])}`).join(", ");

  // 원본 시험지 PDF 경로 (id: "2024_1_07" → exams/2024-1_문제_1.pdf)
  const sourcePdf = (q) => {
    const m = /(\d{4})_(\d)_\d{2}$/.exec(q.id);
    return m ? `${SUBJECTS[Store.subjectOf(q)].pdfDir}/${m[1]}-${m[2]}_문제_1.pdf` : null;
  };

  function imageNotice(q) {
    const pdf = sourcePdf(q);
    if (!q.needsImage || q.imageUrl || !pdf) return "";
    return `<a href="${esc(pdf)}" target="_blank" rel="noopener"
      class="mt-3 flex items-center gap-2 min-h-[44px] rounded-xl bg-sky-50 border border-sky-200 px-4 py-2 text-sm text-sky-800">
      🖼️ 원본 시험지에 사진·그림 자료가 있어요 <span class="ml-auto font-semibold underline">${esc(q.number)}번 원본 보기</span></a>`;
  }

  // 선지 버튼. answered 이후에는 정답/오답 하이라이트
  function optionButtons(q, selected, action, id) {
    const answered = selected != null;
    return `<div class="mt-4 grid gap-2.5">
      ${q.options
        .map((opt, i) => {
          let cls = "bg-white border-slate-200 hover:border-brand-500 hover:bg-brand-50";
          let mark = "";
          if (answered) {
            if (isCorrect(q, i)) {
              cls = "bg-emerald-50 border-emerald-500 text-emerald-900";
              mark = `<span class="ml-auto text-emerald-600 font-bold">정답</span>`;
            } else if (i === selected) {
              cls = "bg-rose-50 border-rose-500 text-rose-900";
              mark = `<span class="ml-auto text-rose-600 font-bold">선택</span>`;
            } else cls = "bg-white border-slate-200 opacity-60";
          }
          return `<button data-action="${action}" data-index="${i}" ${id ? `data-id="${esc(id)}"` : ""} ${answered ? "disabled" : ""}
            class="w-full min-h-[52px] flex items-center gap-3 text-left px-4 py-3 rounded-xl border-2 text-[15px] transition ${cls}">
            <span class="text-lg leading-none">${NUM[i]}</span><span class="flex-1">${String(opt).trim() === NUM[i] ? `<span class="text-slate-500">( ${NUM[i]} ) 위치</span>` : rich(opt)}</span>${mark}
          </button>`;
        })
        .join("")}
    </div>`;
  }

  // 도덕: 문항과 연결된 사상가·사상 → 개념풀이로 이동
  function conceptLinks(q) {
    if (!q.concepts || !q.concepts.length || !subj().hasConcepts) return "";
    return `
      <div class="mx-4 mb-4 flex flex-wrap items-center gap-2">
        <span class="text-sm font-bold text-slate-500">관련 개념</span>
        ${q.concepts
          .map(
            (c) => `<button data-action="go-concept" data-value="${esc(c)}"
              class="min-h-[36px] px-3 rounded-full bg-violet-100 text-violet-800 text-sm font-semibold hover:bg-violet-200">💡 ${esc(c)}</button>`
          )
          .join("")}
      </div>`;
  }

  // FR-05: 오답풀이 카드 (요약 + 선지별 분석 + 핵심 개념)
  function explanationCard(q, userAnswer) {
    const ex = q.explanation || {};
    return `
      <section class="fade-in mt-5 rounded-2xl bg-white border border-slate-200 overflow-hidden">
        <div class="px-4 py-3 bg-brand-50 border-b border-brand-100">
          <h3 class="font-bold text-brand-700">💡 해설</h3>
          <p class="mt-1.5 text-[15px] leading-relaxed text-slate-800">${esc(ex.summary)}</p>
        </div>
        <div class="px-4 py-3">
          <h4 class="text-sm font-bold text-slate-500 mb-2">선지별 분석</h4>
          <ul class="grid gap-2">
            ${(ex.options_breakdown || [])
              .map((t, i) => {
                const ok = isCorrect(q, i);
                const mine = i === userAnswer && !ok;
                return `<li class="flex gap-2.5 rounded-lg px-3 py-2 text-[14px] leading-relaxed ${ok ? "bg-emerald-50" : mine ? "bg-rose-50" : "bg-slate-50"}">
                  <span class="shrink-0 font-bold ${ok ? "text-emerald-600" : mine ? "text-rose-600" : "text-slate-400"}">${NUM[i]}</span>
                  <span class="text-slate-700">${esc(t)}${mine ? ` <span class="text-rose-600 font-semibold">← 내가 고른 답</span>` : ""}</span>
                </li>`;
              })
              .join("")}
          </ul>
        </div>
        ${q.translation ? `
        <details class="mx-4 mb-4 rounded-xl bg-sky-50 border border-sky-200 px-4 py-3" open>
          <summary class="text-sm font-bold text-sky-800 cursor-pointer min-h-[28px]">🇰🇷 지문 해석</summary>
          <p class="mt-1.5 text-[14px] leading-relaxed text-slate-800 whitespace-pre-line">${esc(q.translation)}</p>
        </details>` : ""}
        ${ex.key_concept ? `
        <div class="mx-4 mb-4 rounded-xl bg-violet-50 border border-violet-200 px-4 py-3">
          <h4 class="text-sm font-bold text-violet-700">🔑 핵심 개념 (Key Concept)</h4>
          <p class="mt-1 text-[14px] leading-relaxed text-slate-800">${esc(ex.key_concept)}</p>
        </div>` : ""}
        ${conceptLinks(q)}
        ${wordLinks(q)}
      </section>`;
  }

  // ───────────── 영어 단어장 데이터 ─────────────
  // window.ENGLISH_VOCAB: [{ w: 표제어, p: 품사, m: 뜻, f: [형태들], lv: 1~3, ph: 숙어 여부, u: 기출 밑줄 어휘 }]
  // 형태(f)를 기준으로 영어 문항과 자동 연결합니다.
  const V = { built: false, list: [], byWord: new Map(), formMap: new Map(), phrases: [], qWords: new Map(), exCache: new Map() };
  const stripMarkup = (s) => String(s || "").replace(/__|\{\/?[A-Z가-힣]\}/g, "");
  const tokenize = (s) =>
    (stripMarkup(s).toLowerCase().replace(/[’‘]/g, "'").match(/[a-z]+(?:'[a-z]+)*/g) || []).map((t) => t.replace(/'s$/, ""));
  const englishText = (q) => [q.passage, q.extra, ...(q.options || [])].join("\n");
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const formRe = (e) => new RegExp(`\\b(${e.f.map(escRe).sort((a, b) => b.length - a.length).join("|")})\\b`, "i");

  function buildVocab() {
    if (V.built) return V;
    V.built = true;
    // 파트가 나뉘어 같은 표제어가 두 번 나오면(예: go / went) 형태를 합침
    const merged = [];
    for (const e of window.ENGLISH_VOCAB || []) {
      if (!e || !e.w || !Array.isArray(e.f) || !e.f.length) continue;
      const prev = V.byWord.get(e.w);
      if (prev) {
        prev.f = [...new Set([...prev.f, ...e.f])];
        prev.u = prev.u || e.u;
        continue;
      }
      V.byWord.set(e.w, e);
      merged.push(e);
    }
    V.list = merged;
    for (const e of V.list) {
      e.qids = new Set();
      if (e.ph) {
        e.re = formRe(e);
        V.phrases.push(e);
      } else for (const f of e.f) if (!V.formMap.has(f)) V.formMap.set(f.toLowerCase(), e);
    }
    for (const q of questionsOf("english")) {
      const text = englishText(q);
      const words = new Set();
      for (const t of new Set(tokenize(text))) {
        const e = V.formMap.get(t);
        if (e) words.add(e);
      }
      const plain = stripMarkup(text);
      for (const e of V.phrases) if (e.re.test(plain)) words.add(e);
      for (const e of words) e.qids.add(q.id);
      V.qWords.set(q.id, [...words]);
    }
    return V;
  }

  // 단어가 쓰인 기출 문장 (최대 n개)
  function examplesOf(e, n = 3) {
    if (V.exCache.has(e.w)) return V.exCache.get(e.w);
    const re = formRe(e);
    const out = [];
    const seen = new Set();
    for (const id of e.qids) {
      const q = Store.question(id);
      if (!q) continue;
      const sentences = stripMarkup([q.passage, q.extra].join("\n"))
        .replace(/______/g, "____")
        .split(/(?<=[.!?])\s+|\n+/)
        .map((s) => s.replace(/^[•◦∙A-Z]{0,1}\s*:\s*|^[•◦∙]\s*/, "").trim())
        .filter((s) => s.length > 3 && /[a-z]/i.test(s));
      for (const s of sentences) {
        if (!re.test(s) || seen.has(s)) continue;
        seen.add(s);
        out.push({ s, q });
        break;
      }
      if (out.length >= n) break;
    }
    V.exCache.set(e.w, out);
    return out;
  }
  const highlight = (s, e) => esc(s).replace(new RegExp(formRe(e).source, "gi"), '<mark class="bg-amber-200 rounded px-0.5">$1</mark>');

  const wordState = (w) => Store.state.vocab[w] || { k: false, c: 0, x: 0 };
  const LV = { 1: "기초", 2: "필수", 3: "심화" };

  // 영어: 이 문제에 나온 단어 (어려운 단어 먼저)
  function wordLinks(q) {
    if (!subj().hasVocab) return "";
    buildVocab();
    const words = (V.qWords.get(q.id) || [])
      .slice()
      .sort((a, b) => (b.u ? 1 : 0) - (a.u ? 1 : 0) || (b.lv || 1) - (a.lv || 1) || a.qids.size - b.qids.size)
      .slice(0, 12);
    if (!words.length) return "";
    return `
      <div class="mx-4 mb-4 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
        <h4 class="text-sm font-bold text-amber-800">📚 이 문제의 단어</h4>
        <div class="mt-2 flex flex-wrap gap-1.5">
          ${words
            .map(
              (e) => `<button data-action="go-word" data-value="${esc(e.w)}"
                class="min-h-[36px] px-2.5 rounded-lg bg-white border border-amber-200 text-left text-sm hover:border-amber-400">
                <b class="text-slate-900">${esc(e.w)}</b> <span class="text-slate-500">${esc(e.m)}</span></button>`
            )
            .join("")}
        </div>
      </div>`;
  }

  // ───────────── 0. 과목 선택 ─────────────
  function renderHome() {
    const cards = Object.values(SUBJECTS)
      .map((s) => {
        const qs = questionsOf(s.id);
        const exams = new Set(qs.map((q) => q.exam)).size;
        const open = wrongOf(s.id).filter((w) => !w.isResolved).length;
        const st = Store.state.stats[s.id] || { solved: 0, correct: 0 };
        const acc = st.solved ? Math.round((st.correct / st.solved) * 100) : null;
        return `
          <button data-action="enter" data-value="${s.id}"
            class="w-full text-left rounded-2xl bg-white border-2 border-slate-200 hover:border-brand-500 p-5 shadow-sm transition">
            <div class="flex items-center gap-4">
              <span class="text-5xl" aria-hidden="true">${s.icon}</span>
              <div class="flex-1 min-w-0">
                <p class="text-2xl font-extrabold text-slate-900">${esc(s.name)}</p>
                <p class="text-sm text-slate-500 mt-0.5">${esc(s.desc)}</p>
              </div>
              <span class="text-2xl text-slate-300" aria-hidden="true">›</span>
            </div>
            <div class="mt-4 grid grid-cols-3 gap-2 text-center">
              <div class="rounded-xl bg-slate-50 py-2"><p class="text-lg font-bold tabular-nums">${qs.length}</p><p class="text-xs text-slate-500">문항 · ${exams}회차</p></div>
              <div class="rounded-xl bg-rose-50 py-2"><p class="text-lg font-bold tabular-nums text-rose-600">${open}</p><p class="text-xs text-slate-500">미완료 오답</p></div>
              <div class="rounded-xl bg-brand-50 py-2"><p class="text-lg font-bold tabular-nums text-brand-600">${acc == null ? "–" : acc + "%"}</p><p class="text-xs text-slate-500">정답률</p></div>
            </div>
          </button>`;
      })
      .join("");
    return `
      <div class="pt-2 pb-4">
        <p class="text-sm font-semibold text-brand-600">고졸 검정고시 기출 · 오답노트</p>
        <h2 class="mt-1 text-2xl font-extrabold text-slate-900">어떤 과목을 공부할까요?</h2>
      </div>
      <div class="grid gap-4">${cards}</div>`;
  }

  // ───────────── 1. 기출 풀이 ─────────────
  const filteredQuestions = () => {
    const flow = qmode() === "flow" ? subj().flowCategory : null;
    const word = Q().word && subj().hasVocab ? buildVocab().byWord.get(Q().word) : null;
    return questionsOf(ui.subject).filter(
      (q) =>
        (Q().exam === "전체" || q.exam === Q().exam) &&
        (flow ? q.category === flow : Q().cat === "전체" || q.category === Q().cat) &&
        (!Q().concept || (q.concepts || []).includes(Q().concept)) &&
        (!word || word.qids.has(q.id))
    );
  };

  const FLOW_TIPS = `
    <details class="rounded-2xl bg-teal-600 text-white px-4 py-3" open>
      <summary class="font-bold cursor-pointer min-h-[28px]">🧩 글의 흐름 문제 풀이 요령</summary>
      <ul class="mt-2 grid gap-1.5 text-sm text-white/95 list-disc pl-5">
        <li><b>주어진 문장 넣기</b>: 주어진 문장의 연결어(However, Also…)와 대명사(this, they, these)가 가리키는 말을 찾아, 그 말이 나온 문장 바로 뒤에 넣어요.</li>
        <li><b>관계없는 문장</b>: 첫 문장(주제문)을 먼저 찾고, 주제에서 벗어난 이야기를 하는 문장을 골라요.</li>
        <li><b>바로 뒤/앞에 이어질 내용</b>: 마지막 문장(또는 첫 문장)이 다음 내용을 예고해요. 특히 However, several types of… 같은 표현에 주목!</li>
        <li><b>글의 순서</b>: 연결어·대명사·시간 표현으로 앞뒤를 이어 봐요.</li>
      </ul>
    </details>`;

  function quizList() {
    const list = filteredQuestions();
    if (!Q().shuffle || !Q().order) return list;
    const byId = new Map(list.map((q) => [q.id, q]));
    const ordered = Q().order.map((id) => byId.get(id)).filter(Boolean);
    return ordered.length === list.length ? ordered : list;
  }

  const shuffledIds = (list) => {
    const ids = list.map((q) => q.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    return ids;
  };

  function resetQuiz() {
    Q().idx = 0;
    Q().selected = null;
    Q().order = Q().shuffle ? shuffledIds(filteredQuestions()) : null;
    saveQuiz();
  }

  function quizFilters() {
    const flow = qmode() === "flow";
    const qs = questionsOf(ui.subject).filter((q) => !flow || q.category === subj().flowCategory);
    const exams = [...new Set(qs.map((q) => q.exam))];
    return `
      ${flow ? `${FLOW_TIPS}<div class="h-3"></div>` : ""}
      <div class="flex gap-2">
        <select id="quiz-exam" aria-label="회차 선택"
          class="flex-1 min-w-0 min-h-[44px] rounded-xl border border-slate-200 bg-white px-3 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-brand-500">
          <option value="전체">전체 회차 (${flow ? "글의 흐름 " : ""}${qs.length}문항)</option>
          ${exams.map((e) => `<option value="${esc(e)}" ${e === Q().exam ? "selected" : ""}>${esc(e)}</option>`).join("")}
        </select>
        <button data-action="quiz-shuffle" aria-pressed="${Q().shuffle}"
          class="shrink-0 min-h-[44px] px-4 rounded-xl border text-sm font-semibold ${Q().shuffle ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600"}">
          🔀 섞기
        </button>
      </div>
      ${flow ? "" : `<div class="mt-2">${catChips(Q().cat, "quiz-cat")}</div>`}
      ${Q().concept ? `
        <button data-action="clear-concept" class="mt-2 min-h-[40px] inline-flex items-center gap-2 px-4 rounded-full bg-violet-600 text-white text-sm font-semibold">
          💡 ${esc(Q().concept)} 관련 문제만 <span aria-label="필터 해제">✕</span>
        </button>` : ""}
      ${Q().word ? `
        <button data-action="clear-word" class="mt-2 min-h-[40px] inline-flex items-center gap-2 px-4 rounded-full bg-amber-500 text-white text-sm font-semibold">
          📚 '${esc(Q().word)}'가 나온 문제만 <span aria-label="필터 해제">✕</span>
        </button>` : ""}`;
  }

  function renderQuiz() {
    const list = quizList();
    if (!list.length) {
      return `${quizFilters()}<div class="py-20 text-center text-slate-500">조건에 맞는 문제가 없어요.</div>`;
    }
    if (Q().idx >= list.length) Q().idx = 0;
    const q = list[Q().idx];
    const sel = Q().selected;
    const answered = sel != null;
    const correct = answered && isCorrect(q, sel);
    const pct = Math.round(((Q().idx + (answered ? 1 : 0)) / list.length) * 100);

    return `
      ${quizFilters()}
      <div class="mt-3 flex items-center gap-3 text-sm text-slate-500">
        <span class="font-semibold text-slate-700">${Q().idx + 1} / ${list.length}</span>
        <div class="flex-1 h-1.5 rounded-full bg-slate-200 overflow-hidden"><div class="h-full bg-brand-500 transition-all" style="width:${pct}%"></div></div>
      </div>

      <article class="mt-3 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
        <div class="flex flex-wrap gap-1.5 mb-3">
          ${badge(q.category, "bg-brand-100 text-brand-700")}
          ${badge(q.number ? `${q.exam} ${q.number}번` : q.exam, "bg-slate-100 text-slate-600")}
        </div>
        ${questionBody(q)}
        ${optionButtons(q, sel, "answer")}
      </article>

      ${answered ? `
        <div class="fade-in mt-4 rounded-2xl px-4 py-3 flex items-center gap-3 ${correct ? "bg-emerald-600" : "bg-rose-600"} text-white">
          <span class="text-2xl">${correct ? "🎉" : "😢"}</span>
          <div>
            <p class="font-bold">${correct ? "정답입니다!" : `오답입니다. 정답은 ${answerLabel(q)}`}</p>
            ${correct ? "" : `<p class="text-sm text-white/85">오답노트에 자동 저장되었어요.</p>`}
          </div>
        </div>
        ${explanationCard(q, sel)}
        <button data-action="next" class="mt-5 w-full min-h-[52px] rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base">
          ${Q().idx + 1 >= list.length ? "처음부터 다시 풀기 ↺" : "다음 문제 →"}
        </button>` : ""}`;
  }

  // ───────────── 2. 오답노트 ─────────────
  function vaultItems() {
    const { cat, q, status } = ui.vault;
    const kw = q.trim().toLowerCase();
    return wrongOf(ui.subject)
      .map((w) => ({ w, q: Store.question(w.questionId) }))
      .filter(({ w }) => (status === "all" ? true : status === "open" ? !w.isResolved : w.isResolved))
      .filter(({ q }) => cat === "전체" || q.category === cat)
      .filter(({ q }) => {
        if (!kw) return true;
        const hay = [q.question, q.passage, q.extra, q.category, q.exam, ...q.options, ...(q.concepts || []), q.explanation && q.explanation.key_concept]
          .join(" ")
          .toLowerCase();
        return hay.includes(kw);
      })
      .sort((a, b) => (b.w.createdAt || 0) - (a.w.createdAt || 0));
  }

  function vaultCard({ w, q }) {
    const open = ui.vault.open.has(w.id);
    const retry = ui.vault.retry[w.id];
    let body = "";
    if (open) {
      if (retry) {
        const done = retry.selected != null;
        const ok = done && isCorrect(q, retry.selected);
        body = `
          <div class="px-4 pb-4 fade-in">
            <p class="text-sm font-bold text-brand-600 mb-2">🔁 다시 풀기</p>
            ${questionBody(q)}
            ${optionButtons(q, done ? retry.selected : null, "retry-answer", w.id)}
            ${done ? `
              <div class="mt-3 rounded-xl px-4 py-3 text-white font-semibold ${ok ? "bg-emerald-600" : "bg-rose-600"}">
                ${ok ? "🎉 정답! 복습 완료로 분류했어요." : "😢 아쉬워요. 해설을 다시 보고 도전해 보세요."}
              </div>
              ${explanationCard(q, retry.selected)}
              <div class="mt-3 grid grid-cols-2 gap-2">
                ${ok ? "" : `<button data-action="retry-start" data-id="${esc(w.id)}" class="min-h-[48px] rounded-xl bg-brand-600 text-white font-bold">다시 도전</button>`}
                <button data-action="retry-close" data-id="${esc(w.id)}" class="min-h-[48px] rounded-xl bg-slate-100 text-slate-700 font-bold ${ok ? "col-span-2" : ""}">닫기</button>
              </div>` : `
              <button data-action="retry-close" data-id="${esc(w.id)}" class="mt-3 w-full min-h-[44px] rounded-xl bg-slate-100 text-slate-600 font-semibold">취소</button>`}
          </div>`;
      } else {
        body = `
          <div class="px-4 pb-4 fade-in">
            ${passageBlock(q, "")}
            ${extraBlock(q)}
            ${optionButtons(q, w.userAnswer, "noop")}
            ${explanationCard(q, w.userAnswer)}
            <div class="mt-4 grid grid-cols-[1fr_auto] gap-2">
              <button data-action="retry-start" data-id="${esc(w.id)}" class="min-h-[48px] rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold">🔁 다시 풀기</button>
              <button data-action="delete" data-id="${esc(w.id)}" class="min-h-[48px] min-w-[48px] px-4 rounded-xl bg-rose-50 text-rose-600 font-bold border border-rose-200" aria-label="오답 삭제">🗑️ 삭제</button>
            </div>
          </div>`;
      }
    }

    return `
      <li class="rounded-2xl bg-white border ${w.isResolved ? "border-emerald-200" : "border-slate-200"} shadow-sm overflow-hidden">
        <button data-action="toggle" data-id="${esc(w.id)}" class="w-full text-left px-4 py-3.5 min-h-[44px]" aria-expanded="${open}">
          <div class="flex flex-wrap items-center gap-1.5">
            ${badge(q.category, "bg-brand-100 text-brand-700")}
            ${q.number ? badge(`${q.exam} ${q.number}번`, "bg-slate-100 text-slate-600") : ""}
            ${w.isResolved ? badge("✓ 복습 완료", "bg-emerald-100 text-emerald-700") : badge("미완료", "bg-rose-100 text-rose-700")}
            <span class="ml-auto text-xs text-slate-400">${fmtDate(w.createdAt)}</span>
          </div>
          <p class="mt-2 font-semibold text-[15px] leading-snug text-slate-900">${esc(q.question)}</p>
          <div class="mt-1.5 flex items-center justify-between text-sm">
            <span class="text-slate-500">내 답 <span class="text-rose-600 font-semibold">${NUM[w.userAnswer]} ${esc(q.options[w.userAnswer].replace(/__|\{\/?[A-Z가-힣]\}/g, ""))}</span></span>
            <span class="text-slate-400 text-lg leading-none transition ${open ? "rotate-180" : ""}">⌄</span>
          </div>
        </button>
        ${body}
      </li>`;
  }

  function renderVaultList() {
    const items = vaultItems();
    const total = wrongOf(ui.subject).length;
    if (!total) {
      return `<div class="py-16 text-center">
        <p class="text-4xl">📭</p>
        <p class="mt-3 font-semibold text-slate-700">아직 저장된 오답이 없어요</p>
        <p class="mt-1 text-sm text-slate-500">기출 풀이에서 틀린 문제는 자동으로 여기에 모여요.</p>
        <button data-action="tab" data-view="quiz" class="mt-5 min-h-[48px] px-6 rounded-xl bg-brand-600 text-white font-bold">문제 풀러 가기</button>
      </div>`;
    }
    if (!items.length) return `<div class="py-16 text-center text-slate-500">조건에 맞는 오답이 없어요.</div>`;
    return `<ul class="grid gap-3">${items.map(vaultCard).join("")}</ul>`;
  }

  function renderVault() {
    const wrong = wrongOf(ui.subject);
    const openCnt = wrong.filter((w) => !w.isResolved).length;
    const doneCnt = wrong.length - openCnt;
    const st = ui.vault.status;
    const seg = (key, label, n) =>
      `<button data-action="vault-status" data-value="${key}" class="min-h-[44px] rounded-lg text-sm font-semibold transition ${st === key ? "bg-white shadow text-brand-700" : "text-slate-500"}">${label} <span class="text-xs">${n}</span></button>`;
    return `
      <div class="relative">
        <input id="vault-search" type="search" value="${esc(ui.vault.q)}" placeholder="${esc(subj().searchHint)}"
          class="w-full min-h-[48px] rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
      </div>
      <div class="mt-3 grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-200/70">
        ${seg("open", "미완료", openCnt)}${seg("resolved", "복습 완료", doneCnt)}${seg("all", "전체", wrong.length)}
      </div>
      <div class="mt-3">${catChips(ui.vault.cat, "vault-cat")}</div>
      <div id="vault-list" class="mt-3">${renderVaultList()}</div>`;
  }

  // ───────────── 3. 개념풀이(도덕) · 개념정리(한국사) ─────────────
  const conceptList = () => (ui.subject === "ethics" ? window.ETHICS_CONCEPTS : ui.subject === "history" ? window.HISTORY_CONCEPTS : null) || [];
  const TYPE_COLOR = {
    사상가: "bg-violet-100 text-violet-700",
    인물: "bg-violet-100 text-violet-700",
    사건: "bg-rose-100 text-rose-700",
    "제도·정책": "bg-sky-100 text-sky-700",
    "국가·단체": "bg-emerald-100 text-emerald-700",
    "문화·유산": "bg-amber-100 text-amber-800",
  };

  // 개념별 관련 기출 수 / 틀린 문제 수
  function conceptStats() {
    const count = new Map();
    const wrongCnt = new Map();
    const openWrong = new Set(wrongOf(ui.subject).filter((w) => !w.isResolved).map((w) => w.questionId));
    for (const q of questionsOf(ui.subject)) {
      for (const c of q.concepts || []) {
        count.set(c, (count.get(c) || 0) + 1);
        if (openWrong.has(q.id)) wrongCnt.set(c, (wrongCnt.get(c) || 0) + 1);
      }
    }
    return { count, wrongCnt };
  }

  function conceptCard(c, stats) {
    const open = ui.concepts.open === c.name;
    const n = stats.count.get(c.name) || 0;
    const wn = stats.wrongCnt.get(c.name) || 0;
    return `
      <li id="concept-${esc(c.name)}" class="rounded-2xl bg-white border ${open ? "border-violet-300" : "border-slate-200"} shadow-sm overflow-hidden">
        <button data-action="concept-toggle" data-value="${esc(c.name)}" class="w-full text-left px-4 py-3.5 min-h-[44px]" aria-expanded="${open}">
          <div class="flex items-center gap-2">
            <span class="text-lg font-extrabold text-slate-900">${esc(c.name)}</span>
            ${c.type ? badge(c.type, TYPE_COLOR[c.type] || "bg-amber-100 text-amber-800") : ""}
            ${wn ? badge(`오답 ${wn}`, "bg-rose-100 text-rose-700") : ""}
            <span class="ml-auto text-xs text-slate-400 tabular-nums">기출 ${n}</span>
          </div>
          <p class="mt-1 text-sm text-slate-500">${esc(c.tagline || "")}</p>
          <p class="mt-1.5 text-[15px] leading-relaxed text-slate-800 ${open ? "" : "line-clamp-2"}">${esc(c.summary || "")}</p>
        </button>
        ${open ? `
        <div class="px-4 pb-4 fade-in">
          ${c.keywords && c.keywords.length ? `
            <div class="flex flex-wrap gap-1.5">${c.keywords.map((k) => `<span class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium">${esc(k)}</span>`).join("")}</div>` : ""}
          ${c.points && c.points.length ? `
            <div class="mt-3 rounded-xl bg-brand-50 border border-brand-100 px-4 py-3">
              <h4 class="text-sm font-bold text-brand-700">📌 시험에 이렇게 나와요</h4>
              <ul class="mt-1.5 grid gap-1 text-[14px] leading-relaxed text-slate-800 list-disc pl-5">${c.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
            </div>` : ""}
          ${c.compare ? `
            <div class="mt-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
              <h4 class="text-sm font-bold text-amber-800">⚠️ 헷갈리지 말기</h4>
              <p class="mt-1 text-[14px] leading-relaxed text-slate-800">${esc(c.compare)}</p>
            </div>` : ""}
          ${c.related && c.related.length ? `
            <div class="mt-3 flex flex-wrap items-center gap-2">
              <span class="text-sm font-bold text-slate-500">함께 보기</span>
              ${c.related.map((r) => `<button data-action="go-concept" data-value="${esc(r)}" class="min-h-[36px] px-3 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold border border-violet-200">${esc(r)}</button>`).join("")}
            </div>` : ""}
          ${n ? `
            <button data-action="concept-quiz" data-value="${esc(c.name)}" class="mt-4 w-full min-h-[48px] rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold">
              📖 관련 기출 ${n}문제 풀기
            </button>` : ""}
        </div>` : ""}
      </li>`;
  }

  function renderConceptList() {
    const stats = conceptStats();
    const { q, cat } = ui.concepts;
    const kw = q.trim().toLowerCase();
    const list = conceptList()
      .filter((c) => cat === "전체" || c.category === cat)
      .filter((c) => {
        if (!kw) return true;
        return [c.name, c.tagline, c.summary, ...(c.keywords || []), ...(c.points || []), c.compare].join(" ").toLowerCase().includes(kw);
      });
    if (!conceptList().length) return `<div class="py-16 text-center text-slate-500">개념 자료를 준비 중이에요.</div>`;
    if (!list.length) return `<div class="py-16 text-center text-slate-500">조건에 맞는 개념이 없어요.</div>`;
    const groups = subj().categories
      .map((g) => ({ g, items: list.filter((c) => c.category === g) }))
      .filter((x) => x.items.length);
    return groups
      .map(
        ({ g, items }) => `
        <h3 class="mt-5 first:mt-0 mb-2 text-sm font-bold text-slate-500">${esc(g)} <span class="font-normal">${items.length}</span></h3>
        <ul class="grid gap-3">${items.map((c) => conceptCard(c, stats)).join("")}</ul>`
      )
      .join("");
  }

  function renderConcepts() {
    return `
      <div class="rounded-2xl bg-violet-600 text-white px-4 py-3">
        <p class="font-bold">${esc(subj().conceptTitle)}</p>
        <p class="text-sm text-white/85 mt-0.5">${esc(subj().conceptDesc)}</p>
      </div>
      <div class="mt-3 relative">
        <input id="concept-search" type="search" value="${esc(ui.concepts.q)}" placeholder="${esc(subj().conceptHint)}"
          class="w-full min-h-[48px] rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
      </div>
      <div class="mt-3">${catChips(ui.concepts.cat, "concept-cat")}</div>
      <div id="concept-list" class="mt-3">${renderConceptList()}</div>`;
  }

  // ───────────── 영어 단어장 (단어 목록 · 단어 퀴즈) ─────────────
  const VOCAB_FILTERS = [
    ["all", "전체"],
    ["todo", "안 외운 단어"],
    ["confused", "헷갈린 단어"],
    ["known", "외운 단어"],
    ["tested", "기출 밑줄 어휘"],
  ];
  function vocabMatches(e, filter) {
    const s = wordState(e.w);
    if (filter === "todo") return !s.k;
    if (filter === "confused") return !s.k && s.x > 0;
    if (filter === "known") return s.k;
    if (filter === "tested") return !!e.u;
    return true;
  }

  function vocabItems() {
    const { q, filter, lv, sort } = ui.vocab;
    const kw = q.trim().toLowerCase();
    const list = buildVocab().list.filter(
      (e) =>
        vocabMatches(e, filter) &&
        (lv === "all" || String(e.lv || 1) === lv) &&
        (!kw || e.w.toLowerCase().includes(kw) || e.f.some((f) => f.includes(kw)) || (e.m || "").includes(kw))
    );
    return sort === "abc" ? list.sort((a, b) => a.w.localeCompare(b.w)) : list.sort((a, b) => b.qids.size - a.qids.size || a.w.localeCompare(b.w));
  }

  function wordCard(e) {
    const s = wordState(e.w);
    const open = ui.vocab.open === e.w;
    const hidden = ui.vocab.hide && !ui.vocab.reveal.has(e.w) && !open;
    const n = e.qids.size;
    return `
      <li id="word-${esc(e.w)}" class="rounded-xl bg-white border ${open ? "border-amber-300" : s.k ? "border-emerald-200" : "border-slate-200"} overflow-hidden">
        <div class="flex items-center gap-2 pl-2 pr-3">
          <button data-action="word-known" data-value="${esc(e.w)}" aria-pressed="${s.k}" aria-label="${s.k ? "외운 단어 해제" : "외웠어요"}"
            class="shrink-0 w-11 h-11 rounded-lg text-xl ${s.k ? "text-emerald-600" : "text-slate-300 hover:text-slate-500"}">${s.k ? "✔" : "○"}</button>
          <button data-action="word-toggle" data-value="${esc(e.w)}" class="flex-1 min-w-0 text-left py-2.5 min-h-[44px]">
            <span class="flex items-baseline gap-1.5 flex-wrap">
              <b class="text-[17px] text-slate-900">${esc(e.w)}</b>
              <span class="text-xs text-slate-400">${esc(e.p || "")}</span>
              ${e.u ? `<span class="text-[11px] font-bold text-amber-700 bg-amber-100 rounded px-1">밑줄</span>` : ""}
              ${!s.k && s.x ? `<span class="text-[11px] font-bold text-rose-700 bg-rose-100 rounded px-1">헷갈림 ${s.x}</span>` : ""}
            </span>
            <span class="block text-[15px] ${hidden ? "text-transparent bg-slate-200 rounded select-none" : "text-slate-700"}">${esc(e.m || "")}</span>
          </button>
          <span class="shrink-0 text-xs text-slate-400 tabular-nums">기출 ${n}</span>
        </div>
        ${open ? `
        <div class="px-4 pb-4 fade-in">
          <div class="flex flex-wrap gap-1.5 text-xs">
            ${badge(LV[e.lv || 1] || "기초", "bg-slate-100 text-slate-600")}
            ${e.f.length > 1 ? `<span class="text-slate-500">형태: ${esc(e.f.join(", "))}</span>` : ""}
          </div>
          ${examplesOf(e).length ? `
            <div class="mt-3 grid gap-2">
              ${examplesOf(e)
                .map(
                  ({ s: sen, q }) => `<div class="rounded-lg bg-amber-50 border border-amber-100 px-3 py-2 text-[14px] leading-relaxed">
                    <p class="text-slate-800">${highlight(sen, e)}</p>
                    <p class="mt-0.5 text-xs text-slate-500">${esc(q.exam)} ${q.number}번</p></div>`
                )
                .join("")}
            </div>` : ""}
          <div class="mt-3 grid grid-cols-2 gap-2">
            <button data-action="word-known" data-value="${esc(e.w)}" class="min-h-[44px] rounded-xl font-bold ${s.k ? "bg-slate-100 text-slate-600" : "bg-emerald-600 text-white"}">${s.k ? "다시 외우기" : "✔ 외웠어요"}</button>
            ${n ? `<button data-action="word-questions" data-value="${esc(e.w)}" class="min-h-[44px] rounded-xl bg-brand-600 text-white font-bold">📖 기출 ${n}문제 풀기</button>` : "<span></span>"}
          </div>
        </div>` : ""}
      </li>`;
  }

  function renderWordList() {
    const items = vocabItems();
    if (!buildVocab().list.length) return `<div class="py-16 text-center text-slate-500">단어장을 준비 중이에요.</div>`;
    if (!items.length) return `<div class="py-16 text-center text-slate-500">조건에 맞는 단어가 없어요.</div>`;
    const shown = items.slice(0, ui.vocab.limit);
    return `
      <p class="mb-2 text-sm text-slate-500">${items.length}개 단어</p>
      <ul class="grid gap-2">${shown.map(wordCard).join("")}</ul>
      ${items.length > shown.length ? `<button data-action="vocab-more" class="mt-3 w-full min-h-[48px] rounded-xl bg-white border border-slate-200 font-semibold text-slate-600">더 보기 (${items.length - shown.length}개 남음)</button>` : ""}`;
  }

  // 단어 퀴즈 ─ 범위·방향·문항 수를 고르고 4지선다로 풀기
  const QUIZ_SCOPES = [
    ["todo", "안 외운 단어"],
    ["confused", "헷갈린 단어"],
    ["tested", "기출 밑줄 어휘"],
    ["top", "자주 나온 단어 300"],
    ["all", "전체 단어"],
  ];
  function scopeWords(scope) {
    const list = buildVocab().list;
    if (scope === "top") return list.slice().sort((a, b) => b.qids.size - a.qids.size).slice(0, 300);
    return list.filter((e) => vocabMatches(e, scope));
  }
  const pick = (arr, n) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, n);
  };
  function makeWordQuiz(words, dir) {
    const all = buildVocab().list;
    const items = words.map((e) => {
      const samePos = all.filter((o) => o !== e && o.p === e.p && o.m !== e.m);
      const pool = samePos.length >= 3 ? samePos : all.filter((o) => o !== e && o.m !== e.m);
      const options = pick([e, ...pick(pool, 3)], 4);
      return { e, options, answer: options.indexOf(e) };
    });
    return { dir, items, i: 0, sel: null, results: [] };
  }

  function renderWordQuiz() {
    const z = ui.vocab.quiz;
    if (!z) {
      const st = ui.vocab.setup;
      const seg = (group, key, label, n) =>
        `<button data-action="wq-setup" data-group="${group}" data-value="${key}"
          class="min-h-[44px] px-3 rounded-xl border text-sm font-semibold ${st[group] == key ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600"}">${label}${n != null ? ` <span class="text-xs opacity-80">${n}</span>` : ""}</button>`;
      return `
        <section class="rounded-2xl bg-white border border-slate-200 p-4">
          <h3 class="font-bold">범위</h3>
          <div class="mt-2 flex flex-wrap gap-2">${QUIZ_SCOPES.map(([k, l]) => seg("scope", k, l, scopeWords(k).length)).join("")}</div>
          <h3 class="mt-4 font-bold">방향</h3>
          <div class="mt-2 flex flex-wrap gap-2">${seg("dir", "en2ko", "영어 → 뜻")}${seg("dir", "ko2en", "뜻 → 영어")}</div>
          <h3 class="mt-4 font-bold">문제 수</h3>
          <div class="mt-2 flex flex-wrap gap-2">${[10, 20, 30].map((n) => seg("size", n, `${n}문제`)).join("")}</div>
          <button data-action="wq-start" class="mt-5 w-full min-h-[52px] rounded-xl bg-brand-600 text-white font-bold text-base">단어 퀴즈 시작</button>
        </section>
        <p class="mt-3 text-sm text-slate-500 text-center">틀린 단어는 '헷갈린 단어'로 모여요. 외운 단어는 ✔ 표시로 목록에서 관리할 수 있어요.</p>`;
    }
    if (z.i >= z.items.length) {
      const wrongItems = z.items.filter((_, k) => !z.results[k]);
      const score = z.results.filter(Boolean).length;
      return `
        <section class="rounded-2xl bg-white border border-slate-200 p-5 text-center">
          <p class="text-5xl">${score === z.items.length ? "🏆" : score >= z.items.length * 0.7 ? "🎉" : "💪"}</p>
          <p class="mt-2 text-2xl font-extrabold">${score} / ${z.items.length}</p>
          <p class="text-slate-500">${score === z.items.length ? "완벽해요!" : "틀린 단어를 한 번 더 보고 가요."}</p>
        </section>
        ${wrongItems.length ? `
          <section class="mt-3 rounded-2xl bg-white border border-slate-200 p-4">
            <h3 class="font-bold text-rose-600">틀린 단어 ${wrongItems.length}</h3>
            <ul class="mt-2 grid gap-1.5">${wrongItems.map(({ e }) => `<li class="flex gap-2 text-[15px]"><b>${esc(e.w)}</b><span class="text-slate-600">${esc(e.m)}</span></li>`).join("")}</ul>
          </section>` : ""}
        <div class="mt-3 grid ${wrongItems.length ? "grid-cols-2" : "grid-cols-1"} gap-2">
          ${wrongItems.length ? `<button data-action="wq-retry" class="min-h-[48px] rounded-xl bg-rose-600 text-white font-bold">틀린 단어 다시</button>` : ""}
          <button data-action="wq-exit" class="min-h-[48px] rounded-xl bg-slate-100 text-slate-700 font-bold">처음으로</button>
        </div>`;
    }
    const it = z.items[z.i];
    const en2ko = z.dir === "en2ko";
    const answered = z.sel != null;
    const ex = answered ? examplesOf(it.e, 1)[0] : null;
    return `
      <div class="flex items-center gap-3 text-sm text-slate-500">
        <span class="font-semibold text-slate-700">${z.i + 1} / ${z.items.length}</span>
        <div class="flex-1 h-1.5 rounded-full bg-slate-200 overflow-hidden"><div class="h-full bg-amber-500" style="width:${((z.i + (answered ? 1 : 0)) / z.items.length) * 100}%"></div></div>
        <button data-action="wq-exit" class="min-h-[36px] px-2 text-slate-400">그만하기</button>
      </div>
      <section class="mt-3 rounded-2xl bg-white border border-slate-200 p-5 text-center">
        <p class="text-xs text-slate-400">${en2ko ? "이 단어의 뜻은?" : "이 뜻의 영어 단어는?"}</p>
        <p class="mt-2 ${en2ko ? "text-3xl font-extrabold" : "text-xl font-bold"} text-slate-900">${esc(en2ko ? it.e.w : it.e.m)}</p>
        ${en2ko && it.e.p ? `<p class="text-sm text-slate-400 mt-1">${esc(it.e.p)}</p>` : ""}
      </section>
      <div class="mt-3 grid gap-2.5">
        ${it.options
          .map((o, k) => {
            let cls = "bg-white border-slate-200 hover:border-brand-500";
            if (answered) cls = k === it.answer ? "bg-emerald-50 border-emerald-500" : k === z.sel ? "bg-rose-50 border-rose-500" : "bg-white border-slate-200 opacity-60";
            return `<button data-action="wq-answer" data-index="${k}" ${answered ? "disabled" : ""}
              class="w-full min-h-[52px] flex items-center gap-3 text-left px-4 py-3 rounded-xl border-2 text-[16px] ${cls}">
              <span class="text-lg">${NUM[k]}</span><span>${esc(en2ko ? o.m : o.w)}</span></button>`;
          })
          .join("")}
      </div>
      ${answered ? `
        <div class="fade-in mt-3 rounded-xl ${z.results[z.i] ? "bg-emerald-600" : "bg-rose-600"} text-white px-4 py-3">
          <p class="font-bold">${z.results[z.i] ? "정답!" : "오답"} · ${esc(it.e.w)} = ${esc(it.e.m)}</p>
          ${ex ? `<p class="mt-1 text-sm text-white/90">${esc(ex.s)} <span class="opacity-75">(${esc(ex.q.exam)} ${ex.q.number}번)</span></p>` : ""}
        </div>
        <button data-action="wq-next" class="mt-3 w-full min-h-[52px] rounded-xl bg-brand-600 text-white font-bold">${z.i + 1 >= z.items.length ? "결과 보기" : "다음 단어 →"}</button>` : ""}`;
  }

  function renderVocab() {
    const all = buildVocab().list;
    const known = all.filter((e) => wordState(e.w).k).length;
    const confused = all.filter((e) => vocabMatches(e, "confused")).length;
    const m = ui.vocab.mode;
    const tab = (key, label) =>
      `<button data-action="vocab-mode" data-value="${key}" class="min-h-[44px] rounded-lg text-sm font-semibold ${m === key ? "bg-white shadow text-brand-700" : "text-slate-500"}">${label}</button>`;
    const head = `
      <div class="rounded-2xl bg-amber-500 text-white px-4 py-3">
        <p class="font-bold">📚 기출 영어 단어장</p>
        <p class="text-sm text-white/90 mt-0.5">최근 기출 ${questionsOf("english").length}문항에 나온 단어 ${all.length}개 · 외운 단어 ${known} · 헷갈린 단어 ${confused}</p>
        <div class="mt-2 h-2 rounded-full bg-white/30 overflow-hidden"><div class="h-full bg-white" style="width:${all.length ? (known / all.length) * 100 : 0}%"></div></div>
      </div>
      <div class="mt-3 grid grid-cols-2 gap-1 p-1 rounded-xl bg-slate-200/70">${tab("list", "📖 단어 목록")}${tab("quiz", "✏️ 단어 퀴즈")}</div>`;
    if (m === "quiz") return `${head}<div class="mt-3">${renderWordQuiz()}</div>`;
    const v = ui.vocab;
    const chip2 = (action, key, label, on) =>
      `<button data-action="${action}" data-value="${key}" class="shrink-0 min-h-[40px] px-3 rounded-full text-sm font-medium border ${on ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600"}">${label}</button>`;
    return `
      ${head}
      <div class="mt-3 relative">
        <input id="vocab-search" type="search" value="${esc(v.q)}" placeholder="영어 단어나 뜻 검색" autocapitalize="off"
          class="w-full min-h-[48px] rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
      </div>
      <div class="mt-3 -mx-4 px-4 flex gap-2 overflow-x-auto pb-1" style="scrollbar-width:none">${VOCAB_FILTERS.map(([k, l]) => chip2("vocab-filter", k, l, v.filter === k)).join("")}</div>
      <div class="mt-2 -mx-4 px-4 flex gap-2 overflow-x-auto pb-1 items-center" style="scrollbar-width:none">
        ${[["all", "모든 수준"], ["1", "기초"], ["2", "필수"], ["3", "심화"]].map(([k, l]) => chip2("vocab-lv", k, l, v.lv === k)).join("")}
        <span class="w-px h-6 bg-slate-300 shrink-0"></span>
        ${chip2("vocab-sort", v.sort === "freq" ? "abc" : "freq", v.sort === "freq" ? "빈도순" : "ABC순", false)}
        ${chip2("vocab-hide", "", v.hide ? "🙈 뜻 가림" : "👀 뜻 보기", v.hide)}
      </div>
      <div id="vocab-list" class="mt-3">${renderWordList()}</div>`;
  }

  function openWord(w) {
    ui.view = "vocab";
    ui.vocab.mode = "list";
    ui.vocab.q = w;
    ui.vocab.filter = "all";
    ui.vocab.lv = "all";
    ui.vocab.open = w;
    render();
    window.scrollTo(0, 0);
  }

  // ───────────── 4. 학습 현황 ─────────────
  function renderStats() {
    const { solved, correct } = Store.state.stats[ui.subject] || { solved: 0, correct: 0 };
    const wrong = wrongOf(ui.subject);
    const done = wrong.filter((w) => w.isResolved).length;
    const open = wrong.length - done;
    const acc = solved ? Math.round((correct / solved) * 100) : 0;
    const reviewPct = wrong.length ? Math.round((done / wrong.length) * 100) : 0;
    const { catLabel, categories } = subj();

    const byCat = categories.map((cat) => {
      const list = wrong.filter((w) => Store.question(w.questionId).category === cat);
      const r = list.filter((w) => w.isResolved).length;
      return { cat, total: list.length, resolved: r, open: list.length - r };
    });
    const max = Math.max(1, ...byCat.map((e) => e.total));
    const weakest = byCat.filter((e) => e.open > 0).sort((a, b) => b.open - a.open)[0];

    const tile = (label, value, sub, cls) => `
      <div class="rounded-2xl bg-white border border-slate-200 p-4">
        <p class="text-sm text-slate-500">${label}</p>
        <p class="mt-1 text-3xl font-extrabold tabular-nums ${cls || "text-slate-900"}">${value}</p>
        ${sub ? `<p class="text-xs text-slate-400 mt-0.5">${sub}</p>` : ""}
      </div>`;

    return `
      <div class="grid grid-cols-2 gap-3">
        ${tile("총 푼 문제", solved, `정답 ${correct}문제`)}
        ${tile("정답률", `${acc}<span class="text-lg">%</span>`, solved ? "" : "아직 기록이 없어요", "text-brand-600")}
        ${tile("미완료 오답", open, "복습이 필요해요", "text-rose-600")}
        ${tile("복습 완료", done, "다시 풀어 맞힌 문제", "text-emerald-600")}
      </div>

      <section class="mt-4 rounded-2xl bg-white border border-slate-200 p-4">
        <div class="flex items-baseline justify-between">
          <h3 class="font-bold">오답 복습 진행률</h3>
          <span class="text-sm text-slate-500 tabular-nums">${done} / ${wrong.length}</span>
        </div>
        <div class="mt-3 h-4 rounded-full bg-rose-100 overflow-hidden" role="progressbar" aria-valuenow="${reviewPct}" aria-valuemin="0" aria-valuemax="100">
          <div class="h-full bg-emerald-500 rounded-full transition-all" style="width:${reviewPct}%"></div>
        </div>
        <div class="mt-2 flex justify-between text-xs text-slate-500">
          <span><span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-500 align-middle"></span> 복습 완료 ${reviewPct}%</span>
          <span><span class="inline-block w-2.5 h-2.5 rounded-sm bg-rose-200 align-middle"></span> 저장된 오답</span>
        </div>
      </section>

      <section class="mt-4 rounded-2xl bg-white border border-slate-200 p-4">
        <h3 class="font-bold">${catLabel}별 오답 분포</h3>
        <ul class="mt-3 grid gap-3">
          ${byCat
            .map(
              (e) => `
            <li class="grid grid-cols-[5rem_1fr_3.5rem] items-center gap-2 text-sm">
              <span class="font-semibold text-slate-700 truncate">${esc(e.cat)}</span>
              <div class="h-3 rounded-full bg-slate-100 overflow-hidden flex">
                <div class="h-full bg-rose-500" style="width:${(e.open / max) * 100}%"></div>
                <div class="h-full bg-emerald-500" style="width:${(e.resolved / max) * 100}%"></div>
              </div>
              <span class="text-right tabular-nums text-slate-500">${e.total ? `${e.open}<span class="text-slate-300"> / </span>${e.total}` : "–"}</span>
            </li>`
            )
            .join("")}
        </ul>
        <div class="mt-3 flex gap-4 text-xs text-slate-500">
          <span><span class="inline-block w-2.5 h-2.5 rounded-sm bg-rose-500 align-middle"></span> 미완료</span>
          <span><span class="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-500 align-middle"></span> 복습 완료</span>
          <span class="ml-auto">미완료 / 전체</span>
        </div>
      </section>

      ${subj().hasVocab ? (() => {
        const all = buildVocab().list;
        const known = all.filter((e) => wordState(e.w).k).length;
        const confused = all.filter((e) => vocabMatches(e, "confused")).length;
        const pct = all.length ? Math.round((known / all.length) * 100) : 0;
        return `
      <section class="mt-4 rounded-2xl bg-white border border-slate-200 p-4">
        <div class="flex items-baseline justify-between">
          <h3 class="font-bold">📚 기출 단어 암기</h3>
          <span class="text-sm text-slate-500 tabular-nums">${known} / ${all.length}</span>
        </div>
        <div class="mt-3 h-4 rounded-full bg-slate-100 overflow-hidden"><div class="h-full bg-amber-500 rounded-full" style="width:${pct}%"></div></div>
        <p class="mt-2 text-xs text-slate-500">외운 단어 ${pct}% · 헷갈린 단어 ${confused}개</p>
        ${confused ? `<button data-action="go-confused" class="mt-3 min-h-[44px] px-4 rounded-xl bg-amber-500 text-white font-bold">헷갈린 단어 퀴즈</button>` : ""}
      </section>`;
      })() : ""}

      ${weakest ? `
      <section class="mt-4 rounded-2xl bg-brand-900 text-white p-4">
        <p class="text-sm text-white/70">집중 복습 추천</p>
        <p class="mt-1 font-bold text-lg">'${esc(weakest.cat)}' 미완료 오답이 ${weakest.open}개 있어요</p>
        <button data-action="go-vault-cat" data-value="${esc(weakest.cat)}" class="mt-3 min-h-[44px] px-5 rounded-xl bg-white text-brand-900 font-bold">오답노트에서 복습하기</button>
      </section>` : ""}

      <p class="mt-6 text-center text-xs text-slate-400">
        ${Store.state.mode === "firebase" ? "Firebase 익명 계정에 저장됩니다" : "이 브라우저(localStorage)에 저장됩니다"} · ID ${esc(String(Store.state.uid).slice(0, 10))}
      </p>`;
  }

  // ───────────── 렌더 ─────────────
  const TABS = [
    { view: "quiz", icon: "📖", label: "기출 풀이" },
    { view: "vocab", icon: "🔤", label: "단어장", when: (s) => s.hasVocab },
    { view: "flow", icon: "🧩", label: "글의 흐름", when: (s) => s.flowCategory },
    { view: "vault", icon: "📝", label: "오답노트" },
    { view: "concepts", icon: "💡", label: (s) => s.conceptTab, when: (s) => s.hasConcepts },
    { view: "stats", icon: "📊", label: "학습 현황" },
  ];

  function renderChrome() {
    const s = ui.subject && subj();
    document.getElementById("header-icon").textContent = s ? s.icon : "📚";
    document.getElementById("header-title").textContent = s ? `${s.name} Pass Vault` : "검정고시 Pass Vault";
    document.getElementById("back-btn").classList.toggle("hidden", !s);
    document.title = s ? `${s.name} Pass Vault` : "검정고시 Pass Vault";

    const nav = document.getElementById("nav");
    nav.classList.toggle("hidden", !s);
    if (!s) return;
    const tabs = TABS.filter((t) => !t.when || t.when(s));
    const openCnt = wrongOf(ui.subject).filter((w) => !w.isResolved).length;
    const tabsEl = document.getElementById("tabs");
    tabsEl.style.gridTemplateColumns = `repeat(${tabs.length}, minmax(0, 1fr))`;
    tabsEl.innerHTML = tabs
      .map((t) => {
        const on = t.view === ui.view;
        const count = t.view === "vault" && openCnt
          ? `<span class="absolute top-1.5 left-1/2 ml-3 min-w-[20px] h-5 px-1 rounded-full bg-rose-500 text-white text-[11px] font-bold leading-5">${openCnt > 99 ? "99+" : openCnt}</span>`
          : "";
        const label = typeof t.label === "function" ? t.label(s) : t.label;
        return `<button data-action="tab" data-view="${t.view}"
          class="relative min-h-[56px] flex flex-col items-center justify-center gap-0.5 ${tabs.length > 4 ? "text-xs" : "text-sm"} ${on ? "text-brand-600 font-bold" : "text-slate-400"}">
          <span class="text-lg" aria-hidden="true">${t.icon}</span>${label}${count}</button>`;
      })
      .join("");
  }

  function render() {
    renderChrome();
    if (!ui.subject) {
      $main.innerHTML = renderHome();
      return;
    }
    const views = { quiz: renderQuiz, flow: renderQuiz, vocab: renderVocab, vault: renderVault, concepts: renderConcepts, stats: renderStats };
    $main.innerHTML = (views[ui.view] || renderQuiz)();
  }

  function enterSubject(id) {
    ui.subject = id;
    ui.quizzes = { quiz: loadQuiz(id, "quiz"), flow: loadQuiz(id, "flow") };
    ui.vault = defaultVault();
    ui.concepts = { q: "", cat: "전체", open: null };
    ui.vocab = defaultVocab();
    // 저장된 회차가 더 이상 없으면 초기화
    for (const mode of ["quiz", "flow"]) {
      ui.view = mode;
      if (Q().exam !== "전체" && !questionsOf(id).some((q) => q.exam === Q().exam)) {
        Q().exam = "전체";
        resetQuiz();
      }
    }
    ui.view = "quiz";
  }

  function openConcept(name) {
    ui.view = "concepts";
    ui.concepts = { q: "", cat: "전체", open: name };
    render();
    const el = document.getElementById(`concept-${name}`);
    if (el) el.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
  }

  const actions = {
    enter(el) {
      enterSubject(el.dataset.value);
      render();
      window.scrollTo(0, 0);
    },
    home() {
      ui.subject = null;
      render();
      window.scrollTo(0, 0);
    },
    tab(el) {
      ui.view = el.dataset.view;
      ui.vault.retry = {};
      render();
      window.scrollTo(0, 0);
    },
    "quiz-cat"(el) {
      Q().cat = el.dataset.value;
      resetQuiz();
      render();
    },
    "quiz-shuffle"() {
      Q().shuffle = !Q().shuffle;
      resetQuiz();
      render();
      toast(Q().shuffle ? "🔀 문제 순서를 섞었어요" : "회차·번호 순으로 풀어요");
    },
    "clear-concept"() {
      Q().concept = null;
      resetQuiz();
      render();
    },
    "clear-word"() {
      Q().word = null;
      resetQuiz();
      render();
    },
    // ── 영어 단어장
    "go-word"(el) {
      openWord(el.dataset.value);
    },
    "word-questions"(el) {
      ui.view = "quiz";
      Object.assign(Q(), { word: el.dataset.value, concept: null, exam: "전체", cat: "전체" });
      resetQuiz();
      render();
      window.scrollTo(0, 0);
    },
    "word-toggle"(el) {
      const w = el.dataset.value;
      if (ui.vocab.hide && !ui.vocab.reveal.has(w) && ui.vocab.open !== w) {
        ui.vocab.reveal.add(w); // 뜻 가림 모드: 첫 탭은 뜻만 보여 주기
      } else ui.vocab.open = ui.vocab.open === w ? null : w;
      document.getElementById("vocab-list").innerHTML = renderWordList();
    },
    "word-known"(el) {
      const w = el.dataset.value;
      const known = !wordState(w).k;
      Store.setKnown(w, known);
      toast(known ? `✔ '${w}' 외웠어요` : `'${w}' 다시 외우기`, known ? "good" : undefined);
    },
    "vocab-mode"(el) {
      ui.vocab.mode = el.dataset.value;
      render();
    },
    "vocab-filter"(el) {
      ui.vocab.filter = el.dataset.value;
      ui.vocab.limit = 60;
      render();
    },
    "vocab-lv"(el) {
      ui.vocab.lv = el.dataset.value;
      ui.vocab.limit = 60;
      render();
    },
    "vocab-sort"(el) {
      ui.vocab.sort = el.dataset.value;
      render();
    },
    "vocab-hide"() {
      ui.vocab.hide = !ui.vocab.hide;
      ui.vocab.reveal = new Set();
      render();
    },
    "vocab-more"() {
      ui.vocab.limit += 60;
      document.getElementById("vocab-list").innerHTML = renderWordList();
    },
    "wq-setup"(el) {
      const g = el.dataset.group;
      ui.vocab.setup[g] = g === "size" ? Number(el.dataset.value) : el.dataset.value;
      render();
    },
    "wq-start"() {
      const { scope, dir, size } = ui.vocab.setup;
      const words = pick(scopeWords(scope), size);
      if (!words.length) return toast("이 범위에는 단어가 없어요");
      ui.vocab.quiz = makeWordQuiz(words, dir);
      render();
      window.scrollTo(0, 0);
    },
    "wq-answer"(el) {
      const z = ui.vocab.quiz;
      if (!z || z.sel != null) return;
      const it = z.items[z.i];
      z.sel = Number(el.dataset.index);
      const ok = z.sel === it.answer;
      z.results[z.i] = ok;
      Store.wordAnswer(it.e.w, ok);
      render();
    },
    "wq-next"() {
      const z = ui.vocab.quiz;
      z.i += 1;
      z.sel = null;
      render();
    },
    "wq-retry"() {
      const z = ui.vocab.quiz;
      const words = z.items.filter((_, k) => !z.results[k]).map((it) => it.e);
      ui.vocab.quiz = makeWordQuiz(pick(words, words.length), z.dir);
      render();
    },
    "wq-exit"() {
      ui.vocab.quiz = null;
      render();
    },
    "go-confused"() {
      ui.view = "vocab";
      ui.vocab.mode = "quiz";
      ui.vocab.quiz = null;
      ui.vocab.setup.scope = "confused";
      render();
      window.scrollTo(0, 0);
    },
    answer(el) {
      if (Q().selected != null) return;
      const q = quizList()[Q().idx];
      const i = Number(el.dataset.index);
      const correct = isCorrect(q, i);
      Q().selected = i;
      render();
      Store.recordAttempt(q, i, correct);
      if (!correct) toast("📝 오답노트에 저장했어요", "bad");
    },
    next() {
      const len = quizList().length;
      Q().idx = (Q().idx + 1) % len;
      if (Q().idx === 0) toast("한 바퀴 완료! 처음부터 다시 풀어요 💪");
      Q().selected = null;
      saveQuiz();
      render();
      window.scrollTo(0, 0);
    },
    "vault-cat"(el) {
      ui.vault.cat = el.dataset.value;
      render();
    },
    "vault-status"(el) {
      ui.vault.status = el.dataset.value;
      render();
    },
    toggle(el) {
      const id = el.dataset.id;
      if (ui.vault.open.has(id)) {
        ui.vault.open.delete(id);
        delete ui.vault.retry[id];
      } else ui.vault.open.add(id);
      render();
    },
    "retry-start"(el) {
      ui.vault.retry[el.dataset.id] = { selected: null };
      render();
    },
    "retry-close"(el) {
      delete ui.vault.retry[el.dataset.id];
      render();
    },
    "retry-answer"(el) {
      const id = el.dataset.id;
      const r = ui.vault.retry[id];
      if (!r || r.selected != null) return;
      const w = Store.state.wrong.find((x) => x.id === id);
      const q = w && Store.question(w.questionId);
      if (!q) return;
      const i = Number(el.dataset.index);
      const correct = isCorrect(q, i);
      r.selected = i;
      // 미완료 탭에서 맞히면 목록에서 바로 사라지지 않도록 전체 탭으로 전환
      if (correct && ui.vault.status === "open") ui.vault.status = "all";
      Store.review(id, i, correct);
      render();
      toast(correct ? "🎉 복습 완료!" : "다시 한번 해설을 확인해 보세요", correct ? "good" : "bad");
    },
    delete(el) {
      const id = el.dataset.id;
      if (!confirm("이 오답을 오답노트에서 삭제할까요?")) return;
      ui.vault.open.delete(id);
      delete ui.vault.retry[id];
      Store.remove(id);
      toast("삭제했어요");
    },
    "go-vault-cat"(el) {
      ui.view = "vault";
      ui.vault.cat = el.dataset.value;
      ui.vault.status = "open";
      render();
      window.scrollTo(0, 0);
    },
    "concept-cat"(el) {
      ui.concepts.cat = el.dataset.value;
      render();
    },
    "concept-toggle"(el) {
      const name = el.dataset.value;
      ui.concepts.open = ui.concepts.open === name ? null : name;
      render();
    },
    "go-concept"(el) {
      openConcept(el.dataset.value);
    },
    "concept-quiz"(el) {
      ui.view = "quiz";
      Q().concept = el.dataset.value;
      Q().exam = "전체";
      Q().cat = "전체";
      resetQuiz();
      render();
      window.scrollTo(0, 0);
    },
    noop() {},
  };

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (!el || el.disabled) return;
    const fn = actions[el.dataset.action];
    if (fn) fn(el);
  });

  // 검색은 입력 포커스를 유지하기 위해 목록만 다시 그림
  document.addEventListener("input", (e) => {
    if (e.target.id === "vault-search") {
      ui.vault.q = e.target.value;
      document.getElementById("vault-list").innerHTML = renderVaultList();
    } else if (e.target.id === "concept-search") {
      ui.concepts.q = e.target.value;
      document.getElementById("concept-list").innerHTML = renderConceptList();
    } else if (e.target.id === "vocab-search") {
      ui.vocab.q = e.target.value;
      ui.vocab.limit = 60;
      document.getElementById("vocab-list").innerHTML = renderWordList();
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.id !== "quiz-exam") return;
    Q().exam = e.target.value;
    resetQuiz();
    render();
  });

  // ───────────── 시작 ─────────────
  function rerenderFromData() {
    const active = document.activeElement;
    if (ui.subject && ui.view === "vault" && active && active.id === "vault-search") {
      document.getElementById("vault-list").innerHTML = renderVaultList();
      renderChrome();
      return;
    }
    if (ui.subject && ui.view === "concepts" && active && active.id === "concept-search") return;
    render();
  }

  Store.on("wrong", rerenderFromData);
  Store.on("stats", () => (!ui.subject || ui.view === "stats") && render());
  // 단어 암기 기록 변경: 단어장 목록은 목록만, 퀴즈 진행 중에는 다시 그리지 않음
  Store.on("vocab", () => {
    if (ui.view === "vocab" && ui.vocab.mode === "list") {
      const active = document.activeElement;
      if (active && active.id === "vocab-search") document.getElementById("vocab-list").innerHTML = renderWordList();
      else render();
    } else if (ui.view === "stats") render();
  });

  Store.init().then((s) => {
    const b = document.getElementById("mode-badge");
    b.textContent = s.mode === "firebase" ? "☁️ 클라우드 동기화" : "💾 로컬 저장";
    render();
  });
})();
