# Button Area

> 사용자가 **주요 행동을 쉽게 예측하고 행동할 수 있도록** 화면 하단에 영역을 확보하여 버튼을 제공하는 레이아웃 컴포넌트

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

> iOS Safe Area 포함 → 모바일 전용

## 🎯 사용 시점

**화면 하단에 고정되어야 하는 주요 액션 영역**을 만들 때 사용합니다.

### 이럴 때 사용
- 폼 제출 / 저장 화면 하단
- Bottom Sheet의 하단 버튼 영역
- Modal의 하단 액션 영역
- 상세 페이지의 CTA (예: "구매하기", "찜하기 + 구매하기")
- 글쓰기 에디터 하단 툴바 + 완료 버튼

### 사용하지 말아야 할 때
- 하단 고정이 필요 없는 인라인 버튼 → **Button** 직접 사용
- 떠있는 단일 액션 → **Floating Button**
- 탭바는 Button Area가 아님 (Tab Bar 컴포넌트 별도)

## 🧩 핵심 개념

**Button Area는 "Button을 담는 영역"** 이지 Button 자체가 아닙니다.

```
Button Area
├── Container (화면 너비, 고정)
│   └── (Type에 따라 배치된 버튼 인스턴스들)
└── iOS Safe Area (자동)
```

**필요한 버튼을 하위 인스턴스로 변환하여 사용합니다.**

## 🎨 Variants (Type — 10가지)

### 기본 패턴

| Type | 구성 | 사용 예 |
|---|---|---|
| `Default` | Solid Primary 버튼 1개 | 가장 기본 (확인/저장) |
| `Button` | Solid Primary 1개 (좌우 margin 포함) | 단순 액션 |
| `Text` | Text Button 1개 | 부가 액션만 있을 때 |

### 두 개 버튼 (가로)

| Type | 구성 | 사용 예 |
|---|---|---|
| `Tex + Text` | Text Button 2개 (Cancel + Action) | 가벼운 선택 |
| `H Text + Button` | Text(Cancel) + Solid(Action) | 취소 + 주요 액션 |
| `H Button + Button` | Solid Assistive(Cancel) + Solid Primary | 중요도 있는 취소 + 실행 |

### 두 개 버튼 (세로)

| Type | 구성 | 사용 예 |
|---|---|---|
| `V Button + Text` | Solid Primary + Text Button | 명확 권장 + 자유 대안 |
| `V Button + Button` | Solid Primary + Solid Assistive | 동등한 두 선택 |
| `V Button + lineButton` | Solid Primary + Outline Primary | 주요 + 보조 (둘 다 강조) |

### 특수 패턴

| Type | 구성 | 사용 예 |
|---|---|---|
| `helpertext+button` | Helper text + Solid Primary | 설명 + 실행 (예: "N개 선택됨") |
| `write button` | Icon Button 여러 개 + Submit 버튼 | 글쓰기 툴바 (이미지/이모지 + 등록) |

## 🎯 사용 토큰

- **너비**: 360 (화면 전체)
- **배경**: `static/white`
- **상단 padding**: 12~16px (버튼 위)
- **하단**: iOS Safe Area (자동)
- **버튼 간 간격**:
  - 세로 정렬: 8px (Button + Text) / 12px (Button + Button)
  - 가로 정렬: 8px
- **좌우 여백**: 16px (화면 가장자리에서)

## 📖 사용 가이드

### Type 선택 플로우

```
주요 액션 하나만?
  └─ Yes → Default / Button
  └─ No  ↓

취소 + 실행?
  └─ 가볍게? → H Text + Button
  └─ 대등하게? → H Button + Button
  └─ 세로로? → V Button + Text/Button

글쓰기/에디터?
  └─ write button

선택 상태 안내 필요?
  └─ helpertext+button
```

### 배치 규칙
- **화면 최하단 고정** (position: fixed bottom)
- **iOS Safe Area를 반드시 포함** (Home Indicator 영역 고려)
- 컨텐츠가 스크롤될 때 **Button Area는 항상 보여야** 함

### 가로 정렬 시 주의 (Figma 가이드)
- **주요 행동은 우측에 배치** (일반 Button 가이드와 동일)
- Cancel / Back → 왼쪽
- Submit / Action → 오른쪽

### Button Area 내부 버튼 선택
사용할 하위 버튼은 **다른 Button 컴포넌트의 인스턴스**를 사용:
- Solid Primary: 주요 액션
- Solid Assistive: 중립 액션 (Cancel 등)
- Outline Primary: 보조 액션 (강조 원할 때)
- Text Button: 가벼운 보조

## 🔄 State 처리

- **Default**: 표시
- **Scroll**: 컨텐츠 스크롤되어도 Button Area는 고정
- **Keyboard Open (모바일)**: 키보드 위로 올라가도록 처리
- **Loading**: Submit 버튼 로딩 중 → 버튼 자체 Loading state
- **Disabled**: 폼 미입력 등 → 주요 버튼 Disabled

## 🚫 금지 사항

- ❌ **Button Area 없이 화면 하단에 임의 버튼 배치** — 일관성 확보
- ❌ **iOS Safe Area 제거** — Home Indicator 영역 침범 금지
- ❌ **3개 이상의 버튼** — 최대 2개 (선택지 과다)
- ❌ **Button Area를 상단에 사용** — 하단 고정 전용
- ❌ **가로 정렬에서 주요 액션 왼쪽** — 항상 우측
- ❌ **PC 환경 사용** — iOS Safe Area가 의미 없음

## 📚 참고

- Figma: [Button Area 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Button` — Button Area 안에 들어가는 기본 버튼
  - `Text Button` — Button Area 안에 들어가는 텍스트 버튼
  - `Icon Button` — write button 타입에서 사용
  - `Bottom Sheet` — Button Area를 내장으로 사용
  - `Modal` — Button Area를 내장으로 사용
