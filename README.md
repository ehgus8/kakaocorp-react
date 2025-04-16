## 📌 커밋 메시지 규칙

### 커밋 메시지 구조

---

### ✏️ 커밋 타입 (영어로 작성)

| 타입       | 설명                                       |
| ---------- | ------------------------------------------ |
| `feat`     | 새로운 기능 추가                           |
| `fix`      | 버그 수정                                  |
| `docs`     | 문서 수정 (README, 주석 등)                |
| `refactor` | 코드 리팩토링 (기능 변경 없이 구조 개선)   |
| `test`     | 테스트 코드 추가 및 수정                   |
| `chore`    | 빌드 설정, 패키지 매니저 설정 등 기타 잡무 |
| `perf`     | 성능 향상 관련 코드 변경                   |

---

### 💡 커밋 메시지 예시

```
feat: 회원가입 기능 구현
fix: 로그인 시 잘못된 비밀번호 처리 오류 수정
docs: README에 커밋 규칙 추가
style: 코드 컨벤션에 맞춰 들여쓰기 수정
refactor: 중복된 유틸 함수 제거
test: 로그인 테스트 케이스 추가
chore: ESLint 설정 파일 추가
```

### ✅ 기타 규칙

- 제목은 **한 줄(50자 이하)**로 간결하게 작성
- 첫 글자는 **소문자**, 문장 끝에 `.` 붙이지 않기
- 필요 시 **본문**에 변경 이유나 상세 내용을 작성
- 이슈와 연결할 경우 **꼬리말**에 작성  
  예) `Closes #23`, `Related to #45`

# 📁 카카오 클론 SPA 프로젝트

---

## 1. 📌 기획서

### 🔸 클론할 사이트 선정 이유

- 카카오는 국내 대표 IT 기업으로, UI/UX가 깔끔하고 정보 구성도 명확하여 클론코딩을 통해 프론트엔드 SPA 구성과 모듈화 학습에 적합합니다.
- 반응형 구조, 다크모드, 캐러셀 등 다양한 기능이 포함되어 있어 학습 가치가 높습니다.

### 🔸 참고한 원본 사이트

- https://www.kakaocorp.com/

### 🔸 클론할 페이지

