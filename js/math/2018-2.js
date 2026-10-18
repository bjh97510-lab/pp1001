// 2018년도 제2회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2018_2_01",
    subject: "math",
    exam: "2018년 제2회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² − x + 1, B = x² + x에 대하여 A − B는?",
    passage: "",
    imageUrl: "images/math/2018_2_01.png",
    needsImage: false,
    options: ["−2x − 1", "−2x + 1", "2x − 1", "2x + 1"],
    answer: 1,
    explanation: {
      summary: "A − B = (x² − x + 1) − (x² + x) = x² − x + 1 − x² − x = −2x + 1입니다. 괄호를 풀 때 B의 모든 항의 부호가 바뀝니다.",
      options_breakdown: [
        "오답. 상수항 +1이 그대로 남습니다.",
        "정답. x²은 상쇄, −x − x = −2x, 상수 +1입니다.",
        "오답. 부호가 반대입니다.",
        "오답. 부호가 반대입니다."
      ],
      key_concept: "다항식의 뺄셈: A − B는 B의 각 항의 부호를 바꿔 더한다. 동류항끼리 정리."
    }
  },
  {
    id: "math_2018_2_02",
    subject: "math",
    exam: "2018년 제2회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 (x − 1)² + a(x − 1) + b = x² − x + 2는 x에 대한 항등식이다. 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2018_2_02.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 3,
    explanation: {
      summary: "좌변을 전개하면 x² − 2x + 1 + ax − a + b = x² + (a − 2)x + (1 − a + b)입니다. 계수를 비교하면 a − 2 = −1에서 a = 1, 1 − a + b = 2에서 b = 2이므로 a + b = 3입니다. x = 1을 대입하면 b = 2를 바로 얻을 수도 있습니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. a만 구한 값입니다.",
        "정답. a = 1, b = 2이므로 3입니다."
      ],
      key_concept: "항등식의 계수 비교: 양변을 전개해 x², x, 상수항의 계수를 각각 같게 놓는다. x = 1 대입 등 수치 대입도 활용."
    }
  },
  {
    id: "math_2018_2_03",
    subject: "math",
    exam: "2018년 제2회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다항식 x³ + 2x² − x + 1을 x − 1로 나누었을 때, 나머지는?",
    passage: "",
    imageUrl: "images/math/2018_2_03.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 2,
    explanation: {
      summary: "나머지정리에 따라 x − 1로 나눈 나머지는 f(1)입니다. f(1) = 1 + 2 − 1 + 1 = 3입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. f(1) = 3입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "나머지정리: f(x)를 x − α로 나눈 나머지는 f(α). 직접 나누지 않고 대입으로 구한다."
    }
  },
  {
    id: "math_2018_2_04",
    subject: "math",
    exam: "2018년 제2회",
    number: 4,
    category: "다항식",
    concepts: ["복소수"],
    question: "(1 + 2i)(3 − i) = a + 5i일 때, 실수 a의 값은? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2018_2_04.png",
    needsImage: false,
    options: ["1", "3", "5", "7"],
    answer: 2,
    explanation: {
      summary: "(1 + 2i)(3 − i) = 3 − i + 6i − 2i² = 3 + 5i + 2 = 5 + 5i입니다. 따라서 a = 5입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. −2i² = +2를 더하지 않은 값입니다.",
        "정답. 실수부는 3 + 2 = 5입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "복소수의 곱셈: 분배법칙으로 전개한 뒤 i² = −1을 대입해 실수부와 허수부로 정리."
    }
  },
  {
    id: "math_2018_2_05",
    subject: "math",
    exam: "2018년 제2회",
    number: 5,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "−1 ≤ x ≤ 2인 범위에서 이차함수 y = −x² + 2x + 2의 최댓값과 최솟값의 합은?",
    passage: "",
    imageUrl: "images/math/2018_2_05.png",
    needsImage: false,
    options: ["−2", "−1", "1", "2"],
    answer: 3,
    explanation: {
      summary: "y = −(x − 1)² + 3이므로 꼭짓점 (1, 3)에서 최댓값 3입니다. 끝점에서 x = −1일 때 y = −1 − 2 + 2 = −1, x = 2일 때 y = 2이므로 최솟값은 −1입니다. 합은 3 + (−1) = 2입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. −1은 최솟값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 3 + (−1) = 2입니다."
      ],
      key_concept: "위로 볼록(x² 계수 음수)인 이차함수: 꼭짓점이 범위 안이면 꼭짓점에서 최대, 꼭짓점에서 먼 끝에서 최소."
    }
  },
  {
    id: "math_2018_2_06",
    subject: "math",
    exam: "2018년 제2회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["연립방정식"],
    question: "연립방정식 x − y = 1, x² − y² = a의 해가 x = 3, y = b일 때, a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2018_2_06.png",
    needsImage: false,
    options: ["5", "7", "9", "11"],
    answer: 1,
    explanation: {
      summary: "x = 3을 첫 식에 넣으면 3 − b = 1에서 b = 2입니다. 둘째 식에서 a = 9 − 4 = 5입니다. 따라서 a + b = 7입니다.",
      options_breakdown: [
        "오답. 5는 a의 값입니다.",
        "정답. a = 5, b = 2이므로 7입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "해가 주어진 연립방정식: 해를 각 식에 대입해 미지의 상수를 구한다."
    }
  },
  {
    id: "math_2018_2_07",
    subject: "math",
    exam: "2018년 제2회",
    number: 7,
    category: "방정식·부등식",
    concepts: ["이차부등식"],
    question: "그림은 이차부등식 (x + a)(x + b) ≥ 0의 해를 수직선 위에 나타낸 것이다. 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2018_2_07.png",
    needsImage: false,
    options: ["−4", "−2", "0", "2"],
    answer: 0,
    explanation: {
      summary: "해가 x ≤ 1 또는 x ≥ 3이므로 (x − 1)(x − 3) ≥ 0입니다. (x + a)(x + b)와 비교하면 a = −1, b = −3이므로 a + b = −4입니다.",
      options_breakdown: [
        "정답. −1 + (−3) = −4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 부호가 반대입니다."
      ],
      key_concept: "해가 x ≤ α 또는 x ≥ β인 이차부등식은 (x − α)(x − β) ≥ 0. 수직선의 경계점이 근이다."
    }
  },
  {
    id: "math_2018_2_08",
    subject: "math",
    exam: "2018년 제2회",
    number: 8,
    category: "도형의 방정식",
    concepts: ["내분점과 중점"],
    question: "좌표평면 위의 두 점 A(−1, 1), B(3, 5)에 대하여 선분 AB의 중점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2018_2_08.png",
    needsImage: false,
    options: ["(1, 2)", "(1, 3)", "(2, 2)", "(2, 3)"],
    answer: 1,
    explanation: {
      summary: "중점은 두 점의 좌표를 각각 평균한 것입니다. x = {−1 + 3/2} = 1, y = {1 + 5/2} = 3이므로 (1, 3)입니다.",
      options_breakdown: [
        "오답. y좌표 계산이 틀렸습니다.",
        "정답. (1, 3)입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. x좌표 계산이 틀렸습니다."
      ],
      key_concept: "중점: ({x₁ + x₂/2}, {y₁ + y₂/2}). 내분점(m:n): ({mx₂ + nx₁/m + n}, {my₂ + ny₁/m + n})."
    }
  },
  {
    id: "math_2018_2_09",
    subject: "math",
    exam: "2018년 제2회",
    number: 9,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "좌표평면 위의 두 점 A(2, 1), B(0, −3)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2018_2_09.png",
    needsImage: false,
    options: ["y = 2x − 3", "y = 2x + 1", "y = 3x − 3", "y = 3x + 1"],
    answer: 0,
    explanation: {
      summary: "기울기 = {1 − (−3)/2 − 0} = 2이고, B(0, −3)이 y절편이므로 y = 2x − 3입니다.",
      options_breakdown: [
        "정답. 기울기 2, y절편 −3입니다.",
        "오답. y절편이 −3이어야 합니다.",
        "오답. 기울기가 2입니다.",
        "오답. 기울기와 y절편 모두 틀렸습니다."
      ],
      key_concept: "두 점을 지나는 직선: 기울기 m = {y₂ − y₁/x₂ − x₁}, y − y₁ = m(x − x₁). (0, b)를 지나면 y절편이 b."
    }
  },
  {
    id: "math_2018_2_10",
    subject: "math",
    exam: "2018년 제2회",
    number: 10,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심의 좌표가 (−2, 1)이고 y축에 접하는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2018_2_10.png",
    needsImage: false,
    options: ["x² + y² − 4x + 2y + 1 = 0", "x² + y² − 4x + 2y + 4 = 0", "x² + y² + 4x − 2y + 1 = 0", "x² + y² + 4x − 2y + 4 = 0"],
    answer: 2,
    explanation: {
      summary: "y축에 접하므로 반지름은 중심의 x좌표의 절댓값 2입니다. (x + 2)² + (y − 1)² = 4를 전개하면 x² + 4x + 4 + y² − 2y + 1 = 4, 즉 x² + y² + 4x − 2y + 1 = 0입니다.",
      options_breakdown: [
        "오답. 중심 부호가 반대입니다.",
        "오답. 중심 부호와 상수항이 틀렸습니다.",
        "정답. 전개하면 상수항은 4 + 1 − 4 = 1입니다.",
        "오답. 상수항이 1이어야 합니다."
      ],
      key_concept: "y축에 접하는 원: r = |중심의 x좌표| / x축에 접하는 원: r = |중심의 y좌표|. 표준형을 전개해 일반형과 비교."
    }
  },
  {
    id: "math_2018_2_11",
    subject: "math",
    exam: "2018년 제2회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (4, 5)를 직선 y = x에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2018_2_11.png",
    needsImage: false,
    options: ["(−4, −5)", "(−4, 5)", "(4, −5)", "(5, 4)"],
    answer: 3,
    explanation: {
      summary: "직선 y = x에 대한 대칭이동은 x좌표와 y좌표를 서로 바꿉니다. (4, 5) → (5, 4)입니다.",
      options_breakdown: [
        "오답. 원점 대칭입니다.",
        "오답. y축 대칭입니다.",
        "오답. x축 대칭입니다.",
        "정답. 좌표를 서로 바꾼 (5, 4)입니다."
      ],
      key_concept: "y = x 대칭: (a, b) → (b, a). 함수의 그래프를 y = x에 대칭이동하면 역함수의 그래프."
    }
  },
  {
    id: "math_2018_2_12",
    subject: "math",
    exam: "2018년 제2회",
    number: 12,
    category: "도형의 방정식",
    concepts: ["부등식의 영역"],
    question: "그림에서 연립부등식 y ≤ {1/2}x − 1, y ≥ x² − 4의 영역에 속하는 점은?",
    passage: "",
    imageUrl: "images/math/2018_2_12.png",
    needsImage: false,
    options: ["A", "B", "C", "D"],
    answer: 2,
    explanation: {
      summary: "y ≤ {1/2}x − 1은 직선의 아래쪽, y ≥ x² − 4는 포물선의 위쪽(안쪽)입니다. 두 영역의 공통 부분인 직선 아래·포물선 안쪽에 있는 점은 C입니다.",
      options_breakdown: [
        "오답. A는 직선 위쪽에 있습니다.",
        "오답. B는 직선 위쪽에 있습니다.",
        "정답. C는 직선 아래이면서 포물선 안쪽입니다.",
        "오답. D는 포물선 바깥(아래쪽)에 있습니다."
      ],
      key_concept: "y ≤ f(x)는 그래프의 아래쪽, y ≥ f(x)는 위쪽. 점을 대입해 확인하면 확실하다."
    }
  },
  {
    id: "math_2018_2_13",
    subject: "math",
    exam: "2018년 제2회",
    number: 13,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "전체집합 U = {1, 2, 3, 4, 5, 6, 7}의 두 부분집합 A = {1, 2, 3, 4}, B = {3, 4, 5, 6}에 대하여 A ∩ Bᶜ은?",
    passage: "",
    imageUrl: "images/math/2018_2_13.png",
    needsImage: false,
    options: ["{1, 2}", "{2, 3}", "{3, 4}", "{1, 2, 3}"],
    answer: 0,
    explanation: {
      summary: "Bᶜ = {1, 2, 7}이므로 A ∩ Bᶜ = {1, 2}입니다. A ∩ Bᶜ은 A − B(A에만 있는 원소)와 같습니다.",
      options_breakdown: [
        "정답. A에서 B의 원소 3, 4를 뺀 {1, 2}입니다.",
        "오답. 3은 B에 속합니다.",
        "오답. {3, 4}는 A ∩ B입니다.",
        "오답. 3은 B에 속합니다."
      ],
      key_concept: "A ∩ Bᶜ = A − B. 여집합은 전체집합 U에서 빼서 구한다. 드모르간 법칙: (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ."
    }
  },
  {
    id: "math_2018_2_14",
    subject: "math",
    exam: "2018년 제2회",
    number: 14,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "참인 명제가 아닌 것은?",
    passage: "",
    imageUrl: "images/math/2018_2_14.png",
    needsImage: false,
    options: ["정사각형은 직사각형이다.", "12의 약수는 6의 약수이다.", "두 유리수의 합은 유리수이다.", "정삼각형의 세 내각의 크기는 같다."],
    answer: 1,
    explanation: {
      summary: "12의 약수 중 4, 12는 6의 약수가 아니므로 '12의 약수는 6의 약수이다'는 거짓입니다(반례 4). 나머지는 모두 참입니다.",
      options_breakdown: [
        "참. 정사각형은 네 각이 직각이므로 직사각형입니다.",
        "정답(거짓). 반례: 4는 12의 약수이지만 6의 약수가 아닙니다.",
        "참. 유리수는 덧셈에 대해 닫혀 있습니다.",
        "참. 정삼각형의 내각은 모두 60°입니다."
      ],
      key_concept: "명제가 거짓임을 보이려면 반례 하나면 충분하다. 'p이면 q'에서 p를 만족하지만 q를 만족하지 않는 예."
    }
  },
  {
    id: "math_2018_2_15",
    subject: "math",
    exam: "2018년 제2회",
    number: 15,
    category: "함수",
    concepts: ["역함수"],
    question: "함수 f : X → Y가 그림과 같을 때, f(4) + f⁻¹(4)의 값은? (단, f⁻¹는 f의 역함수이다.)",
    passage: "",
    imageUrl: "images/math/2018_2_15.png",
    needsImage: false,
    options: ["5", "7", "9", "11"],
    answer: 3,
    explanation: {
      summary: "그림의 화살표에서 f(4) = 6이고, 4로 가는 화살표의 출발점이 5이므로 f⁻¹(4) = 5입니다. 따라서 f(4) + f⁻¹(4) = 6 + 5 = 11입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 6 + 5 = 11입니다."
      ],
      key_concept: "f⁻¹(b) = a ⇔ f(a) = b. 역함수 값은 화살표를 거꾸로 따라간다. 역함수가 존재하려면 일대일대응."
    }
  },
  {
    id: "math_2018_2_16",
    subject: "math",
    exam: "2018년 제2회",
    number: 16,
    category: "함수",
    concepts: ["유리함수"],
    question: "그림은 유리함수 y = {2/x}의 그래프를 x축의 방향으로 1만큼, y축의 방향으로 −2만큼 평행이동한 y = {2/x + a} + b의 그래프이다. 두 상수 a, b에 대하여 a + b의 값은?",
    passage: "",
    imageUrl: "images/math/2018_2_16.png",
    needsImage: false,
    options: ["−3", "−1", "1", "3"],
    answer: 0,
    explanation: {
      summary: "x축 방향으로 1, y축 방향으로 −2만큼 평행이동하면 y = {2/x − 1} − 2입니다. y = {2/x + a} + b와 비교하면 a = −1, b = −2이므로 a + b = −3입니다. 점근선이 x = 1, y = −2인 것으로도 확인됩니다.",
      options_breakdown: [
        "정답. a = −1, b = −2입니다.",
        "오답. a만 구한 값입니다.",
        "오답. 부호가 틀렸습니다.",
        "오답. 부호가 틀렸습니다."
      ],
      key_concept: "y = {k/x − p} + q: y = {k/x}를 x축 방향 p, y축 방향 q만큼 평행이동, 점근선 x = p, y = q."
    }
  }
);
