(function () {
  const SUBJECTS = window.SUBJECTS;
  const NUM = ["①", "②", "③", "④", "⑤"];
  const $main = document.getElementById("main");

  const quizKey = (s) => `passvault_quiz_${s}`;

  const defaultQuiz = () => ({ exam: "전체", cat: "전체", concept: null, shuffle: false, order: null, idx: 0, selected: null });
  const defaultVault = () => ({ cat: "전체", q: "", status: "open", open: new Set(), retry: {} });

  const ui = {
    subject: null, // null 이면 과목 선택 화면
    view: "quiz",
    // order: 섞기 모드일 때의 문항 id 순서 (null 이면 회차·번호 순)
    quiz: defaultQuiz(),
    vault: defaultVault(),
    concepts: { q: "", cat: "전체", open: null },
  };

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

  function loadQuiz(subject) {
    const saved = lsGet(quizKey(subject)) || (subject === "history" ? lsGet("passvault_quiz") : null);
    const q = defaultQuiz();
    if (saved) {
      Object.assign(q, saved, { selected: null });
      if (saved.era && !saved.cat) q.cat = saved.era; // 이전 버전 호환
    }
    return q;
  }
  const saveQuiz = () => {
    if (!ui.subject) return;
    const { exam, cat, concept, shuffle, order, idx } = ui.quiz;
    lsSet(quizKey(ui.subject), { exam, cat, concept, shuffle, order, idx });
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
  const rich = (s) =>
    esc(s)
      .replace(/__(.+?)__/gs, "<u>$1</u>")
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
            <span class="text-lg leading-none">${NUM[i]}</span><span class="flex-1">${rich(opt)}</span>${mark}
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
        ${ex.key_concept ? `
        <div class="mx-4 mb-4 rounded-xl bg-violet-50 border border-violet-200 px-4 py-3">
          <h4 class="text-sm font-bold text-violet-700">🔑 핵심 개념 (Key Concept)</h4>
          <p class="mt-1 text-[14px] leading-relaxed text-slate-800">${esc(ex.key_concept)}</p>
        </div>` : ""}
        ${conceptLinks(q)}
      </section>`;
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
  const filteredQuestions = () =>
    questionsOf(ui.subject).filter(
      (q) =>
        (ui.quiz.exam === "전체" || q.exam === ui.quiz.exam) &&
        (ui.quiz.cat === "전체" || q.category === ui.quiz.cat) &&
        (!ui.quiz.concept || (q.concepts || []).includes(ui.quiz.concept))
    );

  function quizList() {
    const list = filteredQuestions();
    if (!ui.quiz.shuffle || !ui.quiz.order) return list;
    const byId = new Map(list.map((q) => [q.id, q]));
    const ordered = ui.quiz.order.map((id) => byId.get(id)).filter(Boolean);
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
    ui.quiz.idx = 0;
    ui.quiz.selected = null;
    ui.quiz.order = ui.quiz.shuffle ? shuffledIds(filteredQuestions()) : null;
    saveQuiz();
  }

  function quizFilters() {
    const qs = questionsOf(ui.subject);
    const exams = [...new Set(qs.map((q) => q.exam))];
    return `
      <div class="flex gap-2">
        <select id="quiz-exam" aria-label="회차 선택"
          class="flex-1 min-w-0 min-h-[44px] rounded-xl border border-slate-200 bg-white px-3 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-brand-500">
          <option value="전체">전체 회차 (${qs.length}문항)</option>
          ${exams.map((e) => `<option value="${esc(e)}" ${e === ui.quiz.exam ? "selected" : ""}>${esc(e)}</option>`).join("")}
        </select>
        <button data-action="quiz-shuffle" aria-pressed="${ui.quiz.shuffle}"
          class="shrink-0 min-h-[44px] px-4 rounded-xl border text-sm font-semibold ${ui.quiz.shuffle ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600"}">
          🔀 섞기
        </button>
      </div>
      <div class="mt-2">${catChips(ui.quiz.cat, "quiz-cat")}</div>
      ${ui.quiz.concept ? `
        <button data-action="clear-concept" class="mt-2 min-h-[40px] inline-flex items-center gap-2 px-4 rounded-full bg-violet-600 text-white text-sm font-semibold">
          💡 ${esc(ui.quiz.concept)} 관련 문제만 <span aria-label="필터 해제">✕</span>
        </button>` : ""}`;
  }

  function renderQuiz() {
    const list = quizList();
    if (!list.length) {
      return `${quizFilters()}<div class="py-20 text-center text-slate-500">조건에 맞는 문제가 없어요.</div>`;
    }
    if (ui.quiz.idx >= list.length) ui.quiz.idx = 0;
    const q = list[ui.quiz.idx];
    const sel = ui.quiz.selected;
    const answered = sel != null;
    const correct = answered && isCorrect(q, sel);
    const pct = Math.round(((ui.quiz.idx + (answered ? 1 : 0)) / list.length) * 100);

    return `
      ${quizFilters()}
      <div class="mt-3 flex items-center gap-3 text-sm text-slate-500">
        <span class="font-semibold text-slate-700">${ui.quiz.idx + 1} / ${list.length}</span>
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
          ${ui.quiz.idx + 1 >= list.length ? "처음부터 다시 풀기 ↺" : "다음 문제 →"}
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

  // ───────────── 3. 개념풀이 (도덕) ─────────────
  const conceptList = () => window.ETHICS_CONCEPTS || [];

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
            ${badge(c.type, c.type === "사상가" ? "bg-violet-100 text-violet-700" : "bg-amber-100 text-amber-800")}
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
        <p class="font-bold">💡 사상가·사상 개념풀이</p>
        <p class="text-sm text-white/85 mt-0.5">기출에 나온 사상가와 핵심 주장을 정리했어요. 카드를 눌러 시험 포인트를 확인하고 관련 기출을 풀어 보세요.</p>
      </div>
      <div class="mt-3 relative">
        <input id="concept-search" type="search" value="${esc(ui.concepts.q)}" placeholder="사상가·키워드 검색 (예: 정언 명령)"
          class="w-full min-h-[48px] rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
      </div>
      <div class="mt-3">${catChips(ui.concepts.cat, "concept-cat")}</div>
      <div id="concept-list" class="mt-3">${renderConceptList()}</div>`;
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
    { view: "vault", icon: "📝", label: "오답노트" },
    { view: "concepts", icon: "💡", label: "개념풀이", conceptsOnly: true },
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
    const tabs = TABS.filter((t) => !t.conceptsOnly || s.hasConcepts);
    const openCnt = wrongOf(ui.subject).filter((w) => !w.isResolved).length;
    const tabsEl = document.getElementById("tabs");
    tabsEl.style.gridTemplateColumns = `repeat(${tabs.length}, minmax(0, 1fr))`;
    tabsEl.innerHTML = tabs
      .map((t) => {
        const on = t.view === ui.view;
        const count = t.view === "vault" && openCnt
          ? `<span class="absolute top-1.5 left-1/2 ml-3 min-w-[20px] h-5 px-1 rounded-full bg-rose-500 text-white text-[11px] font-bold leading-5">${openCnt > 99 ? "99+" : openCnt}</span>`
          : "";
        return `<button data-action="tab" data-view="${t.view}"
          class="relative min-h-[56px] flex flex-col items-center justify-center gap-0.5 text-sm ${on ? "text-brand-600 font-bold" : "text-slate-400"}">
          <span class="text-lg" aria-hidden="true">${t.icon}</span>${t.label}${count}</button>`;
      })
      .join("");
  }

  function render() {
    renderChrome();
    if (!ui.subject) {
      $main.innerHTML = renderHome();
      return;
    }
    const views = { quiz: renderQuiz, vault: renderVault, concepts: renderConcepts, stats: renderStats };
    $main.innerHTML = (views[ui.view] || renderQuiz)();
  }

  function enterSubject(id) {
    ui.subject = id;
    ui.view = "quiz";
    ui.quiz = loadQuiz(id);
    ui.vault = defaultVault();
    ui.concepts = { q: "", cat: "전체", open: null };
    // 저장된 회차가 더 이상 없으면 초기화
    if (ui.quiz.exam !== "전체" && !questionsOf(id).some((q) => q.exam === ui.quiz.exam)) {
      ui.quiz.exam = "전체";
      resetQuiz();
    }
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
      ui.quiz.cat = el.dataset.value;
      resetQuiz();
      render();
    },
    "quiz-shuffle"() {
      ui.quiz.shuffle = !ui.quiz.shuffle;
      resetQuiz();
      render();
      toast(ui.quiz.shuffle ? "🔀 문제 순서를 섞었어요" : "회차·번호 순으로 풀어요");
    },
    "clear-concept"() {
      ui.quiz.concept = null;
      resetQuiz();
      render();
    },
    answer(el) {
      if (ui.quiz.selected != null) return;
      const q = quizList()[ui.quiz.idx];
      const i = Number(el.dataset.index);
      const correct = isCorrect(q, i);
      ui.quiz.selected = i;
      render();
      Store.recordAttempt(q, i, correct);
      if (!correct) toast("📝 오답노트에 저장했어요", "bad");
    },
    next() {
      const len = quizList().length;
      ui.quiz.idx = (ui.quiz.idx + 1) % len;
      if (ui.quiz.idx === 0) toast("한 바퀴 완료! 처음부터 다시 풀어요 💪");
      ui.quiz.selected = null;
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
      ui.quiz.concept = el.dataset.value;
      ui.quiz.exam = "전체";
      ui.quiz.cat = "전체";
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
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.id !== "quiz-exam") return;
    ui.quiz.exam = e.target.value;
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

  Store.init().then((s) => {
    const b = document.getElementById("mode-badge");
    b.textContent = s.mode === "firebase" ? "☁️ 클라우드 동기화" : "💾 로컬 저장";
    render();
  });
})();
