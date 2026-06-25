# Bottom Sheet

> 이전 화면과 관련된 **컨텐츠/액션**이 포함된 화면을 하단에 고정하여 제공하는 모바일 전용 컴포넌트

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

## 🎯 사용 시점

**이전 화면 컨텍스트를 유지한 채** 추가 정보 입력/선택이 필요할 때 사용합니다.

### 이럴 때 사용
- 날짜 선택 (Calendar)
- 시간 선택 (Time picker)
- 목록 중 하나/여러 개 선택 (List)
- 필터 설정 (Filter)
- 경고/확인 등 중요한 알림 (Alert)

### 사용하지 말아야 할 때
- 2~5개의 단순 액션 선택 → **Action Sheet** 사용
- 단순 정보 알림 → **Toast** / **Callout** 사용
- 페이지 전환이 더 적절한 복잡한 작업 → **Page** 사용

## 🧩 구조

```
Bottom Sheet
├── Overlay (Scrim)                  ← dim 배경
│
└── Sheet Body (radius 16 고정)
    ├── Top Navigation Bar           ← 제목/drag handle
    ├── Content area                 ← 실제 컨텐츠 (variant)
    ├── Button area                  ← 하단 버튼 (variant)
    └── iOS Safe Area                ← 자동 적용
```

## 🎨 Variants

### Content Type (6가지)

| Type | 용도 |
|---|---|
| `Calendar` | 날짜 선택 |
| `Time picker` | 시간 선택 |
| `List_one` | 목록 중 **하나** 선택 (단일) |
| `List_mult` | 목록 중 **여러 개** 선택 (다중) |
| `Alert` | 경고/확인 메시지 |
| `Filter` | 필터 옵션 설정 |

### Button Area Type (5가지)

**버튼 개수 × 위치** 조합:

- `One / Default` — 버튼 1개
- `One / Text button` — 버튼 1개 + 텍스트 버튼
- `Two / Default` — 버튼 2개 (세로 배치)
- `Two / Left` — 버튼 2개 (주요 액션 왼쪽)
- `Two / Right` — 버튼 2개 (주요 액션 오른쪽)

### Modal Type 동작
- 바텀 시트의 **작업이 완료되거나 취소될 때까지** 다른 작업 불가
- 닫기 방법 3가지:
  1. 동작 트리거 항목 탭
  2. Scrim(배경 dim) 탭 또는 닫기/취소 버튼 탭
  3. 시트를 아래로 스와이프

## 🎯 사용 토큰

- **너비**: 화면 전체 너비 (여백 없음) — 기본 360px
- **시트 본체 radius**:
  - 상단 좌/우: **32px 고정** (`radius/8`) — 수정 불가
  - 하단 좌/우: 0 (화면 바닥에 밀착)
- **배경**: `static/white`
- **Scrim(오버레이)**: 반투명 dim
- **Shadow**: `shadow/heavy` (무거운 분리감)
- **Typography**:
  - Title → `Heading 2~3` 또는 `Body 1/Normal-semibold`
  - Subtitle → `Body 2/Normal-regular`
  - Button → Button 컴포넌트 참조

## 📖 사용 가이드

### 너비/높이 규칙
- **너비**: 화면과 동일 (여백 없음)
- **높이**: 컨텐츠에 맞춰 가변
- 내용이 높이를 초과하면 **내부 스크롤** 허용

### Content 선택 기준
- **하나만 선택**: `List_one` (라디오)
- **여러 개 선택**: `List_mult` (체크박스)
- **날짜**: `Calendar`
- **시간**: `Time picker`
- **위험한 결정 확인**: `Alert`
- **검색/목록 필터링**: `Filter`

### Button Area 선택 기준
- 액션 하나만 있으면 → `One / Default`
- 주요 + 취소 → `Two` (주요 액션은 Right 권장)
- 세로 배치가 필요할 때만 `Two / Default` (세로)

### Title & Subtitle
- Title은 **명사형**으로 간결하게
- Subtitle은 보조 설명이 꼭 필요할 때만 사용
- 둘 다 없어도 되는 단순 시트는 Title 생략 가능

## 🔄 State 처리

- **Opening**: 하단에서 **슬라이드 업** 애니메이션
- **Default**: 표시 상태
- **Scrolling**: Content 영역 내부 스크롤 (시트 자체는 고정)
- **Closing**: 슬라이드 다운 또는 스와이프
- **Loading**: Content 영역에 로딩 표시
- **Disabled button**: 버튼 영역 상태에 따라 비활성화

## 🚫 금지 사항

- ❌ **시트 본체 상단 radius 수정 금지** — 좌/우 상단 모서리 32px 고정 (하단 모서리는 0, 화면 바닥에 붙음)
- ❌ **좌우 여백 추가 금지** — 화면 전체 너비
- ❌ **Bottom Sheet 위에 또 다른 Bottom Sheet** — 중첩 금지
- ❌ **닫기 수단 완전 제거** — 최소 하나(scrim 탭 또는 닫기 버튼)는 반드시 유지
- ❌ **정의되지 않은 Content 타입 사용** — 필요하면 디자인 팀과 협의
- ❌ **PC 환경에서 사용** — PC는 Modal / Dropdown / Drawer 사용
- ❌ **단순 액션 2~5개 선택용으로 사용** — 그 경우 Action Sheet


## 📚 참고

- Figma: [Bottom Sheet 페이지 링크 추가]
- Storybook: [링크 추가]
- 연관 컴포넌트:
  - `Action Sheet` — 단순 행동 선택용
  - `Modal` — 중앙 다이얼로그 (PC 호환)
  - `Toast` / `Callout` — 단순 알림용
