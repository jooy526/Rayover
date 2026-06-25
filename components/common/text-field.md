# Text Field

> **사용자가 텍스트를 입력**할 수 있는 가장 기본이 되는 입력 컴포넌트. Label, Input, Helper text가 한 세트로 구성됩니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**자유 텍스트 입력**이 필요할 때 사용합니다. 한 줄짜리 단순 입력에 가장 일반적으로 쓰이는 컴포넌트입니다.

### 이럴 때 사용
- 회원가입 / 로그인 폼 (이름, 이메일, 비밀번호)
- 검색 입력
- 짧은 정보 입력 (제목, 닉네임)
- 짧은 토픽/태그 입력 (Topic Field)

### 사용하지 말아야 할 때
- 여러 줄 입력 (게시물, 댓글, 메모) → **Text Area**
- URL 입력 + 미리보기 → **Link Input**
- 옵션 선택 → **Dropdown**
- 빠른 응답 선택 → **Quick Reply**
- 비밀번호처럼 마스킹 필요한 입력 → 별도 password type 권장

## 🧩 구조

```
Text Field
├── Label area (필수)
│   ├── Label (14px Medium)
│   └── * (필수 표시, optional, #F94C50)
├── input (radius 12, 핵심)
│   ├── (선택) leading icon
│   ├── Placeholder / 입력값
│   └── (선택) trailing icon (clear, eye 등)
└── Helper text (12px Regular)
```

## 🎨 Variants — 3개 종류 × 3 사이즈

### 1️⃣ Text Field (Outline) — **외곽선 스타일**
- `Text field_Small` (6 states)
- `Text field_Medium` (6 states)
- `Text field_Large` (6 states)

**State 6개**: `Disable` / `Default` / `Typing` / `Completed` / `Error` / `Value+Error`

> 💡 **Outline은 Focus state 없음** — 디자인 특성상 Default와 Focus가 시각적으로 구분되지 않음

### 2️⃣ Text Field - Fill — **채워진 배경 스타일**
- `Text field_Fill_Small` (6 states)
- `Text field_Fill_Medium` (6 states)
- `Text field_Fill_Large` (6 states)

**State 6개**: `Disable` / `Default` / **`Focus`** / `Typing` / `Completed` / `Error`

> 💡 **Fill은 Focus state 있음** — 배경 위 테두리로 명확히 구분

### 3️⃣ Topic Field-fill — **짧은 토픽 입력 (콤팩트)**
- `Topic field_Fill_Small` (5 states)
- `Topic field_Fill_Medium` (5 states)
- `Topic field_Fill_Large` (5 states)

**State 5개**: `Disable` / `Default` / `Typing` / `Complete` / `Error`

> 💡 **Topic Field는 너비가 짧고**(98~137px) Helper text가 단순한 컴팩트 버전 — 태그/짧은 키워드 입력용

## 🎯 사용 토큰

### Sizes (input 높이)

| Size | Text Field | Topic Field |
|---|---|---|
| Small | 42 | 36 |
| Medium | 44 | 38 |
| Large | 46 | 42 |

### Radius
- 모든 Text Field input: **12** (`radius/4`)

### Background & Border (State별)

#### Outline (Text Field)
| State | 배경 | 테두리 |
|---|---|---|
| Disable | 없음 | 없음 |
| Default | 없음 | 없음 |
| Typing | 없음 | 없음 (Outline은 stroke 효과 X) |
| Completed | 없음 | 없음 |
| Error | 없음 | 없음 (Helper text 빨강으로 표시) |
| Value+Error | 없음 | 없음 |

#### Fill (Text Field - Fill / Topic Field)
| State | 배경 | 테두리 |
|---|---|---|
| Disable | `#FBFBFB` | 없음 |
| Default | `#F7F7F7` | 없음 |
| Focus | `#F7F7F7` | `line/normal` (`#DFDFDF`) |
| Typing | `#F7F7F7` | `line/normal` (`#DFDFDF`) — Topic은 `#A5A5A5` |
| Completed / Complete | `#F7F7F7` | 없음 |
| Error | `#F7F7F7` | `status/destructive` (`#EA1D22`) |

> 🔑 **Topic Field의 Typing stroke는 `#A5A5A5`로 더 진함** — 짧은 영역에서 입력 상태 강조

### Color (Text)
| 요소 | Default | Disabled | 입력 후 | Error |
|---|---|---|---|---|
| Label | `label/strong` (`#3D3D3D`) | `label/assistive` (`#C1C1C1`) | — | — |
| 필수 별표 (`*`) | `#F94C50` | 동일 | 동일 | 동일 |
| Placeholder | `label/assistive` (`#C1C1C1`) | `line/normal` (`#DFDFDF`) | — | — |
| 입력값 | — | — | `#242424` (label/heavy 근처) | — |
| Helper text | `label/alternative` (`#8B8B8B`) | `label/assistive` (`#C1C1C1`) | — | `status/destructive` (`#EA1D22`) |

### Typography
| 요소 | Style |
|---|---|
| Label | 14px Medium |
| Placeholder / 입력값 | 14px Regular |
| Helper text | 12px Regular |

## 📖 사용 가이드

### 종류 선택 가이드

```
입력 컨텍스트가 무엇인가?

일반 폼 입력 (회원가입, 프로필)        → Text Field (Outline)
                                          - 깔끔하고 미니멀
                                          - 배경 색 없는 화면에 적합

배경이 복잡하거나 명확한 인풋 영역 필요 → Text Field - Fill
                                          - 회색 배경으로 구분 명확
                                          - Focus state로 인터랙션 강조

짧은 키워드/태그 입력                  → Topic Field-fill
                                          - 컴팩트한 너비 (98~137px)
                                          - 가로 나열 가능
```

