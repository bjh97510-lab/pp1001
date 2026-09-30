# 🏛️ 한국사 Pass Vault

고졸 검정고시 한국사 기출 풀이 + 자동 오답노트 웹앱 (PRD 기반 MVP ~ Phase 3 기능 포함)

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
| `questions/{id}` | 기출문제 공통 DB (PRD `Question` 스키마). 비어 있으면 내장 [js/questions.js](js/questions.js) 사용 |
| `users/{uid}` | `stats.solved`, `stats.correct` (총 풀이 수 / 정답 수) |
| `users/{uid}/wrong_answers/{questionId}` | PRD `WrongAnswer` 스키마. 문항 id를 문서 id로 사용해 중복 저장 방지 |

## 문항 데이터

**고졸 검정고시 한국사 기출 18개 회차, 450문항** (2018년 제1회 ~ 2026년 제2회)

- 출처: 국가평생교육진흥원 검정고시지원센터 [기출문제 자료실](https://www.gumsi.or.kr/ged/usr/data/prevexamList.do). 이 사이트에는 2018년 이후 기출만 게시되어 있습니다.
- 원본 PDF(문제지·정답표): [exams/](exams/)
- 변환된 데이터: [js/exams/](js/exams/) (회차별 `{연도}-{회차}.js`)
- 정답은 공식 정답표 기준입니다. **2026년 제2회는 '가안' 정답표**이므로 확정안이 나오면 다시 확인하세요.
- 해설(요약·선지별 분석·핵심 개념)은 공식 자료가 아니라 이 앱을 위해 작성한 것입니다.
- 그림·만화·웹페이지 모양의 자료는 글로 옮겨 적었습니다. 사진만으로 된 선지(2018년 제2회 1번)는 원본에서 잘라낸 이미지([images/](images/))를 표시합니다.
- 복수 정답이 인정된 문항은 `acceptedAnswers`로 표시합니다(2019년 제1회 22번: ②, ③).

문항을 추가하려면 같은 스키마로 `js/exams/`에 파일을 만들고 [index.html](index.html)에 `<script>` 태그를 추가하세요.
Firestore `questions` 컬렉션에 데이터가 있으면 그쪽을 우선 사용합니다.
`category`는 `고조선 / 삼국 / 고려 / 조선 / 근대 / 현대` 중 하나여야 필터·통계에 반영됩니다.

외부에 공개·배포할 경우 원 저작권자(한국교육과정평가원)의 이용 조건을 확인하세요.

## 구현된 요구사항

| 요구사항 | 구현 |
| --- | --- |
| FR-01·02 익명 로그인·지속성 | `signInAnonymously` + 기본 로컬 persistence (로컬 모드: localStorage) |
| FR-03 문제 제시 | 회차 선택·시대 필터·순서 섞기, 회차·번호·시대 배지, 지문, 제시문, 사료 이미지(있을 때), 풀던 위치 기억 |
| FR-04 즉시 판정·저장 | 선택 즉시 정답/오답 하이라이트, 오답 시 `wrong_answers` 저장 |
| FR-05 오답풀이 카드 | 요약 해설 + 선지별 분석(내 답 표시) + 핵심 개념 |
| FR-06 실시간 조회 | `onSnapshot` |
| FR-07 검색·필터 | 키워드 검색, 시대 필터, 미완료/복습 완료/전체 탭 |
| FR-08 다시 풀기 | 맞히면 `isResolved: true`, `lastReviewedAt` 갱신 |
| FR-09 삭제 | `deleteDoc` (확인 대화상자) |
| FR-10 대시보드 | 풀이 수·정답률·미완료·복습 완료, 복습 진행률, 시대별 오답 분포, 취약 시대 추천 |
| 오프라인 | Firestore `persistentLocalCache` (IndexedDB, 다중 탭) |
| UX | Mobile-First, 터치 영역 44px 이상 |
