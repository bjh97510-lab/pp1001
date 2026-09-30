# 📚 검정고시 Pass Vault

고졸 검정고시 **한국사·도덕** 기출 풀이 + 자동 오답노트 웹앱

첫 화면에서 과목을 고르면 과목별로 기출 풀이 · 오답노트 · 학습 현황을 이용할 수 있고, 도덕에는 **사상가·사상 개념풀이** 탭이 추가됩니다.

빌드 과정 없는 정적 웹앱입니다. (Tailwind CSS CDN + Firebase JS SDK v10 CDN + Vanilla JS)

## 실행

- **로컬 모드(설정 없이 바로):** `index.html`을 브라우저로 열면 됩니다. 기록은 해당 브라우저의 localStorage에 저장됩니다.
- **Firebase 모드:** 아래 설정 후 웹 서버(Firebase Hosting, VS Code Live Server 등)로 실행하세요.
  익명 인증은 `file://`에서 동작하지 않습니다.

## Firebase 설정

1. Firebase 콘솔에서 프로젝트 생성 → 웹 앱 추가
2. **Authentication → 로그인 방법 → 익명** 사용 설정
3. **Firestore Database** 생성 후 [firestore.rules](firestore.rules) 내용을 규칙에 붙여넣기
4. [js/config.js](js/config.js)의 `window.FIREBASE_CONFIG`에 웹 앱 설정값 입력
5. (선택) Authentication → 설정 → 승인된 도메인에 배포 도메인 추가

설정값이 없거나 초기화에 실패하면 자동으로 로컬 모드로 동작합니다. 헤더 배지(☁️ 클라우드 동기화 / 💾 로컬 저장)로 확인할 수 있습니다.

## 데이터 구조

| 경로 | 설명 |
| --- | --- |
| `questions/{id}` | 기출문제 공통 DB (PRD `Question` 스키마 + `subject`). 비어 있으면 내장 문항 사용 |
| `users/{uid}` | `stats.{과목}.solved`, `stats.{과목}.correct` (과목별 풀이 수 / 정답 수) |
| `users/{uid}/wrong_answers/{questionId}` | PRD `WrongAnswer` 스키마. 문항 id를 문서 id로 사용해 중복 저장 방지 (과목은 문항 id로 구분) |

## 문항 데이터

출처: 국가평생교육진흥원 검정고시지원센터 [기출문제 자료실](https://www.gumsi.or.kr/ged/usr/data/prevexamList.do).
이 사이트에는 2018년 이후 기출만 게시되어 있어 **2018년 제1회 ~ 2026년 제2회(18개 회차)** 를 사용했습니다.

| 과목 | 문항 | 데이터 | 원본 PDF | 분류 |
| --- | --- | --- | --- | --- |
| 한국사 | 전 문항 450개 | [js/exams/](js/exams/) | [exams/](exams/) | 고조선 / 삼국 / 고려 / 조선 / 근대 / 현대 |
| 도덕 | **사상가·사상 관련 문항만** 218개 | [js/ethics/](js/ethics/) | [exams/ethics/](exams/ethics/) | 동양 윤리 / 서양 윤리 / 사회 윤리 / 생명·환경 / 평화·문화 |

- 정답은 공식 정답표 기준입니다([exams/](exams/)의 `*_정답_1.pdf`, 전 과목 묶음). **2026년 제2회는 '가안' 정답표**이므로 확정안이 나오면 다시 확인하세요.
- 해설(요약·선지별 분석·핵심 개념)과 도덕 개념풀이 카드는 공식 자료가 아니라 이 앱을 위해 작성한 것입니다.
- 도덕은 사상가 이름이 나오거나 윤리 사상·이론(유교, 공리주의, 의무론, 시민 불복종, 생명 중심주의, 도덕주의 등)을 묻는 문항만 골랐습니다. 사상 없이 용어·태도만 묻는 문항은 뺐습니다.
- 도덕 문항의 `concepts` 배열(관련 사상가·사상)이 개념풀이 카드([js/ethics/concepts-*.js](js/ethics/))와 연결됩니다.
- 그림·만화·웹페이지 모양의 자료는 글로 옮겨 적었습니다. 사진만으로 된 선지(한국사 2018년 제2회 1번)는 원본에서 잘라낸 이미지([images/](images/))를 표시합니다.
- 복수 정답이 인정된 문항은 `acceptedAnswers`로 표시합니다(한국사 2019년 제1회 22번: ②, ③).

문항을 추가하려면 같은 스키마로 파일을 만들고 [index.html](index.html)에 `<script>` 태그를 추가하세요. 과목 설정은 [js/questions.js](js/questions.js)의 `window.SUBJECTS`에 있습니다.

외부에 공개·배포할 경우 원 저작권자(한국교육과정평가원)의 이용 조건을 확인하세요.

## 구현된 요구사항

| 요구사항 | 구현 |
| --- | --- |
| 과목 선택 | 첫 화면에서 한국사/도덕 선택, 과목별 문항 수·미완료 오답·정답률 요약 |
| FR-01·02 익명 로그인·지속성 | `signInAnonymously` + 기본 로컬 persistence (로컬 모드: localStorage) |
| FR-03 문제 제시 | 회차 선택·분류 필터·순서 섞기, 회차·번호·분류 배지, 지문, 제시문, 이미지(있을 때), 과목별 풀던 위치 기억 |
| FR-04 즉시 판정·저장 | 선택 즉시 정답/오답 하이라이트, 오답 시 `wrong_answers` 저장 |
| FR-05 오답풀이 카드 | 요약 해설 + 선지별 분석(내 답 표시) + 핵심 개념 (도덕: 관련 개념 바로가기) |
| FR-06 실시간 조회 | `onSnapshot` |
| FR-07 검색·필터 | 키워드 검색, 분류 필터, 미완료/복습 완료/전체 탭 |
| FR-08 다시 풀기 | 맞히면 `isResolved: true`, `lastReviewedAt` 갱신 |
| FR-09 삭제 | `deleteDoc` (확인 대화상자) |
| FR-10 대시보드 | 과목별 풀이 수·정답률·미완료·복습 완료, 복습 진행률, 분류별 오답 분포, 취약 분야 추천 |
| 도덕 개념풀이 | 사상가·사상 카드(핵심 주장, 키워드, 시험 포인트, 헷갈리는 비교), 관련 기출 모아 풀기, 미완료 오답 수 표시 |
| 오프라인 | Firestore `persistentLocalCache` (IndexedDB, 다중 탭) |
| UX | Mobile-First, 터치 영역 44px 이상 |
