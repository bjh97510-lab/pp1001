// 2019년도 제1회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2019_1_01",
    subject: "math",
    exam: "2019년 제1회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² + 2, B = x − 1에 대하여 A + 2B는?",
    passage: "",
    imageUrl: "images/math/2019_1_01.png",
    needsImage: false,
    options: ["x² − x + 1", "x² + x + 1", "x² + 2x", "x² + 2x + 4"],
    answer: 2,
    explanation: {
      summary: "2B = 2x − 2이므로 A + 2B = x² + 2 + 2x − 2 = x² + 2x입니다.",
      options_breakdown: [
        "오답. B에 2를 곱하지 않았습니다.",
        "오답. B에 2를 곱하지 않았습니다.",
        "정답. 상수항 2 − 2 = 0입니다.",
        "오답. 상수항이 상쇄됩니다."
      ],
      key_concept: "다항식의 실수배: 각 항에 수를 곱한다. 2B = 2(x − 1) = 2x − 2."
    }
  },
  {
    id: "math_2019_1_02",
    subject: "math",
    exam: "2019년 제1회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 (x − 1)² + 2(x − 1) + a = x²이 x에 대한 항등식일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2019_1_02.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation: {
      summary: "좌변 = x² − 2x + 1 + 2x − 2 + a = x² − 1 + a입니다. 우변 x²과 같으려면 −1 + a = 0, a = 1입니다. x = 1을 대입하면 0 + 0 + a = 1로 바로 a = 1입니다.",
      options_breakdown: [
        "정답. a = 1입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "항등식: (x − 1)이 반복되면 x = 1을 대입하는 것이 가장 빠르다."
    }
  },
  {
    id: "math_2019_1_03",
    subject: "math",
    exam: "2019년 제1회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다음은 조립제법을 이용하여 다항식 x³ + x² − x + 1을 일차식 x − 2로 나누었을 때, 몫과 나머지를 구하는 과정이다. 나머지 R의 값은?",
    passage: "",
    imageUrl: "images/math/2019_1_03.png",
    needsImage: false,
    options: ["2", "5", "8", "11"],
    answer: 3,
    explanation: {
      summary: "조립제법에서 계수 1, 1, −1, 1을 2로 내려 곱하며 더하면 1, 3, 5, 11이 되어 몫은 x² + 3x + 5, 나머지 R = 11입니다. 나머지정리로 f(2) = 8 + 4 − 2 + 1 = 11로도 확인됩니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 5는 몫의 상수항입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. R = 1 + 10 = 11입니다."
      ],
      key_concept: "조립제법: 나누는 식 x − α의 α를 왼쪽에 쓰고, 계수를 내려 α를 곱해 더한다. 마지막 수가 나머지, 앞의 수들이 몫의 계수."
    }
  },
  {
    id: "math_2019_1_04",
    subject: "math",
    exam: "2019년 제1회",
    number: 4,
    category: "다항식",
    concepts: ["복소수"],
    question: "1 + 2i − (3 − i) = −2 + ai일 때, 실수 a의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2019_1_04.png",
    needsImage: false,
    options: ["−3", "−2", "2", "3"],
    answer: 3,
    explanation: {
      summary: "1 + 2i − 3 + i = −2 + 3i이므로 a = 3입니다.",
      options_breakdown: [
        "오답. 괄호를 풀 때 −i의 부호가 바뀌어 +i가 됩니다.",
        "오답. −2는 실수부입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 허수부 2 + 1 = 3입니다."
      ],
      key_concept: "복소수의 뺄셈: 괄호 안 모든 항의 부호를 바꾼 뒤 실수부·허수부끼리 계산."
    }
  },
  {
    id: "math_2019_1_05",
    subject: "math",
    exam: "2019년 제1회",
    number: 5,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "−2 ≤ x ≤ 1일 때, 이차함수 y = (x + 1)² + 3의 최솟값은?",
    passage: "",
    imageUrl: "images/math/2019_1_05.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 1,
    explanation: {
      summary: "꼭짓점 (−1, 3)이 범위 −2 ≤ x ≤ 1 안에 있고 아래로 볼록하므로 최솟값은 꼭짓점의 y좌표 3입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. x = −1에서 최솟값 3입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 7은 x = 1에서의 최댓값입니다."
      ],
      key_concept: "아래로 볼록인 이차함수 y = a(x − p)² + q (a > 0): 꼭짓점이 범위 안이면 최솟값 q."
    }
  },
  {
    id: "math_2019_1_06",
    subject: "math",
    exam: "2019년 제1회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차부등식"],
    question: "이차부등식 (x − 1)(x − 2) ≤ 0의 해는?",
    passage: "",
    imageUrl: "images/math/2019_1_06.png",
    needsImage: false,
    options: ["−2 ≤ x ≤ −1", "x ≤ −2 또는 x ≥ −1", "1 ≤ x ≤ 2", "x ≤ 1 또는 x ≥ 2"],
    answer: 2,
    explanation: {
      summary: "두 근 1, 2 사이에서 곱이 0 이하이므로 1 ≤ x ≤ 2입니다.",
      options_breakdown: [
        "오답. 근의 부호가 틀렸습니다.",
        "오답. 근의 부호가 틀렸습니다.",
        "정답. 1 ≤ x ≤ 2입니다.",
        "오답. ≥ 0일 때의 해입니다."
      ],
      key_concept: "(x − α)(x − β) ≤ 0 → α ≤ x ≤ β. 그래프가 x축 아래에 있는 구간."
    }
  },
  {
    id: "math_2019_1_07",
    subject: "math",
    exam: "2019년 제1회",
    number: 7,
    category: "도형의 방정식",
    concepts: ["두 점 사이의 거리"],
    question: "좌표평면 위의 두 점 A(−4, 2), B(2, 10) 사이의 거리는?",
    passage: "",
    imageUrl: "images/math/2019_1_07.png",
    needsImage: false,
    options: ["8", "10", "12", "14"],
    answer: 1,
    explanation: {
      summary: "AB = √{(2 − (−4))² + (10 − 2)²} = √(36 + 64) = √100 = 10입니다.",
      options_breakdown: [
        "오답. y좌표 차이만 계산한 값입니다.",
        "정답. √(6² + 8²) = 10입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 두 좌표 차이의 합입니다."
      ],
      key_concept: "거리 공식: √{(x₂ − x₁)² + (y₂ − y₁)²}. 6, 8, 10은 자주 나오는 피타고라스 수."
    }
  },
  {
    id: "math_2019_1_08",
    subject: "math",
    exam: "2019년 제1회",
    number: 8,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = 2x + 1에 평행하고, 점 (0, 3)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2019_1_08.png",
    needsImage: false,
    options: ["y = 2x", "y = 2x + 3", "y = 3x", "y = 3x + 3"],
    answer: 1,
    explanation: {
      summary: "평행한 직선은 기울기가 같으므로 기울기 2이고, (0, 3)을 지나므로 y절편이 3입니다. y = 2x + 3입니다.",
      options_breakdown: [
        "오답. (0, 3)을 지나지 않습니다.",
        "정답. 기울기 2, y절편 3입니다.",
        "오답. 기울기가 다릅니다.",
        "오답. 기울기가 다릅니다."
      ],
      key_concept: "평행: 기울기 같음 / 수직: 기울기의 곱이 −1. 점 (0, b)를 지나면 y절편 b."
    }
  },
  {
    id: "math_2019_1_09",
    subject: "math",
    exam: "2019년 제1회",
    number: 9,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심의 좌표가 (2, 1)이고, x축에 접하는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2019_1_09.png",
    needsImage: false,
    options: ["(x − 1)² + (y − 2)² = 1", "(x − 1)² + (y − 2)² = 4", "(x − 2)² + (y − 1)² = 1", "(x − 2)² + (y − 1)² = 4"],
    answer: 2,
    explanation: {
      summary: "x축에 접하므로 반지름은 중심의 y좌표 1입니다. (x − 2)² + (y − 1)² = 1입니다.",
      options_breakdown: [
        "오답. 중심의 좌표가 바뀌었습니다.",
        "오답. 중심과 반지름 모두 틀렸습니다.",
        "정답. 중심 (2, 1), r = 1입니다.",
        "오답. r² = 1이어야 합니다."
      ],
      key_concept: "x축에 접하는 원: r = |중심의 y좌표|. (x − a)² + (y − b)² = b²."
    }
  },
  {
    id: "math_2019_1_10",
    subject: "math",
    exam: "2019년 제1회",
    number: 10,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (3, 2)를 y축에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2019_1_10.png",
    needsImage: false,
    options: ["(−3, −2)", "(−3, 2)", "(2, 3)", "(3, −2)"],
    answer: 1,
    explanation: {
      summary: "y축 대칭이동은 x좌표의 부호만 바꿉니다. (3, 2) → (−3, 2)입니다.",
      options_breakdown: [
        "오답. 원점 대칭입니다.",
        "정답. x좌표 부호만 바뀝니다.",
        "오답. y = x 대칭입니다.",
        "오답. x축 대칭입니다."
      ],
      key_concept: "y축 대칭: (x, y) → (−x, y)."
    }
  },
  {
    id: "math_2019_1_11",
    subject: "math",
    exam: "2019년 제1회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["부등식의 영역"],
    question: "연립부등식 x² + y² ≤ 4, x ≥ 1의 영역을 좌표평면 위에 알맞게 색칠한 것은? (단, 경계선 포함)",
    passage: "",
    imageUrl: "images/math/2019_1_11.png",
    needsImage: false,
    options: ["①", "②", "③", "④"],
    answer: 0,
    explanation: {
      summary: "x² + y² ≤ 4는 반지름 2인 원의 내부, x ≥ 1은 직선 x = 1의 오른쪽입니다. 공통 부분은 원 안에서 x = 1 오른쪽의 활꼴 모양(①)입니다.",
      options_breakdown: [
        "정답. 원 내부 ∩ x ≥ 1입니다.",
        "오답. 원 내부의 x ≤ 1 부분입니다.",
        "오답. 원 바깥의 x ≥ 1 부분입니다.",
        "오답. 원 바깥의 x ≤ 1 부분입니다."
      ],
      key_concept: "x ≥ a는 직선 x = a의 오른쪽, 원 내부는 x² + y² ≤ r². 두 조건의 공통 영역을 찾는다."
    }
  },
  {
    id: "math_2019_1_12",
    subject: "math",
    exam: "2019년 제1회",
    number: 12,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "두 집합 A = {1, 2, 3, 6}, B = {2, 5, 7}에 대하여 n(A ∪ B)의 값은?",
    passage: "",
    imageUrl: "images/math/2019_1_12.png",
    needsImage: false,
    options: ["1", "2", "4", "6"],
    answer: 3,
    explanation: {
      summary: "A ∪ B = {1, 2, 3, 5, 6, 7}이므로 원소의 개수는 6입니다. n(A) + n(B) − n(A ∩ B) = 4 + 3 − 1 = 6으로도 구할 수 있습니다.",
      options_breakdown: [
        "오답. 1은 n(A ∩ B)입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 4는 n(A)입니다.",
        "정답. 합집합의 원소는 6개입니다."
      ],
      key_concept: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B). 공통 원소를 두 번 세지 않도록 뺀다."
    }
  },
  {
    id: "math_2019_1_13",
    subject: "math",
    exam: "2019년 제1회",
    number: 13,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 'a가 짝수이면 a는 4의 배수이다.'의 역은?",
    passage: "",
    imageUrl: "images/math/2019_1_13.png",
    needsImage: false,
    options: ["a가 4의 배수이면 a는 짝수이다.", "a가 4의 배수가 아니면 a는 짝수가 아니다.", "a가 짝수이면 a는 4의 배수가 아니다.", "a가 짝수가 아니면 a는 4의 배수가 아니다."],
    answer: 0,
    explanation: {
      summary: "역은 가정과 결론을 바꾼 명제입니다. 'a가 4의 배수이면 a는 짝수이다.'가 역입니다.",
      options_breakdown: [
        "정답. 가정과 결론을 바꾼 역입니다.",
        "오답. 대우입니다.",
        "오답. 결론을 부정한 것으로 역·이·대우 어느 것도 아닙니다.",
        "오답. 이(가정·결론을 모두 부정)입니다."
      ],
      key_concept: "p→q의 역은 q→p, 이는 ~p→~q, 대우는 ~q→~p."
    }
  },
  {
    id: "math_2019_1_14",
    subject: "math",
    exam: "2019년 제1회",
    number: 14,
    category: "함수",
    concepts: ["유리함수"],
    question: "유리함수 y = 1/(x − 2) + 3의 그래프로 알맞은 것은?",
    passage: "",
    imageUrl: "images/math/2019_1_14.png",
    needsImage: false,
    options: ["①", "②", "③", "④"],
    answer: 0,
    explanation: {
      summary: "y = 1/(x − 2) + 3은 y = 1/x를 x축 방향 2, y축 방향 3만큼 평행이동한 그래프로 점근선이 x = 2, y = 3입니다. 점근선이 x = 2, y = 3인 그래프는 ①입니다.",
      options_breakdown: [
        "정답. 점근선 x = 2, y = 3입니다.",
        "오답. 점근선이 x = 2, y = −3입니다.",
        "오답. 점근선이 x = −2, y = 3입니다.",
        "오답. 점근선이 x = −2, y = −3입니다."
      ],
      key_concept: "y = k/(x − p) + q의 점근선은 x = p, y = q. 분모가 0이 되는 x와 상수항 q를 확인."
    }
  },
  {
    id: "math_2019_1_15",
    subject: "math",
    exam: "2019년 제1회",
    number: 15,
    category: "함수",
    concepts: ["합성함수"],
    question: "함수 f : X → Y와 함수 g : Y → Z가 그림과 같을 때, (g ∘ f)(5)의 값은?",
    passage: "",
    imageUrl: "images/math/2019_1_15.png",
    needsImage: false,
    options: ["5", "15", "20", "25"],
    answer: 3,
    explanation: {
      summary: "(g ∘ f)(5) = g(f(5))입니다. 그림에서 f(5) = 6이고 g(6) = 25이므로 (g ∘ f)(5) = 25입니다.",
      options_breakdown: [
        "오답. 화살표를 끝까지 따라가야 합니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 5 → 6 → 25입니다."
      ],
      key_concept: "합성함수 (g ∘ f)(x) = g(f(x)): 먼저 f를 적용하고 그 결과에 g를 적용한다. 순서에 주의."
    }
  },
  {
    id: "math_2019_1_16",
    subject: "math",
    exam: "2019년 제1회",
    number: 16,
    category: "지수·로그·수열",
    concepts: ["등차수열"],
    question: "다음 수열이 등차수열일 때, 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "1, 3, 5, a, 9, b, 13, …",
    imageUrl: "images/math/2019_1_16.png",
    needsImage: false,
    options: ["6", "12", "18", "24"],
    answer: 2,
    explanation: {
      summary: "공차가 2인 등차수열이므로 a = 7, b = 11입니다. a + b = 18입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 7 + 11 = 18입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "등차수열: 이웃한 항의 차(공차)가 일정. 빈칸은 앞 항 + 공차."
    }
  },
  {
    id: "math_2019_1_17",
    subject: "math",
    exam: "2019년 제1회",
    number: 17,
    category: "지수·로그·수열",
    concepts: ["수열의 합"],
    question: "두 수열 {aₙ}, {bₙ}에 대하여 Σ(k=1~5) aₖ = 2, Σ(k=1~5) (aₖ + bₖ) = 10이다. Σ(k=1~5) bₖ의 값은?",
    passage: "",
    imageUrl: "images/math/2019_1_17.png",
    needsImage: false,
    options: ["4", "6", "8", "10"],
    answer: 2,
    explanation: {
      summary: "Σ(aₖ + bₖ) = Σaₖ + Σbₖ이므로 10 = 2 + Σbₖ, Σbₖ = 8입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 10 − 2 = 8입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "Σ의 선형성: Σ(aₖ + bₖ) = Σaₖ + Σbₖ."
    }
  },
  {
    id: "math_2019_1_18",
    subject: "math",
    exam: "2019년 제1회",
    number: 18,
    category: "지수·로그·수열",
    concepts: ["수열의 귀납적 정의"],
    question: "다음과 같이 정의된 수열 {aₙ}에 대하여 a₄의 값은?",
    passage: "a₁ = 1, aₙ₊₁ = 3aₙ + 1 (n = 1, 2, 3, …)",
    imageUrl: "images/math/2019_1_18.png",
    needsImage: false,
    options: ["1", "4", "13", "40"],
    answer: 3,
    explanation: {
      summary: "a₂ = 3 × 1 + 1 = 4, a₃ = 3 × 4 + 1 = 13, a₄ = 3 × 13 + 1 = 40입니다.",
      options_breakdown: [
        "오답. a₁의 값입니다.",
        "오답. a₂의 값입니다.",
        "오답. a₃의 값입니다.",
        "정답. a₄ = 40입니다."
      ],
      key_concept: "귀납적 정의: 몇 번째 항을 묻는지 확인하고 차례로 계산한다."
    }
  },
  {
    id: "math_2019_1_19",
    subject: "math",
    exam: "2019년 제1회",
    number: 19,
    category: "지수·로그·수열",
    concepts: ["지수법칙"],
    question: "2⁻³ × 2⁴을 간단히 한 것은?",
    passage: "",
    imageUrl: "images/math/2019_1_19.png",
    needsImage: false,
    options: ["1", "2", "4", "8"],
    answer: 1,
    explanation: {
      summary: "지수를 더하면 2⁻³⁺⁴ = 2¹ = 2입니다.",
      options_breakdown: [
        "오답. 2⁰의 값입니다.",
        "정답. 2¹ = 2입니다.",
        "오답. 2²의 값입니다.",
        "오답. 2³의 값입니다."
      ],
      key_concept: "aᵐ × aⁿ = aᵐ⁺ⁿ. 음의 지수도 그대로 더한다."
    }
  },
  {
    id: "math_2019_1_20",
    subject: "math",
    exam: "2019년 제1회",
    number: 20,
    category: "지수·로그·수열",
    concepts: ["로그의 뜻"],
    question: "다음은 지수로 표현된 등식을 로그를 이용한 등식으로 나타낸 것이다. 상수 a의 값은?",
    passage: "2⁴ = 16 ⇒ a = log₂16",
    imageUrl: "images/math/2019_1_20.png",
    needsImage: false,
    options: ["2", "4", "8", "16"],
    answer: 1,
    explanation: {
      summary: "aˣ = N ⇔ x = logₐN이므로 2⁴ = 16은 4 = log₂16입니다. 따라서 a = 4입니다.",
      options_breakdown: [
        "오답. 2는 밑입니다.",
        "정답. log₂16 = 4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 16은 진수입니다."
      ],
      key_concept: "로그의 정의: aˣ = N ⇔ logₐN = x (a > 0, a ≠ 1, N > 0). 지수가 로그값이 된다."
    }
  }
);
