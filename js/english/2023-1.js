// 2023년도 제1회 고졸 검정고시 영어 (출처: 국가평생교육진흥원 검정고시지원센터 기출문제, 정답: 공식 정답표)
(function () {
  const EXAM = "2023년 제1회";
  const G1 = "[1~3] 다음 밑줄 친 부분의 뜻으로 가장 적절한 것을 고르시오.";
  const Q1 = "다음 밑줄 친 부분의 뜻으로 가장 적절한 것은?";
  const G6 = "[6~8] 다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것을 고르시오.";
  const Q6 = "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?";
  const G13 = "[13~14] 다음 대화의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const Q13 = "다음 대화의 빈칸에 들어갈 말로 가장 적절한 것은?";
  const G20 = "[20~21] 다음 글의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.";
  const Q20 = "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?";
  const G24 = "[24~25] 다음 글을 읽고 물음에 답하시오.";
  const P24 = "Volunteering gives you a healthy mind. According to one survey, 96% of volunteers report feeling happier after doing it. If you help others in the community, you will feel better about yourself. It can also motivate you to live with more energy that can help you in your ordinary daily life. Therefore, you will have a more ______ view of life.";
  const T24 = "자원봉사는 여러분에게 건강한 마음을 줍니다. 한 조사에 따르면, 자원봉사자의 96%가 봉사를 한 뒤 더 행복하다고 느낀다고 합니다. 지역 사회에서 다른 사람을 도우면 자기 자신에 대해 더 좋게 느끼게 될 것입니다. 또한 자원봉사는 평범한 일상생활에 도움이 되는 더 많은 에너지를 가지고 살도록 동기를 줄 수 있습니다. 그러므로 여러분은 삶에 대해 더 (긍정적인) 시각을 갖게 될 것입니다.";

  function q(n, o) {
    return Object.assign({
      id: "english_2023_1_" + String(n).padStart(2, "0"),
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
      passage: "It is my __duty__ to take out the trash at home on Sundays.",
      question: Q1,
      translation: "일요일마다 집에서 쓰레기를 내다 버리는 것은 나의 의무이다.",
      options: ["갈등", "노력", "의무", "자유"],
      answer: 2,
      explanation: {
        summary: "duty는 '의무, 해야 할 일'이라는 뜻입니다. '일요일마다 쓰레기를 내다 버리는 것이 나의 ___이다'라는 문장에서 자연스러운 말은 '의무'입니다.",
        options_breakdown: [
          "오답. '갈등'은 영어로 conflict입니다.",
          "오답. '노력'은 영어로 effort입니다.",
          "정답. duty는 '의무'라는 뜻입니다.",
          "오답. '자유'는 영어로 freedom입니다."
        ],
        key_concept: "duty: 의무, 임무 / take out the trash: 쓰레기를 내다 버리다"
      }
    }),
    q(2, {
      category: "어휘·어법",
      groupLabel: G1,
      passage: "People need to __depend on__ each other when working as a team.",
      question: Q1,
      translation: "사람들은 팀으로 일할 때 서로에게 의존할 필요가 있다.",
      options: ["찾다", "내리다", "의존하다", "비난하다"],
      answer: 2,
      explanation: {
        summary: "depend on은 '~에 의존하다, ~에 기대다'라는 뜻입니다. 팀으로 일할 때 서로 '의존해야' 한다는 의미가 됩니다.",
        options_breakdown: [
          "오답. '찾다'는 look for, find입니다.",
          "오답. '내리다'는 get off 등입니다.",
          "정답. depend on은 '의존하다'라는 뜻입니다.",
          "오답. '비난하다'는 blame입니다."
        ],
        key_concept: "depend on: ~에 의존하다(= rely on) / each other: 서로"
      }
    }),
    q(3, {
      category: "어휘·어법",
      groupLabel: G1,
      passage: "I have met a lot of nice people, __thanks to__ you.",
      question: Q1,
      translation: "네 덕분에 나는 좋은 사람들을 많이 만났다.",
      options: ["덕분에", "대신에", "불구하고", "제외하고"],
      answer: 0,
      explanation: {
        summary: "thanks to는 '~ 덕분에'라는 뜻입니다. '너 덕분에 좋은 사람들을 많이 만났다'로 해석됩니다.",
        options_breakdown: [
          "정답. thanks to는 '~ 덕분에'라는 뜻입니다.",
          "오답. '~ 대신에'는 instead of입니다.",
          "오답. '~에도 불구하고'는 despite, in spite of입니다.",
          "오답. '~을 제외하고'는 except입니다."
        ],
        key_concept: "thanks to + 명사: ~ 덕분에"
      }
    }),
    q(4, {
      category: "어휘·어법",
      passage: "A __polite__ gesture in one country may be a __rude__ one in another.",
      question: "다음 밑줄 친 두 단어의 의미 관계와 다른 것은?",
      translation: "한 나라에서 예의 바른 몸짓이 다른 나라에서는 무례한 것일 수 있다.",
      options: ["smart - wise", "right - wrong", "safe - dangerous", "same - different"],
      answer: 0,
      explanation: {
        summary: "polite(예의 바른)와 rude(무례한)는 뜻이 반대인 반의어 관계입니다. smart(똑똑한)와 wise(현명한)는 뜻이 비슷한 유의어 관계이므로 관계가 다릅니다.",
        options_breakdown: [
          "정답. smart '똑똑한' - wise '현명한'은 비슷한 뜻(유의어)이라 관계가 다릅니다.",
          "오답. right '옳은' - wrong '틀린'은 반의어입니다.",
          "오답. safe '안전한' - dangerous '위험한'은 반의어입니다.",
          "오답. same '같은' - different '다른'은 반의어입니다."
        ],
        key_concept: "의미 관계 문제: 먼저 밑줄 친 두 단어가 반의어인지, 유의어인지, 상하 관계인지 파악하세요."
      }
    }),
    q(5, {
      category: "세부 정보",
      passage: "[안내문] K-POP CONCERT 2023\nEight World-famous K-Pop Groups Are Performing!\nDate: June 8th (Thursday), 2023\nLocation: World Cup Stadium\nTime: 7:30 p.m. - 9:30 p.m.\n[그림: 무대 위에서 공연하는 가수들과 환호하는 관객들]",
      question: "다음 행사 광고문에서 언급되지 않은 것은?",
      translation: "[안내문] 케이팝 콘서트 2023\n세계적으로 유명한 케이팝 그룹 8팀이 공연합니다!\n날짜: 2023년 6월 8일(목요일)\n장소: 월드컵 경기장\n시간: 오후 7시 30분 ~ 오후 9시 30분",
      options: ["날짜", "장소", "시간", "입장료"],
      answer: 3,
      explanation: {
        summary: "광고문에는 Date(날짜), Location(장소), Time(시간)이 나와 있지만, 입장료(Entrance Fee, Price)에 대한 내용은 없습니다.",
        options_breakdown: [
          "오답. Date: June 8th (Thursday), 2023으로 날짜가 나와 있습니다.",
          "오답. Location: World Cup Stadium으로 장소가 나와 있습니다.",
          "오답. Time: 7:30 p.m. - 9:30 p.m.으로 시간이 나와 있습니다.",
          "정답. 입장료에 대한 정보는 언급되지 않았습니다."
        ],
        key_concept: "안내문 항목 단어: Date(날짜), Location(장소), Time(시간), Entrance Fee(입장료)"
      }
    }),
    q(6, {
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• We had to ______ up in order to get a better view.\n• I can't ______ people who don't follow rules in public.",
      question: Q6,
      translation: "• 우리는 더 잘 보기 위해 일어서야(stand up) 했다.\n• 나는 공공장소에서 규칙을 지키지 않는 사람들을 참을(stand) 수 없다.",
      options: ["fail", "begin", "stand", "remind"],
      answer: 2,
      explanation: {
        summary: "첫 문장은 stand up '일어서다', 두 번째 문장은 can't stand '참을 수 없다'입니다. 두 빈칸 모두에 stand가 들어갑니다.",
        options_breakdown: [
          "오답. fail은 '실패하다'라는 뜻으로 두 문장에 맞지 않습니다.",
          "오답. begin은 '시작하다'라는 뜻으로 맞지 않습니다.",
          "정답. stand up '일어서다', can't stand '참을 수 없다' 모두 자연스럽습니다.",
          "오답. remind는 '상기시키다'라는 뜻으로 맞지 않습니다."
        ],
        key_concept: "stand up: 일어서다 / can't stand ~: ~을 참을 수 없다"
      }
    }),
    q(7, {
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• Jinsu, ______ museum will you visit tomorrow?\n• A dictionary is a book ______ has explanations of words.",
      question: Q6,
      translation: "• 진수야, 내일 (어느) 박물관을 방문할 거니?\n• 사전은 단어에 대한 설명이 있는 책이다. (which: 관계대명사)",
      options: ["how", "which", "when", "where"],
      answer: 1,
      explanation: {
        summary: "첫 문장은 '어느 박물관'이라는 뜻의 의문사 which가 필요하고, 두 번째 문장은 사물(a book)을 꾸미는 관계대명사 which가 필요합니다.",
        options_breakdown: [
          "오답. how는 '어떻게'라는 뜻으로 명사 museum 앞에 쓸 수 없습니다.",
          "정답. which museum '어느 박물관', a book which ~ '~한 책' 모두 맞습니다.",
          "오답. when은 '언제'라는 뜻으로 두 문장에 맞지 않습니다.",
          "오답. where는 '어디'라는 뜻으로, 두 번째 문장에서 has의 주어 역할을 할 수 없습니다."
        ],
        key_concept: "which + 명사: 어느 ~ / 사물 + which + 동사: ~하는 (사물) (관계대명사)"
      }
    }),
    q(8, {
      category: "어휘·어법",
      groupLabel: G6,
      passage: "• My tastes are different ______ yours.\n• English words come ______ a wide variety of sources.",
      question: Q6,
      translation: "• 내 취향은 너의 취향과 다르다.\n• 영어 단어들은 매우 다양한 출처에서(from) 왔다.",
      options: ["for", "off", "from", "about"],
      answer: 2,
      explanation: {
        summary: "be different from은 '~와 다르다', come from은 '~에서 오다, 유래하다'라는 뜻입니다. 두 빈칸 모두 from이 들어갑니다.",
        options_breakdown: [
          "오답. for는 '~을 위해'라는 뜻으로 맞지 않습니다.",
          "오답. off는 '떨어져'라는 뜻으로 맞지 않습니다.",
          "정답. different from '~와 다른', come from '~에서 오다'가 됩니다.",
          "오답. about은 '~에 대해'라는 뜻으로 맞지 않습니다."
        ],
        key_concept: "be different from: ~와 다르다 / come from: ~에서 오다, 유래하다"
      }
    }),
    q(9, {
      category: "대화문",
      passage: "A: Look, Junho. I finally got an A on my math exam!\nB: You really did well on your exam. What's your secret?\nA: I've been studying math everyday, staying up late even on weekends.\nB: You are a good example of '__no pain, no gain__.'",
      question: "다음 대화에서 밑줄 친 표현의 의미로 가장 적절한 것은?",
      translation: "A: 봐, 준호야. 나 드디어 수학 시험에서 A를 받았어!\nB: 시험을 정말 잘 봤구나. 비결이 뭐야?\nA: 주말에도 늦게까지 깨어 있으면서 매일 수학 공부를 해 왔어.\nB: 너는 '고통 없이는 얻는 것도 없다'의 좋은 예구나.",
      options: ["철이 뜨거울 때 내려쳐라.", "수고 없이 얻는 것은 없다.", "시간은 화살처럼 빨리 지나간다.", "필요할 때 친구가 진정한 친구이다."],
      answer: 1,
      explanation: {
        summary: "no pain, no gain은 '고통(수고)이 없으면 얻는 것도 없다'는 속담입니다. 매일 늦게까지 공부해서 A를 받은 친구에게 하는 말입니다.",
        options_breakdown: [
          "오답. '쇠는 뜨거울 때 쳐라'는 Strike while the iron is hot입니다.",
          "정답. no pain(고통 없음), no gain(얻음 없음) → 수고 없이 얻는 것은 없다.",
          "오답. '시간은 화살처럼 지나간다'는 Time flies like an arrow입니다.",
          "오답. '어려울 때 친구가 진정한 친구'는 A friend in need is a friend indeed입니다."
        ],
        key_concept: "No pain, no gain: 고생 없이는 얻는 것도 없다"
      }
    }),
    q(10, {
      category: "대화문",
      passage: "A: It's raining cats and dogs.\nB: Raining cats and dogs? Can you tell me what it means?\nA: It means it's raining very heavily.\nB: Really? I'm interested in the origin of the expression.",
      question: "다음 대화에서 알 수 있는 B의 심정으로 가장 적절한 것은?",
      translation: "A: 비가 억수같이 쏟아지네(raining cats and dogs).\nB: Raining cats and dogs? 그게 무슨 뜻인지 말해 줄래?\nA: 비가 아주 많이 온다는 뜻이야.\nB: 정말? 나는 그 표현의 유래에 관심이 생겨.",
      options: ["불안", "슬픔", "흥미", "실망"],
      answer: 2,
      explanation: {
        summary: "B의 마지막 말 I'm interested in the origin of the expression(그 표현의 유래에 관심이 있어)에서 B가 흥미를 느끼고 있음을 알 수 있습니다.",
        options_breakdown: [
          "오답. 불안은 nervous, worried로 표현됩니다.",
          "오답. 슬픔은 sad로 표현됩니다.",
          "정답. be interested in '~에 관심이 있다'에서 흥미를 알 수 있습니다.",
          "오답. 실망은 disappointed로 표현됩니다."
        ],
        key_concept: "be interested in: ~에 관심(흥미)이 있다 / rain cats and dogs: 비가 억수같이 오다"
      }
    }),
    q(11, {
      category: "대화문",
      passage: "A: Good morning, how may I help you?\nB: Wow, it smells really good in here.\nA: Yes, the bread just came out of the oven.\nB: I'll take this freshly baked one.",
      question: "다음 대화가 이루어지는 장소로 가장 적절한 것은?",
      translation: "A: 안녕하세요, 무엇을 도와드릴까요?\nB: 와, 여기 정말 좋은 냄새가 나네요.\nA: 네, 빵이 방금 오븐에서 나왔어요.\nB: 이 갓 구운 것으로 살게요.",
      options: ["제과점", "세탁소", "수영장", "미용실"],
      answer: 0,
      explanation: {
        summary: "the bread just came out of the oven(빵이 방금 오븐에서 나왔다), freshly baked(갓 구운)라는 말에서 빵을 파는 제과점임을 알 수 있습니다.",
        options_breakdown: [
          "정답. bread, oven, baked는 제과점(bakery)과 관련된 단어입니다.",
          "오답. 세탁소(laundry)는 옷을 빠는 곳입니다.",
          "오답. 수영장(swimming pool)과 관련된 말은 없습니다.",
          "오답. 미용실(hair salon)과 관련된 말은 없습니다."
        ],
        key_concept: "장소 문제는 핵심 단어를 찾으세요: bread, oven, bake → bakery(제과점)"
      }
    }),
    q(12, {
      category: "세부 정보",
      passage: "Smiling reduces stress and lowers blood pressure, contributing to our physical well-being. __It__ also increases the amount of feel-good hormones in the same way that good exercise does. And most of all, a smile influences how other people relate to us.",
      question: "다음 글에서 밑줄 친 It이 가리키는 것으로 가장 적절한 것은?",
      translation: "미소 짓는 것은 스트레스를 줄이고 혈압을 낮추어 우리의 신체 건강에 기여한다. 그것은 또한 좋은 운동이 그러하듯 기분을 좋게 하는 호르몬의 양을 늘린다. 그리고 무엇보다도, 미소는 다른 사람들이 우리와 관계 맺는 방식에 영향을 준다.",
      options: ["friend", "smiling", "country", "exercising"],
      answer: 1,
      explanation: {
        summary: "앞 문장의 주어 Smiling(미소 짓는 것)이 스트레스를 줄인다고 했고, It also increases ~(그것은 또한 ~을 늘린다)로 이어지므로 It은 smiling입니다.",
        options_breakdown: [
          "오답. friend는 '친구'로 글에 나오지 않습니다.",
          "정답. smiling '미소 짓기'가 앞 문장의 주어이며 It이 가리키는 대상입니다.",
          "오답. country는 '나라'로 글과 관계없습니다.",
          "오답. exercising '운동하기'는 비교 대상(~처럼)일 뿐 It이 가리키는 것이 아닙니다."
        ],
        key_concept: "대명사 it은 보통 바로 앞 문장의 주어(단수 명사)를 가리킵니다. also(또한)는 같은 대상의 설명이 이어진다는 신호입니다."
      }
    }),
    q(13, {
      category: "대화문",
      groupLabel: G13,
      passage: "A: Matt, ______?\nB: How about the N Seoul Tower? We can see the whole city from the tower.\nA: After that, let's walk along the Seoul City Wall.\nB: Perfect! Now, let's go explore Seoul.",
      question: Q13,
      translation: "A: Matt, (우리 먼저 어디로 갈까)?\nB: N서울타워는 어때? 타워에서 도시 전체를 볼 수 있어.\nA: 그다음에 한양도성(서울 성곽)을 따라 걷자.\nB: 완벽해! 이제 서울을 탐험하러 가자.",
      options: ["where shall we go first", "what do you do for a living", "how often do you come here", "why do you want to be an actor"],
      answer: 0,
      explanation: {
        summary: "B가 How about the N Seoul Tower?(N서울타워는 어때?)라고 장소를 제안하고, A가 After that(그다음에)이라고 하므로 '먼저 어디로 갈까?'라는 질문이 알맞습니다.",
        options_breakdown: [
          "정답. where shall we go first는 '우리 먼저 어디로 갈까'라는 뜻입니다.",
          "오답. what do you do for a living은 '직업이 뭐니'라는 뜻입니다.",
          "오답. how often do you come here는 '여기 얼마나 자주 오니'라는 뜻입니다.",
          "오답. why do you want to be an actor는 '왜 배우가 되고 싶니'라는 뜻입니다."
        ],
        key_concept: "Shall we ~?: 우리 ~할까? / How about ~?: ~은 어때?(제안)"
      }
    }),
    q(14, {
      category: "대화문",
      groupLabel: G13,
      passage: "A: What should I do to make more friends?\nB: It's important to ______.",
      question: Q13,
      translation: "A: 친구를 더 많이 사귀려면 어떻게 해야 할까?\nB: (주변 사람들에게 친절하게 대하는) 것이 중요해.",
      options: ["get angry easily", "cancel your order now", "check your reservation", "be nice to people around you"],
      answer: 3,
      explanation: {
        summary: "친구를 더 많이 사귀는 방법을 묻고 있으므로 '주변 사람들에게 친절하게 대하는 것'이 중요하다는 대답이 자연스럽습니다.",
        options_breakdown: [
          "오답. get angry easily는 '쉽게 화내다'라는 뜻으로 친구 사귀는 방법이 아닙니다.",
          "오답. cancel your order now는 '지금 주문을 취소하다'라는 뜻입니다.",
          "오답. check your reservation은 '예약을 확인하다'라는 뜻입니다.",
          "정답. be nice to people around you는 '주변 사람들에게 친절하게 대하다'라는 뜻입니다."
        ],
        key_concept: "make friends: 친구를 사귀다 / be nice to ~: ~에게 친절하게 대하다"
      }
    }),
    q(15, {
      category: "대화문",
      passage: "A: Can you share any shopping tips?\nB: Sure. First of all, always keep your budget in mind.\nA: That's a good point. What else?\nB: Also, don't buy things just because they're on sale.\nA: Thanks! Those are great tips.",
      question: "다음 대화의 주제로 가장 적절한 것은?",
      translation: "A: 쇼핑 팁 좀 알려 줄 수 있니?\nB: 물론이지. 무엇보다도, 항상 예산을 염두에 둬.\nA: 좋은 지적이야. 또 뭐가 있어?\nB: 또, 단지 할인 중이라는 이유로 물건을 사지 마.\nA: 고마워! 정말 좋은 팁이다.",
      options: ["현명하게 쇼핑하는 방법", "일기를 써야 하는 이유", "건축 시 기둥의 중요성", "계단을 이용할 때의 장점"],
      answer: 0,
      explanation: {
        summary: "A가 shopping tips(쇼핑 팁)를 묻고, B가 예산을 기억하고 할인 중이라고 무조건 사지 말라고 조언합니다. 따라서 주제는 현명하게 쇼핑하는 방법입니다.",
        options_breakdown: [
          "정답. 쇼핑 팁(예산 지키기, 할인에 휘둘리지 않기)에 대한 대화입니다.",
          "오답. 일기(diary)에 관한 내용은 없습니다.",
          "오답. 건축이나 기둥에 관한 내용은 없습니다.",
          "오답. 계단(stairs)에 관한 내용은 없습니다."
        ],
        key_concept: "keep ~ in mind: ~을 명심하다 / budget: 예산 / on sale: 할인 중인"
      }
    }),
    q(16, {
      category: "중심 내용",
      passage: "Many people have difficulty finding someone for advice. You may have some personal problems and don't want to talk to your parents or friends about them. Why don't you join our online support group? We are here to help you.",
      question: "다음 글을 쓴 목적으로 가장 적절한 것은?",
      translation: "많은 사람들이 조언을 구할 사람을 찾는 데 어려움을 겪습니다. 여러분은 개인적인 문제가 있는데 그것에 대해 부모님이나 친구들에게 이야기하고 싶지 않을 수도 있습니다. 저희 온라인 지원 모임에 가입하는 게 어떠세요? 저희가 여러분을 돕기 위해 여기 있습니다.",
      options: ["거절하려고", "권유하려고", "비판하려고", "사과하려고"],
      answer: 1,
      explanation: {
        summary: "Why don't you join our online support group?(저희 온라인 지원 모임에 가입하는 게 어때요?)은 가입을 권하는 표현입니다. 따라서 글의 목적은 권유입니다.",
        options_breakdown: [
          "오답. 무언가를 거절하는 내용이 아닙니다.",
          "정답. Why don't you ~?로 모임 가입을 권유하고 있습니다.",
          "오답. 누군가를 비판하는 내용이 아닙니다.",
          "오답. sorry 같은 사과 표현이 없습니다."
        ],
        key_concept: "Why don't you ~?: ~하는 게 어때?(권유·제안) / have difficulty -ing: ~하는 데 어려움을 겪다"
      }
    }),
    q(17, {
      category: "세부 정보",
      passage: "[안내문] For Sale\nFeatures: It's a guitar with six strings.\nCondition: It's used but in good condition.\nPrice: $150 (original price: $350)\nContact: If you have any questions, call me at 014-4365-8704.\n[그림: 통기타]",
      question: "다음 기타 판매 광고문의 내용과 일치하지 않는 것은?",
      translation: "[안내문] 판매합니다\n특징: 줄이 여섯 개인 기타입니다.\n상태: 사용한 것이지만 상태가 좋습니다.\n가격: 150달러 (원래 가격: 350달러)\n연락처: 궁금한 점이 있으면 014-4365-8704로 전화 주세요.",
      options: ["줄이 여섯 개 있는 기타이다.", "새것이라 완벽한 상태이다.", "150달러에 판매된다.", "전화로 문의 가능하다."],
      answer: 1,
      explanation: {
        summary: "Condition: It's used but in good condition(사용한 것이지만 상태가 좋다)이라고 했으므로 '새것'이라는 설명은 광고와 일치하지 않습니다.",
        options_breakdown: [
          "오답. a guitar with six strings(줄 여섯 개인 기타)와 일치합니다.",
          "정답. used는 '중고의, 사용한'이라는 뜻이므로 새것이 아닙니다.",
          "오답. Price: $150과 일치합니다.",
          "오답. call me at ~(~로 전화 주세요)와 일치합니다."
        ],
        key_concept: "used: 중고의, 사용된 / in good condition: 상태가 좋은 / original price: 원래 가격"
      }
    }),
    q(18, {
      category: "세부 정보",
      passage: "Why don't we join the Earth Hour campaign? It started in Sydney, Australia, in 2007. These days, more than 7,000 cities around the world are participating. Earth Hour takes place on the last Saturday of March. On that day people turn off the lights from 8:30 p.m. to 9:30 p.m.",
      question: "다음 Earth Hour campaign에 대한 설명과 일치하지 않는 것은?",
      translation: "우리 Earth Hour(지구촌 전등 끄기) 캠페인에 참여하는 게 어때요? 그것은 2007년 호주 시드니에서 시작되었습니다. 요즘에는 전 세계 7,000개 이상의 도시가 참여하고 있습니다. Earth Hour는 3월의 마지막 토요일에 열립니다. 그날 사람들은 오후 8시 30분부터 9시 30분까지 전등을 끕니다.",
      options: ["호주 시드니에서 시작했다.", "칠천 개 이상의 도시가 참여한다.", "3월 마지막 주 토요일에 열린다.", "사람들은 그날 하루 종일 전등을 끈다."],
      answer: 3,
      explanation: {
        summary: "turn off the lights from 8:30 p.m. to 9:30 p.m.(오후 8시 30분부터 9시 30분까지 전등을 끈다)이라고 했으므로 하루 종일이 아니라 한 시간 동안만 전등을 끕니다.",
        options_breakdown: [
          "오답. It started in Sydney, Australia와 일치합니다.",
          "오답. more than 7,000 cities are participating과 일치합니다.",
          "오답. on the last Saturday of March와 일치합니다.",
          "정답. 전등을 끄는 시간은 8:30~9:30 p.m.의 1시간이지 하루 종일이 아닙니다."
        ],
        key_concept: "from A to B: A부터 B까지 / take place: (행사가) 열리다 / turn off: (전기 등을) 끄다"
      }
    }),
    q(19, {
      category: "중심 내용",
      passage: "Recent research shows how successful people spend time in the morning. They wake up early and enjoy some quiet time. They exercise regularly. In addition, they make a list of things they should do that day. Little habits can make a big difference towards being successful.",
      question: "다음 글의 주제로 가장 적절한 것은?",
      translation: "최근 연구는 성공한 사람들이 아침에 시간을 어떻게 보내는지 보여 준다. 그들은 일찍 일어나서 조용한 시간을 즐긴다. 그들은 규칙적으로 운동한다. 게다가 그들은 그날 해야 할 일의 목록을 만든다. 작은 습관들이 성공을 향해 큰 차이를 만들 수 있다.",
      options: ["인간의 기본적인 욕구와 특성", "운동 전 스트레칭이 중요한 이유", "합창에서 반드시 지켜야 할 규칙", "성공한 사람들의 아침 시간 활용 방법"],
      answer: 3,
      explanation: {
        summary: "첫 문장 how successful people spend time in the morning(성공한 사람들이 아침 시간을 보내는 방법)이 주제이고, 이후 일찍 일어나기, 운동, 할 일 목록 만들기가 예로 나옵니다.",
        options_breakdown: [
          "오답. 인간의 기본 욕구에 대한 글이 아닙니다.",
          "오답. 운동이 언급되지만 스트레칭의 중요성에 대한 글이 아닙니다.",
          "오답. 합창에 관한 내용은 없습니다.",
          "정답. 성공한 사람들이 아침 시간을 어떻게 보내는지가 글의 주제입니다."
        ],
        key_concept: "주제 문제는 첫 문장(Research shows ~)과 마지막 문장을 잘 보세요. make a difference: 차이를 만들다"
      }
    }),
    q(20, {
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "People who improve themselves try to understand what they did wrong, so they can do better the next time. The process of learning from mistakes makes them smarter. For them, every ______ is a step towards getting better.",
      question: Q20,
      translation: "스스로를 발전시키는 사람들은 다음번에 더 잘할 수 있도록 자신이 무엇을 잘못했는지 이해하려고 노력한다. 실수로부터 배우는 과정은 그들을 더 똑똑하게 만든다. 그들에게 모든 (실수)는 더 나아지기 위한 한 걸음이다.",
      options: ["love", "nation", "village", "mistake"],
      answer: 3,
      explanation: {
        summary: "what they did wrong(잘못한 것), learning from mistakes(실수로부터 배우기)라는 말이 계속 나오므로, '모든 실수가 더 나아지는 한 걸음'이라는 뜻이 되도록 mistake가 알맞습니다.",
        options_breakdown: [
          "오답. love는 '사랑'이라는 뜻으로 문맥과 관계없습니다.",
          "오답. nation은 '국가'라는 뜻입니다.",
          "오답. village는 '마을'이라는 뜻입니다.",
          "정답. mistake는 '실수'라는 뜻으로 글의 흐름에 맞습니다."
        ],
        key_concept: "빈칸 추론: 글에서 반복되는 핵심어(mistakes, did wrong)를 찾으세요. learn from mistakes: 실수로부터 배우다"
      }
    }),
    q(21, {
      category: "빈칸 추론",
      groupLabel: G20,
      passage: "I'd like to have a parrot as a ______. Let me tell you why. First, a parrot can repeat my words. If I say \"Hello\" to it, it will say \"Hello\" to me. Next, it has gorgeous, colorful feathers, so just looking at it will make me happy. Last, parrots live longer than most other animals kept at home.",
      question: Q20,
      translation: "나는 (반려동물)로 앵무새를 키우고 싶다. 그 이유를 말해 줄게. 첫째, 앵무새는 내 말을 따라 할 수 있다. 내가 앵무새에게 \"안녕\"이라고 하면 그것도 나에게 \"안녕\"이라고 할 것이다. 다음으로, 앵무새는 화려하고 알록달록한 깃털을 가지고 있어서 보기만 해도 나를 행복하게 해 줄 것이다. 마지막으로, 앵무새는 집에서 기르는 대부분의 다른 동물들보다 오래 산다.",
      options: ["pet", "word", "color", "plant"],
      answer: 0,
      explanation: {
        summary: "앵무새를 키우고 싶은 이유를 말하며, 마지막에 other animals kept at home(집에서 기르는 다른 동물들)과 비교합니다. 따라서 '반려동물로' 앵무새를 갖고 싶다는 뜻의 pet이 알맞습니다.",
        options_breakdown: [
          "정답. pet은 '반려동물, 애완동물'이라는 뜻입니다.",
          "오답. word는 '단어'라는 뜻입니다.",
          "오답. color는 '색깔'이라는 뜻입니다.",
          "오답. plant는 '식물'이라는 뜻입니다."
        ],
        key_concept: "as a ~: ~로서 / animals kept at home: 집에서 기르는 동물(= pets)"
      }
    }),
    q(22, {
      category: "글의 흐름",
      passage: "Plastic is a very useful material. ( ① ) Its usefulness comes from the fact that plastic is cheap, lightweight, and strong. ( ② ) For example, plastic remains in landfills for hundreds or even thousands of years, resulting in soil pollution. ( ③ ) The best solution to this problem is to create eco-friendly alternatives to plastic. ( ④ )",
      extra: "However, despite its usefulness, plastic pollutes the environment severely.",
      question: "글의 흐름으로 보아 다음 문장이 들어가기에 가장 적절한 곳은?",
      translation: "[주어진 문장] 그러나 그 유용성에도 불구하고, 플라스틱은 환경을 심각하게 오염시킨다.\n\n플라스틱은 매우 유용한 재료이다. ( ① ) 그 유용성은 플라스틱이 싸고, 가볍고, 튼튼하다는 사실에서 나온다. ( ② ) 예를 들어, 플라스틱은 매립지에 수백 년, 심지어 수천 년 동안 남아서 토양 오염을 일으킨다. ( ③ ) 이 문제에 대한 가장 좋은 해결책은 플라스틱을 대신할 친환경 대체품을 만드는 것이다. ( ④ )",
      options: ["①", "②", "③", "④"],
      answer: 1,
      explanation: {
        summary: "②의 앞은 플라스틱의 장점(싸고 가볍고 튼튼함)이고, 뒤는 For example(예를 들어) 매립지에 남아 토양을 오염시킨다는 단점의 예시입니다. 그 사이에 However(그러나) 환경을 오염시킨다는 문장이 들어가야 흐름이 자연스럽습니다.",
        options_breakdown: [
          "오답. ① 뒤에는 아직 유용성의 이유가 이어지므로 However 문장이 올 자리가 아닙니다.",
          "정답. 장점 → However(그러나) 환경 오염 → For example(오염의 예)로 자연스럽게 이어집니다.",
          "오답. ③ 앞에서 이미 오염의 예가 나왔으므로 늦습니다.",
          "오답. ④는 해결책 뒤이므로 흐름에 맞지 않습니다."
        ],
        key_concept: "주어진 문장의 연결어(However: 그러나)와 뒤 문장의 연결어(For example: 예를 들어)를 단서로 위치를 찾으세요. despite: ~에도 불구하고"
      }
    }),
    q(23, {
      category: "글의 흐름",
      passage: "Beans have been with us for thousands of years. They are easy to grow everywhere. More importantly, they are high in protein and low in fat. These factors make beans one of the world's greatest superfoods. Now, let's learn how beans are cooked in a variety of ways around the world.",
      question: "다음 글의 바로 뒤에 이어질 내용으로 가장 적절한 것은?",
      translation: "콩은 수천 년 동안 우리와 함께해 왔다. 콩은 어디서나 기르기 쉽다. 더 중요한 것은, 콩은 단백질이 많고 지방이 적다는 것이다. 이러한 요인들이 콩을 세계 최고의 슈퍼푸드 중 하나로 만든다. 이제, 전 세계에서 콩이 다양한 방식으로 어떻게 요리되는지 알아보자.",
      options: ["콩 재배의 역사", "콩의 수확 시기", "콩 섭취의 부작용", "콩의 다양한 요리법"],
      answer: 3,
      explanation: {
        summary: "마지막 문장 let's learn how beans are cooked in a variety of ways(콩이 다양한 방식으로 어떻게 요리되는지 알아보자)에서 다음에 콩의 다양한 요리법이 나올 것을 알 수 있습니다.",
        options_breakdown: [
          "오답. 콩의 역사는 첫 문장에서 잠깐 언급되었을 뿐입니다.",
          "오답. 수확 시기에 대한 예고는 없습니다.",
          "오답. 부작용이 아니라 장점을 설명하고 있습니다.",
          "정답. how beans are cooked in a variety of ways가 다음 내용을 예고합니다."
        ],
        key_concept: "뒤에 이어질 내용 문제는 마지막 문장(Now, let's ~)을 보세요. a variety of: 다양한"
      }
    }),
    q(24, {
      category: "빈칸 추론",
      groupLabel: G24,
      passage: P24,
      question: "윗글의 빈칸에 들어갈 말로 가장 적절한 것은?",
      translation: T24,
      options: ["shy", "useless", "unhappy", "positive"],
      answer: 3,
      explanation: {
        summary: "자원봉사를 하면 더 행복해지고(happier), 자신을 더 좋게 느끼며(feel better), 에너지가 생긴다고 했습니다. 따라서 Therefore(그러므로) 뒤에는 삶에 대해 더 '긍정적인' 시각을 갖게 된다는 말이 알맞습니다.",
        options_breakdown: [
          "오답. shy는 '수줍은'이라는 뜻입니다.",
          "오답. useless는 '쓸모없는'이라는 뜻으로 글의 흐름과 반대입니다.",
          "오답. unhappy는 '불행한'이라는 뜻으로 글의 흐름과 반대입니다.",
          "정답. positive는 '긍정적인'이라는 뜻입니다."
        ],
        key_concept: "Therefore(그러므로) 뒤에는 앞 내용의 결론이 옵니다. positive: 긍정적인 ↔ negative: 부정적인"
      }
    }),
    q(25, {
      category: "중심 내용",
      groupLabel: G24,
      passage: P24,
      question: "윗글의 주제로 가장 적절한 것은?",
      translation: T24,
      options: ["외로움의 유용함", "달 연구의 어려움", "자원봉사가 주는 이점", "온라인 수업 도구의 다양성"],
      answer: 2,
      explanation: {
        summary: "첫 문장 Volunteering gives you a healthy mind(자원봉사는 건강한 마음을 준다)가 주제문이고, 행복감, 자존감, 에너지 등 자원봉사의 좋은 점을 설명합니다.",
        options_breakdown: [
          "오답. 외로움에 대한 글이 아닙니다.",
          "오답. 달 연구와는 관계없습니다.",
          "정답. 자원봉사가 주는 여러 이점을 설명하는 글입니다.",
          "오답. 온라인 수업에 대한 내용은 없습니다."
        ],
        key_concept: "volunteer: 자원봉사하다, 자원봉사자 / motivate: 동기를 부여하다"
      }
    })
  );
})();
