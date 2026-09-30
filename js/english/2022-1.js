// 2022년도 제1회 고졸 검정고시 영어 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(function () {
  const G1 = "[1~3] 다음 밑줄 친 부분의 뜻으로 가장 적절한 것을 고르시오.";
  const G6 = "[6~8] 다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것을 고르시오.";
  const G13 = "[13~14] 다음 대화의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const G20 = "[20~21] 다음 글의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const G24 = "[24~25] 다음 글을 읽고 물음에 답하시오.";
  const P24 = "Do you know flowers provide us with many health benefits? For example, the smell of roses can help ______ stress levels. Another example is lavender. Lavender is known to be helpful if you have trouble sleeping. These are just two examples of how flowers help with our health.";
  const T24 = "꽃이 우리에게 많은 건강상의 이점을 준다는 것을 알고 있나요? 예를 들어, 장미 향기는 스트레스 수준을 (낮추는) 데 도움이 될 수 있습니다. 또 다른 예는 라벤더입니다. 라벤더는 잠을 잘 못 잘 때 도움이 되는 것으로 알려져 있습니다. 이것들은 꽃이 우리의 건강에 어떻게 도움이 되는지 보여 주는 두 가지 예일 뿐입니다.";
  const Y = "english_2022_1_";
  const EX = "2022년 제1회";

  (window.QUESTION_BANK = window.QUESTION_BANK || []).push(
    {
      id: Y + "01", subject: "english", exam: EX, number: 1,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "For children, it is important to encourage good __behavior__.",
      extra: "",
      question: "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "아이들에게는 좋은 행동을 격려하는 것이 중요하다.",
      imageUrl: null, needsImage: false,
      options: ["행동", "규칙", "감정", "신념"],
      answer: 0,
      explanation: {
        summary: "behavior는 '행동, 태도'라는 뜻입니다. 'encourage good behavior(좋은 행동을 격려하다)'라는 표현으로 자주 쓰이므로 정답은 '행동'입니다.",
        options_breakdown: [
          "정답. behavior는 '행동'이라는 뜻입니다.",
          "오답. '규칙'은 영어로 rule입니다.",
          "오답. '감정'은 영어로 emotion 또는 feeling입니다.",
          "오답. '신념'은 영어로 belief입니다."
        ],
        key_concept: "behavior: 행동, 태도 (동사 behave: 행동하다)"
      }
    },
    {
      id: Y + "02", subject: "english", exam: EX, number: 2,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "She had to __put off__ the trip because of heavy rain.",
      extra: "",
      question: "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "그녀는 폭우 때문에 여행을 연기해야 했다.",
      imageUrl: null, needsImage: false,
      options: ["계획하다", "연기하다", "기록하다", "시작하다"],
      answer: 1,
      explanation: {
        summary: "put off는 '(일정을) 미루다, 연기하다'라는 뜻입니다. 비가 많이 와서(because of heavy rain) 여행을 미뤘다는 흐름이므로 정답은 '연기하다'입니다.",
        options_breakdown: [
          "오답. '계획하다'는 plan입니다.",
          "정답. put off는 '연기하다, 미루다'로 postpone과 같은 뜻입니다.",
          "오답. '기록하다'는 record입니다.",
          "오답. '시작하다'는 start 또는 begin입니다."
        ],
        key_concept: "put off = postpone: 미루다, 연기하다"
      }
    },
    {
      id: Y + "03", subject: "english", exam: EX, number: 3,
      category: "어휘·어법",
      groupLabel: G1,
      passage: "Many online lessons are free of charge. __Besides__, you can watch them anytime and anywhere.",
      extra: "",
      question: "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?",
      translation: "많은 온라인 강의는 무료이다. 게다가, 언제 어디서나 그것들을 볼 수 있다.",
      imageUrl: null, needsImage: false,
      options: ["마침내", "게다가", "그러나", "예를 들면"],
      answer: 1,
      explanation: {
        summary: "Besides는 앞의 장점(무료)에 또 다른 장점(언제 어디서나 볼 수 있음)을 덧붙일 때 쓰는 말로 '게다가'라는 뜻입니다.",
        options_breakdown: [
          "오답. '마침내'는 finally입니다.",
          "정답. Besides는 '게다가, 또한'이라는 뜻입니다.",
          "오답. '그러나'는 however입니다.",
          "오답. '예를 들면'은 for example입니다."
        ],
        key_concept: "Besides = In addition = Moreover: 게다가 (정보를 덧붙이는 연결어)"
      }
    },
    {
      id: Y + "04", subject: "english", exam: EX, number: 4,
      category: "어휘·어법",
      groupLabel: "",
      passage: "While some people say that a glass is half __full__, others say that it's half __empty__.",
      extra: "",
      question: "다음 밑줄 친 두 단어의 의미 관계와 다른 것은?",
      translation: "어떤 사람들은 유리잔이 반이나 차 있다고 말하는 반면, 다른 사람들은 반이나 비어 있다고 말한다.",
      imageUrl: null, needsImage: false,
      options: ["high － low", "hot － cold", "tiny － small", "fast － slow"],
      answer: 2,
      explanation: {
        summary: "full(가득 찬)과 empty(빈)는 서로 반대되는 뜻(반의어)입니다. tiny(아주 작은)와 small(작은)은 비슷한 뜻(유의어)이므로 관계가 다릅니다.",
        options_breakdown: [
          "오답. high(높은) - low(낮은)는 반의어 관계입니다.",
          "오답. hot(뜨거운) - cold(차가운)는 반의어 관계입니다.",
          "정답. tiny(아주 작은) - small(작은)은 유의어 관계라서 나머지와 다릅니다.",
          "오답. fast(빠른) - slow(느린)는 반의어 관계입니다."
        ],
        key_concept: "단어 관계 문제: 먼저 밑줄 친 두 단어가 반의어인지 유의어인지 파악한 뒤 선지를 비교합니다."
      }
    },
    {
      id: Y + "05", subject: "english", exam: EX, number: 5,
      category: "세부 정보",
      groupLabel: "",
      passage: "[안내문] Happy Earth Day Event\nWhen : April 22, 2022\nWhere : Community Center\nWhat to do : ◦ Exchange used things\n◦ Make 100% natural shampoo",
      extra: "",
      question: "다음 포스터에서 언급되지 않은 것은?",
      translation: "[안내문] 즐거운 지구의 날 행사\n언제: 2022년 4월 22일\n어디서: 주민 센터\n할 일: ◦ 중고 물건 교환하기\n◦ 100% 천연 샴푸 만들기",
      imageUrl: null, needsImage: false,
      options: ["참가 자격", "행사 날짜", "행사 장소", "행사 내용"],
      answer: 0,
      explanation: {
        summary: "포스터에는 날짜(When), 장소(Where), 할 일(What to do)은 나와 있지만, 누가 참가할 수 있는지(참가 자격)는 나와 있지 않습니다.",
        options_breakdown: [
          "정답. 참가 자격에 대한 내용은 포스터에 없습니다.",
          "오답. When : April 22, 2022(4월 22일)로 날짜가 나와 있습니다.",
          "오답. Where : Community Center(주민 센터)로 장소가 나와 있습니다.",
          "오답. What to do에 중고 물건 교환, 천연 샴푸 만들기가 나와 있습니다."
        ],
        key_concept: "안내문 문제는 When(날짜), Where(장소), What(내용), Who(대상), Fee(비용) 항목을 하나씩 대조합니다."
      }
    },
    {
      id: Y + "06", subject: "english", exam: EX, number: 6,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• When you ______ the train, make sure you take all your belongings.\n• Please ______ the book on the table after reading it.",
      extra: "",
      question: "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 기차에서 (내릴) 때, 소지품을 모두 챙겼는지 확인하세요.\n• 책을 읽은 후에는 탁자 위에 (놓아 두세요).",
      imageUrl: null, needsImage: false,
      options: ["open", "learn", "leave", "believe"],
      answer: 2,
      explanation: {
        summary: "leave는 '(장소를) 떠나다'와 '(물건을) 두다, 놓고 가다'라는 두 가지 뜻이 있습니다. 첫 문장은 '기차를 떠날(내릴) 때', 둘째 문장은 '책을 탁자 위에 두다'라는 뜻이 되어 두 문장 모두 자연스럽습니다.",
        options_breakdown: [
          "오답. open은 '열다'라는 뜻으로 두 번째 문장에는 어색합니다.",
          "오답. learn은 '배우다'라는 뜻으로 두 문장 모두 어색합니다.",
          "정답. leave는 '떠나다'와 '두고 가다, 놓아 두다' 두 뜻으로 모두 어울립니다.",
          "오답. believe는 '믿다'라는 뜻으로 두 문장 모두 어색합니다."
        ],
        key_concept: "leave: ① 떠나다 ② (~을 어떤 곳에) 두다, 남겨 두다"
      }
    },
    {
      id: Y + "07", subject: "english", exam: EX, number: 7,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Minsu, ______ are you going to do this weekend?\n• No one knows exactly ______ happened.",
      extra: "",
      question: "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 민수야, 이번 주말에 (무엇을) 할 거니?\n• (무슨 일이) 일어났는지 정확히 아는 사람은 없다.",
      imageUrl: null, needsImage: false,
      options: ["what", "that", "who", "if"],
      answer: 0,
      explanation: {
        summary: "첫 문장은 '무엇을 할 거니?'라는 의문문이므로 what이 필요합니다. 두 번째 문장도 '무엇이 일어났는지'라는 뜻으로 happened의 주어 역할을 하는 what이 들어갑니다.",
        options_breakdown: [
          "정답. what은 '무엇'이라는 뜻으로 두 문장 모두에 맞습니다.",
          "오답. that은 의문문을 만들 수 없고 happened의 주어 자리도 채울 수 없습니다.",
          "오답. who는 '누구'라서 '누가 할 거니'가 되어 do의 목적어로 어색합니다.",
          "오답. if는 '~인지'라는 뜻인데 뒤에 주어가 없어 문장이 성립하지 않습니다."
        ],
        key_concept: "what: 의문사 '무엇' / 간접의문문 'what + 동사(무엇이 ~하는지)'"
      }
    },
    {
      id: Y + "08", subject: "english", exam: EX, number: 8,
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Dad's heart is filled ______ love for me.\n• Alice was satisfied ______ her performance.",
      extra: "",
      question: "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
      translation: "• 아빠의 마음은 나에 대한 사랑(으로) 가득 차 있다.\n• Alice는 자신의 공연(에) 만족했다.",
      imageUrl: null, needsImage: false,
      options: ["at", "in", "for", "with"],
      answer: 3,
      explanation: {
        summary: "be filled with는 '~로 가득 차다', be satisfied with는 '~에 만족하다'라는 표현입니다. 두 표현 모두 with를 쓰므로 정답은 with입니다.",
        options_breakdown: [
          "오답. at은 be surprised at(~에 놀라다)처럼 쓰이며 여기에는 맞지 않습니다.",
          "오답. in은 be interested in(~에 관심이 있다)처럼 쓰이며 여기에는 맞지 않습니다.",
          "오답. for는 be famous for(~로 유명하다)처럼 쓰이며 여기에는 맞지 않습니다.",
          "정답. be filled with, be satisfied with 모두 with를 씁니다."
        ],
        key_concept: "be filled with: ~로 가득 차다 / be satisfied with: ~에 만족하다"
      }
    },
    {
      id: Y + "09", subject: "english", exam: EX, number: 9,
      category: "대화문",
      groupLabel: "",
      passage: "A: What are you doing, Junho?\nB: I'm trying to solve this math problem, but it's too difficult for me.\nA: Let's try to figure it out together.\nB: That's a good idea. __Two heads are better than one.__",
      extra: "",
      question: "다음 대화에서 밑줄 친 표현의 의미로 가장 적절한 것은?",
      translation: "A: 준호야, 뭐 하고 있어?\nB: 이 수학 문제를 풀려고 하는데, 나한테는 너무 어려워.\nA: 같이 풀어 보자.\nB: 좋은 생각이야. 백지장도 맞들면 낫지(두 사람의 머리가 한 사람보다 낫지).",
      imageUrl: null, needsImage: false,
      options: ["수고 없이 얻는 것은 없다.", "사공이 많으면 배가 산으로 간다.", "겉모습만으로 사람을 판단해서는 안 된다.", "혼자보다 두 명이 함께 생각하는 것이 낫다."],
      answer: 3,
      explanation: {
        summary: "Two heads are better than one은 글자 그대로 '머리 두 개가 하나보다 낫다', 즉 혼자보다 둘이 함께 생각하는 것이 낫다는 속담입니다. 함께 문제를 풀자는 A의 제안에 동의하는 말입니다.",
        options_breakdown: [
          "오답. '수고 없이 얻는 것은 없다'는 No pain, no gain입니다.",
          "오답. '사공이 많으면 배가 산으로 간다'는 Too many cooks spoil the broth입니다.",
          "오답. '겉모습으로 판단하지 마라'는 Don't judge a book by its cover입니다.",
          "정답. 혼자보다 둘이 함께 생각하는 것이 낫다는 뜻입니다."
        ],
        key_concept: "Two heads are better than one: 백지장도 맞들면 낫다 / figure out: 알아내다, 해결하다"
      }
    },
    {
      id: Y + "10", subject: "english", exam: EX, number: 10,
      category: "대화문",
      groupLabel: "",
      passage: "A: Did you get the results for the English speech contest?\nB: Yeah, I just got them.\nA: So, how did you do?\nB: I won first prize. It's the happiest day of my life.",
      extra: "",
      question: "다음 대화에서 알 수 있는 B의 심정으로 가장 적절한 것은?",
      translation: "A: 영어 말하기 대회 결과 받았어?\nB: 응, 방금 받았어.\nA: 그래서, 어떻게 됐어?\nB: 1등 했어. 내 인생에서 가장 행복한 날이야.",
      imageUrl: null, needsImage: false,
      options: ["행복", "실망", "분노", "불안"],
      answer: 0,
      explanation: {
        summary: "B는 'I won first prize(1등을 했다)'와 'It's the happiest day of my life(인생에서 가장 행복한 날)'라고 말하므로 B의 심정은 '행복'입니다.",
        options_breakdown: [
          "정답. happiest(가장 행복한)라는 말에서 행복한 심정을 알 수 있습니다.",
          "오답. 실망(disappointed)할 이유가 없습니다. 1등을 했습니다.",
          "오답. 분노(angry)를 나타내는 표현은 없습니다.",
          "오답. 불안(nervous, worried)을 나타내는 표현은 없습니다."
        ],
        key_concept: "win first prize: 1등을 하다 / the happiest day of my life: 내 인생 최고의 날"
      }
    },
    {
      id: Y + "11", subject: "english", exam: EX, number: 11,
      category: "대화문",
      groupLabel: "",
      passage: "A: Good morning. How may I help you?\nB: Hi, I'd like to open a bank account.\nA: All right. Please fill out this form.\nB: Thanks. I'll do it now.",
      extra: "",
      question: "다음 대화가 이루어지는 장소로 가장 적절한 것은?",
      translation: "A: 안녕하세요. 무엇을 도와드릴까요?\nB: 안녕하세요, 은행 계좌를 개설하고 싶어요.\nA: 알겠습니다. 이 양식을 작성해 주세요.\nB: 고맙습니다. 지금 작성할게요.",
      imageUrl: null, needsImage: false,
      options: ["은행", "경찰서", "미용실", "체육관"],
      answer: 0,
      explanation: {
        summary: "B가 'I'd like to open a bank account(은행 계좌를 개설하고 싶다)'라고 말하므로 대화 장소는 은행입니다.",
        options_breakdown: [
          "정답. bank account(은행 계좌)를 여는 곳은 은행입니다.",
          "오답. 경찰서(police station)와 관련된 표현은 없습니다.",
          "오답. 미용실(hair salon)과 관련된 표현은 없습니다.",
          "오답. 체육관(gym)과 관련된 표현은 없습니다."
        ],
        key_concept: "open a bank account: 은행 계좌를 개설하다 / fill out a form: 양식을 작성하다"
      }
    },
    {
      id: Y + "12", subject: "english", exam: EX, number: 12,
      category: "세부 정보",
      groupLabel: "",
      passage: "One day, Michael saw an advertisement for a reporter in the local newspaper. __It__ was a job he'd always dreamed of. So he made up his mind to apply for the job.",
      extra: "",
      question: "다음 글에서 밑줄 친 It이 가리키는 것으로 가장 적절한 것은?",
      translation: "어느 날, Michael은 지역 신문에서 기자 모집 광고를 보았다. 그것은 그가 항상 꿈꿔 왔던 직업이었다. 그래서 그는 그 일에 지원하기로 결심했다.",
      imageUrl: null, needsImage: false,
      options: ["actor", "teacher", "reporter", "designer"],
      answer: 2,
      explanation: {
        summary: "It은 '그가 늘 꿈꿔 온 직업(a job)'을 가리키며, 앞 문장에서 광고에 나온 직업은 reporter(기자)입니다.",
        options_breakdown: [
          "오답. actor(배우)는 글에 나오지 않습니다.",
          "오답. teacher(교사)는 글에 나오지 않습니다.",
          "정답. reporter(기자) 모집 광고를 보았고, It은 그 기자라는 직업을 가리킵니다.",
          "오답. designer(디자이너)는 글에 나오지 않습니다."
        ],
        key_concept: "대명사 it은 바로 앞 문장에서 가리킬 수 있는 명사를 찾습니다. / make up one's mind: 결심하다"
      }
    },
    {
      id: Y + "13", subject: "english", exam: EX, number: 13,
      category: "대화문",
      groupLabel: G13,
      passage: "A: ______?\nB: I'm going to teach Korean to foreigners.\nA: Great. Remember you should volunteer with a good heart.\nB: I'll keep that in mind.",
      extra: "",
      question: "다음 대화의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "A: (너는 어떤 종류의 자원봉사를 할 거니)?\nB: 외국인들에게 한국어를 가르칠 거야.\nA: 좋다. 좋은 마음으로 봉사해야 한다는 걸 기억해.\nB: 명심할게.",
      imageUrl: null, needsImage: false,
      options: ["When is your birthday", "What did you do last Friday", "What do you think about Korean food", "What kind of volunteer work are you going to do"],
      answer: 3,
      explanation: {
        summary: "B가 '외국인에게 한국어를 가르칠 것'이라고 앞으로의 계획을 답하고, A가 '봉사(volunteer)'를 언급하므로 어떤 자원봉사를 할 것인지 묻는 질문이 알맞습니다.",
        options_breakdown: [
          "오답. When is your birthday는 '생일이 언제니'라는 뜻으로 대답과 맞지 않습니다.",
          "오답. What did you do last Friday는 '지난 금요일에 뭐 했니'라는 과거 질문인데 B는 미래 계획(I'm going to)을 말합니다.",
          "오답. What do you think about Korean food는 '한국 음식을 어떻게 생각하니'라는 뜻으로 맞지 않습니다.",
          "정답. What kind of volunteer work are you going to do는 '어떤 봉사활동을 할 거니'라는 뜻입니다."
        ],
        key_concept: "be going to + 동사원형: ~할 예정이다 / keep ~ in mind: ~을 명심하다"
      }
    },
    {
      id: Y + "14", subject: "english", exam: EX, number: 14,
      category: "대화문",
      groupLabel: G13,
      passage: "A: Have you decided which club you're going to join this year?\nB: ______.",
      extra: "",
      question: "다음 대화의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "A: 올해 어떤 동아리에 가입할지 정했니?\nB: (댄스 동아리에 가입하기로 했어).",
      imageUrl: null, needsImage: false,
      options: ["I left Korea for Canada", "I went to see a doctor yesterday", "I've decided to join the dance club", "I had spaghetti for dinner last night"],
      answer: 2,
      explanation: {
        summary: "A가 '어떤 동아리(club)에 가입할지 정했니?'라고 물었으므로 '댄스 동아리에 가입하기로 했다'는 대답이 자연스럽습니다.",
        options_breakdown: [
          "오답. I left Korea for Canada는 '한국을 떠나 캐나다로 갔다'라는 뜻으로 질문과 관계없습니다.",
          "오답. I went to see a doctor yesterday는 '어제 병원에 갔다'라는 뜻으로 관계없습니다.",
          "정답. I've decided to join the dance club은 '댄스 동아리에 가입하기로 했다'는 뜻입니다.",
          "오답. I had spaghetti for dinner last night는 '어젯밤 저녁으로 스파게티를 먹었다'는 뜻으로 관계없습니다."
        ],
        key_concept: "decide to + 동사원형: ~하기로 결정하다 / join a club: 동아리에 가입하다"
      }
    },
    {
      id: Y + "15", subject: "english", exam: EX, number: 15,
      category: "대화문",
      groupLabel: "",
      passage: "A: Doctor, my eyes are tired from working on the computer all day. What can I do to look after my eyes?\nB: Make sure you have enough sleep to rest your eyes.\nA: Okay. Then what else can you recommend?\nB: Eat fruits and vegetables that have lots of vitamins.",
      extra: "",
      question: "다음 대화의 주제로 가장 적절한 것은?",
      translation: "A: 의사 선생님, 하루 종일 컴퓨터로 일해서 눈이 피곤해요. 눈을 돌보려면 어떻게 해야 하나요?\nB: 눈이 쉴 수 있도록 꼭 충분히 주무세요.\nA: 알겠습니다. 그럼 또 무엇을 추천해 주시겠어요?\nB: 비타민이 많은 과일과 채소를 드세요.",
      imageUrl: null, needsImage: false,
      options: ["비타민의 부작용", "눈 건강을 돌보는 방법", "수면 부족의 원인", "시력 회복에 도움 되는 운동"],
      answer: 1,
      explanation: {
        summary: "A가 'What can I do to look after my eyes?(눈을 돌보려면 어떻게 해야 하나요?)'라고 묻고, B가 충분한 수면과 비타민 섭취를 권하므로 주제는 '눈 건강을 돌보는 방법'입니다.",
        options_breakdown: [
          "오답. 비타민은 눈 건강을 위한 방법으로 언급될 뿐, 부작용 이야기는 없습니다.",
          "정답. 눈을 돌보는(look after my eyes) 방법에 대한 대화입니다.",
          "오답. 수면은 해결책으로 언급될 뿐, 수면 부족의 원인은 다루지 않습니다.",
          "오답. 운동에 대한 언급은 없습니다."
        ],
        key_concept: "look after = take care of: ~을 돌보다 / Make sure (that) ~: 꼭 ~하도록 해라"
      }
    },
    {
      id: Y + "16", subject: "english", exam: EX, number: 16,
      category: "중심 내용",
      groupLabel: "",
      passage: "This is an announcement from the management office. As you were informed yesterday, the electricity will be cut this afternoon from 1 p.m. to 2 p.m. We're sorry for any inconvenience. Thank you for your understanding.",
      extra: "",
      question: "다음 글을 쓴 목적으로 가장 적절한 것은?",
      translation: "관리사무소에서 알려 드립니다. 어제 안내해 드린 대로, 오늘 오후 1시부터 2시까지 전기가 차단될 예정입니다. 불편을 드려 죄송합니다. 양해해 주셔서 감사합니다.",
      imageUrl: null, needsImage: false,
      options: ["공지하려고", "불평하려고", "거절하려고", "문의하려고"],
      answer: 0,
      explanation: {
        summary: "'This is an announcement(안내 방송입니다)'로 시작하여 정전 시간을 알려 주고 있으므로 글의 목적은 공지입니다.",
        options_breakdown: [
          "정답. announcement(공지, 안내)로 정전 사실을 알리는 글입니다.",
          "오답. 불평(complain)하는 내용이 아닙니다.",
          "오답. 무언가를 거절(refuse)하는 내용이 아닙니다.",
          "오답. 질문하거나 문의(ask, inquire)하는 내용이 아닙니다."
        ],
        key_concept: "announcement: 공지, 발표 / inconvenience: 불편"
      }
    },
    {
      id: Y + "17", subject: "english", exam: EX, number: 17,
      category: "세부 정보",
      groupLabel: "",
      passage: "[안내문] Shakespeare Museum\nHours\n• Open daily : 9:00 a.m. - 6:00 p.m.\nAdmission\n• Adults : $12\n• Students and children : $8\n• 10% discount for groups of ten or more\nPhotography\n• Visitors can take photographs.",
      extra: "",
      question: "다음 박물관에 대한 안내문의 내용과 일치하지 않는 것은?",
      translation: "[안내문] 셰익스피어 박물관\n운영 시간\n• 매일 개방: 오전 9시 - 오후 6시\n입장료\n• 어른: 12달러\n• 학생 및 어린이: 8달러\n• 10명 이상 단체 10% 할인\n사진 촬영\n• 방문객은 사진을 찍을 수 있습니다.",
      imageUrl: null, needsImage: false,
      options: ["오전 9시부터 오후 6시까지 개방한다.", "어른은 입장료가 12달러이다.", "10명 이상의 단체는 입장료가 10% 할인된다.", "모든 사진 촬영은 금지된다."],
      answer: 3,
      explanation: {
        summary: "안내문에 'Visitors can take photographs(방문객은 사진을 찍을 수 있습니다)'라고 되어 있으므로 사진 촬영이 금지된다는 ④는 내용과 일치하지 않습니다.",
        options_breakdown: [
          "오답. Open daily : 9:00 a.m. - 6:00 p.m.과 일치합니다.",
          "오답. Adults : $12와 일치합니다.",
          "오답. 10% discount for groups of ten or more와 일치합니다.",
          "정답. Visitors can take photographs이므로 사진 촬영이 가능합니다."
        ],
        key_concept: "admission: 입장(료) / discount: 할인 / ten or more: 10명 이상"
      }
    },
    {
      id: Y + "18", subject: "english", exam: EX, number: 18,
      category: "세부 정보",
      groupLabel: "",
      passage: "The 2022 Science Presentation Contest will be held on May 20, 2022. The topic is global warming. Contestants can participate in the contest only as individuals. Presentations should not be longer than 10 minutes. For more information, see Mr. Lee at the teachers' office.",
      extra: "",
      question: "다음 2022 Science Presentation Contest에 대한 설명과 일치하지 않는 것은?",
      translation: "2022 과학 발표 대회가 2022년 5월 20일에 열립니다. 주제는 지구 온난화입니다. 참가자는 개인으로만 대회에 참가할 수 있습니다. 발표는 10분을 넘으면 안 됩니다. 더 많은 정보를 원하면 교무실의 이 선생님을 찾아가세요.",
      imageUrl: null, needsImage: false,
      options: ["5월 20일에 개최된다.", "발표 주제는 지구 온난화이다.", "그룹 참가가 가능하다.", "발표 시간은 10분을 넘지 않아야 한다."],
      answer: 2,
      explanation: {
        summary: "'Contestants can participate in the contest only as individuals(참가자는 개인으로만 참가할 수 있다)'라고 했으므로 그룹 참가가 가능하다는 ③은 일치하지 않습니다.",
        options_breakdown: [
          "오답. will be held on May 20와 일치합니다.",
          "오답. The topic is global warming과 일치합니다.",
          "정답. only as individuals(개인으로만)이므로 그룹 참가는 불가능합니다.",
          "오답. should not be longer than 10 minutes와 일치합니다."
        ],
        key_concept: "only as individuals: 개인으로만 / be held: 개최되다 / not longer than: ~보다 길지 않은"
      }
    },
    {
      id: Y + "19", subject: "english", exam: EX, number: 19,
      category: "중심 내용",
      groupLabel: "",
      passage: "I'd like to tell you about appropriate actions to take in emergency situations. First, when there is a fire, use the stairs instead of taking the elevator. Second, in the case of an earthquake, go to an open area and stay away from tall buildings because they may fall on you.",
      extra: "",
      question: "다음 글의 주제로 가장 적절한 것은?",
      translation: "비상 상황에서 취해야 할 적절한 행동에 대해 말씀드리겠습니다. 첫째, 화재가 났을 때는 엘리베이터를 타는 대신 계단을 이용하세요. 둘째, 지진이 났을 때는 탁 트인 곳으로 가고, 높은 건물이 여러분 위로 무너질 수 있으니 멀리 떨어지세요.",
      imageUrl: null, needsImage: false,
      options: ["지진 발생 원인", "에너지 절약의 필요성", "환경 보호 실천 방안", "비상사태 발생 시 대처 방법"],
      answer: 3,
      explanation: {
        summary: "첫 문장 'appropriate actions to take in emergency situations(비상 상황에서 취할 적절한 행동)'가 주제문이고, 화재와 지진 때의 행동을 예로 들고 있습니다.",
        options_breakdown: [
          "오답. 지진은 예로 나올 뿐, 지진이 왜 일어나는지는 다루지 않습니다.",
          "오답. 에너지 절약에 대한 내용은 없습니다.",
          "오답. 환경 보호에 대한 내용은 없습니다.",
          "정답. 화재·지진 같은 비상 상황의 대처 방법을 설명하는 글입니다."
        ],
        key_concept: "emergency: 비상(사태) / instead of: ~ 대신에 / stay away from: ~에서 멀리 떨어지다"
      }
    },
    {
      id: Y + "20", subject: "english", exam: EX, number: 20,
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "These days, many people make reservations at restaurants and never show up. Here are some tips for restaurants to reduce no-show customers. First, ask for a deposit. If the customers don't show up, they'll lose their money. Second, call the customer the day before to ______ the reservation.",
      extra: "",
      question: "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "요즘 많은 사람들이 식당에 예약을 하고는 나타나지 않는다. 다음은 식당이 노쇼 손님을 줄이기 위한 몇 가지 방법이다. 첫째, 예약금을 요구하라. 손님이 나타나지 않으면 돈을 잃게 된다. 둘째, 하루 전에 손님에게 전화해서 예약을 (확인하라).",
      imageUrl: null, needsImage: false,
      options: ["cook", "forget", "confirm", "imagine"],
      answer: 2,
      explanation: {
        summary: "노쇼(예약 후 나타나지 않음)를 줄이려면 하루 전에 전화해서 예약을 '확인'하는 것이 자연스럽습니다. confirm the reservation은 '예약을 확인하다'라는 뜻입니다.",
        options_breakdown: [
          "오답. cook은 '요리하다'라는 뜻으로 예약과 어울리지 않습니다.",
          "오답. forget은 '잊다'라는 뜻으로 노쇼를 줄이는 방법과 반대입니다.",
          "정답. confirm은 '확인하다'로 '예약을 확인하다'가 됩니다.",
          "오답. imagine은 '상상하다'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "confirm a reservation: 예약을 확인하다 / show up: 나타나다 / deposit: 보증금, 예약금"
      }
    },
    {
      id: Y + "21", subject: "english", exam: EX, number: 21,
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "Weather forecasters ______ the amount of rain, wind speeds, and paths of storms. In order to do so, they observe the weather conditions and use their knowledge of weather patterns. Based on current evidence and past experience, they decide what the weather will be like.",
      extra: "",
      question: "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: "기상 예보관들은 강우량, 풍속, 폭풍의 경로를 (예측한다). 그렇게 하기 위해 그들은 기상 상태를 관찰하고 날씨 패턴에 대한 지식을 활용한다. 현재의 증거와 과거의 경험을 바탕으로 그들은 날씨가 어떨지 결정한다.",
      imageUrl: null, needsImage: false,
      options: ["ignore", "predict", "violate", "negotiate"],
      answer: 1,
      explanation: {
        summary: "기상 예보관(weather forecasters)은 현재 증거와 과거 경험으로 날씨가 어떨지 판단한다고 했으므로, 비의 양·풍속·폭풍 경로를 '예측한다(predict)'가 알맞습니다.",
        options_breakdown: [
          "오답. ignore는 '무시하다'라는 뜻으로 문맥에 맞지 않습니다.",
          "정답. predict는 '예측하다'라는 뜻입니다.",
          "오답. violate는 '위반하다'라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. negotiate는 '협상하다'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "forecaster: 예보관 / predict: 예측하다 / based on: ~을 바탕으로"
      }
    },
    {
      id: Y + "22", subject: "english", exam: EX, number: 22,
      category: "글의 흐름",
      groupLabel: "",
      passage: "( ① ) Washing your hands with soap helps prevent the spread of disease. ( ② ) In fact, in West and Central Africa alone, washing hands with soap could save about half a million lives each year. ( ③ ) However, the problem is that soap is expensive in this region. ( ④ ) This way, we can help save more lives.",
      extra: "To overcome this problem, soap can be made by volunteer groups and donated to the countries that need it.",
      question: "글의 흐름으로 보아 다음 문장이 들어가기에 가장 적절한 곳은?",
      translation: "[주어진 문장] 이 문제를 극복하기 위해, 자원봉사 단체가 비누를 만들어 그것이 필요한 나라에 기부할 수 있다.\n[본문] 비누로 손을 씻는 것은 질병의 확산을 막는 데 도움이 된다. 실제로 서아프리카와 중앙아프리카에서만 비누로 손을 씻으면 매년 약 50만 명의 생명을 구할 수 있다. 그러나 문제는 이 지역에서 비누가 비싸다는 것이다. 이런 방법으로 우리는 더 많은 생명을 구하는 데 도움을 줄 수 있다.",
      imageUrl: null, needsImage: false,
      options: ["①", "②", "③", "④"],
      answer: 3,
      explanation: {
        summary: "주어진 문장의 this problem은 '비누가 비싸다는 문제'를 가리킵니다. 그리고 ④ 뒤의 'This way(이런 방법으로)'는 비누를 만들어 기부하는 방법을 가리키므로 주어진 문장은 ④에 들어가야 합니다.",
        options_breakdown: [
          "오답. ① 앞에는 아직 '문제'가 나오지 않았습니다.",
          "오답. ② 앞은 손 씻기의 효과를 말하는 부분으로 '문제'가 없습니다.",
          "오답. ③ 앞에도 아직 비누가 비싸다는 문제가 나오기 전입니다.",
          "정답. ④ 앞에 '비누가 비싸다'는 문제가 나오고, 뒤의 This way가 해결책을 가리키므로 가장 자연스럽습니다."
        ],
        key_concept: "주어진 문장의 지시어(this problem)와 뒤 문장의 연결어(This way)를 단서로 위치를 찾습니다."
      }
    },
    {
      id: Y + "23", subject: "english", exam: EX, number: 23,
      category: "글의 흐름",
      groupLabel: "",
      passage: "In the future, many countries will have the problem of aging populations. We will have more and more old people. This means jobs related to the aging population will be in demand. So when you're thinking of a job, you should consider this change. Now, I'll recommend some job choices for a time of aging populations.",
      extra: "",
      question: "다음 글의 바로 뒤에 이어질 내용으로 가장 적절한 것은?",
      translation: "미래에는 많은 나라가 인구 고령화 문제를 겪게 될 것이다. 노인이 점점 더 많아질 것이다. 이는 고령 인구와 관련된 직업의 수요가 많아질 것임을 의미한다. 그러니 직업을 생각할 때 이러한 변화를 고려해야 한다. 이제 고령화 시대를 위한 몇 가지 직업을 추천하겠다.",
      imageUrl: null, needsImage: false,
      options: ["노령화와 기술 발전", "성인병을 관리하는 방법", "노화 예방 운동법 소개", "노령화 시대를 위한 직업 추천"],
      answer: 3,
      explanation: {
        summary: "마지막 문장 'Now, I'll recommend some job choices for a time of aging populations(이제 고령화 시대를 위한 직업을 추천하겠다)'에서 뒤에 직업 추천이 이어질 것을 알 수 있습니다.",
        options_breakdown: [
          "오답. 기술 발전에 대한 언급은 없습니다.",
          "오답. 성인병 관리에 대한 언급은 없습니다.",
          "오답. 노화 예방 운동에 대한 언급은 없습니다.",
          "정답. 마지막 문장에서 고령화 시대의 직업을 추천하겠다고 했습니다."
        ],
        key_concept: "글 뒤에 이어질 내용은 마지막 문장(특히 I'll ~, Now ~)에 가장 큰 단서가 있습니다. / aging population: 인구 고령화"
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
      options: ["insist", "reduce", "trust", "admire"],
      answer: 1,
      explanation: {
        summary: "꽃이 건강에 주는 이점의 예이므로, 장미 향기가 스트레스 수준을 '줄이는(reduce)' 데 도움이 된다는 내용이 알맞습니다.",
        options_breakdown: [
          "오답. insist는 '주장하다'라는 뜻으로 문맥에 맞지 않습니다.",
          "정답. reduce는 '줄이다'로 '스트레스 수준을 줄이다'가 됩니다.",
          "오답. trust는 '믿다'라는 뜻으로 문맥에 맞지 않습니다.",
          "오답. admire는 '감탄하다, 존경하다'라는 뜻으로 문맥에 맞지 않습니다."
        ],
        key_concept: "help (to) + 동사원형: ~하는 데 도움이 되다 / reduce stress: 스트레스를 줄이다"
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
      options: ["고혈압에 좋은 식품", "충분한 수면의 필요성", "꽃이 건강에 주는 이점", "아름다운 꽃을 고르는 방법"],
      answer: 2,
      explanation: {
        summary: "첫 문장 'flowers provide us with many health benefits(꽃은 많은 건강상의 이점을 준다)'와 마지막 문장에서 꽃이 건강에 도움이 된다는 주제를 알 수 있습니다.",
        options_breakdown: [
          "오답. 고혈압이나 식품에 대한 언급은 없습니다.",
          "오답. 수면은 라벤더의 예로만 나오며 글의 주제가 아닙니다.",
          "정답. 장미와 라벤더를 예로 들어 꽃의 건강상 이점을 설명합니다.",
          "오답. 꽃을 고르는 방법은 나오지 않습니다."
        ],
        key_concept: "health benefits: 건강상의 이점 / provide A with B: A에게 B를 제공하다"
      }
    }
  );
})();
