// 2022년도 제2회 고졸 검정고시 영어 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(function () {
  const G1 = "[1~3] 다음 밑줄 친 부분의 뜻으로 가장 적절한 것을 고르시오.";
  const G6 = "[6~8] 다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것을 고르시오.";
  const G13 = "[13~14] 다음 대화의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const G20 = "[20~21] 다음 글의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const G24 = "[24~25] 다음 글을 읽고 물음에 답하시오.";
  const P24 = "Many people have trouble falling asleep, thus not getting enough sleep. It can have ______ effects on health like high blood pressure. You can prevent sleeping problems if you follow these rules. First, do not have drinks with caffeine at night. Second, try not to use your smartphone before going to bed. These will help you go to sleep easily.";
  const T24 = "많은 사람들이 잠드는 데 어려움을 겪어서 충분한 잠을 자지 못한다. 이것은 고혈압 같은 (해로운) 영향을 건강에 미칠 수 있다. 다음 규칙을 따르면 수면 문제를 예방할 수 있다. 첫째, 밤에 카페인이 든 음료를 마시지 마라. 둘째, 잠자리에 들기 전에 스마트폰을 사용하지 않도록 노력하라. 이것들은 여러분이 쉽게 잠드는 데 도움이 될 것이다.";
  const Y = "english_2022_2_";
  const EX = "2022년 제2회";

  (window.QUESTION_BANK = window.QUESTION_BANK || []).push(
    {
      id: Y + "01", subject: "english", exam: EX, number: 1,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "To speak English well, you need to have __confidence__.",
      extra: "",
      question: "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "영어를 잘 말하려면 자신감을 가질 필요가 있다.",
      imageUrl: null, needsImage: false,
      options: ["논리력", "자신감", "의구심", "창의력"],
      answer: 1,
      explanation: {
        summary: "confidence는 '자신감, 확신'이라는 뜻입니다. 영어를 잘 말하려면 자신감이 필요하다는 문장이므로 정답은 '자신감'입니다.",
        options_breakdown: [
          "오답. '논리력'은 logic과 관련된 말입니다.",
          "정답. confidence는 '자신감'이라는 뜻입니다.",
          "오답. '의구심'은 doubt입니다.",
          "오답. '창의력'은 creativity입니다."
        ],
        key_concept: "confidence: 자신감 (형용사 confident: 자신감 있는)"
      }
    },
    {
      id: Y + "02", subject: "english", exam: EX, number: 2,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "The country had to __deal with__ its food shortage problems.",
      extra: "",
      question: "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "그 나라는 식량 부족 문제를 처리해야 했다.",
      imageUrl: null, needsImage: false,
      options: ["생산하다", "연기하다", "처리하다", "확대하다"],
      answer: 2,
      explanation: {
        summary: "deal with는 '(문제를) 다루다, 처리하다'라는 뜻입니다. 식량 부족 문제(food shortage problems)를 처리해야 했다는 의미이므로 정답은 '처리하다'입니다.",
        options_breakdown: [
          "오답. '생산하다'는 produce입니다.",
          "오답. '연기하다'는 put off 또는 postpone입니다.",
          "정답. deal with는 '처리하다, 다루다'라는 뜻입니다.",
          "오답. '확대하다'는 expand입니다."
        ],
        key_concept: "deal with = handle: (문제를) 처리하다, 다루다 / shortage: 부족"
      }
    },
    {
      id: Y + "03", subject: "english", exam: EX, number: 3,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "Sunlight comes in through the windows and, __as a result__, the house becomes warm.",
      extra: "",
      question: "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "햇빛이 창문을 통해 들어오고, 그 결과 집이 따뜻해진다.",
      imageUrl: null, needsImage: false,
      options: ["그 결과", "사실은", "예를 들면", "불행하게도"],
      answer: 0,
      explanation: {
        summary: "as a result는 '그 결과, 결과적으로'라는 뜻입니다. 햇빛이 들어온 결과 집이 따뜻해진다는 원인-결과 관계입니다.",
        options_breakdown: [
          "정답. as a result는 '그 결과'라는 뜻입니다.",
          "오답. '사실은'은 in fact입니다.",
          "오답. '예를 들면'은 for example입니다.",
          "오답. '불행하게도'는 unfortunately입니다."
        ],
        key_concept: "as a result: 그 결과 (원인 → 결과를 연결하는 표현)"
      }
    },
    {
      id: Y + "04", subject: "english", exam: EX, number: 4,
      category: "어휘·어법",
      groupLabel: "",
      passage: "Patience is __bitter__, but its fruit is __sweet__.",
      extra: "",
      question: "다음 밑줄 친 두 단어의 의미 관계와 다른 것은?",
      translation: "인내는 쓰지만 그 열매는 달다.",
      imageUrl: null, needsImage: false,
      options: ["new － old", "clean － dirty", "fine － good", "easy － difficult"],
      answer: 2,
      explanation: {
        summary: "bitter(쓴)와 sweet(단)는 서로 반대되는 뜻(반의어)입니다. fine(좋은)과 good(좋은)은 비슷한 뜻(유의어)이므로 관계가 다릅니다.",
        options_breakdown: [
          "오답. new(새로운) - old(오래된)는 반의어 관계입니다.",
          "오답. clean(깨끗한) - dirty(더러운)는 반의어 관계입니다.",
          "정답. fine(좋은) - good(좋은)은 유의어 관계라서 나머지와 다릅니다.",
          "오답. easy(쉬운) - difficult(어려운)는 반의어 관계입니다."
        ],
        key_concept: "단어 관계 문제: 밑줄 친 두 단어가 반의어인지 유의어인지 먼저 확인합니다. / patience: 인내"
      }
    },
    {
      id: Y + "05", subject: "english", exam: EX, number: 5,
      category: "세부 정보",
      groupLabel: "",
      passage: "[안내문] Gimchi Festival\nPlace : Gimchi Museum\nEvents :\n- Learning to make gimchi\n- Tasting various gimchi\nEntrance Fee : 5,000 won\nCome and taste traditional Korean food!",
      extra: "",
      question: "다음 축제 안내문에서 언급되지 않은 것은?",
      translation: "[안내문] 김치 축제\n장소: 김치 박물관\n행사:\n- 김치 만드는 법 배우기\n- 다양한 김치 맛보기\n입장료: 5,000원\n오셔서 한국 전통 음식을 맛보세요!",
      imageUrl: null, needsImage: false,
      options: ["날짜", "장소", "행사 내용", "입장료"],
      answer: 0,
      explanation: {
        summary: "안내문에는 장소(Place), 행사(Events), 입장료(Entrance Fee)는 있지만 축제가 언제 열리는지(날짜)는 나와 있지 않습니다.",
        options_breakdown: [
          "정답. 날짜(Date, When)에 대한 정보는 없습니다.",
          "오답. Place : Gimchi Museum으로 장소가 나와 있습니다.",
          "오답. Events에 김치 만들기, 김치 맛보기가 나와 있습니다.",
          "오답. Entrance Fee : 5,000 won으로 입장료가 나와 있습니다."
        ],
        key_concept: "entrance fee: 입장료 / various: 다양한 / taste: 맛보다"
      }
    },
    {
      id: Y + "06", subject: "english", exam: EX, number: 6,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Let's ______ in front of the restaurant at 2 o'clock.\n• The hotel manager did his best to ______ guests' needs.",
      extra: "",
      question: "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 2시에 식당 앞에서 (만나자).\n• 호텔 매니저는 손님들의 요구를 (충족시키기) 위해 최선을 다했다.",
      imageUrl: null, needsImage: false,
      options: ["dive", "meet", "wear", "happen"],
      answer: 1,
      explanation: {
        summary: "meet은 '만나다'라는 뜻 외에 'meet one's needs(요구를 충족시키다)'처럼 '충족시키다'라는 뜻도 있습니다. 두 문장 모두에 meet이 알맞습니다.",
        options_breakdown: [
          "오답. dive는 '뛰어들다, 다이빙하다'라는 뜻으로 두 문장 모두 어색합니다.",
          "정답. meet은 '만나다'와 '(요구를) 충족시키다' 두 뜻으로 모두 어울립니다.",
          "오답. wear는 '입다'라는 뜻으로 두 문장 모두 어색합니다.",
          "오답. happen은 '일어나다'라는 뜻으로 목적어를 가질 수 없어 어색합니다."
        ],
        key_concept: "meet: ① 만나다 ② (요구·기준을) 충족시키다 (meet one's needs)"
      }
    },
    {
      id: Y + "07", subject: "english", exam: EX, number: 7,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Jim, ______ are you going to come home?\n• Listening to music can be helpful ______ you feel bad.",
      extra: "",
      question: "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• Jim, (언제) 집에 올 거니?\n• 기분이 안 좋을 (때) 음악을 듣는 것이 도움이 될 수 있다.",
      imageUrl: null, needsImage: false,
      options: ["how", "who", "what", "when"],
      answer: 3,
      explanation: {
        summary: "첫 문장은 '언제 집에 올 거니?'라는 의문사 when, 두 번째 문장은 '기분이 나쁠 때'라는 접속사 when이 필요합니다.",
        options_breakdown: [
          "오답. how는 '어떻게'로 첫 문장은 가능하지만 두 번째 문장에 어색합니다.",
          "오답. who는 '누구'로 두 문장 모두 맞지 않습니다.",
          "오답. what은 '무엇'으로 come home 뒤에 목적어 자리가 없어 맞지 않습니다.",
          "정답. when은 의문사 '언제'와 접속사 '~할 때'로 모두 쓰입니다."
        ],
        key_concept: "when: ① 의문사 '언제' ② 접속사 '~할 때'"
      }
    },
    {
      id: Y + "08", subject: "english", exam: EX, number: 8,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Welcome. What can I do ______ you, today?\n• I've spent almost an hour waiting ______ the bus.",
      extra: "",
      question: "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 어서 오세요. 오늘 무엇을 도와드릴까요(당신을 (위해) 무엇을 해 드릴까요)?\n• 나는 거의 한 시간 동안 버스를 기다렸다(버스(를) 기다리며 한 시간을 보냈다).",
      imageUrl: null, needsImage: false,
      options: ["up", "for", "out", "with"],
      answer: 1,
      explanation: {
        summary: "What can I do for you?는 '무엇을 도와드릴까요?'라는 표현이고, wait for는 '~을 기다리다'라는 뜻입니다. 두 문장 모두 for가 들어갑니다.",
        options_breakdown: [
          "오답. up은 두 문장 모두 자연스럽지 않습니다.",
          "정답. do for you(당신을 위해 하다), wait for(~을 기다리다) 모두 for를 씁니다.",
          "오답. out은 두 문장 모두 자연스럽지 않습니다.",
          "오답. with는 wait with가 '~을 기다리다'가 되지 않아 맞지 않습니다."
        ],
        key_concept: "What can I do for you?: 무엇을 도와드릴까요? / wait for: ~을 기다리다"
      }
    },
    {
      id: Y + "09", subject: "english", exam: EX, number: 9,
      category: "대화문",
      groupLabel: "",
      passage: "A: I want to do something to help children in need.\nB: That's great. Do you have any ideas?\nA: I will sell my old clothes and use the money for the children. But it's not going to be easy.\nB: Don't worry. __A journey of a thousand miles starts with a single step.__",
      extra: "",
      question: "다음 대화에서 밑줄 친 표현의 의미로 가장 적절한 것은?",
      translation: "A: 어려운 처지에 있는 아이들을 돕기 위해 뭔가 하고 싶어.\nB: 멋지다. 좋은 생각 있어?\nA: 내 헌 옷을 팔아서 그 돈을 아이들을 위해 쓸 거야. 하지만 쉽지는 않을 거야.\nB: 걱정 마. 천 리 길도 한 걸음부터야.",
      imageUrl: null, needsImage: false,
      options: ["모든 일에는 원인이 있다.", "몸이 건강해야 마음도 건강하다.", "친구를 보면 그 사람을 알 수 있다.", "어려운 일도 일단 시작해야 이룰 수 있다."],
      answer: 3,
      explanation: {
        summary: "A journey of a thousand miles starts with a single step은 '천 리 길도 한 걸음부터'라는 속담입니다. 쉽지 않을 거라고 걱정하는 A에게 일단 시작하면 이룰 수 있다고 격려하는 말입니다.",
        options_breakdown: [
          "오답. '모든 일에는 원인이 있다'는 Everything happens for a reason에 가깝습니다.",
          "오답. '몸이 건강해야 마음도 건강하다'는 A sound mind in a sound body입니다.",
          "오답. '친구를 보면 그 사람을 알 수 있다'는 A man is known by the company he keeps입니다.",
          "정답. 어려운 일도 첫걸음을 떼야 이룰 수 있다는 뜻입니다."
        ],
        key_concept: "A journey of a thousand miles starts with a single step: 천 리 길도 한 걸음부터 / in need: 어려움에 처한"
      }
    },
    {
      id: Y + "10", subject: "english", exam: EX, number: 10,
      category: "대화문",
      groupLabel: "",
      passage: "A: Is this your first time to do bungee jumping?\nB: Yes, it is. And I'm really nervous.\nA: Bungee jumping is perfectly safe. You'll be fine.\nB: That's what I've heard, but I'm still not sure if I want to do it.",
      extra: "",
      question: "다음 대화에서 알 수 있는 B의 심정으로 가장 적절한 것은?",
      translation: "A: 번지점프는 이번이 처음이니?\nB: 응, 처음이야. 그리고 정말 긴장돼.\nA: 번지점프는 완벽하게 안전해. 괜찮을 거야.\nB: 나도 그렇게 들었는데, 아직도 내가 하고 싶은 건지 잘 모르겠어.",
      imageUrl: null, needsImage: false,
      options: ["만족", "불안", "실망", "행복"],
      answer: 1,
      explanation: {
        summary: "B는 'I'm really nervous(정말 긴장된다)'라고 말하고, 안전하다는 말에도 여전히 확신이 없다고 하므로 B의 심정은 '불안'입니다.",
        options_breakdown: [
          "오답. 만족(satisfied)을 나타내는 표현은 없습니다.",
          "정답. nervous(긴장한, 불안한)라는 말에서 불안한 심정을 알 수 있습니다.",
          "오답. 실망(disappointed)을 나타내는 표현은 없습니다.",
          "오답. 행복(happy)을 나타내는 표현은 없습니다."
        ],
        key_concept: "nervous: 긴장한, 불안한 / not sure if ~: ~인지 잘 모르겠다"
      }
    },
    {
      id: Y + "11", subject: "english", exam: EX, number: 11,
      category: "대화문",
      groupLabel: "",
      passage: "A: Hello, I'm looking for a dinner table for my house.\nB: Come this way, please. What type would you like?\nA: I'd like a round one.\nB: Okay. I'll show you two different models.",
      extra: "",
      question: "다음 대화가 이루어지는 장소로 가장 적절한 것은?",
      translation: "A: 안녕하세요, 집에 둘 식탁을 찾고 있어요.\nB: 이쪽으로 오세요. 어떤 종류를 원하세요?\nA: 둥근 것이 좋아요.\nB: 알겠습니다. 두 가지 다른 모델을 보여 드릴게요.",
      imageUrl: null, needsImage: false,
      options: ["세탁소", "가구점", "도서관", "체육관"],
      answer: 1,
      explanation: {
        summary: "A가 'I'm looking for a dinner table(식탁을 찾고 있다)'이라고 하고 B가 모델을 보여 주겠다고 하므로 대화 장소는 가구점입니다.",
        options_breakdown: [
          "오답. 세탁소(laundry)와 관련된 표현은 없습니다.",
          "정답. 식탁(dinner table)을 사는 곳은 가구점입니다.",
          "오답. 도서관(library)과 관련된 표현은 없습니다.",
          "오답. 체육관(gym)과 관련된 표현은 없습니다."
        ],
        key_concept: "look for: ~을 찾다 / dinner table: 식탁 / round: 둥근"
      }
    },
    {
      id: Y + "12", subject: "english", exam: EX, number: 12,
      category: "세부 정보",
      groupLabel: "",
      passage: "A donation is usually done for kind and good-hearted purposes. __It__ can take many different forms. For example, __it__ may be money, food or medical care given to people suffering from natural disasters.",
      extra: "",
      question: "다음 글에서 밑줄 친 It(it)이 가리키는 것으로 가장 적절한 것은?",
      translation: "기부는 보통 친절하고 선한 목적으로 이루어진다. 그것은 여러 가지 다른 형태를 취할 수 있다. 예를 들어, 그것은 자연재해로 고통받는 사람들에게 주어지는 돈, 음식 또는 의료 서비스일 수 있다.",
      imageUrl: null, needsImage: false,
      options: ["donation", "nature", "people", "suffering"],
      answer: 0,
      explanation: {
        summary: "It(it)은 첫 문장의 주어인 A donation(기부)을 가리킵니다. 기부는 여러 형태를 가질 수 있고, 예를 들어 돈·음식·의료 서비스일 수 있다는 흐름입니다.",
        options_breakdown: [
          "정답. donation(기부)이 여러 형태를 취하며 돈·음식·의료일 수 있다는 뜻입니다.",
          "오답. nature(자연)는 글에서 가리키는 대상이 아닙니다.",
          "오답. people(사람들)은 복수이므로 it으로 받을 수 없습니다.",
          "오답. suffering(고통)은 여러 형태의 돈·음식이 될 수 없습니다."
        ],
        key_concept: "donation: 기부 / take many forms: 여러 형태를 취하다 / suffer from: ~로 고통받다"
      }
    },
    {
      id: Y + "13", subject: "english", exam: EX, number: 13,
      category: "대화문",
      groupLabel: G13,
      passage: "A: Mary's birthday is coming. ______?\nB: Good idea. What about giving her a phone case?\nA: She just got a new one. How about a coffee mug?\nB: Perfect! She likes to drink coffee.",
      extra: "",
      question: "다음 대화의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "A: Mary의 생일이 다가오고 있어. (우리가 그녀에게 선물을 사 주는 게 어때)?\nB: 좋은 생각이야. 휴대폰 케이스를 주는 건 어때?\nA: 그녀는 막 새것을 샀어. 커피 머그잔은 어때?\nB: 완벽해! 그녀는 커피 마시는 걸 좋아하거든.",
      imageUrl: null, needsImage: false,
      options: ["What is it for", "Where did you get it", "Why don't we buy her a gift", "What do you usually do after school"],
      answer: 2,
      explanation: {
        summary: "B가 'Good idea(좋은 생각이야)'라고 답하고 선물을 고르므로, 빈칸에는 선물을 사 주자는 제안이 들어가야 합니다. Why don't we ~?는 '~하는 게 어때?'라는 제안 표현입니다.",
        options_breakdown: [
          "오답. What is it for는 '그건 무엇에 쓰는 거니'라는 뜻으로 Good idea와 어울리지 않습니다.",
          "오답. Where did you get it은 '그거 어디서 났니'라는 뜻으로 맞지 않습니다.",
          "정답. Why don't we buy her a gift는 '그녀에게 선물을 사 주는 게 어때'라는 제안입니다.",
          "오답. What do you usually do after school은 '방과 후에 보통 뭐 하니'라는 뜻으로 관계없습니다."
        ],
        key_concept: "Why don't we ~? = Let's ~: ~하는 게 어때? (제안) → 대답 Good idea!"
      }
    },
    {
      id: Y + "14", subject: "english", exam: EX, number: 14,
      category: "대화문",
      groupLabel: G13,
      passage: "A: What do you do for a living?\nB: ______.",
      extra: "",
      question: "다음 대화의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "A: 직업이 무엇인가요?\nB: (저는 고등학생들을 가르쳐요).",
      imageUrl: null, needsImage: false,
      options: ["I prefer winter to summer", "That wasn't what I wanted", "I teach high school students", "It'll take an hour to get to the beach"],
      answer: 2,
      explanation: {
        summary: "What do you do for a living?은 '생계를 위해 무엇을 하나요?', 즉 직업을 묻는 표현입니다. 따라서 '고등학생들을 가르친다(교사이다)'는 대답이 알맞습니다.",
        options_breakdown: [
          "오답. I prefer winter to summer는 '여름보다 겨울이 더 좋다'라는 뜻입니다.",
          "오답. That wasn't what I wanted는 '그건 내가 원한 게 아니었다'라는 뜻입니다.",
          "정답. I teach high school students는 '고등학생을 가르친다'로 직업을 알려 줍니다.",
          "오답. It'll take an hour to get to the beach는 '해변까지 한 시간 걸릴 것이다'라는 뜻입니다."
        ],
        key_concept: "What do you do (for a living)?: 직업이 무엇인가요?"
      }
    },
    {
      id: Y + "15", subject: "english", exam: EX, number: 15,
      category: "대화문",
      groupLabel: "",
      passage: "A: I don't know what career I'd like to have in the future.\nB: Why don't you get experience in different areas?\nA: Hmm... how can I do that?\nB: How about participating in job experience programs? I'm sure it will help.",
      extra: "",
      question: "다음 대화의 주제로 가장 적절한 것은?",
      translation: "A: 미래에 어떤 직업을 갖고 싶은지 모르겠어.\nB: 여러 분야에서 경험을 쌓아 보는 게 어때?\nA: 음... 어떻게 하면 그럴 수 있을까?\nB: 직업 체험 프로그램에 참여해 보는 건 어때? 분명 도움이 될 거야.",
      imageUrl: null, needsImage: false,
      options: ["자원 개발의 필요성", "진로 선택을 위한 조언", "자존감을 높이는 방법", "자원봉사 활동의 어려움"],
      answer: 1,
      explanation: {
        summary: "A가 미래 직업(career)을 모르겠다고 하자, B가 여러 분야 경험과 직업 체험 프로그램 참여를 권하고 있으므로 주제는 '진로 선택을 위한 조언'입니다.",
        options_breakdown: [
          "오답. 자원 개발에 대한 내용은 없습니다.",
          "정답. career(진로, 직업)를 정하기 위한 조언을 주고받는 대화입니다.",
          "오답. 자존감에 대한 내용은 없습니다.",
          "오답. 자원봉사에 대한 내용은 없습니다."
        ],
        key_concept: "career: 직업, 진로 / participate in: ~에 참여하다 / How about -ing?: ~하는 게 어때?"
      }
    },
    {
      id: Y + "16", subject: "english", exam: EX, number: 16,
      category: "중심 내용",
      groupLabel: "",
      passage: "We would like to ask you to put trash in the trash cans in the park. We are having difficulty keeping the park clean because of the careless behavior of some visitors. We need your cooperation. Thank you.",
      extra: "",
      question: "다음 글을 쓴 목적으로 가장 적절한 것은?",
      translation: "공원 안의 쓰레기통에 쓰레기를 버려 주시기를 부탁드립니다. 일부 방문객의 부주의한 행동 때문에 공원을 깨끗하게 유지하는 데 어려움을 겪고 있습니다. 여러분의 협조가 필요합니다. 감사합니다.",
      imageUrl: null, needsImage: false,
      options: ["요청하려고", "사과하려고", "거절하려고", "칭찬하려고"],
      answer: 0,
      explanation: {
        summary: "'We would like to ask you to put trash in the trash cans(쓰레기통에 쓰레기를 버려 달라고 부탁드립니다)'와 'We need your cooperation(협조가 필요합니다)'에서 요청하는 글임을 알 수 있습니다.",
        options_breakdown: [
          "정답. ask you to ~(~해 달라고 부탁하다)로 협조를 요청하는 글입니다.",
          "오답. 사과(apologize)하는 내용이 아닙니다.",
          "오답. 거절(refuse)하는 내용이 아닙니다.",
          "오답. 칭찬(praise)하는 내용이 아닙니다."
        ],
        key_concept: "ask A to B: A에게 B해 달라고 부탁하다 / cooperation: 협조"
      }
    },
    {
      id: Y + "17", subject: "english", exam: EX, number: 17,
      category: "세부 정보",
      groupLabel: "",
      passage: "[안내문] Summer Sports Camp\n- Fun and safe sports programs for children aged 7-12\n- From August 1st to August 7th\n- What you will do :\nBadminton, Basketball, Soccer, Swimming\n* Every child should bring a swim suit and lunch each day.",
      extra: "",
      question: "다음 캠프 안내문의 내용과 일치하지 않는 것은?",
      translation: "[안내문] 여름 스포츠 캠프\n- 7~12세 어린이를 위한 재미있고 안전한 스포츠 프로그램\n- 8월 1일부터 8월 7일까지\n- 하게 될 활동:\n배드민턴, 농구, 축구, 수영\n* 모든 어린이는 매일 수영복과 점심 도시락을 가져와야 합니다.",
      imageUrl: null, needsImage: false,
      options: ["7세부터 12세까지 어린이들을 대상으로 한다.", "기간은 8월 1일부터 8월 7일까지이다.", "네 가지 스포츠 활동을 할 수 있다.", "매일 점심이 제공된다."],
      answer: 3,
      explanation: {
        summary: "'Every child should bring a swim suit and lunch each day(모든 어린이는 매일 수영복과 점심을 가져와야 한다)'라고 했으므로 점심이 제공된다는 ④는 일치하지 않습니다.",
        options_breakdown: [
          "오답. for children aged 7-12와 일치합니다.",
          "오답. From August 1st to August 7th와 일치합니다.",
          "오답. 배드민턴, 농구, 축구, 수영 네 가지 활동과 일치합니다.",
          "정답. 점심은 제공되는 것이 아니라 직접 가져와야(bring) 합니다."
        ],
        key_concept: "bring: 가져오다 (제공되다 = be provided) / aged 7-12: 7~12세의"
      }
    },
    {
      id: Y + "18", subject: "english", exam: EX, number: 18,
      category: "세부 정보",
      groupLabel: "",
      passage: "We're looking for reporters for our school newspaper. If you're interested, please submit three articles about school life. Each article should be more than 500 words. Our student reporters will evaluate your articles. The deadline is September 5th.",
      extra: "",
      question: "다음 학교 신문 기자 모집에 대한 설명과 일치하지 않는 것은?",
      translation: "우리 학교 신문의 기자를 모집합니다. 관심이 있다면 학교생활에 관한 기사 세 편을 제출해 주세요. 각 기사는 500단어 이상이어야 합니다. 우리 학생 기자들이 여러분의 기사를 평가할 것입니다. 마감일은 9월 5일입니다.",
      imageUrl: null, needsImage: false,
      options: ["학교생활에 관한 기사를 세 편 제출해야 한다.", "각 기사는 500단어 이상이어야 한다.", "담당 교사가 기사를 평가한다.", "마감일은 9월 5일이다."],
      answer: 2,
      explanation: {
        summary: "'Our student reporters will evaluate your articles(학생 기자들이 기사를 평가한다)'라고 했으므로 담당 교사가 평가한다는 ③은 일치하지 않습니다.",
        options_breakdown: [
          "오답. submit three articles about school life와 일치합니다.",
          "오답. more than 500 words와 일치합니다.",
          "정답. 평가는 교사가 아니라 student reporters(학생 기자들)가 합니다.",
          "오답. The deadline is September 5th와 일치합니다."
        ],
        key_concept: "submit: 제출하다 / evaluate: 평가하다 / deadline: 마감일"
      }
    },
    {
      id: Y + "19", subject: "english", exam: EX, number: 19,
      category: "중심 내용",
      groupLabel: "",
      passage: "Gestures can have different meanings in different countries. For example, the OK sign means \"okay\" or \"all right\" in many countries. The same gesture, however, means \"zero\" in France. French people use it when they want to say there is nothing.",
      extra: "",
      question: "다음 글의 주제로 가장 적절한 것은?",
      translation: "몸짓은 나라마다 다른 의미를 가질 수 있다. 예를 들어, OK 사인은 많은 나라에서 '괜찮다' 또는 '좋다'라는 뜻이다. 그러나 같은 몸짓이 프랑스에서는 '0(영)'을 뜻한다. 프랑스 사람들은 아무것도 없다고 말하고 싶을 때 그것을 사용한다.",
      imageUrl: null, needsImage: false,
      options: ["세계의 음식 문화", "예술의 교육적 효과", "다문화 사회의 특징", "국가별 제스처의 의미 차이"],
      answer: 3,
      explanation: {
        summary: "첫 문장 'Gestures can have different meanings in different countries(몸짓은 나라마다 다른 의미를 가질 수 있다)'가 주제문이고, OK 사인을 예로 들고 있습니다.",
        options_breakdown: [
          "오답. 음식 문화에 대한 내용은 없습니다.",
          "오답. 예술 교육에 대한 내용은 없습니다.",
          "오답. 다문화 사회의 특징이 아니라 몸짓 의미의 차이를 다룹니다.",
          "정답. 나라마다 제스처의 의미가 다르다는 내용입니다."
        ],
        key_concept: "주제는 보통 첫 문장에 있고, For example 뒤는 그 예시입니다. / gesture: 몸짓"
      }
    },
    {
      id: Y + "20", subject: "english", exam: EX, number: 20,
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "Many power plants produce energy by burning fossil fuels, such as coal or gas. This causes air pollution and influences the ______. Therefore, try to use less energy by choosing energy-efficient products. It can help save the earth.",
      extra: "",
      question: "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "많은 발전소는 석탄이나 가스 같은 화석 연료를 태워 에너지를 생산한다. 이것은 대기 오염을 일으키고 (환경)에 영향을 준다. 그러므로 에너지 효율이 높은 제품을 선택하여 에너지를 덜 사용하도록 노력하라. 그것은 지구를 구하는 데 도움이 될 수 있다.",
      imageUrl: null, needsImage: false,
      options: ["environment", "material", "product", "weight"],
      answer: 0,
      explanation: {
        summary: "화석 연료를 태우면 대기 오염이 생기고 '환경(environment)'에 영향을 준다는 흐름입니다. 마지막 문장 'help save the earth(지구를 구하다)'도 환경과 연결됩니다.",
        options_breakdown: [
          "정답. environment는 '환경'으로, 대기 오염이 환경에 영향을 준다는 뜻이 됩니다.",
          "오답. material은 '재료, 물질'이라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. product는 '제품'이라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. weight는 '무게'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "fossil fuel: 화석 연료 / influence: ~에 영향을 주다 / energy-efficient: 에너지 효율이 높은"
      }
    },
    {
      id: Y + "21", subject: "english", exam: EX, number: 21,
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "The Internet makes our lives more convenient. We can pay bills and shop on the Internet. However, personal information can be easily stolen online. There are ways to ______ your information. First, set a strong password. Second, never click on unknown links.",
      extra: "",
      question: "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "인터넷은 우리의 삶을 더 편리하게 만든다. 우리는 인터넷에서 요금을 내고 쇼핑을 할 수 있다. 하지만 개인 정보는 온라인에서 쉽게 도난당할 수 있다. 여러분의 정보를 (보호하는) 방법들이 있다. 첫째, 강력한 비밀번호를 설정하라. 둘째, 모르는 링크는 절대 클릭하지 마라.",
      imageUrl: null, needsImage: false,
      options: ["cancel", "destroy", "protect", "refund"],
      answer: 2,
      explanation: {
        summary: "개인 정보가 도난당할 수 있다고 한 뒤, 강력한 비밀번호 설정과 모르는 링크 클릭 금지를 방법으로 제시하므로 정보를 '보호하는(protect)' 방법이 알맞습니다.",
        options_breakdown: [
          "오답. cancel은 '취소하다'라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. destroy는 '파괴하다'라는 뜻으로 문맥과 반대입니다.",
          "정답. protect는 '보호하다'라는 뜻입니다.",
          "오답. refund는 '환불하다'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "protect: 보호하다 / personal information: 개인 정보 / be stolen: 도난당하다"
      }
    },
    {
      id: Y + "22", subject: "english", exam: EX, number: 22,
      category: "글의 흐름",
      groupLabel: "",
      passage: "( ① ) Thousands of years ago, people made maps when they went to new places. ( ② ) They drew maps on the ground or on the walls of caves, which often had incorrect information. ( ③ ) These photographs are taken from airplanes or satellites. ( ④ )",
      extra: "But nowadays maps are more accurate because they are made from photographs.",
      question: "글의 흐름으로 보아 다음 문장이 들어가기에 가장 적절한 곳은?",
      translation: "[주어진 문장] 그러나 오늘날 지도는 사진으로 만들어지기 때문에 더 정확하다.\n[본문] 수천 년 전, 사람들은 새로운 곳에 갈 때 지도를 만들었다. 그들은 땅 위나 동굴 벽에 지도를 그렸는데, 그 지도들에는 종종 잘못된 정보가 있었다. 이 사진들은 비행기나 인공위성에서 찍힌다.",
      imageUrl: null, needsImage: false,
      options: ["①", "②", "③", "④"],
      answer: 2,
      explanation: {
        summary: "③ 앞은 옛날 지도에 잘못된 정보(incorrect information)가 많았다는 내용이고, ③ 뒤의 'These photographs(이 사진들)'는 앞에서 사진이 언급되어야 쓸 수 있습니다. 따라서 '그러나 요즘 지도는 사진으로 만들어져 더 정확하다'는 문장은 ③에 들어가야 합니다.",
        options_breakdown: [
          "오답. ①은 글의 시작 부분으로 But으로 대조할 앞 내용이 없습니다.",
          "오답. ② 뒤에는 여전히 옛날 지도 이야기가 이어지므로 어색합니다.",
          "정답. 옛날 지도의 부정확함과 대조되고, 뒤의 These photographs와 자연스럽게 이어집니다.",
          "오답. ④에 넣으면 These photographs가 무엇을 가리키는지 알 수 없게 됩니다."
        ],
        key_concept: "But(대조)과 These photographs(지시어)를 단서로 위치를 찾습니다. / accurate: 정확한 ↔ incorrect: 틀린"
      }
    },
    {
      id: Y + "23", subject: "english", exam: EX, number: 23,
      category: "글의 흐름",
      groupLabel: "",
      passage: "Sometimes we hurt others' feelings, even if we don't mean to. When that happens, we need to apologize. Then, how do we properly apologize? Here are three things you should consider when you say that you are sorry.",
      extra: "",
      question: "다음 글의 바로 뒤에 이어질 내용으로 가장 적절한 것은?",
      translation: "때때로 우리는 의도하지 않았더라도 다른 사람의 감정을 상하게 한다. 그런 일이 생기면 우리는 사과해야 한다. 그렇다면 어떻게 제대로 사과할 수 있을까? 미안하다고 말할 때 고려해야 할 세 가지가 여기 있다.",
      imageUrl: null, needsImage: false,
      options: ["규칙 준수의 중요성", "대화를 시작하는 방법", "효과적인 암기 전략의 종류", "사과할 때 고려해야 할 것들"],
      answer: 3,
      explanation: {
        summary: "마지막 문장 'Here are three things you should consider when you say that you are sorry(미안하다고 말할 때 고려해야 할 세 가지가 있다)'에서 뒤에 사과할 때 고려할 점이 이어질 것을 알 수 있습니다.",
        options_breakdown: [
          "오답. 규칙 준수에 대한 내용은 없습니다.",
          "오답. 대화를 시작하는 방법이 아니라 사과하는 방법을 다룹니다.",
          "오답. 암기 전략에 대한 내용은 없습니다.",
          "정답. 사과할 때 고려해야 할 세 가지가 이어질 것입니다."
        ],
        key_concept: "Here are ~: 다음은 ~이다 (뒤에 구체적인 내용이 이어짐) / apologize: 사과하다"
      }
    },
    {
      id: Y + "24", subject: "english", exam: EX, number: 24,
      category: "빈칸 추론",
      groupLabel: G24,
      passage: P24,
      extra: "",
      question: "윗글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: T24,
      imageUrl: null, needsImage: false,
      options: ["harmful", "helpful", "positive", "calming"],
      answer: 0,
      explanation: {
        summary: "잠을 충분히 못 자면 고혈압(high blood pressure) 같은 영향이 생긴다고 했으므로, 건강에 '해로운(harmful)' 영향이 알맞습니다.",
        options_breakdown: [
          "정답. harmful은 '해로운'으로, 고혈압 같은 나쁜 영향과 어울립니다.",
          "오답. helpful은 '도움이 되는'이라는 뜻으로 고혈압과 반대됩니다.",
          "오답. positive는 '긍정적인'이라는 뜻으로 문맥과 반대입니다.",
          "오답. calming은 '진정시키는'이라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "have harmful effects on: ~에 해로운 영향을 미치다 / high blood pressure: 고혈압"
      }
    },
    {
      id: Y + "25", subject: "english", exam: EX, number: 25,
      category: "중심 내용",
      groupLabel: G24,
      passage: P24,
      extra: "",
      question: "윗글의 주제로 가장 적절한 것은?",
      translation: T24,
      imageUrl: null, needsImage: false,
      options: ["스마트폰의 변천사", "운동 부족의 위험성", "카페인 중독의 심각성", "수면 문제를 예방하는 방법"],
      answer: 3,
      explanation: {
        summary: "'You can prevent sleeping problems if you follow these rules(이 규칙을 따르면 수면 문제를 예방할 수 있다)' 뒤에 카페인 음료 피하기, 자기 전 스마트폰 사용 자제를 제시하므로 주제는 '수면 문제를 예방하는 방법'입니다.",
        options_breakdown: [
          "오답. 스마트폰은 수면 방해 요소로만 언급되며 변천사는 다루지 않습니다.",
          "오답. 운동 부족에 대한 내용은 없습니다.",
          "오답. 카페인은 피해야 할 것으로만 언급되며 중독 문제를 다루지 않습니다.",
          "정답. 수면 문제를 예방하는 규칙들을 소개하는 글입니다."
        ],
        key_concept: "prevent: 예방하다 / have trouble -ing: ~하는 데 어려움을 겪다"
      }
    }
  );
})();