### Size 선택 가이드

| Size | 용도 |
|---|---|
| Small (42h) | 콤팩트 폼, 검색바 |
| Medium (44h) | 일반 폼 (가장 무난) |
| Large (46h) | 강조되는 메인 입력 (회원가입 등) |

### State 흐름

```
Default
   ↓ (탭/포커스)
Focus (Fill만 해당, Outline은 Default 유지)
   ↓ (입력 시작)
Typing (커서 + 입력값 + 테두리)
   ↓ (포커스 해제 or 다음 필드 이동)
Completed (입력값 유지, 테두리 없음)

Error 발생 시:
   - 입력값 없으면 → Error
   - 입력값 있으면 → Value+Error (Outline 한정)
```

### Label & 필수 표시

- **Label은 항상 입력 필드 위**에 배치
- 필수 입력 항목은 Label 우측에 **빨간 별표 (`*`)** 표시
- 필수 별표 색: `#F94C50` (status/destructive 계열)

### Helper Text 활용

| 상황 | 내용 예시 |
|---|---|
| Default | "8자 이상 입력해주세요" (가이드) |
| Default | "예: name@example.com" (예시) |
| Error | "이메일 형식이 올바르지 않습니다" (구체적 오류) |

> ❌ Helper text 없이 Error만 표시 X — Error 시 반드시 메시지 제공

### 입력값 표시 원칙 (Figma 가이드)

> **"인풋에 들어갈 내용을 아이콘으로 표기할 수 있습니다. 두 줄 이상 작성이 불가능합니다."**
>
> **"내용이 인풋을 넘어갈 경우 한 줄 내에서 표기되며, 입력 완료 후엔 말줄임표로 표기됩니다."**

- ✅ leading icon으로 입력 의미 강화 (예: 🔍 검색, ✉️ 이메일)
- ❌ **두 줄 이상 입력 불가** — 한 줄 입력 전용 (여러 줄은 Text Area)
- ✅ 긴 텍스트는 **한 줄 내 가로 스크롤** (입력 중)
- ✅ 입력 완료 후 표시 영역 초과 시 **말줄임표(…)** 처리

### Outline vs Fill 차이 핵심

```
Outline (Text Field)
├── 시각적 무게: 가벼움
├── Focus state: 없음 (Default와 동일)
├── 사용처: 단순한 폼, 미니멀 디자인
└── 한계: Focus 인터랙션이 약함

Fill (Text Field - Fill)
├── 시각적 무게: 중간 (배경 색)
├── Focus state: 있음 (테두리 등장)
├── 사용처: 콘텐츠가 복잡한 화면
└── 강점: 인풋 영역이 명확
```

### Topic Field 특수 활용

- **너비가 짧아** 가로로 여러 개 나열 가능
- 태그/키워드 입력용
- 입력 시 stroke가 `#A5A5A5`로 진해져 활성 입력 영역 명확화
- Helper text는 작거나 생략 가능

## 🔄 State 처리 디테일

### Disable
- 모든 텍스트가 옅은 색 (`#C1C1C1`, `#DFDFDF`)
- 사용자 인터랙션 차단
- 배경은 더 옅게 (`#FBFBFB`, Fill만 해당)

### Default
- Label 정상 색, Placeholder 옅은 색
- 입력 가능 상태이지만 아직 미입력

### Focus (Fill만)
- 테두리 등장 (`#DFDFDF`)
- 사용자가 인풋 탭 직후

### Typing
- 커서 + 실시간 입력값
- Placeholder가 입력값으로 대체됨
- 입력값 색 진해짐 (`#242424`)

### Completed
- 입력 완료, 포커스 해제
- 테두리 사라짐 (Fill 기준)
- 입력값은 진한 색으로 유지

### Error
- Helper text 빨강 (`#EA1D22`)
- Fill의 경우 테두리 빨강
- 입력값이 있으면 → `Value+Error` (Outline)

## 🚫 금지 사항

- ❌ **Label 누락** — 모든 Text Field는 Label 필수 (접근성 + 사용성)
- ❌ **두 줄 이상 입력 허용** — 그건 Text Area
- ❌ **Error 상태에서 Helper text 누락** — 무엇이 잘못됐는지 명시 필수
- ❌ **Outline에 Focus 상태 임의 추가** — Fill 사용 권장
- ❌ **Topic Field에 긴 문장 입력** — 키워드/짧은 태그 전용
- ❌ **Required 별표 색 임의 변경** — `#F94C50` 고정
- ❌ **다른 radius 사용** — `radius/4` (12) 고정
- ❌ **size 임의 조정** — Small/Medium/Large 정의된 값만
- ❌ **Disabled 상태에 인터랙션 가능** — 시각/기능 모두 차단

## 📚 참고

- Figma: [Text field 페이지 링크]
- Storybook: [링크]
- 같은 페이지의 다른 컴포넌트:
  - **Input** (이 페이지에서 다루는 통합 명칭)
  - **Text Area** — 여러 줄 입력
  - **Quick Reply** — 빠른 답변 선택
- 연관 컴포넌트:
  - `Link Input` — URL 입력 + 미리보기
  - `Dropdown` — 옵션 선택형 입력
  - `Chips` — 태그/필터 (Topic Field와 다른 용도)
- 사용 예:
  - 회원가입 폼 (Text Field - Fill, Medium)
  - 검색바 (Text Field, Small)
  - 키워드 입력 (Topic Field, Small)