1. **메인 페이지 (https://www.kakaocorp.com/)**
   <details>
      <summary>이미지 보기</summary>

   ![메인페이지](./images/mainPage.png)
   </details>

2. **ESG 보고서 페이지 (https://www.kakaocorp.com/page/responsible/esg)**
   <details>
      <summary>이미지 보기</summary>
      
   ![ESG페이지](./images/esgPage.png)
   </details>

3. **보도자료 페이지 (https://www.kakaocorp.com/page/presskit/press-release)**
   <details>
      <summary>이미지 보기</summary>

   ![보도자료페이지](./images/pressPage.png)
   </details>
   3-1. 상세 페이지
   <details>
      <summary>이미지 보기</summary>

   ![상세페이지](./images/detailPage.png)
   </details>

4. **검색 페이지 (https://www.kakaocorp.com/page/?searchKeyword=%EC%B9%B4%EC%B9%B4%EC%98%A4&searchPage=1)**

   <details>
      <summary>이미지 보기</summary>

   ![검색페이지](./images/searchPage.png)
   </details>

### 🔸 프로젝트 목표

- React 기반의 SPA 구조 학습
- 페이지 라우팅 및 상태 관리 연습
- 공통 컴포넌트 설계 및 재사용
- 실제 배포 가능한 수준의 결과물 제작

### 🔸 일정 계획

| 날짜 | 목표                                            |
| ---- | ----------------------------------------------- |
| 4/13 | 기획 및 페이지 구조 정의                        |
| 4/14 | 공통 레이아웃 구현 (헤더, 푸터, 모드/언어 전환) |
| 4/15 | 개별 페이지 기능 구현                           |
| 4/16 | 테스트 및 디버깅                                |
| 4/16 | 배포 및 마무리 문서 정리                        |

---

## 2. ✅ 요구사항 정의서

| 분류       | 기능명            | 설명                                                | 우선순위 | 비고                          |
| ---------- | ----------------- | --------------------------------------------------- | -------- | ----------------------------- |
| 공통       | 헤더/푸터 고정    | 모든 페이지에 헤더와 푸터가 고정되어 표시됨         | 높음     |                               |
| 공통       | 라이트/다크 모드  | 사용자가 테마를 전환할 수 있음                      | 중간     |                               |
| 공통       | 다국어 전환 기능  | 언어 설정에 따라 사이트 내 텍스트가 변경됨          | 낮음     |                               |
| 메인       | 캐러셀 자동 재생  | 메인 페이지에서 이미지 캐러셀이 자동으로 전환됨     | 높음     | 마우스 호버 시 일시 정지 필요 |
| 메인       | 비디오 자동 재생  | 메인 비디오가 자동으로 재생되며, 제어 버튼 포함됨   | 중간     | 음소거 및 재생/일시정지 지원  |
| ESG 보고서 | ESG 리포트 캐러셀 | ESG 보고서 리스트가 캐러셀 형태로 출력됨            | 중간     | 터치 및 드래그 가능           |
| ESG 보고서 | ‘더보기’ 기능     | '더보기' 클릭 시 리스트가 확장되어 추가 콘텐츠 표시 | 중간     | 동적 로딩 또는 숨김 처리 방식 |
| 보도자료   | 보도자료 캐러셀   | 보도자료 리스트가 캐러셀로 출력됨                   | 중간     |                               |
| 보도자료   | ‘더보기’ 기능     | 보도자료 리스트 확장 기능                           | 중간     |                               |
| 보도자료   | 상세 페이지 이동  | 기사 클릭 시 해당 기사의 상세 페이지로 이동         | 높음     | ID 기반 페이지 이동           |
| 검색       | 키워드 검색       | 사용자가 입력한 키워드를 기준으로 관련 콘텐츠 검색  | 높음     | 검색어 하이라이트 가능 고려   |
| 검색       | 페이징 기능       | 검색 결과 리스트가 페이지 단위로 구분되어 표시됨    | 중간     | 페이지네이션 컴포넌트 사용    |

---

## 3. 🌐 SPA 사이트

react로 만든 실제로 동작하는 사이트를 보여주면 됩니다.

로컬에서 서버를 직접 npm run dev로 돌릴 수 있긴 하지만, 깃허브에서 제공하는 정적 페이지 업로드 방법을 따로 조장분들께 소개해 드리겠습니다.

그 방법으로 사이트 동작을 시키면 되겠습니다.

> 프로젝트는 Vite + React 기반으로 제작되었으며, Github Pages에 배포되었습니다.

🔗 [배포된 SPA 링크](https://your-username.github.io/project-name)

---

## 4. 🧪 테스트케이스

1. **메인 페이지**

| 테스트 항목           | 테스트 방법                | 예상 결과                                  |
| --------------------- | -------------------------- | ------------------------------------------ |
| 메인 캐러셀 자동 재생 | 페이지 진입 후 캐러셀 관찰 | 3초 간격으로 슬라이드 이동                 |
| 비디오 자동 재생      | 메인 진입 시 영상 확인     | 자동 재생되며 일시정지/재생 버튼 정상 동작 |

2. **ESG 보고서 페이지**

| 테스트 항목           | 테스트 방법                | 예상 결과                               |
| --------------------- | -------------------------- | --------------------------------------- |
| 메인 캐러셀 자동 재생 | 페이지 진입 후 캐러셀 관찰 | 3초 간격으로 슬라이드 이동              |
| '더보기' 클릭         | ESG 페이지에서 클릭        | 리스트가 확장되어 더 많은 항목이 표시됨 |
| 기사 클릭             | ESG 페이지에서 기사 클릭   | 해당 기사 상세 페이지로 이동            |

3. **보도자료 페이지**

| 테스트 항목   | 테스트 방법                     | 예상 결과                               |
| ------------- | ------------------------------- | --------------------------------------- |
| 메인 캐러셀   | 페이지 진입 후 메인 캐러셀 조작 | 캐러셀 좌우로 이동 및 무한 반복         |
| 미니 캐러셀   | 페이지 진입 후 미니 캐러셀 조작 | 캐러셀 페이드 방식으로 좌우로 이동      |
| 기사 클릭     | 보도자료에서 기사 클릭          | 해당 기사 상세 페이지로 이동            |
| '더보기' 클릭 | 보도자료 페이지에서 클릭        | 리스트가 확장되어 더 많은 항목이 표시됨 |

4. **검색 페이지**

| 테스트 항목 | 테스트 방법                     | 예상 결과                          |
| ----------- | ------------------------------- | ---------------------------------- |
| 검색 기능   | 키워드 입력 후 검색             | 관련된 검색 결과가 리스트로 표시됨 |
| 기사 클릭   | 검색결과에서 기사 클릭          | 해당 기사 상세 페이지로 이동       |
| 페이징 기능 | 검색결과 하단 페이지네이션 클릭 | 다음 페이지 결과가 표시됨          |

---

## 5. ✅ 테스트 결과서

### 1. **메인 페이지**

- **메인 캐러셀 자동 재생**

  - 결과: ✅ 성공
  - 비고: 정상적으로 동작함
  - 사진:

- **비디오 자동 재생**

  - 결과: ✅ 성공
  - 비고: 컨트롤 버튼 포함
  - 사진:

### 2. **ESG 보고서 페이지**

- **‘더보기’ 기능**

  - 결과: ✅ 성공
  - 비고: 리스트 확장 확인
  - 사진:

### 3. **보도자료 페이지**

- **기사 상세페이지 이동**

  - 결과: ✅ 성공
  - 비고: 해당 기사 정보 표시
  - 사진:

- **‘더보기’ 기능**

  - 결과: ✅ 성공
  - 비고: 리스트 확장 확인
  - 사진:

### 4. **검색 페이지**

- **검색 기능**

  - 결과: ✅ 성공
  - 비고: 키워드 기반으로 정확한 결과 출력
  - 사진:

- **페이징 기능**

  - 결과: ✅ 성공
  - 비고: 페이지 전환 문제 없음
  - 사진:

### 5. **반응형 기능**

- 결과: ❌ 실패
- 원인: 일부 해상도(모바일, 태블릿)에서 레이아웃 깨짐 현상 발생.  
   특히 캐러셀 및 카드 요소가 화면 밖으로 넘침.
- 해결방안:

  - `@media` 쿼리를 활용한 반응형 레이아웃 개선 필요.
  - `flex-wrap`, `min-width`, `max-width` 등의 속성 재조정.
  - 요소에 고정 너비 대신 상대 단위 사용(px → %, vw 등).

## 6. 🔨 개선할 점

1. **반응형 레이아웃 미흡**

   - 모바일 및 태블릿 해상도에서 일부 레이아웃이 깨짐.
   - 슬라이드/카드 요소의 크기 조정 및 미디어 쿼리 추가 필요.

2. **미구현된 세부 요소 존재**

   - 일부 디자인 요소나 인터랙션(예: hover 애니메이션, 버튼 클릭 효과 등)이 구현되지 않음.
   - 원본 사이트와의 완성도 차이를 줄이기 위해 세부적인 마감 작업 필요.

3. **컴포넌트 재사용성 부족**

   - 유사한 UI 컴포넌트가 중복 정의되어 유지보수 어려움.
   - 공통 컴포넌트로 분리하여 재사용성 향상 필요.

4. **하드코딩된 데이터 사용**

   - 현재 더미 데이터가 내부에 직접 작성되어 있음.
   - 추후 DB 연동을 고려하여 외부로 분리할 필요 있음.

5. **접근성 고려 부족**

   - 이미지에 `alt` 태그 미작성, 버튼에 레이블 누락 등 접근성 미흡 요소 존재.
   - 웹 접근성 기준에 맞게 태그 속성 보완 필요.
