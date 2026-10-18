// 2023년도 제1회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2023_1_01",
    subject: "math",
    exam: "2023년 제1회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² + 2x, B = 2x² − x에 대하여 A + B는?",
    passage: "",
    imageUrl: "images/math/2023_1_01.png",
    needsImage: false,
    options: ["x² − x", "x² + x", "3x² − x", "3x² + x"],
    answer: 3,
    explanation: {
      summary: "A + B = x² + 2x + 2x² − x = 3x² + x입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. x²항은 3x²입니다.",
        "오답. x항은 2x − x = x입니다.",
        "정답. 3x² + x입니다."
      ],
      key_concept: "동류항 정리: x² + 2x² = 3x², 2x − x = x."
    }
  },
  {
    id: "math_2023_1_02",
    subject: "math",
    exam: "2023년 제1회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 x² + ax + 3 = x² + 5x + b가 x에 대한 항등식일 때, 두 상수 a, b에 대하여 a − b의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_02.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 0,
    explanation: {
      summary: "계수를 비교하면 a = 5, b = 3이므로 a − b = 2입니다.",
      options_breakdown: [
        "정답. 5 − 3 = 2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. a + b의 값입니다."
      ],
      key_concept: "항등식의 계수 비교. 묻는 것이 a − b인지 a + b인지 확인."
    }
  },
  {
    id: "math_2023_1_03",
    subject: "math",
    exam: "2023년 제1회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다항식 2x³ + 3x² − 1을 x − 1로 나누었을 때, 나머지는?",
    passage: "",
    imageUrl: "images/math/2023_1_03.png",
    needsImage: false,
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: {
      summary: "나머지정리에 따라 f(1) = 2 + 3 − 1 = 4입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. f(1) = 4입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "x − 1로 나눈 나머지 = 계수의 합."
    }
  },
  {
    id: "math_2023_1_04",
    subject: "math",
    exam: "2023년 제1회",
    number: 4,
    category: "다항식",
    concepts: ["인수분해"],
    question: "다항식 x³ − 6x² + 12x − 8을 인수분해한 식이 (x − a)³일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_04.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: {
      summary: "(x − a)³ = x³ − 3ax² + 3a²x − a³에서 3a = 6, a = 2입니다. 2³ = 8로 상수항도 맞습니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. a = 2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "(a − b)³ = a³ − 3a²b + 3ab² − b³. 상수항 a³ = 8 → a = 2."
    }
  },
  {
    id: "math_2023_1_05",
    subject: "math",
    exam: "2023년 제1회",
    number: 5,
    category: "다항식",
    concepts: ["복소수"],
    question: "복소수 5 + 4i의 켤레복소수가 a + bi일 때, 두 실수 a, b에 대하여 a + b의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2023_1_05.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 0,
    explanation: {
      summary: "켤레복소수는 5 − 4i이므로 a = 5, b = −4이고 a + b = 1입니다.",
      options_breakdown: [
        "정답. 5 + (−4) = 1입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. a만의 값입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "켤레복소수: 허수부의 부호를 바꾼다. b = −4임에 주의."
    }
  },
  {
    id: "math_2023_1_06",
    subject: "math",
    exam: "2023년 제1회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차방정식의 근과 계수"],
    question: "두 수 3, 4를 근으로 하고 x²의 계수가 1인 이차방정식이 x² − 7x + a = 0일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_06.png",
    needsImage: false,
    options: ["3", "6", "9", "12"],
    answer: 3,
    explanation: {
      summary: "두 근이 3, 4인 이차방정식은 (x − 3)(x − 4) = x² − 7x + 12 = 0이므로 a = 12입니다. 근의 곱 3 × 4 = 12로도 구할 수 있습니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. a = 3 × 4 = 12입니다."
      ],
      key_concept: "두 근이 α, β이고 x² 계수가 1인 이차방정식: x² − (α + β)x + αβ = 0."
    }
  },
  {
    id: "math_2023_1_07",
    subject: "math",
    exam: "2023년 제1회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "−3 ≤ x ≤ 0일 때, 이차함수 y = x² + 2x − 1의 최솟값은?",
    passage: "",
    imageUrl: "images/math/2023_1_07.png",
    needsImage: false,
    options: ["−2", "−1", "1", "2"],
    answer: 0,
    explanation: {
      summary: "y = (x + 1)² − 2이므로 꼭짓점 (−1, −2)가 범위 안에 있고 아래로 볼록이므로 최솟값은 −2입니다.",
      options_breakdown: [
        "정답. x = −1에서 −2입니다.",
        "오답. −1은 x = 0에서의 값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 2는 x = −3에서의 최댓값입니다."
      ],
      key_concept: "완전제곱식으로 꼭짓점을 찾는다: x² + 2x − 1 = (x + 1)² − 2."
    }
  },
  {
    id: "math_2023_1_08",
    subject: "math",
    exam: "2023년 제1회",
    number: 8,
    category: "방정식·부등식",
    concepts: ["삼차방정식"],
    question: "사차방정식 x⁴ + 2x² + a = 0의 한 근이 1일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_08.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 0,
    explanation: {
      summary: "x = 1을 대입하면 1 + 2 + a = 0, a = −3입니다.",
      options_breakdown: [
        "정답. a = −3입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 부호가 반대입니다."
      ],
      key_concept: "근을 대입해 등식을 세운다. 1⁴ = 1, 1² = 1."
    }
  },
  {
    id: "math_2023_1_09",
    subject: "math",
    exam: "2023년 제1회",
    number: 9,
    category: "방정식·부등식",
    concepts: ["연립방정식"],
    question: "연립방정식 x + y = 6, xy = a의 해가 x = 4, y = b일 때, 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_09.png",
    needsImage: false,
    options: ["9", "10", "11", "12"],
    answer: 1,
    explanation: {
      summary: "4 + b = 6에서 b = 2, a = 4 × 2 = 8입니다. a + b = 10입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 8 + 2 = 10입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "해를 대입해 상수를 구한다."
    }
  },
  {
    id: "math_2023_1_10",
    subject: "math",
    exam: "2023년 제1회",
    number: 10,
    category: "방정식·부등식",
    concepts: ["이차부등식"],
    question: "이차부등식 (x + 3)(x − 2) ≥ 0의 해는?",
    passage: "",
    imageUrl: "images/math/2023_1_10.png",
    needsImage: false,
    options: ["x ≥ −3", "−3 ≤ x ≤ 2", "x ≥ 2", "x ≤ −3 또는 x ≥ 2"],
    answer: 3,
    explanation: {
      summary: "곱이 0 이상이므로 두 근의 바깥쪽, 즉 x ≤ −3 또는 x ≥ 2입니다.",
      options_breakdown: [
        "오답. 한쪽만 고른 것입니다.",
        "오답. ≤ 0일 때의 해입니다.",
        "오답. 한쪽만 고른 것입니다.",
        "정답. 바깥쪽 범위입니다."
      ],
      key_concept: "(x − α)(x − β) ≥ 0 → x ≤ α 또는 x ≥ β (바깥)."
    }
  },
  {
    id: "math_2023_1_11",
    subject: "math",
    exam: "2023년 제1회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["내분점과 중점"],
    question: "수직선 위의 두 점 A(1), B(5)에 대하여 선분 AB를 3 : 1로 내분하는 점 P의 좌표는?",
    passage: "",
    imageUrl: "images/math/2023_1_11.png",
    needsImage: false,
    options: ["3", "{7/2}", "4", "{9/2}"],
    answer: 2,
    explanation: {
      summary: "내분점 공식 {m·x₂ + n·x₁/m + n} = {3 × 5 + 1 × 1/3 + 1} = {16/4} = 4입니다. A에서 B쪽으로 전체의 {3/4}만큼 간 점입니다.",
      options_breakdown: [
        "오답. 3은 중점입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. P(4)입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "선분 AB를 m : n으로 내분하는 점: {m·B + n·A/m + n}. 비율의 순서에 주의(B에 m을 곱함)."
    }
  },
  {
    id: "math_2023_1_12",
    subject: "math",
    exam: "2023년 제1회",
    number: 12,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "점 (−2, 1)을 지나고 기울기가 3인 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2023_1_12.png",
    needsImage: false,
    options: ["y = −3x + 1", "y = −3x + 7", "y = 3x + 1", "y = 3x + 7"],
    answer: 3,
    explanation: {
      summary: "y − 1 = 3(x + 2)에서 y = 3x + 7입니다. (−2, 1)을 대입하면 −6 + 7 = 1로 확인됩니다.",
      options_breakdown: [
        "오답. 기울기가 3이어야 합니다.",
        "오답. 기울기가 3이어야 합니다.",
        "오답. (−2, 1)을 지나지 않습니다.",
        "정답. y = 3x + 7입니다."
      ],
      key_concept: "한 점 (x₁, y₁)과 기울기 m: y − y₁ = m(x − x₁)."
    }
  },
  {
    id: "math_2023_1_13",
    subject: "math",
    exam: "2023년 제1회",
    number: 13,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심의 좌표가 (2, 1)이고 y축에 접하는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2023_1_13.png",
    needsImage: false,
    options: ["(x − 2)² + (y − 1)² = 1", "(x − 2)² + (y − 1)² = 4", "(x − 1)² + (y − 2)² = 1", "(x − 1)² + (y − 2)² = 4"],
    answer: 1,
    explanation: {
      summary: "y축에 접하므로 반지름은 중심의 x좌표 2입니다. (x − 2)² + (y − 1)² = 4입니다.",
      options_breakdown: [
        "오답. r² = 4입니다.",
        "정답. 중심 (2, 1), r = 2입니다.",
        "오답. 중심의 좌표가 바뀌었습니다.",
        "오답. 중심의 좌표가 바뀌었습니다."
      ],
      key_concept: "y축에 접하는 원: r = |중심의 x좌표|."
    }
  },
  {
    id: "math_2023_1_14",
    subject: "math",
    exam: "2023년 제1회",
    number: 14,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (2, 4)를 y축에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2023_1_14.png",
    needsImage: false,
    options: ["(−2, −4)", "(−2, 4)", "(4, −2)", "(4, 2)"],
    answer: 1,
    explanation: {
      summary: "y축 대칭은 x좌표의 부호만 바꿉니다. (2, 4) → (−2, 4)입니다.",
      options_breakdown: [
        "오답. 원점 대칭입니다.",
        "정답. (−2, 4)입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. y = x 대칭입니다."
      ],
      key_concept: "y축 대칭: (x, y) → (−x, y)."
    }
  },
  {
    id: "math_2023_1_15",
    subject: "math",
    exam: "2023년 제1회",
    number: 15,
    category: "집합·명제",
    concepts: ["집합의 뜻"],
    question: "두 집합 A = {1, a − 1, 5}, B = {1, 3, a + 1}에 대하여 A = B일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_15.png",
    needsImage: false,
    options: ["3", "4", "5", "6"],
    answer: 1,
    explanation: {
      summary: "두 집합이 같으려면 원소가 모두 같아야 합니다. A의 a − 1이 B의 3이 되어야 하므로 a = 4이고, 이때 B의 a + 1 = 5로 A의 5와 일치합니다.",
      options_breakdown: [
        "오답. a = 3이면 A = {1, 2, 5}, B = {1, 3, 4}로 다릅니다.",
        "정답. a = 4일 때 A = B = {1, 3, 5}입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "A = B ⇔ 두 집합의 원소가 완전히 같다. 대응되는 원소를 찾아 미지수를 구하고 검산."
    }
  },
  {
    id: "math_2023_1_16",
    subject: "math",
    exam: "2023년 제1회",
    number: 16,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 '평행사변형이면 사다리꼴이다.'의 대우는?",
    passage: "",
    imageUrl: "images/math/2023_1_16.png",
    needsImage: false,
    options: ["사다리꼴이면 평행사변형이다.", "평행사변형이면 사다리꼴이 아니다.", "사다리꼴이 아니면 평행사변형이 아니다.", "평행사변형이 아니면 사다리꼴이 아니다."],
    answer: 2,
    explanation: {
      summary: "대우는 '사다리꼴이 아니면 평행사변형이 아니다.'입니다.",
      options_breakdown: [
        "오답. 역입니다.",
        "오답. 결론만 부정한 것입니다.",
        "정답. 대우입니다.",
        "오답. 이입니다."
      ],
      key_concept: "대우: ~q → ~p. 명제와 대우는 참·거짓이 같다."
    }
  },
  {
    id: "math_2023_1_17",
    subject: "math",
    exam: "2023년 제1회",
    number: 17,
    category: "함수",
    concepts: ["합성함수"],
    question: "두 함수 f : X → Y, g : Y → Z가 그림과 같을 때, (g ∘ f)(3)의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_17.png",
    needsImage: false,
    options: ["5", "6", "7", "8"],
    answer: 0,
    explanation: {
      summary: "(g ∘ f)(3) = g(f(3))입니다. 그림에서 3 → f → Y의 원소 → g → 5로 이어지므로 값은 5입니다.",
      options_breakdown: [
        "정답. 3에서 화살표를 두 번 따라가면 5입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다."
      ],
      key_concept: "(g ∘ f)(x) = g(f(x))."
    }
  },
  {
    id: "math_2023_1_18",
    subject: "math",
    exam: "2023년 제1회",
    number: 18,
    category: "함수",
    concepts: ["유리함수"],
    question: "유리함수 y = {1/x − 2} − 1의 그래프는 유리함수 y = {1/x}의 그래프를 x축의 방향으로 a만큼, y축의 방향으로 b만큼 평행이동한 것이다. 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2023_1_18.png",
    needsImage: false,
    options: ["−1", "1", "3", "5"],
    answer: 1,
    explanation: {
      summary: "y = {1/x − a} + b 꼴과 비교하면 a = 2, b = −1이므로 a + b = 1입니다.",
      options_breakdown: [
        "오답. b만의 값입니다.",
        "정답. 2 + (−1) = 1입니다.",
        "오답. 부호가 틀렸습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = {k/x − a} + b: x축 방향 a, y축 방향 b 평행이동."
    }
  },
  {
    id: "math_2023_1_19",
    subject: "math",
    exam: "2023년 제1회",
    number: 19,
    category: "경우의 수",
    concepts: ["순열"],
    question: "그림과 같이 3명의 수학자 사진이 있다. 이 중에서 서로 다른 2명의 사진을 택하여 수학 신문의 1면과 2면에 각각 싣는 경우의 수는?",
    passage: "데카르트, 오일러, 가우스",
    imageUrl: "images/math/2023_1_19.png",
    needsImage: false,
    options: ["4", "5", "6", "7"],
    answer: 2,
    explanation: {
      summary: "1면과 2면이 구별되므로 순서가 있는 순열입니다. ₃P₂ = 3 × 2 = 6입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. ₃P₂ = 6입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "자리(1면, 2면)가 구별되면 순열."
    }
  },
  {
    id: "math_2023_1_20",
    subject: "math",
    exam: "2023년 제1회",
    number: 20,
    category: "경우의 수",
    concepts: ["조합"],
    question: "그림과 같이 수학 진로 선택 과목이 있다. 이 중에서 서로 다른 2과목을 선택하는 경우의 수는?",
    passage: "기하, 실용 수학, 경제 수학, 수학과제 탐구",
    imageUrl: "images/math/2023_1_20.png",
    needsImage: false,
    options: ["3", "4", "5", "6"],
    answer: 3,
    explanation: {
      summary: "4과목 중 순서 없이 2과목을 고르므로 ₄C₂ = 6입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. ₄C₂ = 6입니다."
      ],
      key_concept: "₄C₂ = {4 × 3/2} = 6."
    }
  }
);
