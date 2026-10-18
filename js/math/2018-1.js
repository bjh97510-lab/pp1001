// 2018년도 제1회 고졸 검정고시 수학 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(window.QUESTION_BANK = window.QUESTION_BANK || []).push(
  {
    id: "math_2018_1_01",
    subject: "math",
    exam: "2018년 제1회",
    number: 1,
    category: "다항식",
    concepts: ["다항식의 연산"],
    question: "두 다항식 A = x² − x, B = x + 1에 대하여 A + B는?",
    passage: "",
    imageUrl: "images/math/2018_1_01.png",
    needsImage: false,
    options: ["x − 1", "x", "x² + 1", "x² + x"],
    answer: 2,
    explanation: {
      summary: "같은 차수의 항끼리 더합니다. A + B = (x² − x) + (x + 1) = x² + (−x + x) + 1 = x² + 1입니다.",
      options_breakdown: [
        "오답. 일차항이 사라지고 상수항 1이 남아야 합니다.",
        "오답. x²항을 빠뜨렸습니다.",
        "정답. −x와 +x가 상쇄되어 x² + 1입니다.",
        "오답. 일차항은 상쇄됩니다."
      ],
      key_concept: "다항식의 덧셈·뺄셈: 동류항(같은 문자·같은 차수)끼리 계수를 더하고 뺀다. 뺄셈은 괄호를 풀 때 부호에 주의."
    }
  },
  {
    id: "math_2018_1_02",
    subject: "math",
    exam: "2018년 제1회",
    number: 2,
    category: "다항식",
    concepts: ["항등식"],
    question: "등식 (x − 2)² = (x − 3)² + 2(x − 3) + a가 x에 대한 항등식일 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2018_1_02.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 0,
    explanation: {
      summary: "항등식은 x에 어떤 값을 넣어도 성립합니다. x = 3을 대입하면 (3 − 2)² = 0 + 0 + a이므로 a = 1입니다. 우변을 전개해 비교해도 x² − 4x + 3 + a = x² − 4x + 4에서 a = 1입니다.",
      options_breakdown: [
        "정답. a = 1입니다.",
        "오답. 상수항을 비교하면 3 + a = 4입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "항등식 풀이: ① 양변을 전개해 계수 비교(계수 비교법) ② 적당한 수를 대입(수치 대입법). 편한 값(여기서는 x=3)을 넣으면 빠르다."
    }
  },
  {
    id: "math_2018_1_03",
    subject: "math",
    exam: "2018년 제1회",
    number: 3,
    category: "다항식",
    concepts: ["나머지정리와 인수정리"],
    question: "다항식 x² + ax + 3이 x + 1로 나누어떨어질 때, 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2018_1_03.png",
    needsImage: false,
    options: ["−4", "−2", "2", "4"],
    answer: 3,
    explanation: {
      summary: "인수정리에 따라 x + 1로 나누어떨어지면 f(−1) = 0입니다. f(−1) = 1 − a + 3 = 0이므로 a = 4입니다.",
      options_breakdown: [
        "오답. 부호가 반대입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 4 − a = 0에서 a = 4입니다."
      ],
      key_concept: "인수정리: f(x)가 x − α로 나누어떨어진다 ⇔ f(α) = 0. x + 1로 나누어떨어지면 x = −1을 대입."
    }
  },
  {
    id: "math_2018_1_04",
    subject: "math",
    exam: "2018년 제1회",
    number: 4,
    category: "다항식",
    concepts: ["복소수"],
    question: "(6 + 3i) + (−2 + 4i)를 계산하면? (단, i = √−1)",
    passage: "",
    imageUrl: "images/math/2018_1_04.png",
    needsImage: false,
    options: ["4", "7", "4 + 7i", "7 + 4i"],
    answer: 2,
    explanation: {
      summary: "실수부끼리, 허수부끼리 더합니다. (6 − 2) + (3 + 4)i = 4 + 7i입니다.",
      options_breakdown: [
        "오답. 허수부를 빠뜨렸습니다.",
        "오답. 실수부·허수부를 섞었습니다.",
        "정답. 실수부 4, 허수부 7입니다.",
        "오답. 실수부와 허수부가 바뀌었습니다."
      ],
      key_concept: "복소수의 덧셈·뺄셈: (a + bi) ± (c + di) = (a ± c) + (b ± d)i. 곱셈은 i² = −1을 이용."
    }
  },
  {
    id: "math_2018_1_05",
    subject: "math",
    exam: "2018년 제1회",
    number: 5,
    category: "방정식·부등식",
    concepts: ["이차함수의 최대·최소"],
    question: "0 ≤ x ≤ 3일 때, 이차함수 y = (x − 1)² + 2의 최댓값은?",
    passage: "",
    imageUrl: "images/math/2018_1_05.png",
    needsImage: false,
    options: ["2", "4", "6", "8"],
    answer: 2,
    explanation: {
      summary: "꼭짓점 (1, 2)가 범위 안에 있으므로 최솟값은 2이고, 최댓값은 꼭짓점에서 먼 끝점 x = 3에서 (3 − 1)² + 2 = 6입니다.",
      options_breakdown: [
        "오답. 2는 최솟값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. x = 3일 때 6입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "제한된 범위의 이차함수 최대·최소: 꼭짓점이 범위 안이면 꼭짓점과 양 끝값을 비교, 범위 밖이면 양 끝값만 비교."
    }
  },
  {
    id: "math_2018_1_06",
    subject: "math",
    exam: "2018년 제1회",
    number: 6,
    category: "방정식·부등식",
    concepts: ["이차부등식"],
    question: "이차부등식 (x + 1)(x − 3) ≤ 0의 해를 수직선 위에 나타낸 것은?",
    passage: "",
    imageUrl: "images/math/2018_1_06.png",
    needsImage: false,
    options: ["①", "②", "③", "④"],
    answer: 3,
    explanation: {
      summary: "(x + 1)(x − 3) ≤ 0의 해는 두 근 −1과 3 사이, 즉 −1 ≤ x ≤ 3입니다. 수직선에서 −1부터 3까지 칠해진 ④입니다.",
      options_breakdown: [
        "오답. −3, 1 사이로 근이 다릅니다.",
        "오답. 근도 다르고 바깥쪽 범위입니다.",
        "오답. 바깥쪽(x ≤ −1 또는 x ≥ 3)은 ≥ 0의 해입니다.",
        "정답. −1 ≤ x ≤ 3입니다."
      ],
      key_concept: "(x − α)(x − β) ≤ 0 (α < β) → α ≤ x ≤ β (사이) / (x − α)(x − β) ≥ 0 → x ≤ α 또는 x ≥ β (바깥)."
    }
  },
  {
    id: "math_2018_1_07",
    subject: "math",
    exam: "2018년 제1회",
    number: 7,
    category: "도형의 방정식",
    concepts: ["두 점 사이의 거리"],
    question: "좌표평면 위의 두 점 A(1, 1), B(3, 2) 사이의 거리는?",
    passage: "",
    imageUrl: "images/math/2018_1_07.png",
    needsImage: false,
    options: ["2", "√5", "√6", "√7"],
    answer: 1,
    explanation: {
      summary: "AB = √{(3 − 1)² + (2 − 1)²} = √(4 + 1) = √5입니다.",
      options_breakdown: [
        "오답. x좌표 차이만 계산한 값입니다.",
        "정답. √(2² + 1²) = √5입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "두 점 (x₁, y₁), (x₂, y₂) 사이의 거리 = √{(x₂ − x₁)² + (y₂ − y₁)²}."
    }
  },
  {
    id: "math_2018_1_08",
    subject: "math",
    exam: "2018년 제1회",
    number: 8,
    category: "도형의 방정식",
    concepts: ["직선의 방정식"],
    question: "좌표평면에서 두 점 A(2, −1), B(2, 3)을 지나는 직선의 방정식은?",
    passage: "",
    imageUrl: "images/math/2018_1_08.png",
    needsImage: false,
    options: ["x = −1", "x = 0", "x = 2", "x = 3"],
    answer: 2,
    explanation: {
      summary: "두 점의 x좌표가 모두 2로 같으므로 y축에 평행한 직선 x = 2입니다.",
      options_breakdown: [
        "오답. x = −1은 두 점을 지나지 않습니다.",
        "오답. x = 0은 y축입니다.",
        "정답. x좌표가 같은 두 점을 지나는 직선은 x = 2입니다.",
        "오답. x = 3은 두 점을 지나지 않습니다."
      ],
      key_concept: "x좌표가 같은 두 점 → x = a (y축에 평행), y좌표가 같은 두 점 → y = b (x축에 평행)."
    }
  },
  {
    id: "math_2018_1_09",
    subject: "math",
    exam: "2018년 제1회",
    number: 9,
    category: "도형의 방정식",
    concepts: ["원의 방정식"],
    question: "중심이 x축 위에 있고, 원점과 점 (4, 0)을 지나는 원의 방정식은?",
    passage: "",
    imageUrl: "images/math/2018_1_09.png",
    needsImage: false,
    options: ["(x − 2)² + y² = 2", "(x − 2)² + y² = 4", "(x + 2)² + y² = 2", "(x + 2)² + y² = 4"],
    answer: 1,
    explanation: {
      summary: "원점 (0, 0)과 (4, 0)이 지름의 양 끝이므로 중심은 (2, 0), 반지름은 2입니다. 따라서 (x − 2)² + y² = 4입니다.",
      options_breakdown: [
        "오답. 우변은 반지름의 제곱 2² = 4여야 합니다.",
        "정답. 중심 (2, 0), r = 2입니다.",
        "오답. 중심이 (−2, 0)이면 (4, 0)을 지나지 않습니다.",
        "오답. 중심의 부호가 틀렸습니다."
      ],
      key_concept: "중심 (a, b), 반지름 r인 원: (x − a)² + (y − b)² = r². 우변은 r²임에 주의."
    }
  },
  {
    id: "math_2018_1_10",
    subject: "math",
    exam: "2018년 제1회",
    number: 10,
    category: "도형의 방정식",
    concepts: ["대칭이동"],
    question: "좌표평면 위의 점 (−2, 5)를 x축에 대하여 대칭이동한 점의 좌표는?",
    passage: "",
    imageUrl: "images/math/2018_1_10.png",
    needsImage: false,
    options: ["(−5, 2)", "(−2, −5)", "(2, −5)", "(5, −2)"],
    answer: 1,
    explanation: {
      summary: "x축 대칭이동은 y좌표의 부호만 바꿉니다. (−2, 5) → (−2, −5)입니다.",
      options_breakdown: [
        "오답. 좌표를 바꾸고 부호도 바꾼 것입니다.",
        "정답. y좌표 부호만 바뀝니다.",
        "오답. 원점 대칭(두 부호 모두 바뀜)입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "대칭이동: x축 → (x, −y), y축 → (−x, y), 원점 → (−x, −y), 직선 y = x → (y, x)."
    }
  },
  {
    id: "math_2018_1_11",
    subject: "math",
    exam: "2018년 제1회",
    number: 11,
    category: "도형의 방정식",
    concepts: ["부등식의 영역"],
    question: "연립부등식 x² + y² ≤ 1, y ≥ 0의 영역을 좌표평면 위에 나타낸 것은? (단, 경계선은 포함된다.)",
    passage: "",
    imageUrl: "images/math/2018_1_11.png",
    needsImage: false,
    options: ["①", "②", "③", "④"],
    answer: 0,
    explanation: {
      summary: "x² + y² ≤ 1은 반지름 1인 원의 내부(경계 포함), y ≥ 0은 x축 위쪽입니다. 두 조건을 모두 만족하는 영역은 원의 위쪽 반(①)입니다.",
      options_breakdown: [
        "정답. 원 내부 중 x축 위쪽 반원입니다.",
        "오답. 원 바깥의 위쪽입니다.",
        "오답. 원 내부의 아래쪽 반(y ≤ 0)입니다.",
        "오답. 원 바깥의 아래쪽입니다."
      ],
      key_concept: "x² + y² ≤ r²는 원의 내부, ≥는 외부. y ≥ 0은 x축 위쪽. 연립부등식의 영역은 공통 부분."
    }
  },
  {
    id: "math_2018_1_12",
    subject: "math",
    exam: "2018년 제1회",
    number: 12,
    category: "집합·명제",
    concepts: ["집합의 연산"],
    question: "두 집합 A = {1, 3, 5, 7}, B = {1, 2, 4, 5}에 대하여 A ∩ B는?",
    passage: "",
    imageUrl: "images/math/2018_1_12.png",
    needsImage: false,
    options: ["{1, 3}", "{1, 5}", "{2, 3}", "{2, 5}"],
    answer: 1,
    explanation: {
      summary: "교집합은 두 집합에 공통으로 속하는 원소의 집합입니다. 공통 원소는 1과 5이므로 A ∩ B = {1, 5}입니다.",
      options_breakdown: [
        "오답. 3은 B에 없습니다.",
        "정답. 1과 5가 공통 원소입니다.",
        "오답. 2는 A에, 3은 B에 없습니다.",
        "오답. 2는 A에 없습니다."
      ],
      key_concept: "A ∩ B(교집합)=공통 원소, A ∪ B(합집합)=모든 원소, A − B(차집합)=A에만 있는 원소, Aᶜ(여집합)=U에서 A를 뺀 것."
    }
  },
  {
    id: "math_2018_1_13",
    subject: "math",
    exam: "2018년 제1회",
    number: 13,
    category: "집합·명제",
    concepts: ["명제와 대우"],
    question: "명제 '정사각형이면 직사각형이다.'의 대우는?",
    passage: "",
    imageUrl: "images/math/2018_1_13.png",
    needsImage: false,
    options: ["직사각형이면 정사각형이다.", "정사각형이면 직사각형이 아니다.", "직사각형이면 정사각형이 아니다.", "직사각형이 아니면 정사각형이 아니다."],
    answer: 3,
    explanation: {
      summary: "'p이면 q이다'의 대우는 '~q이면 ~p이다'입니다. 가정과 결론을 바꾸고 둘 다 부정하면 '직사각형이 아니면 정사각형이 아니다'입니다.",
      options_breakdown: [
        "오답. 역(q이면 p)입니다.",
        "오답. 결론만 부정한 것으로 대우가 아닙니다.",
        "오답. 역의 결론을 부정한 것입니다.",
        "정답. 대우입니다."
      ],
      key_concept: "명제 p→q의 역: q→p, 이: ~p→~q, 대우: ~q→~p. 명제와 대우의 참·거짓은 항상 같다."
    }
  },
  {
    id: "math_2018_1_14",
    subject: "math",
    exam: "2018년 제1회",
    number: 14,
    category: "함수",
    concepts: ["함수의 뜻"],
    question: "두 집합 X = {1, 2, 3}, Y = {4, 5, 6, 7}에 대하여 함수 f : X → Y가 상수함수이고 f(3) = 4일 때, f(1)의 값은?",
    passage: "",
    imageUrl: "images/math/2018_1_14.png",
    needsImage: false,
    options: ["4", "5", "6", "7"],
    answer: 0,
    explanation: {
      summary: "상수함수는 정의역의 모든 원소가 하나의 같은 값에 대응합니다. f(3) = 4이므로 f(1) = 4입니다.",
      options_breakdown: [
        "정답. 상수함수이므로 함숫값이 모두 4입니다.",
        "오답. 상수함수의 함숫값은 하나뿐입니다.",
        "오답. 위와 같습니다.",
        "오답. 위와 같습니다."
      ],
      key_concept: "상수함수: f(x) = c (모든 x에 같은 값). 항등함수: f(x) = x. 일대일대응: 서로 다른 x가 서로 다른 y에, 치역 = 공역."
    }
  },
  {
    id: "math_2018_1_15",
    subject: "math",
    exam: "2018년 제1회",
    number: 15,
    category: "지수·로그·수열",
    concepts: ["지수법칙"],
    question: "3^(2/3) × 3^(4/3)을 간단히 하면?",
    passage: "",
    imageUrl: "images/math/2018_1_15.png",
    needsImage: false,
    options: ["3", "3^(4/3)", "3^(5/3)", "9"],
    answer: 3,
    explanation: {
      summary: "밑이 같은 거듭제곱의 곱은 지수를 더합니다. 2/3 + 4/3 = 2이므로 3² = 9입니다.",
      options_breakdown: [
        "오답. 지수의 합은 1이 아니라 2입니다.",
        "오답. 지수를 더하지 않은 값입니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 3^(2/3 + 4/3) = 3² = 9입니다."
      ],
      key_concept: "지수법칙: aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ ÷ aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ."
    }
  },
  {
    id: "math_2018_1_16",
    subject: "math",
    exam: "2018년 제1회",
    number: 16,
    category: "함수",
    concepts: ["무리함수"],
    question: "그림은 무리함수 y = √x의 그래프와 y = √x를 x축의 방향으로 a만큼 평행이동한 y = √(x − a)의 그래프이다. 상수 a의 값은?",
    passage: "",
    imageUrl: "images/math/2018_1_16.png",
    needsImage: false,
    options: ["−1", "0", "1", "2"],
    answer: 3,
    explanation: {
      summary: "y = √(x − a)의 그래프는 y = √x를 x축 방향으로 a만큼 옮긴 것으로 시작점이 (a, 0)입니다. 그림에서 시작점이 (2, 0)이므로 a = 2입니다.",
      options_breakdown: [
        "오답. a = −1이면 왼쪽으로 이동합니다.",
        "오답. a = 0이면 원래 그래프입니다.",
        "오답. 시작점이 (1, 0)이 아닙니다.",
        "정답. 시작점 x = 2에서 a = 2입니다."
      ],
      key_concept: "y = √(x − a) + b의 그래프: y = √x를 x축 방향 a, y축 방향 b만큼 평행이동, 시작점 (a, b). 정의역 x ≥ a."
    }
  },
  {
    id: "math_2018_1_17",
    subject: "math",
    exam: "2018년 제1회",
    number: 17,
    category: "지수·로그·수열",
    concepts: ["등비수열"],
    question: "다음 수열이 등비수열일 때, 상수 a의 값은?",
    passage: "1, 2, 4, a, 16, …",
    imageUrl: "images/math/2018_1_17.png",
    needsImage: false,
    options: ["8", "10", "12", "14"],
    answer: 0,
    explanation: {
      summary: "1, 2, 4로 공비가 2인 등비수열입니다. 네 번째 항은 4 × 2 = 8이고, 그 다음 8 × 2 = 16으로 확인됩니다.",
      options_breakdown: [
        "정답. 4 × 2 = 8입니다.",
        "오답. 등차수열처럼 더한 값이 아닙니다.",
        "오답. 공비 2에 맞지 않습니다.",
        "오답. 공비 2에 맞지 않습니다."
      ],
      key_concept: "등비수열: 이웃한 항의 비(공비 r)가 일정, aₙ = a₁·rⁿ⁻¹. 등차수열: 이웃한 항의 차(공차 d)가 일정, aₙ = a₁ + (n − 1)d."
    }
  },
  {
    id: "math_2018_1_18",
    subject: "math",
    exam: "2018년 제1회",
    number: 18,
    category: "지수·로그·수열",
    concepts: ["수열의 합"],
    question: "Σ(k=1~10) aₖ = 5일 때, Σ(k=1~10) (aₖ + 1)의 값은?",
    passage: "",
    imageUrl: "images/math/2018_1_18.png",
    needsImage: false,
    options: ["13", "14", "15", "16"],
    answer: 2,
    explanation: {
      summary: "Σ(aₖ + 1) = Σaₖ + Σ1 = 5 + 10 = 15입니다. 1을 10번 더하면 10입니다.",
      options_breakdown: [
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "정답. 5 + 10 = 15입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "Σ의 성질: Σ(aₖ + bₖ) = Σaₖ + Σbₖ, Σc·aₖ = cΣaₖ, Σ(k=1~n) c = cn."
    }
  },
  {
    id: "math_2018_1_19",
    subject: "math",
    exam: "2018년 제1회",
    number: 19,
    category: "지수·로그·수열",
    concepts: ["수열의 귀납적 정의"],
    question: "수열 {aₙ}이 a₁ = 1, aₙ₊₁ = aₙ + 4 (n = 1, 2, 3, …)를 만족할 때, a₃의 값은?",
    passage: "",
    imageUrl: "images/math/2018_1_19.png",
    needsImage: false,
    options: ["9", "10", "11", "12"],
    answer: 0,
    explanation: {
      summary: "앞 항에 4를 더하는 규칙입니다. a₂ = 1 + 4 = 5, a₃ = 5 + 4 = 9입니다.",
      options_breakdown: [
        "정답. a₃ = 9입니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "귀납적 정의: 첫째 항과 이웃 항 사이의 관계식으로 수열을 정의. aₙ₊₁ = aₙ + d는 등차수열, aₙ₊₁ = r·aₙ은 등비수열. 차례로 대입해 구한다."
    }
  },
  {
    id: "math_2018_1_20",
    subject: "math",
    exam: "2018년 제1회",
    number: 20,
    category: "지수·로그·수열",
    concepts: ["로그의 성질"],
    question: "log 4 + log 25를 간단히 하면?",
    passage: "",
    imageUrl: "images/math/2018_1_20.png",
    needsImage: false,
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: {
      summary: "로그의 합은 진수의 곱입니다. log 4 + log 25 = log(4 × 25) = log 100 = log 10² = 2입니다.",
      options_breakdown: [
        "오답. log 10 = 1입니다.",
        "정답. log 100 = 2입니다.",
        "오답. log 1000 = 3입니다.",
        "오답. 계산에 맞지 않습니다."
      ],
      key_concept: "로그의 성질: log M + log N = log MN, log M − log N = log(M/N), log Mⁿ = n log M. 밑이 없으면 상용로그(밑 10), log 10ⁿ = n."
    }
  }
);
