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
    hasConcepts: true,
    conceptTab: "개념정리",
    conceptTitle: "💡 한국사 핵심 개념정리",
    conceptDesc: "기출에 나온 인물·사건·제도를 시대별로 정리했어요. 카드를 눌러 시험 포인트를 확인하고 관련 기출을 풀어 보세요.",
    conceptHint: "개념·키워드 검색 (예: 대동법)",
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
    conceptTab: "개념풀이",
    conceptTitle: "💡 사상가·사상 개념풀이",
    conceptDesc: "기출에 나온 사상가와 핵심 주장을 정리했어요. 카드를 눌러 시험 포인트를 확인하고 관련 기출을 풀어 보세요.",
    conceptHint: "사상가·키워드 검색 (예: 정언 명령)",
  },
  korean: {
    id: "korean",
    name: "국어",
    icon: "📖",
    desc: "고졸 검정고시 국어 기출 전 문항",
    catLabel: "영역",
    categories: ["화법·작문", "문법", "현대 문학", "고전 문학", "독서"],
    pdfDir: "exams/korean",
    searchHint: "키워드 검색 (예: 역설법, 메밀꽃)",
    hasConcepts: false,
  },
  english: {
    id: "english",
    name: "영어",
    icon: "🔤",
    desc: "고졸 검정고시 영어 기출 전 문항 + 기출 단어장",
    catLabel: "유형",
    categories: ["어휘·어법", "대화문", "세부 정보", "중심 내용", "빈칸 추론", "글의 흐름"],
    pdfDir: "exams/english",
    searchHint: "키워드 검색 (예: stress, 안내문)",
    hasConcepts: false,
    hasVocab: true,
    flowCategory: "글의 흐름",
  },
};

// 이전 버전 호환
window.ERAS = window.SUBJECTS.history.categories;

// 문항 데이터는 js/exams/*.js(한국사), js/ethics/*.js(도덕), js/korean/*.js(국어)에서 이 배열에 추가됩니다.
// 지문 마크업: __밑줄__, {A}…{/A} 괄호 범위
// subject 필드가 없으면 한국사로 간주합니다.
window.QUESTION_BANK = window.QUESTION_BANK || [];
