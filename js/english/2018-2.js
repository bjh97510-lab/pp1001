// 2018년도 제2회 고졸 검정고시 영어 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(function () {
  const G1 = "[1~3] 밑줄 친 부분의 뜻으로 가장 적절한 것을 고르시오.";
  const G6 = "[6~8] 빈칸에 공통으로 들어갈 말로 가장 적절한 것을 고르시오.";
  const G12 = "[12~13] 대화의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const G22 = "[22~23] 다음 글을 읽고 물음에 답하시오.";
  const P22 = "Ice cream is considered to be a modern food, but ancient people also ate a kind of ice cream. For example, more than 2,000 years ago, people in China would create a dish of rice mixed with frozen milk during wintertime. Likewise, it is said that Alexander the Great ______ eating snow flavored with honey. Isn't it interesting that ancient people could find pleasure in ice cream without the freezing technology we have today?";
  const T22 = "아이스크림은 현대의 음식으로 여겨지지만, 고대 사람들도 일종의 아이스크림을 먹었다. 예를 들어, 2,000여 년 전 중국 사람들은 겨울철에 얼린 우유를 섞은 쌀 요리를 만들곤 했다. 마찬가지로, 알렉산더 대왕은 꿀로 맛을 낸 눈을 먹는 것을 (즐겼다고) 한다. 고대 사람들이 오늘날 우리가 가진 냉동 기술 없이도 아이스크림에서 즐거움을 찾을 수 있었다는 것이 흥미롭지 않은가?";
  const G24 = "[24~25] 다음 글을 읽고 물음에 답하시오.";
  const P24 = "One of the common advertising techniques is to repeat the product name. Repeating the product name may increase sales. For example, imagine that you go shopping for shampoo but you haven't decided which to buy. The first shampoo that comes to your mind is the one with the name you have recently heard a lot. ______, repeating the name can lead to consumers buying the product.";
  const T24 = "흔한 광고 기법 중 하나는 제품 이름을 반복하는 것이다. 제품 이름을 반복하면 판매가 늘어날 수 있다. 예를 들어, 당신이 샴푸를 사러 갔는데 어떤 것을 살지 정하지 못했다고 상상해 보라. 가장 먼저 떠오르는 샴푸는 최근에 이름을 많이 들어 본 제품이다. (그러므로) 이름을 반복하는 것은 소비자가 그 제품을 사도록 이끌 수 있다.";
  const E = "2018년 제2회";

  (window.QUESTION_BANK = window.QUESTION_BANK || []).push(
    {
      id: "english_2018_2_01", subject: "english", exam: E, number: 1,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "David put a lot of __effort__ into the exam.",
      extra: "",
      question: "밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "David는 시험에 많은 노력을 쏟았다.",
      imageUrl: null, needsImage: false,
      options: ["노력", "의미", "조언", "좌절"],
      answer: 0,
      explanation: {
        summary: "effort는 '노력'이라는 뜻입니다. put effort into ~는 '~에 노력을 쏟다'라는 표현이므로 정답은 ①입니다.",
        options_breakdown: [
          "정답. effort는 '노력'이라는 뜻입니다.",
          "오답. '의미'는 영어로 meaning입니다.",
          "오답. '조언'은 영어로 advice입니다.",
          "오답. '좌절'은 영어로 frustration입니다."
        ],
        key_concept: "put (a lot of) effort into ~: ~에 (많은) 노력을 쏟다"
      }
    },
    {
      id: "english_2018_2_02", subject: "english", exam: E, number: 2,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "Many countries __suffer from__ a lack of water.",
      extra: "",
      question: "밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "많은 나라들이 물 부족으로 고통받는다.",
      imageUrl: null, needsImage: false,
      options: ["절약하다", "이용하다", "낭비하다", "고통받다"],
      answer: 3,
      explanation: {
        summary: "suffer from은 '~으로 고통받다'라는 뜻입니다. 뒤에 a lack of water(물 부족)라는 어려운 상황이 나오므로 '고통받다'가 알맞고 정답은 ④입니다.",
        options_breakdown: [
          "오답. '절약하다'는 영어로 save입니다.",
          "오답. '이용하다'는 영어로 use입니다.",
          "오답. '낭비하다'는 영어로 waste입니다.",
          "정답. suffer from은 '~으로 고통받다'라는 뜻입니다."
        ],
        key_concept: "suffer from ~: ~으로 고통받다 / a lack of ~: ~의 부족"
      }
    },
    {
      id: "english_2018_2_03", subject: "english", exam: E, number: 3,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "A: Excuse me, can I have soup __instead of__ salad?\nB: Sure. I will bring it in a minute.",
      extra: "",
      question: "밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "A: 실례합니다, 샐러드 대신에 수프를 먹을 수 있을까요?\nB: 물론이죠. 금방 가져다 드릴게요.",
      imageUrl: null, needsImage: false,
      options: ["～로써", "～대신에", "～덕분에", "～와 함께"],
      answer: 1,
      explanation: {
        summary: "instead of는 '~ 대신에'라는 뜻입니다. 샐러드를 빼고 수프로 바꿔 달라는 요청이므로 정답은 ②입니다.",
        options_breakdown: [
          "오답. '~로써'는 영어로 as, by입니다.",
          "정답. instead of는 '~ 대신에'라는 뜻입니다.",
          "오답. '~ 덕분에'는 영어로 thanks to입니다.",
          "오답. '~와 함께'는 영어로 with, along with입니다."
        ],
        key_concept: "instead of ~: ~ 대신에"
      }
    },
    {
      id: "english_2018_2_04", subject: "english", exam: E, number: 4,
      category: "어휘·어법",
      groupLabel: "",
      passage: "",
      extra: "",
      question: "두 단어의 의미 관계가 나머지 셋과 다른 것은?",
      translation: "",
      imageUrl: null, needsImage: false,
      options: ["joy － sadness", "furniture － sofa", "subject － science", "animal － chimpanzee"],
      answer: 0,
      explanation: {
        summary: "②③④는 앞 단어가 큰 범주이고 뒤 단어가 그 안에 속하는 예(상하위어 관계)입니다. ① joy(기쁨)와 sadness(슬픔)는 뜻이 반대인 반의어 관계이므로 정답은 ①입니다.",
        options_breakdown: [
          "정답. joy(기쁨)와 sadness(슬픔)는 반의어 관계입니다.",
          "오답. furniture(가구)의 한 종류가 sofa(소파)인 상하위어 관계입니다.",
          "오답. subject(과목)의 한 종류가 science(과학)인 상하위어 관계입니다.",
          "오답. animal(동물)의 한 종류가 chimpanzee(침팬지)인 상하위어 관계입니다."
        ],
        key_concept: "상하위어: 큰 범주 – 그 예(furniture – sofa) / 반의어: 반대 뜻(joy – sadness)"
      }
    },
    {
      id: "english_2018_2_05", subject: "english", exam: E, number: 5,
      category: "세부 정보",
      groupLabel: "",
      passage: "[안내문] Moonlight Tour of the Beautiful Palace!\n• Opening : Tuesday to Friday 7 p.m. － 9 p.m.\n• Reservation : Book on our website one day before (www.moonlight.co.kr)\n• Entrance Fee : Free for everyone\n[그림: 궁궐 건물]",
      extra: "",
      question: "다음 광고문에서 언급되지 않은 것은?",
      translation: "[안내문] 아름다운 궁궐 달빛 기행!\n• 운영: 화요일~금요일 오후 7시~9시\n• 예약: 하루 전에 저희 웹사이트에서 예약하세요 (www.moonlight.co.kr)\n• 입장료: 모두 무료",
      imageUrl: null, needsImage: false,
      options: ["운영 시간", "예약 방법", "준비물", "입장료"],
      answer: 2,
      explanation: {
        summary: "광고문에는 운영 시간(Opening), 예약 방법(Reservation), 입장료(Entrance Fee)가 나와 있지만 가져와야 할 준비물은 나오지 않습니다. 따라서 정답은 ③입니다.",
        options_breakdown: [
          "오답. Opening : Tuesday to Friday 7 p.m. － 9 p.m.으로 운영 시간이 나와 있습니다.",
          "오답. Book on our website one day before로 예약 방법이 나와 있습니다.",
          "정답. 준비물에 대한 내용은 없습니다.",
          "오답. Entrance Fee : Free for everyone으로 입장료가 나와 있습니다."
        ],
        key_concept: "reservation / book: 예약(하다) / entrance fee: 입장료"
      }
    },
    {
      id: "english_2018_2_06", subject: "english", exam: E, number: 6,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Can you explain ______ to use the copy machine?\n• I can't understand ______ he solved the problem.",
      extra: "",
      question: "빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 복사기를 (어떻게) 사용하는지 설명해 줄 수 있니?\n• 나는 그가 그 문제를 (어떻게) 풀었는지 이해할 수 없다.",
      imageUrl: null, needsImage: false,
      options: ["what", "that", "who", "how"],
      answer: 3,
      explanation: {
        summary: "how to use는 '사용하는 방법'이고, how he solved the problem은 '그가 문제를 어떻게 풀었는지'라는 뜻입니다. 두 문장 모두 how가 알맞으므로 정답은 ④입니다.",
        options_breakdown: [
          "오답. what to use는 '무엇을 사용할지'가 되어 뒤에 목적어(the copy machine)가 있는 문장과 맞지 않습니다.",
          "오답. that은 'to use' 앞에 쓸 수 없습니다.",
          "오답. who는 '누구'라는 뜻으로 두 문장의 의미에 맞지 않습니다.",
          "정답. how는 '어떻게, ~하는 방법'이라는 뜻입니다."
        ],
        key_concept: "how to + 동사원형: ~하는 방법 / how + 주어 + 동사: 어떻게 ~하는지"
      }
    },
    {
      id: "english_2018_2_07", subject: "english", exam: E, number: 7,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• The flood had caused serious ______ to the village.\n• Don't ______ the surface of the table with the pencil.",
      extra: "",
      question: "빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 홍수는 그 마을에 심각한 (피해)를 입혔다.\n• 연필로 탁자 표면을 (손상시키지) 마라.",
      imageUrl: null, needsImage: false,
      options: ["damage", "gesture", "comment", "concern"],
      answer: 0,
      explanation: {
        summary: "damage는 명사로 '피해, 손상', 동사로 '손상시키다'라는 뜻입니다. 홍수가 마을에 입힌 '피해', 연필로 탁자 표면을 '손상시키다' 모두에 맞으므로 정답은 ①입니다.",
        options_breakdown: [
          "정답. damage는 '피해(명사), 손상시키다(동사)'라는 뜻입니다.",
          "오답. gesture는 '몸짓'이라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. comment는 '논평(하다)'이라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. concern은 '걱정, 관심; 관련되다'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "cause damage to ~: ~에 피해를 입히다 / damage(동사): 손상시키다"
      }
    },
    {
      id: "english_2018_2_08", subject: "english", exam: E, number: 8,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• All the people focused ______ her performance.\n• This island's economy depends ______ tourism.",
      extra: "",
      question: "빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 모든 사람들이 그녀의 공연에 집중했다(on).\n• 이 섬의 경제는 관광업에 의존한다(on).",
      imageUrl: null, needsImage: false,
      options: ["as", "on", "at", "by"],
      answer: 1,
      explanation: {
        summary: "focus on은 '~에 집중하다', depend on은 '~에 의존하다'라는 표현입니다. 두 곳 모두 on이 들어가므로 정답은 ②입니다.",
        options_breakdown: [
          "오답. as는 '~로서'라는 뜻으로 두 표현에 맞지 않습니다.",
          "정답. focus on(집중하다), depend on(의존하다)에 모두 on이 쓰입니다.",
          "오답. at은 '~에(지점)'라는 뜻으로 두 동사와 짝을 이루지 않습니다.",
          "오답. by는 '~에 의해'라는 뜻으로 두 동사와 짝을 이루지 않습니다."
        ],
        key_concept: "focus on ~: ~에 집중하다 / depend on ~: ~에 의존하다"
      }
    },
    {
      id: "english_2018_2_09", subject: "english", exam: E, number: 9,
      category: "대화문",
      groupLabel: "",
      passage: "A: Excuse me, I'd like to buy two tickets to Seoul, please. What time does the next train depart?\nB: Oh, the next train leaves in ten minutes. If you want to take that one, you should hurry.",
      extra: "",
      question: "대화가 이루어지는 장소로 가장 적절한 것은?",
      translation: "A: 실례합니다, 서울행 표 두 장을 사고 싶어요. 다음 기차는 몇 시에 출발하나요?\nB: 아, 다음 기차는 10분 후에 떠나요. 그 기차를 타고 싶으시면 서두르셔야 해요.",
      imageUrl: null, needsImage: false,
      options: ["수영장", "미술관", "도서관", "기차역"],
      answer: 3,
      explanation: {
        summary: "tickets to Seoul(서울행 표), the next train depart(다음 기차 출발) 같은 표현으로 보아 기차표를 사는 장면입니다. 따라서 장소는 기차역이며 정답은 ④입니다.",
        options_breakdown: [
          "오답. 수영장에서는 기차표를 팔지 않습니다.",
          "오답. 미술관에서는 기차 출발 시간을 묻지 않습니다.",
          "오답. 도서관에서는 기차표를 사지 않습니다.",
          "정답. train, tickets to Seoul로 보아 기차역입니다."
        ],
        key_concept: "depart / leave: 출발하다 / in ten minutes: 10분 후에"
      }
    },
    {
      id: "english_2018_2_10", subject: "english", exam: E, number: 10,
      category: "대화문",
      groupLabel: "",
      passage: "A: I was surprised by the inside of the house.\nB: Why were you surprised?\nA: When I saw the dirty garden, I thought the inside would be dirty, too.\nB: You should not __judge a book by its cover.__",
      extra: "",
      question: "밑줄 친 표현의 의미로 가장 적절한 것은?",
      translation: "A: 나는 그 집 내부를 보고 놀랐어.\nB: 왜 놀랐는데?\nA: 지저분한 정원을 봤을 때, 집 안도 지저분할 거라고 생각했거든.\nB: 겉모습으로 판단하면 안 돼.",
      imageUrl: null, needsImage: false,
      options: ["정원을 더럽히다", "책 표지에 낙서하다", "겉모습으로 판단하다", "지저분한 장소를 피하다"],
      answer: 2,
      explanation: {
        summary: "judge a book by its cover는 직역하면 '표지로 책을 판단하다'로, '겉모습만 보고 판단하다'라는 뜻의 관용 표현입니다. A가 정원만 보고 집 안도 더러울 거라 생각한 상황에 맞으므로 정답은 ③입니다.",
        options_breakdown: [
          "오답. 정원을 더럽힌다는 내용이 아닙니다.",
          "오답. 실제 책 표지를 말하는 것이 아니라 비유적 표현입니다.",
          "정답. judge a book by its cover는 '겉모습으로 판단하다'라는 뜻입니다.",
          "오답. 지저분한 장소를 피한다는 뜻이 아닙니다."
        ],
        key_concept: "Don't judge a book by its cover.: 겉모습만 보고 판단하지 마라."
      }
    },
    {
      id: "english_2018_2_11", subject: "english", exam: E, number: 11,
      category: "대화문",
      groupLabel: "",
      passage: "A: Yubin, I heard you're taking a family trip to London this summer.\nB: Yes, I'm very excited to see Big Ben.\nA: That sounds great. Show me the pictures when you get back.\nB: Sure. I can't wait for the trip!",
      extra: "",
      question: "대화에서 알 수 있는 B의 심정으로 가장 적절한 것은?",
      translation: "A: 유빈아, 이번 여름에 런던으로 가족 여행을 간다며.\nB: 응, 빅 벤을 볼 생각에 정말 신나.\nA: 멋지다. 돌아오면 사진 보여 줘.\nB: 물론이지. 여행이 너무 기다려져!",
      imageUrl: null, needsImage: false,
      options: ["후회하다", "실망하다", "망설이다", "기대하다"],
      answer: 3,
      explanation: {
        summary: "B는 I'm very excited(정말 신나)와 I can't wait for the trip(여행이 너무 기다려져)이라고 말합니다. 여행을 손꼽아 기다리는 마음이므로 정답은 ④ '기대하다'입니다.",
        options_breakdown: [
          "오답. 후회하다(regret)는 여행을 앞두고 신나 하는 B의 말과 맞지 않습니다.",
          "오답. 실망하다(disappointed)는 excited와 반대되는 감정입니다.",
          "오답. 망설이다(hesitate)는 여행이 기다려진다는 말과 맞지 않습니다.",
          "정답. excited, can't wait에서 기대하는 심정을 알 수 있습니다."
        ],
        key_concept: "I can't wait for ~: ~이 몹시 기다려진다 / be excited to ~: ~해서 신나다"
      }
    },
    {
      id: "english_2018_2_12", subject: "english", exam: E, number: 12,
      category: "대화문",
      groupLabel: G12,
      passage: "A: Where are you going?\nB: I am going to visit my grandmother.\nA: ______\nB: I will help her to make kimchi.",
      extra: "",
      question: "대화의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "A: 어디 가니?\nB: 할머니 댁에 가.\nA: (거기서 뭐 할 거야?)\nB: 할머니가 김치 담그시는 걸 도와드릴 거야.",
      imageUrl: null, needsImage: false,
      options: ["What will you do there?", "How far is it from here?", "When will you arrive there?", "Which is the best way to get there?"],
      answer: 0,
      explanation: {
        summary: "B가 빈칸 뒤에서 I will help her to make kimchi(김치 담그는 것을 도와드릴 거야)라고 할 일을 답했습니다. 따라서 '거기서 무엇을 할 거니?'라고 묻는 ①이 정답입니다.",
        options_breakdown: [
          "정답. What will you do there?는 '거기서 뭐 할 거니?'라는 뜻입니다.",
          "오답. How far is it from here?는 '여기서 얼마나 머니?'라는 뜻으로 거리를 묻습니다.",
          "오답. When will you arrive there?는 '거기에 언제 도착하니?'라는 뜻으로 시간을 묻습니다.",
          "오답. Which is the best way to get there?는 '거기 가는 가장 좋은 방법이 뭐니?'라는 뜻입니다."
        ],
        key_concept: "대화 빈칸은 바로 뒤의 대답을 보고 알맞은 질문(What/How far/When)을 고릅니다."
      }
    },
    {
      id: "english_2018_2_13", subject: "english", exam: E, number: 13,
      category: "대화문",
      groupLabel: G12,
      passage: "A: Can you give me some advice for skin trouble?\nB: ______",
      extra: "",
      question: "대화의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "A: 피부 트러블에 대해 조언 좀 해 줄 수 있니?\nB: (물론이지. 유분 없는 로션을 사용해 봐.)",
      imageUrl: null, needsImage: false,
      options: ["Oh, you really did a good job.", "That's a good idea. I will use it.", "Sure. You can try using oil-free lotion.", "Great! I'm really happy to get your tips."],
      answer: 2,
      explanation: {
        summary: "A가 피부 트러블에 대한 조언(advice)을 요청했으므로, B는 구체적인 조언을 해 주어야 합니다. '유분 없는 로션을 사용해 봐'라고 조언하는 ③이 정답입니다.",
        options_breakdown: [
          "오답. '정말 잘했구나'는 칭찬하는 말로 조언 요청에 맞지 않습니다.",
          "오답. '좋은 생각이야. 그걸 써 볼게'는 조언을 받은 사람이 할 말입니다.",
          "정답. '물론이지. 유분 없는 로션을 써 봐'로 조언을 해 주고 있습니다.",
          "오답. '조언을 받아서 기뻐'는 조언을 받은 사람이 할 말입니다."
        ],
        key_concept: "give advice: 조언하다 / You can try -ing: ~해 봐(조언 표현)"
      }
    },
    {
      id: "english_2018_2_14", subject: "english", exam: E, number: 14,
      category: "세부 정보",
      groupLabel: "",
      passage: "Andy Warhol was born in Pittsburgh, Pennsylvania. He moved to New York in 1949, where he started his career as a commercial artist. In the early 1960s, he began to paint common things like cans of soup. His works inspired many contemporary* artists.\n* contemporary: 동시대의",
      extra: "",
      question: "Andy Warhol에 관한 다음 글에서 언급되지 않은 것은?",
      translation: "앤디 워홀은 펜실베이니아주 피츠버그에서 태어났다. 그는 1949년 뉴욕으로 이주했고, 그곳에서 상업 예술가로서 경력을 시작했다. 1960년대 초, 그는 수프 통조림 같은 평범한 것들을 그리기 시작했다. 그의 작품들은 많은 동시대 예술가들에게 영감을 주었다.",
      imageUrl: null, needsImage: false,
      options: ["New York에서 태어났다.", "상업 예술가로 활동했다.", "평범한 대상을 그림의 소재로 사용했다.", "그의 작품은 동시대의 예술가들에게 영향을 주었다."],
      answer: 0,
      explanation: {
        summary: "첫 문장 Andy Warhol was born in Pittsburgh, Pennsylvania에 따르면 그는 피츠버그에서 태어났고, 뉴욕은 나중에 이주한(moved to) 곳입니다. 따라서 'New York에서 태어났다'는 글과 다르며 정답은 ①입니다.",
        options_breakdown: [
          "정답. 그는 Pittsburgh에서 태어났고 New York으로는 이사했을 뿐입니다.",
          "오답. started his career as a commercial artist와 일치합니다.",
          "오답. began to paint common things like cans of soup와 일치합니다.",
          "오답. His works inspired many contemporary artists와 일치합니다."
        ],
        key_concept: "be born in: ~에서 태어나다 / move to: ~로 이사하다 / inspire: 영감을 주다"
      }
    },
    {
      id: "english_2018_2_15", subject: "english", exam: E, number: 15,
      category: "세부 정보",
      groupLabel: "",
      passage: "__It__ is one of the most popular team sports in the world. __It__ is played on a field, and two teams of eleven players try to kick a round ball into a goal without using their hands or arms.",
      extra: "",
      question: "밑줄 친 It이 가리키는 것으로 가장 적절한 것은?",
      translation: "그것은 세계에서 가장 인기 있는 팀 스포츠 중 하나이다. 그것은 경기장에서 하며, 11명으로 이루어진 두 팀이 손이나 팔을 쓰지 않고 둥근 공을 차서 골대에 넣으려고 한다.",
      imageUrl: null, needsImage: false,
      options: ["handball", "baseball", "tennis", "soccer"],
      answer: 3,
      explanation: {
        summary: "eleven players(11명의 선수), kick a round ball into a goal(둥근 공을 차서 골에 넣다), without using their hands(손을 쓰지 않고)라는 설명은 축구(soccer)에 해당합니다. 따라서 정답은 ④입니다.",
        options_breakdown: [
          "오답. handball(핸드볼)은 손으로 공을 던지는 경기입니다.",
          "오답. baseball(야구)은 방망이로 공을 치는 경기입니다.",
          "오답. tennis(테니스)는 라켓으로 공을 치는 경기이며 팀당 11명이 아닙니다.",
          "정답. soccer(축구)는 11명씩 두 팀이 손을 쓰지 않고 공을 차는 경기입니다."
        ],
        key_concept: "kick: 차다 / without using their hands: 손을 사용하지 않고"
      }
    },
    {
      id: "english_2018_2_16", subject: "english", exam: E, number: 16,
      category: "대화문",
      groupLabel: "",
      passage: "Good afternoon. May I take your order?",
      extra: "<보기>\n(A) Thanks. I will take that.\n(B) Well, what would you recommend?\n(C) How about the tuna sandwich? It is popular here.",
      question: "주어진 말에 이어질 두 사람의 대화를 <보기>에서 찾아 순서대로 가장 적절하게 배열한 것은?",
      translation: "안녕하세요. 주문하시겠어요?\n<보기>\n(A) 고마워요. 그걸로 할게요.\n(B) 음, 무엇을 추천하시나요?\n(C) 참치 샌드위치는 어떠세요? 여기서 인기가 많아요.",
      imageUrl: null, needsImage: false,
      options: ["(A) － (B) － (C)", "(B) － (A) － (C)", "(B) － (C) － (A)", "(C) － (B) － (A)"],
      answer: 2,
      explanation: {
        summary: "'주문하시겠어요?'에 손님이 추천을 부탁하고(B), 점원이 참치 샌드위치를 추천하며(C), 손님이 그것으로 하겠다고(A) 답하는 순서가 자연스럽습니다. 따라서 정답은 ③입니다.",
        options_breakdown: [
          "오답. (A) I will take that의 that이 가리킬 메뉴가 아직 나오지 않았습니다.",
          "오답. (A) 다음에 (C)가 오면 이미 주문한 뒤에 다시 추천하는 어색한 흐름입니다.",
          "정답. 추천 요청(B) → 추천(C) → 선택(A)의 흐름이 자연스럽습니다.",
          "오답. 손님이 추천을 부탁하기 전에 점원이 먼저 추천하는 (C)가 오면, 그 뒤에 다시 추천을 묻는 (B)가 어색합니다."
        ],
        key_concept: "May I take your order?: 주문하시겠어요? / What would you recommend?: 무엇을 추천하시나요?"
      }
    },
    {
      id: "english_2018_2_17", subject: "english", exam: E, number: 17,
      category: "세부 정보",
      groupLabel: "",
      passage: "Before the movie begins, we have some announcements to give you. Please make sure your phone is on silent or turn it off. Also, keep quiet and remain in your seat until the end.",
      extra: "",
      question: "영화 관람에 관한 다음 안내 방송에서 언급되지 않은 것은?",
      translation: "영화가 시작되기 전에 몇 가지 안내 말씀을 드리겠습니다. 휴대 전화를 반드시 무음으로 하시거나 전원을 꺼 주십시오. 또한 조용히 해 주시고 끝날 때까지 자리에 앉아 계십시오.",
      imageUrl: null, needsImage: false,
      options: ["정숙하게 관람하기", "자리 이동하지 않기", "휴대 전화 전원 끄기", "앞좌석 발로 차지 않기"],
      answer: 3,
      explanation: {
        summary: "안내 방송에는 휴대 전화 끄기(turn it off), 조용히 하기(keep quiet), 자리에 머무르기(remain in your seat)가 나오지만, 앞좌석을 발로 차지 말라는 내용은 없습니다. 따라서 정답은 ④입니다.",
        options_breakdown: [
          "오답. keep quiet(조용히 하세요)로 언급되었습니다.",
          "오답. remain in your seat until the end(끝까지 자리에 계세요)로 언급되었습니다.",
          "오답. turn it off(전원을 끄세요)로 언급되었습니다.",
          "정답. 앞좌석을 발로 차지 말라는 내용은 없습니다."
        ],
        key_concept: "make sure ~: 반드시 ~하도록 하다 / remain in your seat: 자리에 머무르다"
      }
    },
    {
      id: "english_2018_2_18", subject: "english", exam: E, number: 18,
      category: "글의 흐름",
      groupLabel: "",
      passage: "A cold is one of the most common illnesses. If you catch a cold, you usually have a runny nose, and sometimes a fever. The best way to prevent a cold is keeping your body strong and healthy. Here are some tips to protect yourself against it.",
      extra: "",
      question: "다음 글의 바로 뒤에 이어질 내용으로 가장 적절한 것은?",
      translation: "감기는 가장 흔한 질병 중 하나이다. 감기에 걸리면 보통 콧물이 나고, 때로는 열이 난다. 감기를 예방하는 가장 좋은 방법은 몸을 튼튼하고 건강하게 유지하는 것이다. 여기 감기로부터 자신을 보호하는 몇 가지 방법이 있다.",
      imageUrl: null, needsImage: false,
      options: ["감기 예방법", "감기의 증상", "알레르기의 종류", "겨울철 질병의 유형"],
      answer: 0,
      explanation: {
        summary: "마지막 문장 Here are some tips to protect yourself against it(감기로부터 자신을 보호하는 방법이 여기 있다)이 다음 내용을 예고합니다. 따라서 뒤에는 감기 예방법이 이어지며 정답은 ①입니다.",
        options_breakdown: [
          "정답. 마지막 문장이 감기로부터 자신을 보호하는 방법(예방법)을 소개하겠다고 예고합니다.",
          "오답. 감기의 증상(콧물, 열)은 이미 글 안에서 언급되었습니다.",
          "오답. 알레르기는 언급되지 않았습니다.",
          "오답. 겨울철 질병의 유형은 글의 흐름과 관계없습니다."
        ],
        key_concept: "protect A against B: B로부터 A를 보호하다 / prevent: 예방하다"
      }
    },
    {
      id: "english_2018_2_19", subject: "english", exam: E, number: 19,
      category: "빈칸 추론",
      groupLabel: "",
      passage: "Nowadays, glaciers* are melting and sea levels are rising, threatening environments. These are known to be results of global warming. Global warming is the rise of world temperatures caused by the increased production of carbon dioxide** around the world. It is clear that we are facing noticeable ______ to the Earth's climate.\n* glaciers: 빙하\n** carbon dioxide: 이산화탄소",
      extra: "",
      question: "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "오늘날 빙하가 녹고 해수면이 상승하여 환경을 위협하고 있다. 이것들은 지구 온난화의 결과로 알려져 있다. 지구 온난화는 전 세계적으로 이산화탄소 배출이 늘어나 세계 기온이 상승하는 것이다. 우리가 지구의 기후에 대한 뚜렷한 (변화)에 직면하고 있다는 것은 분명하다.",
      imageUrl: null, needsImage: false,
      options: ["changes", "rewards", "comforts", "achievements"],
      answer: 0,
      explanation: {
        summary: "빙하가 녹고, 해수면이 오르고, 기온이 상승한다는 내용은 모두 기후의 '변화'를 보여 줍니다. 따라서 '뚜렷한 기후 변화에 직면하고 있다'가 되도록 changes가 알맞으며 정답은 ①입니다.",
        options_breakdown: [
          "정답. changes는 '변화'라는 뜻입니다.",
          "오답. rewards는 '보상'이라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. comforts는 '위안, 편안함'이라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. achievements는 '업적, 성취'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "global warming: 지구 온난화 / face: 직면하다 / noticeable: 눈에 띄는, 뚜렷한"
      }
    },
    {
      id: "english_2018_2_20", subject: "english", exam: E, number: 20,
      category: "중심 내용",
      groupLabel: "",
      passage: "There will be a DIY (Do-It-Yourself) Fashion Program in our city center. It can give you the chance to learn from fashion designers. You will design your own clothes and do the needlework.",
      extra: "",
      question: "다음 글의 목적으로 가장 적절한 것은?",
      translation: "우리 시내 중심가에서 DIY(직접 만들기) 패션 프로그램이 열릴 예정입니다. 이 프로그램은 여러분에게 패션 디자이너들에게 배울 기회를 줄 수 있습니다. 여러분은 자신만의 옷을 디자인하고 바느질을 하게 될 것입니다.",
      imageUrl: null, needsImage: false,
      options: ["디자이너 모집", "프로그램 안내", "DIY 제품 소개", "작품 발표회 홍보"],
      answer: 1,
      explanation: {
        summary: "There will be a DIY Fashion Program(DIY 패션 프로그램이 열린다)으로 시작하여 그 프로그램에서 무엇을 할 수 있는지 설명합니다. 따라서 글의 목적은 프로그램 안내이며 정답은 ②입니다.",
        options_breakdown: [
          "오답. 디자이너를 모집하는 것이 아니라 디자이너에게 배우는 프로그램입니다.",
          "정답. DIY 패션 프로그램의 내용을 알려 주는 안내문입니다.",
          "오답. 특정 DIY 제품을 소개하는 글이 아닙니다.",
          "오답. 작품 발표회에 대한 내용은 없습니다."
        ],
        key_concept: "There will be ~: ~이 있을(열릴) 예정이다 / needlework: 바느질"
      }
    },
    {
      id: "english_2018_2_21", subject: "english", exam: E, number: 21,
      category: "글의 흐름",
      groupLabel: "",
      passage: "I bought a new jacket from your website. ( ① ) But, I found something wrong with the color. ( ② ) Also, this jacket is a little too big for me. ( ③ ) I would like to exchange it. ( ④ )",
      extra: "The jacket is not the color that I ordered.",
      question: "글의 흐름으로 보아, 다음 문장이 들어가기에 가장 적절한 곳은?",
      translation: "[주어진 문장] 그 재킷은 내가 주문한 색이 아니다.\n나는 당신의 웹사이트에서 새 재킷을 샀다. 하지만 색상에 문제가 있다는 것을 발견했다. (그 재킷은 내가 주문한 색이 아니다.) 또한, 이 재킷은 나에게 조금 너무 크다. 나는 그것을 교환하고 싶다.",
      imageUrl: null, needsImage: false,
      options: ["①", "②", "③", "④"],
      answer: 1,
      explanation: {
        summary: "'색상에 문제가 있다(something wrong with the color)'는 문장 바로 뒤에 그 문제를 구체적으로 설명하는 '주문한 색이 아니다'가 와야 자연스럽습니다. 그 다음 Also로 크기 문제가 추가되므로 정답은 ②입니다.",
        options_breakdown: [
          "오답. ①에 넣으면 색상 문제를 말하기 전에 설명이 먼저 나와 어색합니다.",
          "정답. 색상 문제 제기 → 구체적 설명 → Also(또 다른 문제)의 흐름이 됩니다.",
          "오답. ③은 크기 문제 뒤라서 색상 설명이 흐름에서 떨어집니다.",
          "오답. ④는 교환 요청 뒤라서 글의 마무리가 어색해집니다."
        ],
        key_concept: "주어진 문장은 그것을 구체적으로 설명하는 앞 문장(something wrong with the color) 바로 뒤에 넣습니다."
      }
    },
    {
      id: "english_2018_2_22", subject: "english", exam: E, number: 22,
      category: "빈칸 추론",
      groupLabel: G22,
      passage: P22,
      extra: "",
      question: "윗글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: T22,
      imageUrl: null, needsImage: false,
      options: ["avoided", "enjoyed", "regretted", "criticized"],
      answer: 1,
      explanation: {
        summary: "고대 사람들도 아이스크림 같은 음식을 먹으며 즐거움을 찾았다(find pleasure in ice cream)는 글입니다. Likewise(마찬가지로)로 이어지므로 알렉산더 대왕도 꿀 맛 눈을 먹는 것을 '즐겼다'가 알맞고 정답은 ②입니다.",
        options_breakdown: [
          "오답. avoided는 '피했다'라는 뜻으로 즐거움을 찾았다는 내용과 반대입니다.",
          "정답. enjoyed는 '즐겼다'라는 뜻으로 문맥에 맞습니다.",
          "오답. regretted는 '후회했다'라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. criticized는 '비판했다'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "enjoy + -ing: ~하는 것을 즐기다 / Likewise: 마찬가지로(앞 내용과 같은 방향)"
      }
    },
    {
      id: "english_2018_2_23", subject: "english", exam: E, number: 23,
      category: "중심 내용",
      groupLabel: G22,
      passage: P22,
      extra: "",
      question: "윗글의 제목으로 가장 적절한 것은?",
      translation: T22,
      imageUrl: null, needsImage: false,
      options: ["Types of Modern Foods", "The Diets for Ancient Kings", "Ice Cream in Ancient Times", "The Variety of Modern Ice Cream"],
      answer: 2,
      explanation: {
        summary: "첫 문장 ancient people also ate a kind of ice cream(고대 사람들도 일종의 아이스크림을 먹었다)이 핵심이고, 중국과 알렉산더 대왕의 예가 이어집니다. 따라서 제목은 '고대의 아이스크림'인 ③입니다.",
        options_breakdown: [
          "오답. '현대 음식의 종류'는 글의 내용과 맞지 않습니다.",
          "오답. '고대 왕들의 식단'은 알렉산더 대왕 예시 하나에만 해당합니다.",
          "정답. '고대의 아이스크림'이 글 전체 내용을 담고 있습니다.",
          "오답. '현대 아이스크림의 다양성'은 글의 내용과 맞지 않습니다."
        ],
        key_concept: "ancient: 고대의 ↔ modern: 현대의 / 제목은 예시들을 모두 포괄하는 것을 고릅니다."
      }
    },
    {
      id: "english_2018_2_24", subject: "english", exam: E, number: 24,
      category: "빈칸 추론",
      groupLabel: G24,
      passage: P24,
      extra: "",
      question: "윗글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: T24,
      imageUrl: null, needsImage: false,
      options: ["However", "Therefore", "In contrast", "On the other hand"],
      answer: 1,
      explanation: {
        summary: "앞에서 '최근에 이름을 많이 들은 샴푸가 가장 먼저 떠오른다'는 예를 들었고, 빈칸 뒤에서 '그래서 이름을 반복하면 소비자가 제품을 사게 된다'는 결론을 말합니다. 결론을 이끄는 Therefore(그러므로)가 알맞으며 정답은 ②입니다.",
        options_breakdown: [
          "오답. However는 '하지만'이라는 뜻으로 앞뒤가 반대될 때 씁니다.",
          "정답. Therefore는 '그러므로'라는 뜻으로 결론을 이끕니다.",
          "오답. In contrast는 '대조적으로'라는 뜻으로 흐름에 맞지 않습니다.",
          "오답. On the other hand는 '반면에'라는 뜻으로 흐름에 맞지 않습니다."
        ],
        key_concept: "Therefore(그러므로): 앞 내용의 결과·결론 / However, In contrast, On the other hand: 반대·대조"
      }
    },
    {
      id: "english_2018_2_25", subject: "english", exam: E, number: 25,
      category: "중심 내용",
      groupLabel: G24,
      passage: P24,
      extra: "",
      question: "윗글의 주제로 가장 적절한 것은?",
      translation: T24,
      imageUrl: null, needsImage: false,
      options: ["광고비 상승의 문제점", "지나친 샴푸 사용을 줄이는 방법", "제품의 이름을 반복하는 광고 효과", "판매 촉진을 위한 제품의 품질 보장 제도"],
      answer: 2,
      explanation: {
        summary: "Repeating the product name may increase sales(제품 이름을 반복하면 판매가 늘 수 있다)가 글의 핵심이고, 샴푸 예시와 결론도 같은 내용입니다. 따라서 주제는 '제품의 이름을 반복하는 광고 효과'인 ③입니다.",
        options_breakdown: [
          "오답. 광고비가 오르는 문제는 언급되지 않았습니다.",
          "오답. 샴푸는 예시일 뿐, 샴푸 사용을 줄이는 방법에 대한 글이 아닙니다.",
          "정답. 제품 이름을 반복하는 광고 기법의 효과를 설명하는 글입니다.",
          "오답. 품질 보장 제도는 언급되지 않았습니다."
        ],
        key_concept: "advertising technique: 광고 기법 / lead to ~: ~로 이어지다"
      }
    }
  );
})();
