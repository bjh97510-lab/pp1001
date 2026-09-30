// 과목 설정
window.SUBJECTS = {
  history: {
    id: "history",
    name: "한국사",
    icon: "🏛️",
    desc: "고졸 검정고시 한국사 기출 전 문항",
    catLabel: "시대",
    categories: ["고조선", "삼국", "고려", "조선", "근대", "현대"],
    pdfDir: "exams",
    searchHint: "키워드 검색 (예: 대동법, 세종)",
    hasConcepts: false,
  },
  ethics: {
    id: "ethics",
    name: "도덕",
    icon: "⚖️",
    desc: "고졸 검정고시 도덕 기출 중 사상가·사상 문항",
    catLabel: "분야",
    categories: ["동양 윤리", "서양 윤리", "사회 윤리", "생명·환경", "평화·문화"],
    pdfDir: "exams/ethics",
    searchHint: "키워드 검색 (예: 칸트, 공리주의)",
    hasConcepts: true,
  },
};

// 이전 버전 호환
window.ERAS = window.SUBJECTS.history.categories;

// 문항 데이터는 js/exams/*.js(한국사), js/ethics/*.js(도덕)에서 이 배열에 추가됩니다.
// subject 필드가 없으면 한국사로 간주합니다.
window.QUESTION_BANK = window.QUESTION_BANK || [];
