// 2023년도 제2회 고졸 검정고시 영어 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(function () {
  const EXAM = "2023년 제2회";
  const G1 = "[1~3] 다음 밑줄 친 부분의 뜻으로 가장 적절한 것을 고르시오.";
  const Q1 = "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?";
  const G6 = "[6~8] 다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것을 고르시오.";
  const Q6 = "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?";
  const G13 = "[13~14] 다음 대화의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const Q13 = "다음 대화의 빈칸에 들어갈 말로 가장 적절한 것은?";
  const G20 = "[20~21] 다음 글의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const Q20 = "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?";
  const G24 = "[24~25] 다음 글을 읽고 물음에 답하시오.";
  const P24 = "A book review is a reader's opinion about a book. When you write a review, begin with a brief summary or description of the book. Then state your ______ of it, whether you liked it or not and why.";
  const T24 = "서평(독서 감상문)은 책에 대한 독자의 의견이다. 감상문을 쓸 때는 책에 대한 간단한 요약이나 설명으로 시작하라. 그런 다음 그 책에 대한 너의 (의견), 즉 그 책이 좋았는지 아닌지와 그 이유를 밝혀라.";

  function q(n, o) {
    return Object.assign({
      id: "english_2023_2_" + String(n).padStart(2, "0"),
      subject: "english",
      exam: EXAM,
      number: n,
      groupLabel: "",
      extra: "",
      imageUrl: null,
      needsImage: false
    }, o);
  }

  (window.QUESTION_BANK = window.QUESTION_BANK || []).push(
    q(1, {
      category: "어휘·어법",
      groupLabel: G1,
      passage: "Reading books is a great way to gain __knowledge__.",
      question: Q1,
      translation: "책을 읽는 것은 지식을 얻는 훌륭한 방법이다.",
      options: ["균형", "목표", "우정", "지식"],
      answer: 3,
      explanation: {
        summary: "knowledge는 '지식'이라는 뜻입니다. '책 읽기는 지식을 얻는 좋은 방법'이라는 문장이 됩니다.",
        options_breakdown: [
          "오답. '균형'은 balance입니다.",
          "오답. '목표'는 goal입니다.",
          "오답. '우정'은 friendship입니다.",
          "정답. knowledge는 '지식'이라는 뜻입니다."
        ],
        key_concept: "knowledge: 지식 (know '알다'의 명사형, k는 발음하지 않음) / gain: 얻다"
      }
    }),
    q(2, {
      category: "어휘·어법",
      groupLabel: G1,
      passage: "She is never going to __give up__ her dream even if she meets difficulties.",
      question: Q1,
      translation: "그녀는 어려움을 만나더라도 자신의 꿈을 절대 포기하지 않을 것이다.",
      options: ["서두르다", "자랑하다", "포기하다", "화해하다"],
      answer: 2,
      explanation: {
        summary: "give up은 '포기하다'라는 뜻입니다. '어려움을 만나도 꿈을 절대 포기하지 않을 것이다'로 해석됩니다.",
        options_breakdown: [
          "오답. '서두르다'는 hurry입니다.",
          "오답. '자랑하다'는 show off, boast입니다.",
          "정답. give up은 '포기하다'라는 뜻입니다.",
          "오답. '화해하다'는 make up입니다."
        ],
        key_concept: "give up: 포기하다 / even if: ~하더라도"
      }
    }),
    q(3, {
      category: "어휘·어법",
      groupLabel: G1,
      passage: "Many animals like to play with toys. __For example__, dogs enjoy playing with balls.",
      question: Q1,
      translation: "많은 동물들은 장난감을 가지고 노는 것을 좋아한다. 예를 들면, 개들은 공을 가지고 노는 것을 즐긴다.",
      options: ["갑자기", "반면에", "예를 들면", "결론적으로"],
      answer: 2,
      explanation: {
        summary: "For example은 '예를 들면'이라는 뜻입니다. 동물들이 장난감을 좋아한다는 말 뒤에 개가 공을 가지고 논다는 예를 들고 있습니다.",
        options_breakdown: [
          "오답. '갑자기'는 suddenly입니다.",
          "오답. '반면에'는 on the other hand입니다.",
          "정답. For example은 '예를 들면'이라는 뜻입니다.",
          "오답. '결론적으로'는 in conclusion입니다."
        ],
        key_concept: "for example(= for instance): 예를 들면"
      }
    }),
    q(4, {
      category: "어휘·어법",
      passage: "__Spring__ is my favorite __season__ because of the beautiful flowers and warm weather.",
      question: "다음 밑줄 친 두 단어의 의미 관계와 다른 것은?",
      translation: "아름다운 꽃과 따뜻한 날씨 때문에 봄은 내가 가장 좋아하는 계절이다.",
      options: ["apple - fruit", "nurse - job", "triangle - shape", "shoulder - country"],
      answer: 3,
      explanation: {
        summary: "spring(봄)은 season(계절)의 한 종류로, '종류 - 그것을 포함하는 큰 범주' 관계입니다. shoulder(어깨)는 country(나라)의 한 종류가 아니므로 관계가 다릅니다.",
        options_breakdown: [
          "오답. apple '사과'는 fruit '과일'의 한 종류입니다.",
          "오답. nurse '간호사'는 job '직업'의 한 종류입니다.",
          "오답. triangle '삼각형'은 shape '모양'의 한 종류입니다.",
          "정답. shoulder '어깨'는 country '나라'의 한 종류가 아니므로 관계가 다릅니다."
        ],
        key_concept: "상하 관계: 작은 개념(spring) - 큰 개념(season). 두 단어를 'A는 B의 한 종류이다'에 넣어 확인하세요."
      }
    }),
    q(5, {
      category: "세부 정보",
      passage: "[안내문] Cheese Fair\n• Date: September 10th (Sunday), 2023\n• Activities:\n  - Tasting various kinds of cheese\n  - Baking cheese cakes\n• Entrance Fee: 10,000 won\n[그림: 치즈 조각]",
      question: "다음 광고문에서 언급되지 않은 것은?",
      translation: "[안내문] 치즈 박람회\n• 날짜: 2023년 9월 10일(일요일)\n• 활동:\n  - 다양한 종류의 치즈 맛보기\n  - 치즈 케이크 굽기\n• 입장료: 10,000원",
      options: ["날짜", "장소", "활동 내용", "입장료"],
      answer: 1,
      explanation: {
        summary: "광고문에는 Date(날짜), Activities(활동), Entrance Fee(입장료)가 나와 있지만 장소(Location, Place)는 나와 있지 않습니다.",
        options_breakdown: [
          "오답. Date: September 10th (Sunday), 2023으로 날짜가 나와 있습니다.",
          "정답. 장소(Location)에 대한 정보는 없습니다.",
          "오답. Activities에 치즈 맛보기, 치즈 케이크 굽기가 나와 있습니다.",
          "오답. Entrance Fee: 10,000 won으로 입장료가 나와 있습니다."
        ],
        key_concept: "fair: 박람회 / activity: 활동 / entrance fee: 입장료 / taste: 맛보다"
      }
    }),
    q(6, {
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Are you ready to ______ your project to the class?\n• Stop worrying about the past and live in the ______.",
      question: Q6,
      translation: "• 너의 프로젝트를 반 친구들에게 발표할(present) 준비가 됐니?\n• 과거에 대해 걱정하는 것을 멈추고 현재(present)를 살아라.",
      options: ["grow", "lose", "forget", "present"],
      answer: 3,
      explanation: {
        summary: "present는 동사로 '발표하다, 제시하다', 명사로 '현재'라는 뜻이 있습니다. 첫 문장은 '프로젝트를 발표하다', 두 번째는 '현재를 살아라'가 되어 둘 다 맞습니다.",
        options_breakdown: [
          "오답. grow는 '자라다, 기르다'라는 뜻으로 두 문장에 맞지 않습니다.",
          "오답. lose는 '잃다'라는 뜻으로, the 뒤 명사 자리에 올 수 없습니다.",
          "오답. forget은 '잊다'라는 뜻으로 두 번째 문장에 맞지 않습니다.",
          "정답. present는 '발표하다'(동사)와 '현재'(명사) 모두 됩니다."
        ],
        key_concept: "present: (동) 발표하다, 주다 / (명) 현재, 선물 / (형) 현재의, 참석한"
      }
    }),
    q(7, {
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• John, ______ many countries are there in Asia?\n• He doesn't know ______ far it is from here.",
      question: Q6,
      translation: "• John, 아시아에는 (몇) 개의 나라가 있니?\n• 그는 여기서 그곳이 (얼마나) 먼지 모른다.",
      options: ["how", "when", "where", "which"],
      answer: 0,
      explanation: {
        summary: "how many는 '얼마나 많은(몇 개의)', how far는 '얼마나 먼'이라는 뜻입니다. 두 빈칸 모두 how가 들어갑니다.",
        options_breakdown: [
          "정답. how many '몇 개의', how far '얼마나 멀리' 모두 자연스럽습니다.",
          "오답. when은 '언제'라는 뜻으로 many, far 앞에 쓸 수 없습니다.",
          "오답. where는 '어디'라는 뜻으로 맞지 않습니다.",
          "오답. which는 '어느'라는 뜻으로 맞지 않습니다."
        ],
        key_concept: "how + 형용사/부사: 얼마나 ~한 (how many 몇 개, how far 얼마나 먼, how long 얼마나 오래)"
      }
    }),
    q(8, {
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• He needs to focus ______ studying instead of playing games.\n• Bring a jacket which is easy to put ______ and take off.",
      question: Q6,
      translation: "• 그는 게임을 하는 대신 공부에 집중할(focus on) 필요가 있다.\n• 입고(put on) 벗기 쉬운 재킷을 가져와라.",
      options: ["as", "of", "on", "like"],
      answer: 2,
      explanation: {
        summary: "focus on은 '~에 집중하다', put on은 '(옷을) 입다'라는 뜻입니다. 두 빈칸 모두 on이 들어갑니다.",
        options_breakdown: [
          "오답. as는 '~로서'라는 뜻으로 맞지 않습니다.",
          "오답. of는 '~의'라는 뜻으로 맞지 않습니다.",
          "정답. focus on '~에 집중하다', put on '입다'가 됩니다.",
          "오답. like는 '~처럼'이라는 뜻으로 맞지 않습니다."
        ],
        key_concept: "focus on: ~에 집중하다 / put on: 입다 ↔ take off: 벗다"
      }
    }),
    q(9, {
      category: "대화문",
      passage: "A: How would you describe your personality, Sumi?\nB: I tend to be cautious. I try to follow the saying, \"__Look before you leap.__\"\nA: Oh, you think carefully before you do something.",
      question: "다음 대화에서 밑줄 친 표현의 의미로 가장 적절한 것은?",
      translation: "A: 수미야, 너의 성격을 어떻게 설명하겠니?\nB: 나는 신중한 편이야. \"뛰기 전에 살펴라.\"라는 속담을 따르려고 노력해.\nA: 아, 너는 무언가를 하기 전에 신중하게 생각하는구나.",
      options: ["많으면 많을수록 좋다.", "남이 가진 것이 더 좋아 보인다.", "행동하기 전에 신중하게 생각해라.", "오늘 할 일을 내일로 미루지 마라."],
      answer: 2,
      explanation: {
        summary: "Look before you leap은 '뛰기(leap) 전에 먼저 살펴라(look)'라는 속담입니다. A도 you think carefully before you do something(무언가 하기 전에 신중하게 생각하는구나)이라고 풀어서 말하고 있습니다.",
        options_breakdown: [
          "오답. '많을수록 좋다'는 The more, the better입니다.",
          "오답. '남의 떡이 커 보인다'는 The grass is always greener on the other side입니다.",
          "정답. 행동(leap)하기 전에 살펴보라(look)는 뜻입니다.",
          "오답. '오늘 할 일을 내일로 미루지 마라'는 Don't put off until tomorrow what you can do today입니다."
        ],
        key_concept: "Look before you leap: 돌다리도 두들겨 보고 건너라 / cautious: 신중한, 조심스러운"
      }
    }),
    q(10, {
      category: "대화문",
      passage: "A: I'd like to return these headphones.\nB: Why? Is there a problem?\nA: I'm not satisfied with the sound. It's not loud enough.",
      question: "다음 대화에서 알 수 있는 A의 심정으로 가장 적절한 것은?",
      translation: "A: 이 헤드폰을 반품하고 싶어요.\nB: 왜요? 문제가 있나요?\nA: 소리가 만족스럽지 않아요. 소리가 충분히 크지 않아요.",
      options: ["감사", "불만", "안도", "행복"],
      answer: 1,
      explanation: {
        summary: "A는 헤드폰을 반품(return)하려고 하며 I'm not satisfied with the sound(소리가 만족스럽지 않다)라고 말합니다. 따라서 A는 불만을 느끼고 있습니다.",
        options_breakdown: [
          "오답. 감사(thankful)의 표현은 없습니다.",
          "정답. not satisfied(만족하지 않는)에서 불만을 알 수 있습니다.",
          "오답. 안도(relieved)의 표현은 없습니다.",
          "오답. 행복(happy)과는 반대되는 상황입니다."
        ],
        key_concept: "be satisfied with: ~에 만족하다 / return: 반품하다, 돌려주다"
      }
    }),
    q(11, {
      category: "대화문",
      passage: "A: There are so many people in this restaurant!\nB: Right. This place is well known for its pizza.\nA: Yeah. Let's order some.",
      question: "다음 대화가 이루어지는 장소로 가장 적절한 것은?",
      translation: "A: 이 식당에 사람이 정말 많다!\nB: 맞아. 이곳은 피자로 유명하거든.\nA: 그래. 우리도 좀 주문하자.",
      options: ["식당", "은행", "문구점", "소방서"],
      answer: 0,
      explanation: {
        summary: "in this restaurant(이 식당에), pizza(피자), order(주문하다)라는 말에서 대화 장소가 식당임을 알 수 있습니다.",
        options_breakdown: [
          "정답. restaurant는 '식당'입니다.",
          "오답. 은행(bank)과 관련된 말은 없습니다.",
          "오답. 문구점(stationery store)과 관련된 말은 없습니다.",
          "오답. 소방서(fire station)와 관련된 말은 없습니다."
        ],
        key_concept: "be well known for: ~로 유명하다(= be famous for) / order: 주문하다"
      }
    }),
    q(12, {
      category: "세부 정보",
      passage: "These days I'm reading a book, Greek and Roman Myths. The book is so interesting and encourages imagination. Moreover, __it__ gives me more understanding about western arts because the myths are a source of western culture.",
      question: "다음 글에서 밑줄 친 it이 가리키는 것으로 가장 적절한 것은?",
      translation: "요즘 나는 『그리스 로마 신화』라는 책을 읽고 있다. 그 책은 매우 재미있고 상상력을 북돋운다. 게다가, 그것은 신화가 서양 문화의 원천이기 때문에 나에게 서양 예술에 대한 더 많은 이해를 준다.",
      options: ["book", "pencil", "language", "password"],
      answer: 0,
      explanation: {
        summary: "앞 문장의 주어는 The book(그 책)이고, Moreover(게다가) it gives me ~로 책의 장점이 이어집니다. 따라서 it은 book입니다.",
        options_breakdown: [
          "정답. book '책'이 it이 가리키는 대상입니다.",
          "오답. pencil은 '연필'로 글에 나오지 않습니다.",
          "오답. language는 '언어'로 글에 나오지 않습니다.",
          "오답. password는 '비밀번호'로 글과 관계없습니다."
        ],
        key_concept: "Moreover(게다가)는 같은 대상에 대한 설명을 덧붙일 때 씁니다. it은 앞의 단수 명사(The book)를 가리킵니다."
      }
    }),
    q(13, {
      category: "대화문",
      groupLabel: G13,
      passage: "A: ______, cycling or walking?\nB: I like cycling rather than walking.\nA: Why do you like it?\nB: Because I think cycling burns more calories.",
      question: Q13,
      translation: "A: (어떤 종류의 운동을 더 좋아하니), 자전거 타기 아니면 걷기?\nB: 나는 걷기보다 자전거 타기를 좋아해.\nA: 왜 그걸 좋아해?\nB: 자전거 타기가 칼로리를 더 많이 태운다고 생각하거든.",
      options: ["Where can I rent a car", "When does the show start", "Why do you want to learn English", "Which type of exercise do you prefer"],
      answer: 3,
      explanation: {
        summary: "빈칸 뒤에 cycling or walking?(자전거 타기 아니면 걷기?)이 있고, B가 I like cycling(자전거 타기를 좋아해)이라고 답합니다. 두 운동 중 무엇을 더 좋아하는지 묻는 질문이 알맞습니다.",
        options_breakdown: [
          "오답. Where can I rent a car는 '어디서 차를 빌릴 수 있나요'라는 뜻입니다.",
          "오답. When does the show start는 '공연이 언제 시작하나요'라는 뜻입니다.",
          "오답. Why do you want to learn English는 '왜 영어를 배우고 싶니'라는 뜻입니다.",
          "정답. Which type of exercise do you prefer는 '어떤 종류의 운동을 더 좋아하니'라는 뜻입니다."
        ],
        key_concept: "Which ~ do you prefer, A or B?: A와 B 중 어느 것을 더 좋아하니? / A rather than B: B보다 A"
      }
    }),
    q(14, {
      category: "대화문",
      groupLabel: G13,
      passage: "A: How can we show respect to others?\nB: I believe we should ______.\nA: That's why you are a good listener.",
      question: Q13,
      translation: "A: 우리는 어떻게 다른 사람들에게 존중을 보여 줄 수 있을까?\nB: 나는 우리가 (다른 사람이 말할 때 주의 깊게 들어야) 한다고 생각해.\nA: 그래서 네가 남의 말을 잘 들어 주는 사람이구나.",
      options: ["watch a movie", "exchange this bag", "turn left at the next street", "listen carefully when others speak"],
      answer: 3,
      explanation: {
        summary: "다른 사람을 존중하는 방법을 묻고 있고, A가 That's why you are a good listener(그래서 네가 잘 들어 주는 사람이구나)라고 합니다. 따라서 '다른 사람이 말할 때 주의 깊게 듣기'가 알맞습니다.",
        options_breakdown: [
          "오답. watch a movie는 '영화를 보다'라는 뜻입니다.",
          "오답. exchange this bag은 '이 가방을 교환하다'라는 뜻입니다.",
          "오답. turn left at the next street은 '다음 길에서 왼쪽으로 돌다'라는 뜻입니다.",
          "정답. listen carefully when others speak는 '다른 사람이 말할 때 주의 깊게 듣다'라는 뜻입니다."
        ],
        key_concept: "show respect to ~: ~에게 존중을 보이다 / That's why ~: 그래서 ~하다"
      }
    }),
    q(15, {
      category: "대화문",
      passage: "A: Whenever I see koalas in trees, I wonder why they hug trees like that.\nB: Koalas hug trees to cool themselves down.\nA: Oh, that makes sense. Australia has a very hot climate.",
      question: "다음 대화의 주제로 가장 적절한 것은?",
      translation: "A: 나무 위의 코알라를 볼 때마다, 코알라들이 왜 저렇게 나무를 껴안는지 궁금해.\nB: 코알라는 몸을 식히려고 나무를 껴안아.\nA: 아, 그렇구나. 호주는 기후가 매우 덥잖아.",
      options: ["코알라의 사회성", "코알라 연구의 어려움", "코알라가 나무를 껴안고 있는 이유", "코알라처럼 나뭇잎을 먹는 동물들의 종류"],
      answer: 2,
      explanation: {
        summary: "A가 why they hug trees(왜 나무를 껴안는지)를 궁금해하고, B가 to cool themselves down(몸을 식히기 위해)이라고 이유를 설명합니다.",
        options_breakdown: [
          "오답. 코알라의 사회성에 대한 이야기는 없습니다.",
          "오답. 코알라 연구의 어려움은 언급되지 않았습니다.",
          "정답. 코알라가 나무를 껴안는 이유(몸을 식히려고)에 대한 대화입니다.",
          "오답. 나뭇잎을 먹는 동물들에 대한 이야기는 없습니다."
        ],
        key_concept: "wonder why ~: 왜 ~인지 궁금하다 / cool down: 식히다 / hug: 껴안다"
      }
    }),
    q(16, {
      category: "중심 내용",
      passage: "I'm writing this e-mail to confirm my reservation. I booked a family room at your hotel for two nights. We're two adults and one child. We will arrive in the afternoon on December 22nd. I look forward to your reply.",
      question: "다음 글을 쓴 목적으로 가장 적절한 것은?",
      translation: "제 예약을 확인하기 위해 이 이메일을 씁니다. 저는 귀 호텔에 가족실을 2박으로 예약했습니다. 저희는 성인 두 명과 아이 한 명입니다. 12월 22일 오후에 도착할 예정입니다. 답장을 기다리겠습니다.",
      options: ["확인하려고", "안내하려고", "소개하려고", "홍보하려고"],
      answer: 0,
      explanation: {
        summary: "첫 문장 I'm writing this e-mail to confirm my reservation(예약을 확인하기 위해 이 이메일을 씁니다)에 목적이 직접 나와 있습니다.",
        options_breakdown: [
          "정답. confirm은 '확인하다'라는 뜻으로, 예약 확인이 목적입니다.",
          "오답. 무언가를 안내하는 글이 아닙니다.",
          "오답. 무언가를 소개하는 글이 아닙니다.",
          "오답. 홍보하는 글이 아닙니다."
        ],
        key_concept: "I'm writing to ~: ~하기 위해 글을 씁니다(목적) / confirm: 확인하다 / reservation: 예약"
      }
    }),
    q(17, {
      category: "세부 정보",
      passage: "[안내문] Tennis Competition\n• Only beginners can participate.\n• We will start at 10:00 a.m. and finish at 5:00 p.m.\n• Lunch will not be served.\n• If it rains, the competition will be canceled.\n[그림: 테니스 치는 사람]",
      question: "다음 경기 안내문의 내용과 일치하지 않는 것은?",
      translation: "[안내문] 테니스 대회\n• 초보자만 참가할 수 있습니다.\n• 오전 10시에 시작하여 오후 5시에 끝납니다.\n• 점심은 제공되지 않습니다.\n• 비가 오면 대회는 취소됩니다.",
      options: ["초보자만 참여할 수 있다.", "오전 10시에 시작해서 오후 5시에 끝난다.", "점심은 제공되지 않는다.", "비가 와도 경기는 진행된다."],
      answer: 3,
      explanation: {
        summary: "If it rains, the competition will be canceled(비가 오면 대회는 취소된다)라고 했으므로 '비가 와도 진행된다'는 설명은 일치하지 않습니다.",
        options_breakdown: [
          "오답. Only beginners can participate와 일치합니다.",
          "오답. start at 10:00 a.m. and finish at 5:00 p.m.과 일치합니다.",
          "오답. Lunch will not be served와 일치합니다.",
          "정답. canceled는 '취소된'이라는 뜻이므로 비가 오면 경기는 열리지 않습니다."
        ],
        key_concept: "cancel: 취소하다 / beginner: 초보자 / serve: (음식을) 제공하다"
      }
    }),
    q(18, {
      category: "세부 정보",
      passage: "The Santa Fun Run is held every December. Participants wear Santa costumes and run 5 km. They run to raise money for sick children. You can see Santas of all ages walking and running around.",
      question: "다음 Santa Fun Run에 대한 설명과 일치하지 않는 것은?",
      translation: "산타 펀 런(Santa Fun Run)은 매년 12월에 열린다. 참가자들은 산타 복장을 입고 5km를 달린다. 그들은 아픈 아이들을 위한 돈을 모금하기 위해 달린다. 여러분은 모든 연령대의 산타들이 걷고 뛰어다니는 모습을 볼 수 있다.",
      options: ["매년 12월에 열린다.", "참가자들은 산타 복장을 입는다.", "멸종 위기 동물을 돕기 위해 모금을 한다.", "모든 연령대의 산타를 볼 수 있다."],
      answer: 2,
      explanation: {
        summary: "They run to raise money for sick children(아픈 아이들을 위해 돈을 모금하려고 달린다)이라고 했으므로 멸종 위기 동물을 돕기 위한 모금이 아닙니다.",
        options_breakdown: [
          "오답. is held every December와 일치합니다.",
          "오답. wear Santa costumes와 일치합니다.",
          "정답. 모금 대상은 sick children(아픈 아이들)이지 멸종 위기 동물이 아닙니다.",
          "오답. Santas of all ages와 일치합니다."
        ],
        key_concept: "raise money: 돈을 모금하다 / be held: 열리다 / participant: 참가자"
      }
    }),
    q(19, {
      category: "중심 내용",
      passage: "Do you suffer from feelings of loneliness? In such cases, it may be helpful to share your feelings with a parent, a teacher or a counselor. It is also important for you to take positive actions to overcome your negative feelings.",
      question: "다음 글의 주제로 가장 적절한 것은?",
      translation: "외로움을 느껴 괴로운가요? 그런 경우에는 부모님, 선생님 또는 상담 선생님과 감정을 나누는 것이 도움이 될 수 있습니다. 또한 부정적인 감정을 극복하기 위해 긍정적인 행동을 하는 것도 중요합니다.",
      options: ["인터넷의 역할", "여름 피서지 추천", "외로움에 대처하는 방법", "청소년의 다양한 취미 활동 소개"],
      answer: 2,
      explanation: {
        summary: "외로움(loneliness)을 느낄 때 감정을 다른 사람과 나누고(share your feelings), 긍정적인 행동을 하라(take positive actions)고 조언하므로 주제는 외로움에 대처하는 방법입니다.",
        options_breakdown: [
          "오답. 인터넷에 대한 내용은 없습니다.",
          "오답. 여름 피서지에 대한 내용은 없습니다.",
          "정답. 외로움을 느낄 때 할 수 있는 방법을 알려 주는 글입니다.",
          "오답. 취미 활동에 대한 내용은 없습니다."
        ],
        key_concept: "loneliness: 외로움 / suffer from: ~로 고통받다 / overcome: 극복하다"
      }
    }),
    q(20, {
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "For most people, the best ______ for sleeping is on your back. If you sleep on your back, you will have less neck and back pain. That's because your neck and spine will be straight when you are sleeping.",
      question: Q20,
      translation: "대부분의 사람들에게 가장 좋은 수면 (자세)는 등을 대고 눕는 것이다. 등을 대고 자면 목과 허리 통증이 줄어들 것이다. 그것은 잠을 자는 동안 목과 척추가 곧게 펴지기 때문이다.",
      options: ["letter", "position", "emotion", "population"],
      answer: 1,
      explanation: {
        summary: "on your back(등을 대고), 목과 척추가 곧게 된다는 내용은 잠잘 때의 '자세'에 관한 것입니다. 따라서 position이 알맞습니다.",
        options_breakdown: [
          "오답. letter는 '편지, 글자'라는 뜻입니다.",
          "정답. position은 '자세, 위치'라는 뜻입니다.",
          "오답. emotion은 '감정'이라는 뜻입니다.",
          "오답. population은 '인구'라는 뜻입니다."
        ],
        key_concept: "position: 자세, 위치 / sleep on your back: 등을 대고(바로 누워) 자다 / spine: 척추"
      }
    }),
    q(21, {
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "Here are several steps to ______ your problems. First, you need to find various solutions by gathering all the necessary information. Second, choose the best possible solution and then put it into action. At the end, evaluate the result. I'm sure these steps will help you.",
      question: Q20,
      translation: "여기 여러분의 문제를 (해결하기) 위한 몇 가지 단계가 있습니다. 첫째, 필요한 모든 정보를 모아 다양한 해결책을 찾아야 합니다. 둘째, 가능한 가장 좋은 해결책을 골라 실행에 옮기세요. 마지막으로, 결과를 평가하세요. 이 단계들이 분명 여러분에게 도움이 될 것입니다.",
      options: ["solve", "dance", "donate", "promise"],
      answer: 0,
      explanation: {
        summary: "solutions(해결책)를 찾고, 가장 좋은 해결책을 실행하는 단계가 나오므로 '문제를 해결하는 단계'라는 뜻이 되는 solve가 알맞습니다.",
        options_breakdown: [
          "정답. solve는 '해결하다'라는 뜻입니다(solution의 동사형).",
          "오답. dance는 '춤추다'라는 뜻입니다.",
          "오답. donate는 '기부하다'라는 뜻입니다.",
          "오답. promise는 '약속하다'라는 뜻입니다."
        ],
        key_concept: "solve a problem: 문제를 해결하다 / solution: 해결책 / put ~ into action: ~을 실행에 옮기다"
      }
    }),
    q(22, {
      category: "글의 흐름",
      passage: "When you first meet someone, how do you start a conversation? ( ① ) We don't usually tell each other our life stories at the beginning. ( ② ) This casual conversation is referred to as small talk. ( ③ ) It helps us feel comfortable and get to know each other better. ( ④ ) It's a good way to break the ice.",
      extra: "Instead, we start with a casual conversation about less serious things like the weather or traffic.",
      question: "글의 흐름으로 보아 다음 문장이 들어가기에 가장 적절한 곳은?",
      translation: "[주어진 문장] 대신에, 우리는 날씨나 교통처럼 덜 진지한 것들에 대한 가벼운 대화로 시작한다.\n\n누군가를 처음 만날 때, 여러분은 대화를 어떻게 시작하나요? ( ① ) 우리는 보통 처음부터 서로에게 자신의 인생 이야기를 하지 않습니다. ( ② ) 이런 가벼운 대화를 스몰 토크라고 부릅니다. ( ③ ) 그것은 우리가 편안함을 느끼고 서로를 더 잘 알게 도와줍니다. ( ④ ) 그것은 어색함을 깨는 좋은 방법입니다.",
      options: ["①", "②", "③", "④"],
      answer: 1,
      explanation: {
        summary: "② 앞 문장은 '처음부터 인생 이야기를 하지 않는다'이고, 주어진 문장은 Instead(대신에) 가벼운 대화로 시작한다는 내용입니다. 또 ② 뒤의 This casual conversation(이 가벼운 대화)은 주어진 문장의 a casual conversation을 가리키므로 ②가 알맞습니다.",
        options_breakdown: [
          "오답. ① 뒤에 '인생 이야기를 하지 않는다'가 먼저 나와야 Instead가 자연스럽습니다.",
          "정답. 인생 이야기를 하지 않음 → Instead 가벼운 대화 → This casual conversation(스몰 토크)으로 이어집니다.",
          "오답. ③ 앞에서 이미 This casual conversation이 나오므로, 그보다 먼저 가벼운 대화가 소개되어야 합니다.",
          "오답. ④는 스몰 토크의 장점 설명 중간이라 맞지 않습니다."
        ],
        key_concept: "Instead(대신에)는 앞의 부정문(don't ~)과 짝을 이룹니다. this + 명사는 바로 앞에 나온 내용을 가리킵니다. break the ice: 어색한 분위기를 깨다"
      }
    }),
    q(23, {
      category: "글의 흐름",
      passage: "English proverbs may seem strange to non-native speakers and can be very hard for them to learn and remember. One strategy for remembering English proverbs more easily is to learn about their origins. Let's look at some examples.",
      question: "다음 글의 바로 뒤에 이어질 내용으로 가장 적절한 것은?",
      translation: "영어 속담은 원어민이 아닌 사람들에게 이상하게 보일 수 있고, 그들이 배우고 기억하기 매우 어려울 수 있다. 영어 속담을 더 쉽게 기억하는 한 가지 전략은 그 기원에 대해 배우는 것이다. 몇 가지 예를 살펴보자.",
      options: ["꽃말의 어원에 관한 예시", "영어 속담의 기원에 관한 예시", "긍정적인 마음가짐에 대한 예시", "친환경적인 생활 습관에 대한 예시"],
      answer: 1,
      explanation: {
        summary: "영어 속담을 쉽게 기억하려면 그 기원(origins)을 배우라고 한 뒤 Let's look at some examples(몇 가지 예를 살펴보자)로 끝납니다. 따라서 다음에는 영어 속담의 기원에 관한 예시가 나옵니다.",
        options_breakdown: [
          "오답. 꽃말에 대한 내용은 없습니다.",
          "정답. 영어 속담(English proverbs)의 기원(origins)에 대한 예시가 이어집니다.",
          "오답. 긍정적인 마음가짐에 대한 내용은 없습니다.",
          "오답. 친환경 생활 습관에 대한 내용은 없습니다."
        ],
        key_concept: "proverb: 속담 / origin: 기원, 유래 / Let's look at some examples: 뒤에 예시가 이어짐을 알리는 신호"
      }
    }),
    q(24, {
      category: "빈칸 추론",
      groupLabel: G24,
      passage: P24,
      question: "윗글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: T24,
      options: ["flight", "opinion", "gesture", "architecture"],
      answer: 1,
      explanation: {
        summary: "첫 문장에서 A book review is a reader's opinion about a book(서평은 책에 대한 독자의 의견)이라고 했고, 빈칸 뒤에 '좋았는지 아닌지와 그 이유'가 나오므로 '의견'이라는 뜻의 opinion이 알맞습니다.",
        options_breakdown: [
          "오답. flight는 '비행, 항공편'이라는 뜻입니다.",
          "정답. opinion은 '의견'이라는 뜻입니다.",
          "오답. gesture는 '몸짓'이라는 뜻입니다.",
          "오답. architecture는 '건축'이라는 뜻입니다."
        ],
        key_concept: "opinion: 의견 / state: (분명히) 말하다, 진술하다 / whether A or not: A인지 아닌지"
      }
    }),
    q(25, {
      category: "중심 내용",
      groupLabel: G24,
      passage: P24,
      question: "윗글의 주제로 가장 적절한 것은?",
      translation: T24,
      options: ["창의력의 중요성", "진로 탐색의 필요성", "온라인 수업의 장점", "독서 감상문 쓰는 법"],
      answer: 3,
      explanation: {
        summary: "When you write a review(감상문을 쓸 때) 요약으로 시작하고(begin with), 그다음 의견을 밝히라(Then state)고 순서대로 설명하므로 주제는 독서 감상문 쓰는 법입니다.",
        options_breakdown: [
          "오답. 창의력에 대한 내용은 없습니다.",
          "오답. 진로 탐색에 대한 내용은 없습니다.",
          "오답. 온라인 수업에 대한 내용은 없습니다.",
          "정답. book review(서평, 독서 감상문)를 쓰는 방법을 설명하는 글입니다."
        ],
        key_concept: "book review: 서평, 독서 감상문 / summary: 요약 / description: 설명, 묘사"
      }
    })
  );
})();
