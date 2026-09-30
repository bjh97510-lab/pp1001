(function () {
  const ERAS = window.ERAS;
  const NUM = ["①", "②", "③", "④", "⑤"];
  const $main = document.getElementById("main");

  const QUIZ_KEY = "passvault_quiz";
  const ui = {
    view: "quiz",
    // order: 섞기 모드일 때의 문항 id 순서 (null 이면 회차·번호 순)
    quiz: { exam: "전체", era: "전체", shuffle: false, order: null, idx: 0, selected: null },
    vault: { era: "전체", q: "", status: "open", open: new Set(), retry: {} },
  };

  // 퀴즈 위치(필터·진행 번호) 기억
  try {
    const saved = JSON.parse(localStorage.getItem(QUIZ_KEY));
    if (saved) Object.assign(ui.quiz, saved, { selected: null });
  } catch (e) {}
  const saveQuiz = () => {
    try {
      const { exam, era, shuffle, order, idx } = ui.quiz;
      localStorage.setItem(QUIZ_KEY, JSON.stringify({ exam, era, shuffle, order, idx }));
    } catch (e) {}
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

  const chip = (label, active, action, extra = "") =>
    `<button data-action="${action}" data-value="${esc(label)}" ${extra}
      class="shrink-0 min-h-[44px] px-4 rounded-full text-sm font-medium border transition
      ${active ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600 hover:border-brand-500"}">${esc(label)}</button>`;

  const eraChips = (current, action) =>
    `<div class="-mx-4 px-4 flex gap-2 overflow-x-auto pb-1" style="scrollbar-width:none">
      ${["전체", ...ERAS].map((e) => chip(e, e === current, action)).join("")}
    </div>`;

  const badge = (text, cls) => `<span class="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-md ${cls}">${esc(text)}</span>`;

  function questionBody(q) {
    return `
      <p class="text-[17px] leading-relaxed font-semibold text-slate-900">${esc(q.question)}</p>
      ${q.passage ? `<div class="mt-3 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[15px] leading-relaxed text-slate-800 whitespace-pre-line">${esc(q.passage)}</div>` : ""}
      ${q.imageUrl ? `<img src="${esc(q.imageUrl)}" alt="사료 이미지" loading="lazy" class="mt-3 w-full rounded-xl border border-slate-200" />` : ""}
      ${imageNotice(q)}`;
  }

  // 공식 정답표에서 복수 정답을 인정한 문항은 acceptedAnswers 로 표시
  const isCorrect = (q, i) => (q.acceptedAnswers ? q.acceptedAnswers.includes(i) : i === q.answer);
  const answerLabel = (q) =>
    (q.acceptedAnswers || [q.answer]).map((i) => `${NUM[i]} ${esc(q.options[i])}`).join(", ");

  // 원본 시험지 PDF 경로 (id: "2024_1_07" → exams/2024-1_문제_1.pdf)
  const sourcePdf = (q) => {
    const m = /^(\d{4})_(\d)_/.exec(q.id);
    return m ? `exams/${m[1]}-${m[2]}_문제_1.pdf` : null;
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
            <span class="text-lg leading-none">${NUM[i]}</span><span class="flex-1">${esc(opt)}</span>${mark}
          </button>`;
        })
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
      </section>`;
  }

  // ───────────── 1. 기출 퀴즈 ─────────────
  const filteredQuestions = () =>
    Store.state.questions.filter(
      (q) => (ui.quiz.exam === "전체" || q.exam === ui.quiz.exam) && (ui.quiz.era === "전체" || q.category === ui.quiz.era)
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
    const exams = [...new Set(Store.state.questions.map((q) => q.exam))];
    return `
      <div class="flex gap-2">
        <select id="quiz-exam" aria-label="회차 선택"
          class="flex-1 min-w-0 min-h-[44px] rounded-xl border border-slate-200 bg-white px-3 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-brand-500">
          <option value="전체">전체 회차 (${Store.state.questions.length}문항)</option>
          ${exams.map((e) => `<option value="${esc(e)}" ${e === ui.quiz.exam ? "selected" : ""}>${esc(e)}</option>`).join("")}
        </select>
        <button data-action="quiz-shuffle" aria-pressed="${ui.quiz.shuffle}"
          class="shrink-0 min-h-[44px] px-4 rounded-xl border text-sm font-semibold ${ui.quiz.shuffle ? "bg-brand-600 border-brand-600 text-white" : "bg-white border-slate-200 text-slate-600"}">
          🔀 섞기
        </button>
      </div>
      <div class="mt-2">${eraChips(ui.quiz.era, "quiz-era")}</div>`;
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
    const { era, q, status } = ui.vault;
    const kw = q.trim().toLowerCase();
    return Store.state.wrong
      .map((w) => ({ w, q: Store.question(w.questionId) }))
      .filter(({ q }) => q)
      .filter(({ w }) => (status === "all" ? true : status === "open" ? !w.isResolved : w.isResolved))
      .filter(({ q }) => era === "전체" || q.category === era)
      .filter(({ q }) => {
        if (!kw) return true;
        const hay = [q.question, q.passage, q.category, q.exam, ...q.options, q.explanation && q.explanation.key_concept].join(" ").toLowerCase();
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
            ${q.passage ? `<div class="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[15px] leading-relaxed whitespace-pre-line">${esc(q.passage)}</div>` : ""}
            ${q.imageUrl ? `<img src="${esc(q.imageUrl)}" alt="사료 이미지" loading="lazy" class="mt-3 w-full rounded-xl border border-slate-200" />` : ""}
            ${imageNotice(q)}
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
            <span class="text-slate-500">내 답 <span class="text-rose-600 font-semibold">${NUM[w.userAnswer]} ${esc(q.options[w.userAnswer])}</span></span>
            <span class="text-slate-400 text-lg leading-none transition ${open ? "rotate-180" : ""}">⌄</span>
          </div>
        </button>
        ${body}
      </li>`;
  }

  function renderVaultList() {
    const items = vaultItems();
    const total = Store.state.wrong.length;
    if (!total) {
      return `<div class="py-16 text-center">
        <p class="text-4xl">📭</p>
        <p class="mt-3 font-semibold text-slate-700">아직 저장된 오답이 없어요</p>
        <p class="mt-1 text-sm text-slate-500">기출 퀴즈에서 틀린 문제는 자동으로 여기에 모여요.</p>
        <button data-action="tab" data-view="quiz" class="mt-5 min-h-[48px] px-6 rounded-xl bg-brand-600 text-white font-bold">문제 풀러 가기</button>
      </div>`;
    }
    if (!items.length) return `<div class="py-16 text-center text-slate-500">조건에 맞는 오답이 없어요.</div>`;
    return `<ul class="grid gap-3">${items.map(vaultCard).join("")}</ul>`;
  }

  function renderVault() {
    const wrong = Store.state.wrong;
    const openCnt = wrong.filter((w) => !w.isResolved).length;
    const doneCnt = wrong.length - openCnt;
    const st = ui.vault.status;
    const seg = (key, label, n) =>
      `<button data-action="vault-status" data-value="${key}" class="min-h-[44px] rounded-lg text-sm font-semibold transition ${st === key ? "bg-white shadow text-brand-700" : "text-slate-500"}">${label} <span class="text-xs">${n}</span></button>`;
    return `
      <div class="relative">
        <input id="vault-search" type="search" value="${esc(ui.vault.q)}" placeholder="키워드 검색 (예: 대동법, 세종)"
          class="w-full min-h-[48px] rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-brand-500" />
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">🔍</span>
      </div>
      <div class="mt-3 grid grid-cols-3 gap-1 p-1 rounded-xl bg-slate-200/70">
        ${seg("open", "미완료", openCnt)}${seg("resolved", "복습 완료", doneCnt)}${seg("all", "전체", wrong.length)}
      </div>
      <div class="mt-3">${eraChips(ui.vault.era, "vault-era")}</div>
      <div id="vault-list" class="mt-3">${renderVaultList()}</div>`;
  }

  // ───────────── 3. 학습 현황 ─────────────
  function renderStats() {
    const { solved, correct } = Store.state.stats;
    const wrong = Store.state.wrong;
    const done = wrong.filter((w) => w.isResolved).length;
    const open = wrong.length - done;
    const acc = solved ? Math.round((correct / solved) * 100) : 0;
    const reviewPct = wrong.length ? Math.round((done / wrong.length) * 100) : 0;

    const byEra = ERAS.map((era) => {
      const list = wrong.filter((w) => {
        const q = Store.question(w.questionId);
        return q && q.category === era;
      });
      const r = list.filter((w) => w.isResolved).length;
      return { era, total: list.length, resolved: r, open: list.length - r };
    });
    const max = Math.max(1, ...byEra.map((e) => e.total));
    const weakest = byEra.filter((e) => e.open > 0).sort((a, b) => b.open - a.open)[0];

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
        <h3 class="font-bold">시대별 오답 분포</h3>
        <ul class="mt-3 grid gap-3">
          ${byEra
            .map(
              (e) => `
            <li class="grid grid-cols-[3.5rem_1fr_3.5rem] items-center gap-2 text-sm">
              <span class="font-semibold text-slate-700">${e.era}</span>
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
        <p class="mt-1 font-bold text-lg">'${weakest.era}' 시대 미완료 오답이 ${weakest.open}개 있어요</p>
        <button data-action="go-vault-era" data-value="${weakest.era}" class="mt-3 min-h-[44px] px-5 rounded-xl bg-white text-brand-900 font-bold">오답노트에서 복습하기</button>
      </section>` : ""}

      <p class="mt-6 text-center text-xs text-slate-400">
        ${Store.state.mode === "firebase" ? "Firebase 익명 계정에 저장됩니다" : "이 브라우저(localStorage)에 저장됩니다"} · ID ${esc(String(Store.state.uid).slice(0, 10))}
      </p>`;
  }

  // ───────────── 렌더 ─────────────
  function render() {
    const views = { quiz: renderQuiz, vault: renderVault, stats: renderStats };
    $main.innerHTML = views[ui.view]();
    document.querySelectorAll("#tabs .tab").forEach((t) => {
      const on = t.dataset.view === ui.view;
      t.classList.toggle("text-brand-600", on);
      t.classList.toggle("font-bold", on);
      t.classList.toggle("text-slate-400", !on);
    });
    const openCnt = Store.state.wrong.filter((w) => !w.isResolved).length;
    const vc = document.getElementById("vault-count");
    vc.textContent = openCnt > 99 ? "99+" : openCnt;
    vc.classList.toggle("hidden", !openCnt);
  }

  const actions = {
    tab(el) {
      ui.view = el.dataset.view;
      ui.vault.retry = {};
      render();
      window.scrollTo(0, 0);
    },
    "quiz-era"(el) {
      ui.quiz.era = el.dataset.value;
      resetQuiz();
      render();
    },
    "quiz-shuffle"() {
      ui.quiz.shuffle = !ui.quiz.shuffle;
      resetQuiz();
      render();
      toast(ui.quiz.shuffle ? "🔀 문제 순서를 섞었어요" : "회차·번호 순으로 풀어요");
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
    "vault-era"(el) {
      ui.vault.era = el.dataset.value;
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
    "go-vault-era"(el) {
      ui.view = "vault";
      ui.vault.era = el.dataset.value;
      ui.vault.status = "open";
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
    if (e.target.id !== "vault-search") return;
    ui.vault.q = e.target.value;
    document.getElementById("vault-list").innerHTML = renderVaultList();
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
    if (ui.view === "vault" && active && active.id === "vault-search") {
      document.getElementById("vault-list").innerHTML = renderVaultList();
      return;
    }
    render();
  }

  Store.on("wrong", rerenderFromData);
  Store.on("stats", () => ui.view === "stats" && render());

  Store.init().then((s) => {
    const b = document.getElementById("mode-badge");
    b.textContent = s.mode === "firebase" ? "☁️ 클라우드 동기화" : "💾 로컬 저장";
    // 저장된 회차가 더 이상 없으면 초기화
    if (ui.quiz.exam !== "전체" && !s.questions.some((q) => q.exam === ui.quiz.exam)) {
      ui.quiz.exam = "전체";
      resetQuiz();
    }
    render();
  });
})();
