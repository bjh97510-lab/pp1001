// 2021년도 제1회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2021_1_01",
    subject: "math",
    exam: "2021년 제1회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² + 1, B = x + 2에 대하여 A + B는?",
    passage: "",
    imageUrl: "images/math/2021_1_01.png",
    needsImage: false,
    options: ["x² + 2", "x² + x", "x² − x − 1", "x² + x + 3"],
    answer: 3,
    explanation: {
      summary: "A + B = x² + 1 + x + 2 = x² + x + 3입니다.",
      options_breakdown: [
        "오답. x항과 상수항을 빠뜨렸습니다.",
        "오답. 상수항 1 + 2 = 3입니다.",
        "오답. 부호가 틀렸습니다.",
        "정답. x² + x + 3입니다."
      ],
      key_concept: "다항식의 덧셈: 동류항끼리 더한다. 상수항 1 + 2 = 3."
    }
  },
  {
    id: "math_2021_1_02",
    subject: "math",
    exam: "2021년 제1회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 x² + ax + 2 = x² + 3x + b가 x에 대한 항등식일 때, 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_02.png",
    needsImage: false,
    options: ["3", "5", "7", "9"],
    answer: 1,
    explanation: {
      summary: "계수를 비교하면 a = 3, b = 2이므로 a + b = 5입니다.",
      options_breakdown: [
        "오답. a만의 값입니다.",
        "정답. 3 + 2 = 5입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "항등식의 계수 비교: 같은 차수의 계수가 같다."
    }
  },
  {
    id: "math_2021_1_03",
    subject: "math",
    exam: "2021년 제1회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다항식 2x² + 4x − 3을 x − 1로 나누었을 때, 나머지는?",
    passage: "",
    imageUrl: "images/math/2021_1_03.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 1,
    explanation: {
      summary: "나머지정리에 따라 f(1) = 2 + 4 − 3 = 3입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. f(1) = 3입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "x − 1로 나눈 나머지 = f(1) = 계수의 합."
    }
  },
  {
    id: "math_2021_1_04",
    subject: "math",
    exam: "2021년 제1회",
    number: 4,
    category: "다항식",
    concepts: ["인수분해"],
    question: "다항식 x³ − 2³을 인수분해한 식이 (x − a)(x² + 2x + 4)일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_04.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 0,
    explanation: {
      summary: "세제곱의 차 공식 a³ − b³ = (a − b)(a² + ab + b²)에서 x³ − 2³ = (x − 2)(x² + 2x + 4)이므로 a = 2입니다.",
      options_breakdown: [
        "정답. a = 2입니다.",
        "오답. 4는 x² + 2x + 4의 상수항(2²)입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 8 = 2³은 원래 식의 상수항입니다."
      ],
      key_concept: "a³ − b³ = (a − b)(a² + ab + b²), a³ + b³ = (a + b)(a² − ab + b²)."
    }
  },
  {
    id: "math_2021_1_05",
    subject: "math",
    exam: "2021년 제1회",
    number: 5,
    category: "다항식",
    concepts: ["복소수"],
    question: "다음 등식을 만족시키는 실수 x, y의 값은? (단, i = √−1)",
    passage: "(x − 2) + yi = 1 + 4i",
    imageUrl: "images/math/2021_1_05.png",
    needsImage: false,
    options: ["x = 1, y = 1", "x = 1, y = 4", "x = 3, y = 1", "x = 3, y = 4"],
    answer: 3,
    explanation: {
      summary: "실수부끼리 x − 2 = 1에서 x = 3, 허수부끼리 y = 4입니다.",
      options_breakdown: [
        "오답. 둘 다 틀렸습니다.",
        "오답. x = 3입니다.",
        "오답. y = 4입니다.",
        "정답. x = 3, y = 4입니다."
      ],
      key_concept: "복소수의 상등: 실수부는 실수부끼리, 허수부는 허수부끼리 같다."
    }
  },
  {
    id: "math_2021_1_06",
    subject: "math",
    exam: "2021년 제1회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차방정식의 근과 계수"],
    question: "이차방정식 x² − 3x + 2 = 0의 두 근을 α, β라고 할 때, αβ의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_06.png",
    needsImage: false,
    options: ["−2", "−1", "1", "2"],
    answer: 3,
    explanation: {
      summary: "근과 계수의 관계에서 두 근의 곱은 상수항/x²의 계수 = 2입니다. 실제 근 1, 2의 곱도 2입니다.",
      options_breakdown: [
        "오답. 부호가 반대입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. αβ = c/a = 2입니다."
      ],
      key_concept: "x² + bx + c = 0에서 α + β = −b, αβ = c."
    }
  },
  {
    id: "math_2021_1_07",
    subject: "math",
    exam: "2021년 제1회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "−1 ≤ x ≤ 2일 때, 이차함수 y = −x² + 5의 최댓값은?",
    passage: "",
    imageUrl: "images/math/2021_1_07.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 2,
    explanation: {
      summary: "위로 볼록이고 꼭짓점 (0, 5)가 범위 안에 있으므로 최댓값은 5입니다.",
      options_breakdown: [
        "오답. 1은 x = 2에서의 최솟값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. x = 0에서 최댓값 5입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = −x² + q: 꼭짓점 (0, q), 위로 볼록 → 최댓값 q."
    }
  },
  {
    id: "math_2021_1_08",
    subject: "math",
    exam: "2021년 제1회",
    number: 8,
    category: "방정식·부등식",
    concepts: ["삼차방정식"],
    question: "삼차방정식 x³ − 2x² + ax + 4 = 0의 한 근이 2일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_08.png",
    needsImage: false,
    options: ["−2", "0", "2", "4"],
    answer: 0,
    explanation: {
      summary: "x = 2를 대입하면 8 − 8 + 2a + 4 = 0, 2a = −4, a = −2입니다.",
      options_breakdown: [
        "정답. a = −2입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "한 근을 대입하여 미지수를 구한다. 2³ = 8, 2 × 2² = 8."
    }
  },
  {
    id: "math_2021_1_09",
    subject: "math",
    exam: "2021년 제1회",
    number: 9,
    category: "방정식·부등식",
    concepts: ["연립부등식"],
    question: "연립부등식 3x > 6, x < 10 − a의 해가 2 < x < a일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_09.png",
    needsImage: false,
    options: ["5", "6", "7", "8"],
    answer: 0,
    explanation: {
      summary: "3x > 6에서 x > 2이고, x < 10 − a입니다. 해가 2 < x < a이므로 10 − a = a, a = 5입니다.",
      options_breakdown: [
        "정답. 10 − a = a에서 a = 5입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "연립부등식의 해는 각 부등식의 해의 공통 부분. 해의 형태를 비교해 상수를 구한다."
    }
  },
  {
    id: "math_2021_1_10",
    subject: "math",
    exam: "2021년 제1회",
    number: 10,
    category: "방정식·부등식",
    concepts: ["절댓값 부등식"],
    question: "부등식 |x + 1| ≤ 2의 해를 수직선 위에 나타낸 것이 그림과 같을 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_10.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation: {
      summary: "|x + 1| ≤ 2 ⇔ −2 ≤ x + 1 ≤ 2 ⇔ −3 ≤ x ≤ 1입니다. 그림의 오른쪽 끝 a = 1입니다.",
      options_breakdown: [
        "정답. a = 1입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "|x + 1| ≤ 2는 −1을 중심으로 거리 2 이내: −3 ≤ x ≤ 1."
    }
  },
  {
    id: "math_2021_1_11",
    subject: "math",
    exam: "2021년 제1회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["두 점 사이의 거리"],
    question: "좌표평면 위의 두 점 A(−1, 2), B(1, 4) 사이의 거리는?",
    passage: "",
    imageUrl: "images/math/2021_1_11.png",
    needsImage: false,
    options: ["√5", "√6", "√7", "2√2"],
    answer: 3,
    explanation: {
      summary: "AB = √{(1 − (−1))² + (4 − 2)²} = √(4 + 4) = √8 = 2√2입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. √8 = 2√2입니다."
      ],
      key_concept: "√8 = √(4 × 2) = 2√2. 근호 안의 제곱수는 밖으로 꺼낸다."
    }
  },
  {
    id: "math_2021_1_12",
    subject: "math",
    exam: "2021년 제1회",
    number: 12,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "직선 y = x + 1에 수직이고, 점 (0, 2)를 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2021_1_12.png",
    needsImage: false,
    options: ["y = −x + 1", "y = −x + 2", "y = (1/2)x + 1", "y = (1/2)x + 2"],
    answer: 1,
    explanation: {
      summary: "기울기 1에 수직인 기울기는 −1이고, (0, 2)를 지나므로 y = −x + 2입니다.",
      options_breakdown: [
        "오답. y절편이 2여야 합니다.",
        "정답. 기울기 −1, y절편 2입니다.",
        "오답. 기울기가 틀렸습니다.",
        "오답. 기울기가 틀렸습니다."
      ],
      key_concept: "수직: 기울기의 곱이 −1. 1의 수직 기울기는 −1."
    }
  },
  {
    id: "math_2021_1_13",
    subject: "math",
    exam: "2021년 제1회",
    number: 13,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심이 (−2, 1)이고 원점을 지나는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2021_1_13.png",
    needsImage: false,
    options: ["(x − 1)² + (y − 2)² = 5", "(x − 1)² + (y + 2)² = 5", "(x + 2)² + (y − 1)² = 5", "(x + 2)² + (y + 1)² = 5"],
    answer: 2,
    explanation: {
      summary: "반지름은 중심 (−2, 1)과 원점 사이의 거리 √(4 + 1) = √5이므로 r² = 5입니다. (x + 2)² + (y − 1)² = 5입니다.",
      options_breakdown: [
        "오답. 중심이 (1, 2)입니다.",
        "오답. 중심이 (1, −2)입니다.",
        "정답. 중심 (−2, 1), r² = 5입니다.",
        "오답. 중심이 (−2, −1)입니다."
      ],
      key_concept: "원점을 지나는 원: r² = (중심의 x좌표)² + (중심의 y좌표)²."
    }
  },
  {
    id: "math_2021_1_14",
    subject: "math",
    exam: "2021년 제1회",
    number: 14,
    category: "도형의 방정식",
    concepts: ["평행이동"],
    question: "좌표평면 위의 점 (2, 1)을 x축의 방향으로 −2만큼, y축의 방향으로 2만큼 평행이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2021_1_14.png",
    needsImage: false,
    options: ["(0, 1)", "(0, 3)", "(2, 1)", "(2, 3)"],
    answer: 1,
    explanation: {
      summary: "(2 − 2, 1 + 2) = (0, 3)입니다.",
      options_breakdown: [
        "오답. y좌표에 2를 더해야 합니다.",
        "정답. (0, 3)입니다.",
        "오답. 이동하지 않은 점입니다.",
        "오답. x좌표에서 2를 빼야 합니다."
      ],
      key_concept: "점의 평행이동: (x, y) → (x + a, y + b)."
    }
  },
  {
    id: "math_2021_1_15",
    subject: "math",
    exam: "2021년 제1회",
    number: 15,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "두 집합 A = {1, 3, 4}, B = {2, 4, 5}에 대하여 n(A ∪ B)의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_15.png",
    needsImage: false,
    options: ["3", "4", "5", "6"],
    answer: 2,
    explanation: {
      summary: "A ∪ B = {1, 2, 3, 4, 5}이므로 원소의 개수는 5입니다. 3 + 3 − 1 = 5로도 구할 수 있습니다.",
      options_breakdown: [
        "오답. 3은 n(A)입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 5개입니다.",
        "오답. 공통 원소 4를 두 번 센 값입니다."
      ],
      key_concept: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)."
    }
  },
  {
    id: "math_2021_1_16",
    subject: "math",
    exam: "2021년 제1회",
    number: 16,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 'x = 2이면 x² = 4이다.'의 대우는?",
    passage: "",
    imageUrl: "images/math/2021_1_16.png",
    needsImage: false,
    options: ["x = 2이면 x² ≠ 4이다.", "x ≠ 2이면 x² = 4이다.", "x² ≠ 4이면 x = 2이다.", "x² ≠ 4이면 x ≠ 2이다."],
    answer: 3,
    explanation: {
      summary: "대우는 'x² ≠ 4이면 x ≠ 2이다.'입니다.",
      options_breakdown: [
        "오답. 결론만 부정한 것입니다.",
        "오답. 가정만 부정한 것입니다.",
        "오답. 결론을 부정하지 않았습니다.",
        "정답. ~q → ~p입니다."
      ],
      key_concept: "대우: 가정과 결론을 바꾸고 모두 부정."
    }
  },
  {
    id: "math_2021_1_17",
    subject: "math",
    exam: "2021년 제1회",
    number: 17,
    category: "함수",
    concepts: ["합성함수"],
    question: "두 함수 f : X → Y, g : Y → Z가 그림과 같을 때, (g ∘ f)(2)의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_17.png",
    needsImage: false,
    options: ["4", "5", "6", "7"],
    answer: 0,
    explanation: {
      summary: "(g ∘ f)(2) = g(f(2))입니다. 그림에서 2 → f → Y의 원소 → g → 4로 이어지므로 값은 4입니다.",
      options_breakdown: [
        "정답. 2에서 화살표를 두 번 따라가면 4입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다.",
        "오답. 화살표를 잘못 따라간 값입니다."
      ],
      key_concept: "(g ∘ f)(x) = g(f(x)): f 먼저, g 나중."
    }
  },
  {
    id: "math_2021_1_18",
    subject: "math",
    exam: "2021년 제1회",
    number: 18,
    category: "함수",
    concepts: ["무리함수"],
    question: "무리함수 y = √(x − 1) + a의 그래프가 그림과 같을 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2021_1_18.png",
    needsImage: false,
    options: ["−2", "0", "2", "4"],
    answer: 0,
    explanation: {
      summary: "y = √(x − 1) + a의 시작점은 (1, a)입니다. 그림에서 시작점이 (1, −2)이므로 a = −2입니다.",
      options_breakdown: [
        "정답. 시작점의 y좌표 −2입니다.",
        "오답. 시작점이 (1, 0)이 아닙니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "y = √(x − p) + q의 시작점 (p, q). 그래프에서 시작점을 읽는다."
    }
  },
  {
    id: "math_2021_1_19",
    subject: "math",
    exam: "2021년 제1회",
    number: 19,
    category: "경우의 수",
    concepts: ["순열"],
    question: "그림과 같이 3장의 글자 카드가 있다. 이 중에서 서로 다른 2장의 카드를 택하여 일렬로 나열하는 경우의 수는?",
    passage: "카드: 복, 사, 기",
    imageUrl: "images/math/2021_1_19.png",
    needsImage: false,
    options: ["4", "6", "8", "10"],
    answer: 1,
    explanation: {
      summary: "순서를 생각해 나열하므로 순열입니다. ₃P₂ = 3 × 2 = 6입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "정답. 첫 자리 3가지 × 둘째 자리 2가지 = 6입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "순열 ₙPᵣ = n(n − 1)…(n − r + 1): 순서를 고려해 나열. ₃P₂ = 3 × 2."
    }
  },
  {
    id: "math_2021_1_20",
    subject: "math",
    exam: "2021년 제1회",
    number: 20,
    category: "경우의 수",
    concepts: ["조합"],
    question: "그림과 같이 4개의 민속놀이가 있다. 이 중에서 서로 다른 2개의 민속놀이를 선택하는 경우의 수는?",
    passage: "연날리기, 제기차기, 그네 타기, 팽이치기",
    imageUrl: "images/math/2021_1_20.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 2,
    explanation: {
      summary: "순서 없이 고르므로 조합입니다. ₄C₂ = (4 × 3)/(2 × 1) = 6입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. ₄C₂ = 6입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "조합 ₙCᵣ = ₙPᵣ / r!: 순서 없이 선택. '선택·고르기'는 조합, '나열·배열'은 순열."
    }
  }
);
