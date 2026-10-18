// 2020년도 제1회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2020_1_01",
    subject: "math",
    exam: "2020년 제1회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² − x + 2, B = 2x²에 대하여 2A − B는?",
    passage: "",
    imageUrl: "images/math/2020_1_01.png",
    needsImage: false,
    options: ["−2x − 4", "−2x − 2", "−2x + 2", "−2x + 4"],
    answer: 3,
    explanation: {
      summary: "2A = 2x² − 2x + 4이므로 2A − B = 2x² − 2x + 4 − 2x² = −2x + 4입니다.",
      options_breakdown: [
        "오답. 상수항은 +4입니다.",
        "오답. 상수항은 +4입니다.",
        "오답. 상수항은 2 × 2 = 4입니다.",
        "정답. x²항이 상쇄되어 −2x + 4입니다."
      ],
      key_concept: "실수배 후 뺄셈: 2A의 모든 항에 2를 곱한 뒤 B를 뺀다."
    }
  },
  {
    id: "math_2020_1_02",
    subject: "math",
    exam: "2020년 제1회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 x² + 2x − 1 = (x − 1)² + 4x + a가 x에 대한 항등식일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2020_1_02.png",
    needsImage: false,
    options: ["−2", "−1", "0", "1"],
    answer: 0,
    explanation: {
      summary: "우변 = x² − 2x + 1 + 4x + a = x² + 2x + 1 + a입니다. 좌변의 상수항 −1과 비교하면 1 + a = −1, a = −2입니다.",
      options_breakdown: [
        "정답. a = −2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "항등식: 전개해 상수항을 비교하거나 x = 1을 대입(1 + 2 − 1 = 0 + 4 + a → a = −2)."
    }
  },
  {
    id: "math_2020_1_03",
    subject: "math",
    exam: "2020년 제1회",
    number: 3,
    category: "다항식",
    concepts: ["다항식의 나눗셈"],
    question: "다음은 다항식 2x² + x − 3을 일차식 x + 1로 나누어 몫과 나머지를 구하는 과정이다. (가)에 알맞은 식은?",
    passage: "",
    imageUrl: "images/math/2020_1_03.png",
    needsImage: false,
    options: ["−x − 3", "−x − 2", "x − 3", "x − 2"],
    answer: 0,
    explanation: {
      summary: "2x² + x − 3에서 2x(x + 1) = 2x² + 2x를 빼면 (x − 2x) + (−3) = −x − 3이 (가)입니다. 이어서 −1 × (x + 1) = −x − 1을 빼면 나머지 −2가 됩니다.",
      options_breakdown: [
        "정답. (2x² + x − 3) − (2x² + 2x) = −x − 3입니다.",
        "오답. 상수항 −3은 그대로 내려옵니다.",
        "오답. x − 2x = −x입니다.",
        "오답. 부호가 틀렸습니다."
      ],
      key_concept: "다항식의 나눗셈(세로셈): 최고차항을 나눠 몫의 항을 정하고, 곱해서 빼기를 반복. 나머지의 차수 < 나누는 식의 차수."
    }
  },
  {
    id: "math_2020_1_04",
    subject: "math",
    exam: "2020년 제1회",
    number: 4,
    category: "다항식",
    concepts: ["복소수"],
    question: "(5 − 2i) − (1 − 4i) = 4 + ai일 때, 실수 a의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2020_1_04.png",
    needsImage: false,
    options: ["−6", "−2", "2", "6"],
    answer: 2,
    explanation: {
      summary: "(5 − 1) + (−2 + 4)i = 4 + 2i이므로 a = 2입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. −4i의 부호를 바꾸지 않은 값입니다.",
        "정답. 허수부 −2 − (−4) = 2입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "복소수의 뺄셈: 허수부 −2i − (−4i) = +2i."
    }
  },
  {
    id: "math_2020_1_05",
    subject: "math",
    exam: "2020년 제1회",
    number: 5,
    category: "방정식·부등식",
    concepts: ["이차방정식의 근과 계수"],
    question: "이차방정식 x² − 5x + 4 = 0의 두 근을 α, β라고 할 때, α + β의 값은?",
    passage: "",
    imageUrl: "images/math/2020_1_05.png",
    needsImage: false,
    options: ["−5", "−1", "1", "5"],
    answer: 3,
    explanation: {
      summary: "근과 계수의 관계에서 두 근의 합은 −(x의 계수)/(x²의 계수) = 5입니다. 실제로 근은 1과 4이고 합은 5입니다.",
      options_breakdown: [
        "오답. 부호가 반대입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. α + β = 5입니다."
      ],
      key_concept: "ax² + bx + c = 0의 두 근 α, β: α + β = −b/a, αβ = c/a."
    }
  },
  {
    id: "math_2020_1_06",
    subject: "math",
    exam: "2020년 제1회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["절댓값 부등식"],
    question: "부등식 |x − 3| ≤ 1을 만족하는 정수 x의 개수는?",
    passage: "",
    imageUrl: "images/math/2020_1_06.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: {
      summary: "|x − 3| ≤ 1 ⇔ 2 ≤ x ≤ 4이므로 정수 x는 2, 3, 4의 3개입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 경계값 2, 4도 포함됩니다.",
        "정답. 2, 3, 4의 3개입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "|x − a| ≤ k ⇔ a − k ≤ x ≤ a + k. 등호가 있으면 경계값도 포함해 센다."
    }
  },
  {
    id: "math_2020_1_07",
    subject: "math",
    exam: "2020년 제1회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "1 ≤ x ≤ 4일 때, 이차함수 y = x² − 4x + 3의 최솟값은?",
    passage: "",
    imageUrl: "images/math/2020_1_07.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 1,
    explanation: {
      summary: "y = (x − 2)² − 1이므로 꼭짓점 (2, −1)이 범위 안에 있고 아래로 볼록이므로 최솟값은 −1입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. x = 2에서 최솟값 −1입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 3은 x = 4에서의 최댓값입니다."
      ],
      key_concept: "완전제곱식으로 고쳐 꼭짓점을 찾는다: x² − 4x + 3 = (x − 2)² − 1."
    }
  },
  {
    id: "math_2020_1_08",
    subject: "math",
    exam: "2020년 제1회",
    number: 8,
    category: "도형의 방정식",
    concepts: ["두 점 사이의 거리"],
    question: "좌표평면 위의 두 점 A(1, −2), B(4, 2) 사이의 거리는?",
    passage: "",
    imageUrl: "images/math/2020_1_08.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 2,
    explanation: {
      summary: "AB = √{(4 − 1)² + (2 − (−2))²} = √(9 + 16) = 5입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. x좌표 차이만 계산한 값입니다.",
        "정답. √(3² + 4²) = 5입니다.",
        "오답. 두 좌표 차이의 합입니다."
      ],
      key_concept: "3, 4, 5 피타고라스 수. 거리 공식 √{(Δx)² + (Δy)²}."
    }
  },
  {
    id: "math_2020_1_09",
    subject: "math",
    exam: "2020년 제1회",
    number: 9,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = 3x − 2에 평행하고, 점 (0, −1)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2020_1_09.png",
    needsImage: false,
    options: ["y = −(1/3)x − 1", "y = −(1/3)x + 1", "y = 3x − 1", "y = 3x + 1"],
    answer: 2,
    explanation: {
      summary: "평행하므로 기울기 3, (0, −1)을 지나므로 y절편 −1입니다. y = 3x − 1입니다.",
      options_breakdown: [
        "오답. 수직인 직선의 기울기입니다.",
        "오답. 기울기와 y절편 모두 틀렸습니다.",
        "정답. 기울기 3, y절편 −1입니다.",
        "오답. y절편이 −1이어야 합니다."
      ],
      key_concept: "평행 → 같은 기울기. y = mx + b에서 b는 (0, b)."
    }
  },
  {
    id: "math_2020_1_10",
    subject: "math",
    exam: "2020년 제1회",
    number: 10,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "두 점 (−1, 0), (3, 0)을 지름의 양 끝 점으로 하는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2020_1_10.png",
    needsImage: false,
    options: ["(x − 1)² + y² = 2", "(x − 1)² + y² = 4", "x² + (y − 1)² = 2", "x² + (y − 1)² = 4"],
    answer: 1,
    explanation: {
      summary: "지름의 중점이 중심이므로 중심은 (1, 0), 반지름은 지름 4의 절반인 2입니다. (x − 1)² + y² = 4입니다.",
      options_breakdown: [
        "오답. r² = 4입니다.",
        "정답. 중심 (1, 0), r = 2입니다.",
        "오답. 중심이 (0, 1)이 아닙니다.",
        "오답. 중심이 (0, 1)이 아닙니다."
      ],
      key_concept: "지름의 양 끝점이 주어지면 중심 = 중점, 반지름 = 두 점 사이 거리의 절반."
    }
  },
  {
    id: "math_2020_1_11",
    subject: "math",
    exam: "2020년 제1회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["부등식의 영역"],
    question: "연립부등식 y ≤ x, x² + y² ≤ 1의 영역을 좌표평면 위에 알맞게 색칠한 것은? (단, 경계선은 포함한다.)",
    passage: "",
    imageUrl: "images/math/2020_1_11.png",
    needsImage: false,
    options: ["①", "②", "③", "④"],
    answer: 0,
    explanation: {
      summary: "y ≤ x는 직선 y = x의 아래쪽(오른쪽), x² + y² ≤ 1은 원의 내부입니다. 공통 부분은 원 안에서 직선 y = x 아래쪽 반원(①)입니다.",
      options_breakdown: [
        "정답. 원 내부 중 y ≤ x인 반원입니다.",
        "오답. 원 내부의 y ≥ x 부분입니다.",
        "오답. 원 바깥 부분입니다.",
        "오답. 원 바깥 부분입니다."
      ],
      key_concept: "y ≤ x는 직선 y = x의 아래쪽. 점 (1, 0)을 대입해 확인(0 ≤ 1 성립)."
    }
  },
  {
    id: "math_2020_1_12",
    subject: "math",
    exam: "2020년 제1회",
    number: 12,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "전체집합 U = {1, 2, 3, 4, 5, 6}의 두 부분집합 A = {x | x는 6의 약수}, B = {2, 3}에 대하여 A − B는?",
    passage: "",
    imageUrl: "images/math/2020_1_12.png",
    needsImage: false,
    options: ["{1, 2}", "{2, 3}", "{3, 6}", "{1, 6}"],
    answer: 3,
    explanation: {
      summary: "A = {1, 2, 3, 6}이고 A − B는 A에서 B의 원소를 뺀 것이므로 {1, 6}입니다.",
      options_breakdown: [
        "오답. 2는 B에 속해 제외됩니다.",
        "오답. {2, 3}은 A ∩ B입니다.",
        "오답. 3은 B에 속해 제외됩니다.",
        "정답. A − B = {1, 6}입니다."
      ],
      key_concept: "차집합 A − B = A ∩ Bᶜ: A의 원소 중 B에 속하지 않는 것. 조건제시법 집합은 원소를 먼저 나열."
    }
  },
  {
    id: "math_2020_1_13",
    subject: "math",
    exam: "2020년 제1회",
    number: 13,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 'x = 0이면 x² = 0이다.'의 역은?",
    passage: "",
    imageUrl: "images/math/2020_1_13.png",
    needsImage: false,
    options: ["x² = 0이면 x = 0이다.", "x = 0이면 x² ≠ 0이다.", "x² ≠ 0이면 x = 0이다.", "x ≠ 0이면 x² ≠ 0이다."],
    answer: 0,
    explanation: {
      summary: "역은 가정과 결론을 바꾼 'x² = 0이면 x = 0이다.'입니다.",
      options_breakdown: [
        "정답. 역입니다.",
        "오답. 결론만 부정한 것입니다.",
        "오답. 역·이·대우 어느 것도 아닙니다.",
        "오답. 이입니다."
      ],
      key_concept: "역: q → p. 가정과 결론의 자리만 바꾼다."
    }
  },
  {
    id: "math_2020_1_14",
    subject: "math",
    exam: "2020년 제1회",
    number: 14,
    category: "함수",
    concepts: ["무리함수"],
    question: "무리함수 y = √(x − 1) + 2의 그래프는 함수 y = √x의 그래프를 x축 방향으로 a만큼, y축 방향으로 b만큼 평행이동한 것이다. a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2020_1_14.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 3,
    explanation: {
      summary: "y = √(x − a) + b 꼴과 비교하면 a = 1, b = 2이므로 a + b = 3입니다. 그래프의 시작점이 (1, 2)인 것과 같습니다.",
      options_breakdown: [
        "오답. 부호가 반대입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 1 + 2 = 3입니다."
      ],
      key_concept: "평행이동: x → x − a, y → y − b. y = √(x − 1) + 2는 오른쪽 1, 위로 2."
    }
  },
  {
    id: "math_2020_1_15",
    subject: "math",
    exam: "2020년 제1회",
    number: 15,
    category: "함수",
    concepts: ["합성함수"],
    question: "집합 X = {1, 2, 3, 4}, Y = {a, b, c, d}, Z = {5, 6, 7, 8}에 대하여 함수 f : X → Y, g : Y → Z가 그림과 같을 때, (g ∘ f)(2)의 값은?",
    passage: "",
    imageUrl: "images/math/2020_1_15.png",
    needsImage: false,
    options: ["5", "6", "7", "8"],
    answer: 0,
    explanation: {
      summary: "(g ∘ f)(2) = g(f(2))입니다. 그림에서 2 → f → Y의 원소 → g → 5로 이어지므로 값은 5입니다.",
      options_breakdown: [
        "정답. 2에서 f, g의 화살표를 차례로 따라가면 5입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다."
      ],
      key_concept: "합성함수: (g ∘ f)(x) = g(f(x)). 그림에서는 화살표를 두 번 이어서 따라간다."
    }
  }
);
