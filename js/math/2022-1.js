// 2022년도 제1회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2022_1_01",
    subject: "math",
    exam: "2022년 제1회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² + 2x, B = 2x² − 1에 대하여 A + B는?",
    passage: "",
    imageUrl: "images/math/2022_1_01.png",
    needsImage: false,
    options: ["x − 1", "x² + 2", "x² + x − 3", "3x² + 2x − 1"],
    answer: 3,
    explanation: {
      summary: "A + B = x² + 2x + 2x² − 1 = 3x² + 2x − 1입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. x² + 2x² = 3x²입니다."
      ],
      key_concept: "동류항끼리 더한다: x² + 2x² = 3x²."
    }
  },
  {
    id: "math_2022_1_02",
    subject: "math",
    exam: "2022년 제1회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 (x + 1)(x − 1) = x² + a가 x에 대한 항등식일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2022_1_02.png",
    needsImage: false,
    options: ["−2", "−1", "0", "1"],
    answer: 1,
    explanation: {
      summary: "(x + 1)(x − 1) = x² − 1이므로 a = −1입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 합차 공식에서 a = −1입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 부호가 반대입니다."
      ],
      key_concept: "합차 공식: (a + b)(a − b) = a² − b²."
    }
  },
  {
    id: "math_2022_1_03",
    subject: "math",
    exam: "2022년 제1회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다음은 조립제법을 이용하여 다항식 x³ − 2x² − x + 5를 일차식 x − 1로 나누어 몫과 나머지를 구하는 과정이다. 이때, 몫은?",
    passage: "",
    imageUrl: "images/math/2022_1_03.png",
    needsImage: false,
    options: ["x + 2", "2x + 1", "x² − x − 2", "2x² + x + 1"],
    answer: 2,
    explanation: {
      summary: "조립제법 결과의 아래 줄 1, −1, −2, 3에서 앞의 세 수가 몫의 계수, 마지막 3이 나머지입니다. 몫은 x² − x − 2입니다.",
      options_breakdown: [
        "오답. 몫은 이차식입니다.",
        "오답. 몫은 이차식입니다.",
        "정답. 몫 x² − x − 2, 나머지 3입니다.",
        "오답. 계수가 틀렸습니다."
      ],
      key_concept: "조립제법: 마지막 수는 나머지, 나머지 수들은 차수를 하나 낮춘 몫의 계수."
    }
  },
  {
    id: "math_2022_1_04",
    subject: "math",
    exam: "2022년 제1회",
    number: 4,
    category: "다항식",
    concepts: ["인수분해"],
    question: "다항식 x³ − 9x² + 27x − 27을 인수분해한 식이 (x − a)³일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2022_1_04.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: {
      summary: "(x − a)³ = x³ − 3ax² + 3a²x − a³입니다. −3a = −9에서 a = 3이고, 3³ = 27로 상수항도 맞습니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. a = 3입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "세제곱 공식: (a − b)³ = a³ − 3a²b + 3ab² − b³. 상수항 a³ = 27 → a = 3."
    }
  },
  {
    id: "math_2022_1_05",
    subject: "math",
    exam: "2022년 제1회",
    number: 5,
    category: "다항식",
    concepts: ["복소수"],
    question: "2 − i + i² = a − i일 때, 실수 a의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2022_1_05.png",
    needsImage: false,
    options: ["−2", "−1", "0", "1"],
    answer: 3,
    explanation: {
      summary: "i² = −1이므로 2 − i − 1 = 1 − i입니다. 따라서 a = 1입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 2 + (−1) = 1입니다."
      ],
      key_concept: "i² = −1을 실수로 바꿔 실수부에 합친다."
    }
  },
  {
    id: "math_2022_1_06",
    subject: "math",
    exam: "2022년 제1회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차방정식의 근과 계수"],
    question: "이차방정식 x² + 3x − 4 = 0의 두 근을 α, β라고 할 때, α + β의 값은?",
    passage: "",
    imageUrl: "images/math/2022_1_06.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 0,
    explanation: {
      summary: "두 근의 합은 {−b/a} = −3입니다. 실제 근 1과 −4의 합도 −3입니다.",
      options_breakdown: [
        "정답. α + β = −3입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 부호가 반대입니다."
      ],
      key_concept: "α + β = {−b/a}: x의 계수가 +3이면 합은 −3."
    }
  },
  {
    id: "math_2022_1_07",
    subject: "math",
    exam: "2022년 제1회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "0 ≤ x ≤ 2일 때, 이차함수 y = x² + 2x − 3의 최댓값은?",
    passage: "",
    imageUrl: "images/math/2022_1_07.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 2,
    explanation: {
      summary: "y = (x + 1)² − 4로 꼭짓점 x = −1이 범위 밖(왼쪽)에 있어 0 ≤ x ≤ 2에서 증가합니다. 최댓값은 x = 2에서 4 + 4 − 3 = 5입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. x = 2에서 5입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "꼭짓점이 범위 밖이면 양 끝값만 비교: x = 0에서 −3, x = 2에서 5."
    }
  },
  {
    id: "math_2022_1_08",
    subject: "math",
    exam: "2022년 제1회",
    number: 8,
    category: "방정식·부등식",
    concepts: ["삼차방정식"],
    question: "삼차방정식 x³ − 2x + a = 0의 한 근이 2일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2022_1_08.png",
    needsImage: false,
    options: ["−4", "−3", "−2", "−1"],
    answer: 0,
    explanation: {
      summary: "x = 2를 대입하면 8 − 4 + a = 0, a = −4입니다.",
      options_breakdown: [
        "정답. a = −4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "근 대입: 2³ − 2 × 2 + a = 0."
    }
  },
  {
    id: "math_2022_1_09",
    subject: "math",
    exam: "2022년 제1회",
    number: 9,
    category: "방정식·부등식",
    concepts: ["연립방정식"],
    question: "연립방정식 x + y = 3, x² − y² = a의 해가 x = 2, y = b일 때, 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2022_1_09.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 1,
    explanation: {
      summary: "x = 2를 첫 식에 넣으면 b = 1이고, a = 2² − 1² = 3입니다. a + b = 4입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 3 + 1 = 4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "해를 대입해 미지의 상수를 구한다."
    }
  },
  {
    id: "math_2022_1_10",
    subject: "math",
    exam: "2022년 제1회",
    number: 10,
    category: "방정식·부등식",
    concepts: ["이차부등식"],
    question: "이차부등식 (x + 3)(x − 1) ≤ 0의 해는?",
    passage: "",
    imageUrl: "images/math/2022_1_10.png",
    needsImage: false,
    options: ["x ≤ −3", "x ≥ 1", "−3 ≤ x ≤ 1", "x ≤ −3 또는 x ≥ 1"],
    answer: 2,
    explanation: {
      summary: "두 근 −3, 1 사이에서 곱이 0 이하이므로 −3 ≤ x ≤ 1입니다.",
      options_breakdown: [
        "오답. 한쪽만 고른 것입니다.",
        "오답. 한쪽만 고른 것입니다.",
        "정답. −3 ≤ x ≤ 1입니다.",
        "오답. ≥ 0일 때의 해입니다."
      ],
      key_concept: "(x − α)(x − β) ≤ 0 → 두 근 사이."
    }
  },
  {
    id: "math_2022_1_11",
    subject: "math",
    exam: "2022년 제1회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["내분점과 중점"],
    question: "좌표평면 위의 두 점 A(1, 2), B(3, −4)에 대하여 선분 AB의 중점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2022_1_11.png",
    needsImage: false,
    options: ["(−2, 1)", "(−1, 2)", "(1, −2)", "(2, −1)"],
    answer: 3,
    explanation: {
      summary: "중점 = ({1 + 3/2}, {2 + (−4)/2}) = (2, −1)입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 좌표가 바뀌었습니다.",
        "정답. (2, −1)입니다."
      ],
      key_concept: "중점은 각 좌표의 평균."
    }
  },
  {
    id: "math_2022_1_12",
    subject: "math",
    exam: "2022년 제1회",
    number: 12,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = −2x + 5에 평행하고 점 (0, 1)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2022_1_12.png",
    needsImage: false,
    options: ["y = −2x − 3", "y = −2x + 1", "y = {1/2}x − 3", "y = {1/2}x + 1"],
    answer: 1,
    explanation: {
      summary: "평행하므로 기울기 −2, (0, 1)을 지나므로 y절편 1입니다. y = −2x + 1입니다.",
      options_breakdown: [
        "오답. y절편이 1이어야 합니다.",
        "정답. 기울기 −2, y절편 1입니다.",
        "오답. 수직인 직선의 기울기입니다.",
        "오답. 수직인 직선의 기울기입니다."
      ],
      key_concept: "평행 → 기울기 같음."
    }
  },
  {
    id: "math_2022_1_13",
    subject: "math",
    exam: "2022년 제1회",
    number: 13,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심의 좌표가 (2, 1)이고 반지름의 길이가 3인 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2022_1_13.png",
    needsImage: false,
    options: ["(x + 2)² + (y + 1)² = 9", "(x + 2)² + (y − 1)² = 9", "(x − 2)² + (y + 1)² = 9", "(x − 2)² + (y − 1)² = 9"],
    answer: 3,
    explanation: {
      summary: "중심 (2, 1), r = 3이므로 (x − 2)² + (y − 1)² = 9입니다.",
      options_breakdown: [
        "오답. 중심이 (−2, −1)입니다.",
        "오답. 중심이 (−2, 1)입니다.",
        "오답. 중심이 (2, −1)입니다.",
        "정답. 중심 (2, 1), r² = 9입니다."
      ],
      key_concept: "(x − a)² + (y − b)² = r²."
    }
  },
  {
    id: "math_2022_1_14",
    subject: "math",
    exam: "2022년 제1회",
    number: 14,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (−2, 1)을 원점에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2022_1_14.png",
    needsImage: false,
    options: ["(−2, −1)", "(−1, −2)", "(1, −2)", "(2, −1)"],
    answer: 3,
    explanation: {
      summary: "원점 대칭은 두 좌표의 부호를 모두 바꿉니다. (−2, 1) → (2, −1)입니다.",
      options_breakdown: [
        "오답. x축 대칭입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. (2, −1)입니다."
      ],
      key_concept: "원점 대칭: (x, y) → (−x, −y)."
    }
  },
  {
    id: "math_2022_1_15",
    subject: "math",
    exam: "2022년 제1회",
    number: 15,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "두 집합 A = {1, 3, 4, 5}, B = {2, 4}에 대하여 A − B는?",
    passage: "",
    imageUrl: "images/math/2022_1_15.png",
    needsImage: false,
    options: ["{1}", "{3, 4}", "{1, 3, 5}", "{1, 3, 4, 5}"],
    answer: 2,
    explanation: {
      summary: "A에서 B의 원소 4를 제외하면 {1, 3, 5}입니다.",
      options_breakdown: [
        "오답. 3, 5도 남습니다.",
        "오답. 4는 B에 속해 제외됩니다.",
        "정답. A − B = {1, 3, 5}입니다.",
        "오답. 4를 빼야 합니다."
      ],
      key_concept: "차집합 A − B: A의 원소 중 B에 없는 것."
    }
  },
  {
    id: "math_2022_1_16",
    subject: "math",
    exam: "2022년 제1회",
    number: 16,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 '정삼각형이면 이등변삼각형이다.'의 역은?",
    passage: "",
    imageUrl: "images/math/2022_1_16.png",
    needsImage: false,
    options: ["이등변삼각형이면 정삼각형이다.", "정삼각형이면 이등변삼각형이 아니다.", "정삼각형이 아니면 이등변삼각형이다.", "이등변삼각형이 아니면 정삼각형이 아니다."],
    answer: 0,
    explanation: {
      summary: "역은 가정과 결론을 바꾼 '이등변삼각형이면 정삼각형이다.'입니다(이 역은 거짓).",
      options_breakdown: [
        "정답. 역입니다.",
        "오답. 결론만 부정한 것입니다.",
        "오답. 가정만 부정한 것입니다.",
        "오답. 대우입니다."
      ],
      key_concept: "역: q → p. 원래 명제가 참이어도 역은 거짓일 수 있다."
    }
  },
  {
    id: "math_2022_1_17",
    subject: "math",
    exam: "2022년 제1회",
    number: 17,
    category: "함수",
    concepts: ["역함수"],
    question: "함수 f : X → Y가 그림과 같을 때, f⁻¹(4)의 값은? (단, f⁻¹는 f의 역함수이다.)",
    passage: "",
    imageUrl: "images/math/2022_1_17.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation: {
      summary: "f⁻¹(4)는 f(x) = 4가 되는 x입니다. 그림에서 4로 가는 화살표의 출발점은 1이므로 f⁻¹(4) = 1입니다.",
      options_breakdown: [
        "정답. f(1) = 4이므로 f⁻¹(4) = 1입니다.",
        "오답. 화살표를 잘못 읽은 값입니다.",
        "오답. 화살표를 잘못 읽은 값입니다.",
        "오답. 4는 공역의 원소입니다."
      ],
      key_concept: "f⁻¹(b) = a ⇔ f(a) = b. 화살표를 거꾸로 따라간다."
    }
  },
  {
    id: "math_2022_1_18",
    subject: "math",
    exam: "2022년 제1회",
    number: 18,
    category: "함수",
    concepts: ["무리함수"],
    question: "무리함수 y = √(x − a) + b의 그래프는 무리함수 y = √x의 그래프를 x축의 방향으로 2만큼, y축의 방향으로 3만큼 평행이동한 것이다. 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2022_1_18.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 2,
    explanation: {
      summary: "x축 방향 2, y축 방향 3만큼 이동하면 y = √(x − 2) + 3이므로 a = 2, b = 3, a + b = 5입니다. 시작점 (2, 3)으로도 확인됩니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. b만의 값입니다.",
        "정답. 2 + 3 = 5입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "평행이동량이 그대로 a, b: y = √(x − a) + b, 시작점 (a, b)."
    }
  },
  {
    id: "math_2022_1_19",
    subject: "math",
    exam: "2022년 제1회",
    number: 19,
    category: "경우의 수",
    concepts: ["순열"],
    question: "그림과 같이 3곳을 모두 여행하는 계획을 세우려고 한다. 여행 순서를 정하는 경우의 수는? (단, 한 번 여행한 곳은 다시 여행하지 않는다.)",
    passage: "놀이공원, 한옥 마을, 미술관",
    imageUrl: "images/math/2022_1_19.png",
    needsImage: false,
    options: ["4", "6", "8", "10"],
    answer: 1,
    explanation: {
      summary: "3곳을 모두 일렬로 나열하는 경우의 수는 3! = 3 × 2 × 1 = 6입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 3! = 6입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "n개를 모두 나열: n! = ₙPₙ. 3! = 6."
    }
  },
  {
    id: "math_2022_1_20",
    subject: "math",
    exam: "2022년 제1회",
    number: 20,
    category: "경우의 수",
    concepts: ["조합"],
    question: "그림과 같이 4종류의 꽃이 있다. 이 중에서 서로 다른 3종류의 꽃을 선택하는 경우의 수는?",
    passage: "백합, 장미, 튤립, 프리지어",
    imageUrl: "images/math/2022_1_20.png",
    needsImage: false,
    options: ["4", "5", "6", "7"],
    answer: 0,
    explanation: {
      summary: "순서 없이 3개를 고르므로 ₄C₃ = ₄C₁ = 4입니다. 4개 중 빼는 1개를 고르는 것과 같습니다.",
      options_breakdown: [
        "정답. ₄C₃ = 4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "ₙCᵣ = ₙCₙ₋ᵣ. ₄C₃ = ₄C₁ = 4."
    }
  }
);
