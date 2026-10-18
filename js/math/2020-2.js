// 2020년도 제2회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2020_2_01",
    subject: "math",
    exam: "2020년 제2회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² − x, B = −x² + 1에 대하여 2A + B는?",
    passage: "",
    imageUrl: "images/math/2020_2_01.png",
    needsImage: false,
    options: ["x² − 2x + 1", "x² − x − 1", "x² + x + 3", "x² + 2x − 3"],
    answer: 0,
    explanation: {
      summary: "2A = 2x² − 2x이므로 2A + B = 2x² − 2x − x² + 1 = x² − 2x + 1입니다.",
      options_breakdown: [
        "정답. x² − 2x + 1입니다.",
        "오답. A에 2를 곱하지 않았습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "동류항 정리: 2x² − x² = x², −2x, +1."
    }
  },
  {
    id: "math_2020_2_02",
    subject: "math",
    exam: "2020년 제2회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "다음 등식 중 x에 대한 항등식은?",
    passage: "",
    imageUrl: "images/math/2020_2_02.png",
    needsImage: false,
    options: ["x = 5", "x + 2 = 0", "(x + 1)² = x + 1", "x² − 1 = (x + 1)(x − 1)"],
    answer: 3,
    explanation: {
      summary: "항등식은 x에 어떤 값을 대입해도 항상 성립하는 등식입니다. (x + 1)(x − 1) = x² − 1은 전개 공식이므로 항상 성립합니다. 나머지는 특정 x에서만 성립하는 방정식입니다.",
      options_breakdown: [
        "오답. x = 5일 때만 성립합니다.",
        "오답. x = −2일 때만 성립합니다.",
        "오답. x = 0 또는 x = −1일 때만 성립합니다.",
        "정답. 합차 공식으로 항상 성립합니다."
      ],
      key_concept: "항등식 = 모든 x에 대해 성립(곱셈 공식, 전개식). 방정식 = 특정 x에서만 성립."
    }
  },
  {
    id: "math_2020_2_03",
    subject: "math",
    exam: "2020년 제2회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다음은 조립제법을 이용하여 다항식 x³ − 2x + 1을 일차식 x − 2로 나누어 몫과 나머지를 구하는 과정이다. 이때, 몫은?",
    passage: "",
    imageUrl: "images/math/2020_2_03.png",
    needsImage: false,
    options: ["2", "5", "x + 5", "x² + 2x + 2"],
    answer: 3,
    explanation: {
      summary: "계수 1, 0, −2, 1(x²항이 없으므로 0)을 2로 조립제법 하면 1, 2, 2, 5가 됩니다. 앞의 세 수 1, 2, 2가 몫의 계수이므로 몫은 x² + 2x + 2, 나머지는 5입니다.",
      options_breakdown: [
        "오답. 2는 나누는 수입니다.",
        "오답. 5는 나머지입니다.",
        "오답. 몫은 이차식입니다.",
        "정답. 몫은 x² + 2x + 2입니다."
      ],
      key_concept: "조립제법에서 빠진 차수의 계수는 0으로 채운다. 삼차식 ÷ 일차식 → 몫은 이차식."
    }
  },
  {
    id: "math_2020_2_04",
    subject: "math",
    exam: "2020년 제2회",
    number: 4,
    category: "다항식",
    concepts: ["복소수"],
    question: "다음 등식을 만족하는 실수 x, y의 값은? (단, i = √−1)",
    passage: "(x − 1) + (y + 2)i = 2 + 3i",
    imageUrl: "images/math/2020_2_04.png",
    needsImage: false,
    options: ["x = 2, y = 1", "x = 2, y = 5", "x = 3, y = 1", "x = 3, y = 5"],
    answer: 2,
    explanation: {
      summary: "복소수가 서로 같으면 실수부끼리, 허수부끼리 같습니다. x − 1 = 2에서 x = 3, y + 2 = 3에서 y = 1입니다.",
      options_breakdown: [
        "오답. x − 1 = 2이므로 x = 3입니다.",
        "오답. 둘 다 틀렸습니다.",
        "정답. x = 3, y = 1입니다.",
        "오답. y + 2 = 3이므로 y = 1입니다."
      ],
      key_concept: "복소수가 서로 같을 조건: a + bi = c + di ⇔ a = c, b = d (a, b, c, d 실수)."
    }
  },
  {
    id: "math_2020_2_05",
    subject: "math",
    exam: "2020년 제2회",
    number: 5,
    category: "방정식·부등식",
    concepts: ["이차방정식의 판별식"],
    question: "다음 이차방정식 중에서 서로 다른 두 실근을 갖는 것은?",
    passage: "",
    imageUrl: "images/math/2020_2_05.png",
    needsImage: false,
    options: ["x² + 3 = 0", "x² + x − 2 = 0", "x² + 2x + 1 = 0", "x² + 3x + 5 = 0"],
    answer: 1,
    explanation: {
      summary: "판별식 D = b² − 4ac > 0이면 서로 다른 두 실근입니다. x² + x − 2 = 0은 D = 1 + 8 = 9 > 0이고 (x + 2)(x − 1) = 0으로 근이 −2, 1입니다.",
      options_breakdown: [
        "오답. D = −12 < 0으로 허근입니다.",
        "정답. D = 9 > 0으로 서로 다른 두 실근입니다.",
        "오답. D = 0으로 중근(x = −1)입니다.",
        "오답. D = 9 − 20 < 0으로 허근입니다."
      ],
      key_concept: "판별식 D = b² − 4ac: D > 0 서로 다른 두 실근, D = 0 중근, D < 0 서로 다른 두 허근."
    }
  },
  {
    id: "math_2020_2_06",
    subject: "math",
    exam: "2020년 제2회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "1 ≤ x ≤ 4일 때, 이차함수 y = (x − 2)² − 3의 최댓값은?",
    passage: "",
    imageUrl: "images/math/2020_2_06.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 2,
    explanation: {
      summary: "아래로 볼록이므로 최댓값은 꼭짓점 x = 2에서 먼 끝점 x = 4에서 나타납니다. (4 − 2)² − 3 = 1입니다.",
      options_breakdown: [
        "오답. −3은 최솟값(x = 2)입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. x = 4에서 1입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "아래로 볼록인 이차함수의 범위 내 최댓값: 꼭짓점에서 더 먼 끝점의 값. x = 1에서는 −2, x = 4에서는 1."
    }
  },
  {
    id: "math_2020_2_07",
    subject: "math",
    exam: "2020년 제2회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["삼차방정식"],
    question: "삼차방정식 x³ − x² + 3x + a = 0의 한 근이 1일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2020_2_07.png",
    needsImage: false,
    options: ["−5", "−3", "−1", "1"],
    answer: 1,
    explanation: {
      summary: "x = 1이 근이므로 대입하면 1 − 1 + 3 + a = 0, a = −3입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 3 + a = 0에서 a = −3입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "한 근이 주어진 방정식: 근을 대입하면 등식이 성립한다. 이를 이용해 미지의 계수를 구한다."
    }
  },
  {
    id: "math_2020_2_08",
    subject: "math",
    exam: "2020년 제2회",
    number: 8,
    category: "도형의 방정식",
    concepts: ["두 점 사이의 거리"],
    question: "좌표평면 위의 두 점 A(−1, 1), B(2, 3) 사이의 거리는?",
    passage: "",
    imageUrl: "images/math/2020_2_08.png",
    needsImage: false,
    options: ["√11", "2√3", "√13", "√14"],
    answer: 2,
    explanation: {
      summary: "AB = √{(2 − (−1))² + (3 − 1)²} = √(9 + 4) = √13입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 2√3 = √12입니다.",
        "정답. √(3² + 2²) = √13입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "거리 공식. 음수 좌표의 차이는 2 − (−1) = 3으로 계산."
    }
  },
  {
    id: "math_2020_2_09",
    subject: "math",
    exam: "2020년 제2회",
    number: 9,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = −(1/3)x + 2에 수직이고 점 (0, 1)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2020_2_09.png",
    needsImage: false,
    options: ["y = −(1/3)x", "y = −(1/3)x + 1", "y = 3x", "y = 3x + 1"],
    answer: 3,
    explanation: {
      summary: "수직이므로 기울기의 곱이 −1입니다. −1/3 × m = −1에서 m = 3이고, (0, 1)을 지나므로 y = 3x + 1입니다.",
      options_breakdown: [
        "오답. 평행한 직선의 기울기입니다.",
        "오답. 평행한 직선입니다.",
        "오답. (0, 1)을 지나지 않습니다.",
        "정답. 기울기 3, y절편 1입니다."
      ],
      key_concept: "수직 조건: m₁ × m₂ = −1. −1/3의 수직 기울기는 3."
    }
  },
  {
    id: "math_2020_2_10",
    subject: "math",
    exam: "2020년 제2회",
    number: 10,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심이 원점이고 점 (3, 4)를 지나는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2020_2_10.png",
    needsImage: false,
    options: ["x² + y² = 1", "x² + y² = 25", "(x − 3)² + (y − 4)² = 1", "(x − 3)² + (y − 4)² = 25"],
    answer: 1,
    explanation: {
      summary: "중심이 원점이므로 x² + y² = r²이고, (3, 4)를 대입하면 r² = 9 + 16 = 25입니다. x² + y² = 25입니다.",
      options_breakdown: [
        "오답. (3, 4)를 지나지 않습니다.",
        "정답. r² = 3² + 4² = 25입니다.",
        "오답. 중심이 (3, 4)인 원입니다.",
        "오답. 중심이 (3, 4)인 원입니다."
      ],
      key_concept: "원점이 중심인 원: x² + y² = r². 지나는 점을 대입해 r²을 구한다."
    }
  },
  {
    id: "math_2020_2_11",
    subject: "math",
    exam: "2020년 제2회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["평행이동"],
    question: "좌표평면 위의 점 (−1, 2)를 x축의 방향으로 3만큼, y축의 방향으로 −2만큼 평행이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2020_2_11.png",
    needsImage: false,
    options: ["(−4, 0)", "(0, −4)", "(0, 2)", "(2, 0)"],
    answer: 3,
    explanation: {
      summary: "x좌표에 3을 더하고 y좌표에 −2를 더합니다. (−1 + 3, 2 − 2) = (2, 0)입니다.",
      options_breakdown: [
        "오답. 부호가 반대입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. (2, 0)입니다."
      ],
      key_concept: "점의 평행이동: (x, y) → (x + a, y + b). 도형의 평행이동은 x → x − a, y → y − b로 부호가 반대."
    }
  },
  {
    id: "math_2020_2_12",
    subject: "math",
    exam: "2020년 제2회",
    number: 12,
    category: "집합·명제",
    concepts: ["집합의 뜻"],
    question: "다음 중 집합인 것은?",
    passage: "",
    imageUrl: "images/math/2020_2_12.png",
    needsImage: false,
    options: ["아름다운 꽃의 모임", "정수 중 큰 수의 모임", "10보다 작은 자연수의 모임", "기부를 많이 하는 사람들의 모임"],
    answer: 2,
    explanation: {
      summary: "집합은 대상이 분명하게 정해지는 모임입니다. '10보다 작은 자연수'는 1~9로 분명하지만, '아름다운', '큰', '많이'는 기준이 명확하지 않아 집합이 아닙니다.",
      options_breakdown: [
        "오답. '아름다운'은 기준이 불분명합니다.",
        "오답. '큰 수'는 기준이 불분명합니다.",
        "정답. 원소가 1, 2, …, 9로 분명합니다.",
        "오답. '많이'는 기준이 불분명합니다."
      ],
      key_concept: "집합의 조건: 어떤 대상이 속하는지 속하지 않는지 명확히 판단할 수 있어야 한다."
    }
  },
  {
    id: "math_2020_2_13",
    subject: "math",
    exam: "2020년 제2회",
    number: 13,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 'x² ≠ 1이면 x ≠ 1이다.'의 대우는?",
    passage: "",
    imageUrl: "images/math/2020_2_13.png",
    needsImage: false,
    options: ["x = 1이면 x² = 1이다.", "x = 1이면 x² ≠ 1이다.", "x² = 1이면 x ≠ 1이다.", "x² ≠ 1이면 x = 1이다."],
    answer: 0,
    explanation: {
      summary: "대우는 결론의 부정 → 가정의 부정입니다. x ≠ 1의 부정은 x = 1, x² ≠ 1의 부정은 x² = 1이므로 'x = 1이면 x² = 1이다.'입니다.",
      options_breakdown: [
        "정답. 대우입니다.",
        "오답. 가정의 부정에서 결론은 부정하지 않았습니다.",
        "오답. 이에 해당합니다.",
        "오답. 결론만 부정한 것입니다."
      ],
      key_concept: "≠의 부정은 =. 대우: ~q → ~p."
    }
  },
  {
    id: "math_2020_2_14",
    subject: "math",
    exam: "2020년 제2회",
    number: 14,
    category: "함수",
    concepts: ["함수의 뜻"],
    question: "그림과 같은 함수 f : X → Y에 대한 설명으로 옳지 않은 것은?",
    passage: "",
    imageUrl: "images/math/2020_2_14.png",
    needsImage: false,
    options: ["정의역은 {a, b, c, d}이다.", "공역은 {1, 2, 3, 4}이다.", "치역은 {1, 2, 3}이다.", "f(a) = 2이다."],
    answer: 3,
    explanation: {
      summary: "정의역은 X = {a, b, c, d}, 공역은 Y = {1, 2, 3, 4}, 치역은 실제 대응되는 값 {1, 2, 3}입니다. 그림에서 a는 1에 대응하므로 f(a) = 2는 틀렸습니다.",
      options_breakdown: [
        "옳은 설명. 정의역은 X입니다.",
        "옳은 설명. 공역은 Y입니다.",
        "옳은 설명. 4는 대응되지 않으므로 치역은 {1, 2, 3}입니다.",
        "정답(옳지 않음). 그림에서 f(a) = 1입니다."
      ],
      key_concept: "정의역(X 전체), 공역(Y 전체), 치역(함숫값 전체, 공역의 부분집합)."
    }
  },
  {
    id: "math_2020_2_15",
    subject: "math",
    exam: "2020년 제2회",
    number: 15,
    category: "함수",
    concepts: ["유리함수"],
    question: "유리함수 y = 1/(x − 1) + a의 그래프가 그림과 같을 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2020_2_15.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: {
      summary: "y = 1/(x − 1) + a의 점근선은 x = 1, y = a입니다. 그림에서 가로 점근선이 y = 2이므로 a = 2입니다.",
      options_breakdown: [
        "오답. 1은 세로 점근선 x = 1의 값입니다.",
        "정답. 가로 점근선 y = 2에서 a = 2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = k/(x − p) + q의 가로 점근선은 y = q. 그래프의 점근선을 읽어 상수를 구한다."
    }
  }
);
