// 2021년도 제2회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2021_2_01",
    subject: "math",
    exam: "2021년 제2회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = 2x² + x, B = x² − x에 대하여 A − B는?",
    passage: "",
    imageUrl: "images/math/2021_2_01.png",
    needsImage: false,
    options: ["x² − 2x", "x² − x", "x² + x", "x² + 2x"],
    answer: 3,
    explanation: {
      summary: "A − B = 2x² + x − x² + x = x² + 2x입니다.",
      options_breakdown: [
        "오답. −(−x) = +x입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. x + x = 2x입니다.",
        "정답. x² + 2x입니다."
      ],
      key_concept: "뺄셈에서 −(−x) = +x로 부호가 바뀐다."
    }
  },
  {
    id: "math_2021_2_02",
    subject: "math",
    exam: "2021년 제2회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 x² + 3x − 7 = x² + ax + b가 x에 대한 항등식일 때, 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_02.png",
    needsImage: false,
    options: ["−5", "−4", "−3", "−2"],
    answer: 1,
    explanation: {
      summary: "계수를 비교하면 a = 3, b = −7이므로 a + b = −4입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 3 + (−7) = −4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "항등식의 계수 비교."
    }
  },
  {
    id: "math_2021_2_03",
    subject: "math",
    exam: "2021년 제2회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다항식 x³ − 2x + a가 x − 1로 나누어떨어질 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_03.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation: {
      summary: "인수정리에 따라 f(1) = 1 − 2 + a = 0이므로 a = 1입니다.",
      options_breakdown: [
        "정답. a = 1입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "나누어떨어진다 ⇔ 나머지 0 ⇔ f(1) = 0."
    }
  },
  {
    id: "math_2021_2_04",
    subject: "math",
    exam: "2021년 제2회",
    number: 4,
    category: "다항식",
    concepts: ["인수분해"],
    question: "다항식 x³ + 3³을 인수분해한 식이 (x + 3)(x² − 3x + a)일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_04.png",
    needsImage: false,
    options: ["1", "3", "6", "9"],
    answer: 3,
    explanation: {
      summary: "a³ + b³ = (a + b)(a² − ab + b²)에서 x³ + 3³ = (x + 3)(x² − 3x + 9)이므로 a = 9입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 3은 b의 값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. b² = 3² = 9입니다."
      ],
      key_concept: "세제곱의 합: a³ + b³ = (a + b)(a² − ab + b²). 뒤 괄호의 상수항은 b²."
    }
  },
  {
    id: "math_2021_2_05",
    subject: "math",
    exam: "2021년 제2회",
    number: 5,
    category: "다항식",
    concepts: ["복소수"],
    question: "i(1 + 2i) = a + i일 때, 실수 a의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2021_2_05.png",
    needsImage: false,
    options: ["−2", "−1", "1", "2"],
    answer: 0,
    explanation: {
      summary: "i(1 + 2i) = i + 2i² = i − 2 = −2 + i이므로 a = −2입니다.",
      options_breakdown: [
        "정답. 2i² = −2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 1은 허수부입니다.",
        "오답. i² = −1을 적용해야 합니다."
      ],
      key_concept: "i² = −1. 전개 후 실수부와 허수부로 정리."
    }
  },
  {
    id: "math_2021_2_06",
    subject: "math",
    exam: "2021년 제2회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차방정식의 근과 계수"],
    question: "이차방정식 x² − 4x − 5 = 0의 두 근을 α, β라고 할 때, α + β의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_06.png",
    needsImage: false,
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: {
      summary: "두 근의 합은 −(−4)/1 = 4입니다. 실제 근 5와 −1의 합도 4입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. α + β = 4입니다.",
        "오답. 5는 근 중 하나입니다."
      ],
      key_concept: "α + β = −b/a. x의 계수가 −4이면 합은 4."
    }
  },
  {
    id: "math_2021_2_07",
    subject: "math",
    exam: "2021년 제2회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "−1 ≤ x ≤ 2일 때, 이차함수 y = x² − 3의 최솟값은?",
    passage: "",
    imageUrl: "images/math/2021_2_07.png",
    needsImage: false,
    options: ["−3", "−2", "−1", "0"],
    answer: 0,
    explanation: {
      summary: "아래로 볼록이고 꼭짓점 (0, −3)이 범위 안에 있으므로 최솟값은 −3입니다.",
      options_breakdown: [
        "정답. x = 0에서 −3입니다.",
        "오답. −2는 x = ±1에서의 값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = x² + q: 꼭짓점 (0, q)에서 최솟값."
    }
  },
  {
    id: "math_2021_2_08",
    subject: "math",
    exam: "2021년 제2회",
    number: 8,
    category: "방정식·부등식",
    concepts: ["삼차방정식"],
    question: "삼차방정식 x³ + ax² − 2x − 1 = 0의 한 근이 1일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_08.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: {
      summary: "x = 1을 대입하면 1 + a − 2 − 1 = 0, a = 2입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. a − 2 = 0에서 a = 2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "근을 대입해 등식을 만든다."
    }
  },
  {
    id: "math_2021_2_09",
    subject: "math",
    exam: "2021년 제2회",
    number: 9,
    category: "방정식·부등식",
    concepts: ["연립부등식"],
    question: "연립부등식 3x < 2x + 5, 4x > 3x − 1의 해가 −1 < x < a일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_09.png",
    needsImage: false,
    options: ["5", "6", "7", "8"],
    answer: 0,
    explanation: {
      summary: "3x < 2x + 5에서 x < 5, 4x > 3x − 1에서 x > −1입니다. 공통 범위는 −1 < x < 5이므로 a = 5입니다.",
      options_breakdown: [
        "정답. a = 5입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "각 일차부등식을 풀어 공통 부분을 구한다."
    }
  },
  {
    id: "math_2021_2_10",
    subject: "math",
    exam: "2021년 제2회",
    number: 10,
    category: "방정식·부등식",
    concepts: ["절댓값 부등식"],
    question: "그림은 부등식 |x − 2| ≤ 2의 해를 수직선 위에 나타낸 것이다. 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_10.png",
    needsImage: false,
    options: ["4", "5", "6", "7"],
    answer: 0,
    explanation: {
      summary: "|x − 2| ≤ 2 ⇔ 0 ≤ x ≤ 4이므로 오른쪽 끝 a = 4입니다.",
      options_breakdown: [
        "정답. a = 4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "|x − 2| ≤ 2: 2를 중심으로 거리 2 이내 → 0 ≤ x ≤ 4."
    }
  },
  {
    id: "math_2021_2_11",
    subject: "math",
    exam: "2021년 제2회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["두 점 사이의 거리"],
    question: "좌표평면 위의 두 점 A(−2, 1), B(2, 4) 사이의 거리는?",
    passage: "",
    imageUrl: "images/math/2021_2_11.png",
    needsImage: false,
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: {
      summary: "AB = √{(2 − (−2))² + (4 − 1)²} = √(16 + 9) = 5입니다.",
      options_breakdown: [
        "오답. y좌표 차이만 계산한 값입니다.",
        "오답. x좌표 차이만 계산한 값입니다.",
        "정답. √(4² + 3²) = 5입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "거리 공식, 3-4-5 직각삼각형."
    }
  },
  {
    id: "math_2021_2_12",
    subject: "math",
    exam: "2021년 제2회",
    number: 12,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = 2x + 3에 평행하고, 점 (0, 6)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2021_2_12.png",
    needsImage: false,
    options: ["y = (1/2)x + 1", "y = (1/2)x + 6", "y = 2x + 1", "y = 2x + 6"],
    answer: 3,
    explanation: {
      summary: "평행하므로 기울기 2, (0, 6)을 지나므로 y절편 6입니다. y = 2x + 6입니다.",
      options_breakdown: [
        "오답. 기울기가 2여야 합니다.",
        "오답. 기울기가 2여야 합니다.",
        "오답. y절편이 6이어야 합니다.",
        "정답. 기울기 2, y절편 6입니다."
      ],
      key_concept: "평행 → 기울기 같음."
    }
  },
  {
    id: "math_2021_2_13",
    subject: "math",
    exam: "2021년 제2회",
    number: 13,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "두 점 A(−1, −1), B(3, 3)을 지름의 양 끝 점으로 하는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2021_2_13.png",
    needsImage: false,
    options: ["(x + 1)² + (y + 1)² = 8", "(x + 1)² + (y − 1)² = 8", "(x − 1)² + (y + 1)² = 8", "(x − 1)² + (y − 1)² = 8"],
    answer: 3,
    explanation: {
      summary: "중심은 AB의 중점 (1, 1)이고, 반지름은 중심에서 B까지의 거리 √(4 + 4) = √8이므로 r² = 8입니다. (x − 1)² + (y − 1)² = 8입니다.",
      options_breakdown: [
        "오답. 중심이 (−1, −1)입니다.",
        "오답. 중심이 (−1, 1)입니다.",
        "오답. 중심이 (1, −1)입니다.",
        "정답. 중심 (1, 1), r² = 8입니다."
      ],
      key_concept: "지름의 양 끝점 → 중심은 중점, 반지름은 중심에서 끝점까지의 거리."
    }
  },
  {
    id: "math_2021_2_14",
    subject: "math",
    exam: "2021년 제2회",
    number: 14,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (2, 5)를 x축에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2021_2_14.png",
    needsImage: false,
    options: ["(−2, −5)", "(−2, 5)", "(2, −5)", "(5, 2)"],
    answer: 2,
    explanation: {
      summary: "x축 대칭은 y좌표의 부호만 바꿉니다. (2, 5) → (2, −5)입니다.",
      options_breakdown: [
        "오답. 원점 대칭입니다.",
        "오답. y축 대칭입니다.",
        "정답. (2, −5)입니다.",
        "오답. y = x 대칭입니다."
      ],
      key_concept: "x축 대칭: (x, y) → (x, −y)."
    }
  },
  {
    id: "math_2021_2_15",
    subject: "math",
    exam: "2021년 제2회",
    number: 15,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "두 집합 A = {1, 2, 3, 6}, B = {1, 2, 4, 8}에 대하여 n(A ∩ B)의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_15.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 0,
    explanation: {
      summary: "A ∩ B = {1, 2}이므로 원소의 개수는 2입니다.",
      options_breakdown: [
        "정답. 공통 원소는 1, 2입니다.",
        "오답. 4는 n(A)입니다.",
        "오답. 6은 n(A ∪ B)입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "교집합의 원소 개수를 센다."
    }
  },
  {
    id: "math_2021_2_16",
    subject: "math",
    exam: "2021년 제2회",
    number: 16,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 'x = 1이면 x³ = 1이다.'의 역은?",
    passage: "",
    imageUrl: "images/math/2021_2_16.png",
    needsImage: false,
    options: ["x = 1이면 x³ ≠ 1이다.", "x ≠ 1이면 x³ ≠ 1이다.", "x³ = 1이면 x = 1이다.", "x³ ≠ 1이면 x ≠ 1이다."],
    answer: 2,
    explanation: {
      summary: "역은 가정과 결론을 바꾼 'x³ = 1이면 x = 1이다.'입니다.",
      options_breakdown: [
        "오답. 결론만 부정한 것입니다.",
        "오답. 이입니다.",
        "정답. 역입니다.",
        "오답. 대우입니다."
      ],
      key_concept: "역: q → p."
    }
  },
  {
    id: "math_2021_2_17",
    subject: "math",
    exam: "2021년 제2회",
    number: 17,
    category: "함수",
    concepts: ["합성함수"],
    question: "함수 f : X → Y가 그림과 같을 때, (f ∘ f)(2)의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_17.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 3,
    explanation: {
      summary: "(f ∘ f)(2) = f(f(2))입니다. 그림에서 2의 화살표를 따라 f(2)를 찾고, 그 값에서 다시 화살표를 따라가면 4입니다.",
      options_breakdown: [
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "정답. f(f(2)) = 4입니다."
      ],
      key_concept: "같은 함수를 두 번 적용: f(f(x)). 같은 그림에서 화살표를 두 번 따라간다."
    }
  },
  {
    id: "math_2021_2_18",
    subject: "math",
    exam: "2021년 제2회",
    number: 18,
    category: "함수",
    concepts: ["유리함수"],
    question: "유리함수 y = 1/(x − a) + 4의 그래프의 점근선은 두 직선 x = 3, y = 4이다. 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_2_18.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 1,
    explanation: {
      summary: "y = 1/(x − a) + 4의 세로 점근선은 x = a입니다. x = 3이므로 a = 3입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. a = 3입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = k/(x − p) + q의 점근선: x = p(분모를 0으로 만드는 값), y = q."
    }
  },
  {
    id: "math_2021_2_19",
    subject: "math",
    exam: "2021년 제2회",
    number: 19,
    category: "경우의 수",
    concepts: ["순열"],
    question: "그림은 어느 하계 올림픽 경기 종목 중 4개의 종목을 나타낸 것이다. 이 4개의 종목에서 서로 다른 2개의 종목을 택하여 일렬로 나열하는 경우의 수는?",
    passage: "농구, 배구, 축구, 탁구",
    imageUrl: "images/math/2021_2_19.png",
    needsImage: false,
    options: ["12", "15", "18", "21"],
    answer: 0,
    explanation: {
      summary: "순서 있게 나열하므로 순열 ₄P₂ = 4 × 3 = 12입니다.",
      options_breakdown: [
        "정답. 4 × 3 = 12입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "₄P₂ = 4 × 3. '일렬로 나열' → 순열."
    }
  },
  {
    id: "math_2021_2_20",
    subject: "math",
    exam: "2021년 제2회",
    number: 20,
    category: "경우의 수",
    concepts: ["조합"],
    question: "그림과 같이 5개의 정다면체가 있다. 이 5개의 정다면체에서 서로 다른 2개의 정다면체를 선택하는 경우의 수는?",
    passage: "정사면체, 정육면체, 정팔면체, 정십이면체, 정이십면체",
    imageUrl: "images/math/2021_2_20.png",
    needsImage: false,
    options: ["8", "10", "12", "14"],
    answer: 1,
    explanation: {
      summary: "순서 없이 고르므로 조합 ₅C₂ = (5 × 4)/(2 × 1) = 10입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. ₅C₂ = 10입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "₅C₂ = 5 × 4 / 2 = 10. '선택' → 조합."
    }
  }
);
