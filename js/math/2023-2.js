// 2023년도 제2회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2023_2_01",
    subject: "math",
    exam: "2023년 제2회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = 2x² + x, B = x² − 1에 대하여 A + 2B는?",
    passage: "",
    imageUrl: "images/math/2023_2_01.png",
    needsImage: false,
    options: ["4x² + x + 2", "4x² − x + 2", "4x² + x − 2", "4x² − x − 2"],
    answer: 2,
    explanation: {
      summary: "2B = 2x² − 2이므로 A + 2B = 2x² + x + 2x² − 2 = 4x² + x − 2입니다.",
      options_breakdown: [
        "오답. 상수항은 −2입니다.",
        "오답. 부호가 틀렸습니다.",
        "정답. 4x² + x − 2입니다.",
        "오답. x의 계수는 +1입니다."
      ],
      key_concept: "2B는 B의 모든 항에 2를 곱한다."
    }
  },
  {
    id: "math_2023_2_02",
    subject: "math",
    exam: "2023년 제2회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 (x − 2)² = x² − 4x + a가 x에 대한 항등식일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_2_02.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: {
      summary: "(x − 2)² = x² − 4x + 4이므로 a = 4입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 2² = 4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "완전제곱 공식: (a − b)² = a² − 2ab + b²."
    }
  },
  {
    id: "math_2023_2_03",
    subject: "math",
    exam: "2023년 제2회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다항식 x³ − 3x + 7을 x − 1로 나누었을 때, 나머지는?",
    passage: "",
    imageUrl: "images/math/2023_2_03.png",
    needsImage: false,
    options: ["5", "6", "7", "8"],
    answer: 0,
    explanation: {
      summary: "f(1) = 1 − 3 + 7 = 5입니다.",
      options_breakdown: [
        "정답. f(1) = 5입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "나머지정리: x − 1로 나눈 나머지는 f(1)."
    }
  },
  {
    id: "math_2023_2_04",
    subject: "math",
    exam: "2023년 제2회",
    number: 4,
    category: "다항식",
    concepts: ["인수분해"],
    question: "다항식 x³ + 9x² + 27x + 27을 인수분해한 식이 (x + a)³일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_2_04.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: {
      summary: "(x + a)³ = x³ + 3ax² + 3a²x + a³에서 3a = 9, a = 3이고 3³ = 27로 확인됩니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. a = 3입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "(a + b)³ = a³ + 3a²b + 3ab² + b³. 상수항 a³ = 27 → a = 3."
    }
  },
  {
    id: "math_2023_2_05",
    subject: "math",
    exam: "2023년 제2회",
    number: 5,
    category: "다항식",
    concepts: ["복소수"],
    question: "i(2 + i) = a + 2i일 때, 실수 a의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2023_2_05.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 1,
    explanation: {
      summary: "i(2 + i) = 2i + i² = 2i − 1 = −1 + 2i이므로 a = −1입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. i² = −1이 실수부입니다.",
        "오답. 부호가 반대입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "i² = −1."
    }
  },
  {
    id: "math_2023_2_06",
    subject: "math",
    exam: "2023년 제2회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차방정식의 근과 계수"],
    question: "두 수 2, 4를 근으로 하고 x²의 계수가 1인 이차방정식이 x² − 6x + a = 0일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_2_06.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 3,
    explanation: {
      summary: "(x − 2)(x − 4) = x² − 6x + 8이므로 a = 8입니다. 두 근의 곱 2 × 4 = 8입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 6은 두 근의 합입니다.",
        "정답. a = 8입니다."
      ],
      key_concept: "x² − (합)x + (곱) = 0."
    }
  },
  {
    id: "math_2023_2_07",
    subject: "math",
    exam: "2023년 제2회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "0 ≤ x ≤ 3일 때, 이차함수 y = −x² + 4x + 1의 최댓값은?",
    passage: "",
    imageUrl: "images/math/2023_2_07.png",
    needsImage: false,
    options: ["2", "3", "4", "5"],
    answer: 3,
    explanation: {
      summary: "y = −(x − 2)² + 5이므로 꼭짓점 (2, 5)가 범위 안에 있고 위로 볼록이므로 최댓값은 5입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 4는 x = 3에서의 값입니다.",
        "정답. x = 2에서 최댓값 5입니다."
      ],
      key_concept: "−x² + 4x + 1 = −(x − 2)² + 5."
    }
  },
  {
    id: "math_2023_2_08",
    subject: "math",
    exam: "2023년 제2회",
    number: 8,
    category: "방정식·부등식",
    concepts: ["삼차방정식"],
    question: "사차방정식 x⁴ − 3x² + a = 0의 한 근이 2일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_2_08.png",
    needsImage: false,
    options: ["−4", "−1", "2", "5"],
    answer: 0,
    explanation: {
      summary: "x = 2를 대입하면 16 − 12 + a = 0, a = −4입니다.",
      options_breakdown: [
        "정답. a = −4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "2⁴ = 16, 3 × 2² = 12."
    }
  },
  {
    id: "math_2023_2_09",
    subject: "math",
    exam: "2023년 제2회",
    number: 9,
    category: "방정식·부등식",
    concepts: ["연립방정식"],
    question: "연립방정식 x + 2y = 10, x² + y² = a의 해가 x = 2, y = b일 때, 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2023_2_09.png",
    needsImage: false,
    options: ["15", "18", "21", "24"],
    answer: 3,
    explanation: {
      summary: "2 + 2b = 10에서 b = 4, a = 4 + 16 = 20입니다. a + b = 24입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 20 + 4 = 24입니다."
      ],
      key_concept: "해를 대입. 2² + 4² = 20."
    }
  },
  {
    id: "math_2023_2_10",
    subject: "math",
    exam: "2023년 제2회",
    number: 10,
    category: "방정식·부등식",
    concepts: ["이차부등식"],
    question: "이차부등식 (x + 1)(x − 4) ≤ 0의 해는?",
    passage: "",
    imageUrl: "images/math/2023_2_10.png",
    needsImage: false,
    options: ["x ≥ −1", "x ≤ 4", "−1 ≤ x ≤ 4", "x ≤ −1 또는 x ≥ 4"],
    answer: 2,
    explanation: {
      summary: "두 근 −1, 4 사이에서 곱이 0 이하이므로 −1 ≤ x ≤ 4입니다.",
      options_breakdown: [
        "오답. 한쪽만 고른 것입니다.",
        "오답. 한쪽만 고른 것입니다.",
        "정답. −1 ≤ x ≤ 4입니다.",
        "오답. ≥ 0일 때의 해입니다."
      ],
      key_concept: "(x − α)(x − β) ≤ 0 → 사이."
    }
  },
  {
    id: "math_2023_2_11",
    subject: "math",
    exam: "2023년 제2회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["내분점과 중점"],
    question: "좌표평면 위의 두 점 A(−1, 1), B(2, 4)에 대하여 선분 AB를 1 : 2로 내분하는 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2023_2_11.png",
    needsImage: false,
    options: ["(−2, 0)", "(0, −2)", "(0, 2)", "(2, 0)"],
    answer: 2,
    explanation: {
      summary: "내분점 = ({1 × 2 + 2 × (−1)/3}, {1 × 4 + 2 × 1/3}) = ({0/3}, {6/3}) = (0, 2)입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 좌표가 바뀌었습니다.",
        "정답. (0, 2)입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "m : n 내분점: ({m·x₂ + n·x₁/m + n}, {m·y₂ + n·y₁/m + n})."
    }
  },
  {
    id: "math_2023_2_12",
    subject: "math",
    exam: "2023년 제2회",
    number: 12,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = x + 2에 수직이고, 점 (4, 0)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2023_2_12.png",
    needsImage: false,
    options: ["y = −x + 3", "y = −x + 4", "y = x − 3", "y = x − 4"],
    answer: 1,
    explanation: {
      summary: "수직이므로 기울기 −1이고, (4, 0)을 지나므로 y = −(x − 4) = −x + 4입니다.",
      options_breakdown: [
        "오답. (4, 0)을 지나지 않습니다.",
        "정답. y = −x + 4입니다.",
        "오답. 평행한 직선의 기울기입니다.",
        "오답. 평행한 직선의 기울기입니다."
      ],
      key_concept: "수직: 기울기의 곱 −1. y − 0 = −1(x − 4)."
    }
  },
  {
    id: "math_2023_2_13",
    subject: "math",
    exam: "2023년 제2회",
    number: 13,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심의 좌표가 (3, 1)이고 x축에 접하는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2023_2_13.png",
    needsImage: false,
    options: ["(x − 3)² + (y − 1)² = 1", "(x − 3)² + (y − 1)² = 9", "(x − 1)² + (y − 3)² = 1", "(x − 1)² + (y − 3)² = 9"],
    answer: 0,
    explanation: {
      summary: "x축에 접하므로 반지름은 중심의 y좌표 1입니다. (x − 3)² + (y − 1)² = 1입니다.",
      options_breakdown: [
        "정답. 중심 (3, 1), r = 1입니다.",
        "오답. r² = 1이어야 합니다.",
        "오답. 중심의 좌표가 바뀌었습니다.",
        "오답. 중심의 좌표가 바뀌었습니다."
      ],
      key_concept: "x축에 접하는 원: r = |중심의 y좌표|."
    }
  },
  {
    id: "math_2023_2_14",
    subject: "math",
    exam: "2023년 제2회",
    number: 14,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (2, 3)을 직선 y = x에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2023_2_14.png",
    needsImage: false,
    options: ["(−2, −3)", "(−2, 3)", "(3, −2)", "(3, 2)"],
    answer: 3,
    explanation: {
      summary: "y = x 대칭은 x, y좌표를 서로 바꿉니다. (2, 3) → (3, 2)입니다.",
      options_breakdown: [
        "오답. 원점 대칭입니다.",
        "오답. y축 대칭입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. (3, 2)입니다."
      ],
      key_concept: "y = x 대칭: (a, b) → (b, a)."
    }
  },
  {
    id: "math_2023_2_15",
    subject: "math",
    exam: "2023년 제2회",
    number: 15,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "두 집합 A = {1, 3, 6}, B = {3, 5, 6}에 대하여 A ∩ B는?",
    passage: "",
    imageUrl: "images/math/2023_2_15.png",
    needsImage: false,
    options: ["{1, 3}", "{1, 5}", "{3, 6}", "{5, 6}"],
    answer: 2,
    explanation: {
      summary: "공통 원소는 3과 6이므로 A ∩ B = {3, 6}입니다.",
      options_breakdown: [
        "오답. 1은 B에 없습니다.",
        "오답. 1은 B에, 5는 A에 없습니다.",
        "정답. {3, 6}입니다.",
        "오답. 5는 A에 없습니다."
      ],
      key_concept: "교집합: 공통 원소."
    }
  },
  {
    id: "math_2023_2_16",
    subject: "math",
    exam: "2023년 제2회",
    number: 16,
    category: "집합·명제",
    concepts: ["조건과 진리집합"],
    question: "전체집합이 U = {1, 2, 3, 4, 5, 6}일 때, 다음 조건의 진리집합은?",
    passage: "x는 짝수이다.",
    imageUrl: "images/math/2023_2_16.png",
    needsImage: false,
    options: ["{1, 3, 5}", "{2, 4, 6}", "{3, 4, 5}", "{4, 5, 6}"],
    answer: 1,
    explanation: {
      summary: "진리집합은 조건을 참이 되게 하는 전체집합의 원소의 집합입니다. U의 원소 중 짝수는 2, 4, 6입니다.",
      options_breakdown: [
        "오답. 홀수의 집합입니다.",
        "정답. {2, 4, 6}입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "조건 p(x)의 진리집합: U의 원소 중 p(x)를 참으로 만드는 x의 집합."
    }
  },
  {
    id: "math_2023_2_17",
    subject: "math",
    exam: "2023년 제2회",
    number: 17,
    category: "함수",
    concepts: ["역함수"],
    question: "함수 f : X → Y가 그림과 같을 때, f⁻¹(c)의 값은? (단, f⁻¹는 f의 역함수이다.)",
    passage: "",
    imageUrl: "images/math/2023_2_17.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation: {
      summary: "f⁻¹(c)는 f(x) = c인 x입니다. 그림에서 c로 가는 화살표의 출발점이 1이므로 f⁻¹(c) = 1입니다.",
      options_breakdown: [
        "정답. f(1) = c입니다.",
        "오답. 화살표를 잘못 읽은 값입니다.",
        "오답. 화살표를 잘못 읽은 값입니다.",
        "오답. 화살표를 잘못 읽은 값입니다."
      ],
      key_concept: "역함수 값: 화살표를 거꾸로."
    }
  },
  {
    id: "math_2023_2_18",
    subject: "math",
    exam: "2023년 제2회",
    number: 18,
    category: "함수",
    concepts: ["무리함수"],
    question: "무리함수 y = √(x − a) + b의 그래프는 무리함수 y = √x의 그래프를 x축의 방향으로 1만큼, y축의 방향으로 4만큼 평행이동한 것이다. 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2023_2_18.png",
    needsImage: false,
    options: ["4", "5", "6", "7"],
    answer: 1,
    explanation: {
      summary: "a = 1, b = 4이므로 a + b = 5입니다. 시작점 (1, 4)로도 확인됩니다.",
      options_breakdown: [
        "오답. b만의 값입니다.",
        "정답. 1 + 4 = 5입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = √(x − a) + b: 시작점 (a, b)."
    }
  },
  {
    id: "math_2023_2_19",
    subject: "math",
    exam: "2023년 제2회",
    number: 19,
    category: "경우의 수",
    concepts: ["합의 법칙과 곱의 법칙"],
    question: "그림과 같이 등산로의 입구에서 쉼터까지 가는 길은 4가지, 쉼터에서 전망대까지 가는 길은 2가지가 있다. 입구에서 쉼터를 거쳐 전망대까지 길을 따라 가는 경우의 수는? (단, 같은 지점은 두 번 이상 지나지 않는다.)",
    passage: "",
    imageUrl: "images/math/2023_2_19.png",
    needsImage: false,
    options: ["5", "6", "7", "8"],
    answer: 3,
    explanation: {
      summary: "두 구간을 연이어 가므로 곱의 법칙에 따라 4 × 2 = 8입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 합의 법칙(4 + 2)을 잘못 적용한 값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 4 × 2 = 8입니다."
      ],
      key_concept: "곱의 법칙: 두 사건이 잇달아 일어날 때 경우의 수는 곱. 합의 법칙: 동시에 일어나지 않는 두 사건은 더한다."
    }
  },
  {
    id: "math_2023_2_20",
    subject: "math",
    exam: "2023년 제2회",
    number: 20,
    category: "경우의 수",
    concepts: ["조합"],
    question: "그림과 같이 6종류의 과일이 있다. 이 중에서 서로 다른 2종류의 과일을 선택하는 경우의 수는?",
    passage: "바나나, 귤, 사과, 복숭아, 감, 포도",
    imageUrl: "images/math/2023_2_20.png",
    needsImage: false,
    options: ["15", "18", "21", "24"],
    answer: 0,
    explanation: {
      summary: "순서 없이 2개를 고르므로 ₆C₂ = {6 × 5/2} = 15입니다.",
      options_breakdown: [
        "정답. ₆C₂ = 15입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "₆C₂ = {6 × 5/2} = 15."
    }
  }
);
