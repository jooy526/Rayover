# Dropdown

> 사용자가 **다양한 옵션 중 하나를 선택**할 수 있도록 하는 입력 컴포넌트. 클릭 시 **Bottom Sheet**로 옵션을 펼쳐 보여줍니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

> 단, 옵션 선택 UI는 **Bottom Sheet (Service 전용)** 사용 — Admin은 별도 popover/select 처리 필요

## 🎯 사용 시점

**여러 옵션 중 하나를 선택**하되, 옵션이 화면에 직접 노출되지 않아도 될 때 사용합니다.

### 이럴 때 사용
- 폼 입력 (지역 선택, 카테고리 선택, 국가 선택 등)
- 옵션이 **5개 이상**으로 Radio가 비효율적일 때
- 옵션 라벨이 길거나 동적으로 생성될 때
- 공간 절약이 중요한 폼

### 사용하지 말아야 할 때
- **옵션이 2~4개** → **Radio** (모두 펼쳐서 보여주는 게 더 명확)
- **다중 선택 필요** → **Check** 또는 **Chips**
- **on/off 토글** → **Switch**
- **자유 입력 텍스트** → **Input**

## 🧩 구조

```
Dropdown
├── Label (선택)
│   ├── Label 텍스트
│   └── Asterisk * (필수 입력일 때)
├── Input (탭 가능 영역)
│   ├── leading icon (선택, 기본 icon_null)
│   ├── Placeholder Label / 선택된 값
│   └── trailing chevron (▶) — 탭하면 펼쳐진다는 시각 단서
└── Helper text (선택, State에 따라 색상 변경)
```

> 🔑 **Dropdown 자체는 "입력 트리거"만 담당**합니다. 실제 옵션 선택은 탭 시 열리는 **Bottom Sheet** 및 **Dropdown List** 에서 처리됩니다.

## 🎨 Variants

### Variant 축 (2축, 6 variants)

| 축 | 옵션 |
|---|---|
| **State** | `Default` / `Disabled` / `Error` |
| **Style** | `Fill` / `Outline` |

#### Style 차이
- **`Fill`**: 배경이 채워진 형태 (회색 배경) — 폼 내 시각적 무게감 ↑
- **`Outline`**: 테두리만 있는 형태 — 가벼운 느낌, 배경이 복잡할 때

## 🎯 사용 토큰

### 모양
- **Input 높이**: 44
- **Input radius**: `radius/4` (12)
- **좌우 padding**: 16
- **Label ↔ Input 간격**: 약 6px
- **Input ↔ Helper text 간격**: 약 6px

### Typography
| 요소 | 스타일 |
|---|---|
| Label | 14px Medium |
| Asterisk (*) | 14px Medium, `status/destructive` (`#F94C50`) |
| Placeholder/Value | 14px Regular |
| Helper text | 12px Regular |

### Color — State × Style 조합

#### Style = Fill

| State | Input 배경 | Input 테두리 | Placeholder | Label | Helper |
|---|---|---|---|---|---|
| `Default` | `#F7F7F7` | 없음 | `label/strong` (입력 시) / `label/alternative` (placeholder) | `label/strong` | `label/alternative` (`#8B8B8B`) |
| `Disabled` | `#FBFBFB` | 없음 | `label/assistive` (`#C1C1C1`) | `label/assistive` (`#C1C1C1`) | `label/assistive` (`#C1C1C1`) |
| `Error` | `#F7F7F7` | `status/destructive` (`#F94C50`) | `label/strong` | `label/strong` | `status/destructive` (`#F94C50`) |

#### Style = Outline

| State | Input 배경 | Input 테두리 | Placeholder | Label | Helper |
|---|---|---|---|---|---|
| `Default` | 투명 | `line/normal` (`#DFDFDF`) | `label/strong` | `label/strong` | `label/alternative` (`#8B8B8B`) |
| `Disabled` | 투명 | `#EFEFEF` | `label/assistive` (`#C1C1C1`) | `label/assistive` (`#C1C1C1`) | `label/assistive` (`#C1C1C1`) |
| `Error` | 투명 | `status/destructive` (`#F94C50`) | `label/strong` | `label/strong` | `status/destructive` (`#F94C50`) |

### Icon
- **Leading icon**: 24 × 24 (선택, 기본 `icon_null` = 숨김)
- **Trailing chevron**: 24 × 24 — `icon_chevron_right` (▶) 필수

## 📖 사용 가이드

### 동작 흐름 (Figma 가이드 기반)

```
1. Dropdown 입력 영역 탭
        ↓
2. Bottom Sheet 또는 Dropdown List 등장
        ↓
3. 사용자가 옵션 선택
        ↓
4. Bottom Sheet 또는 Dropdown List 닫힘 + Dropdown에 선택값 표시
```

### Style 선택 기준

- **`Fill`** (기본 권장)
  - 폼 내 다른 입력 요소와 시각적 무게 통일
  - 입력 가능 영역임을 명확히
  
- **`Outline`**
  - 배경이 복잡하거나 카드 안에 들어갈 때
  - 폼이 가벼워 보여야 할 때
  - 다른 요소와 구분이 필요할 때

> 💡 **한 폼 내에서는 Style 통일** — Fill과 Outline 섞어쓰지 않기

### Label 사용 가이드

- **Label은 필수** (placeholder만으로 입력 의미가 명확하면 생략 가능)
- **필수 입력 항목**에는 `*` (Asterisk) 추가
- Label은 **간결하고 명확하게** (예: "지역", "카테고리")

### Placeholder 가이드

- **Default 상태**: Placeholder는 회색 (`label/alternative`)
- **선택 후**: 같은 위치에 선택값 표시 (텍스트 색상 진해짐)
- **예시**: "선택해주세요", "지역을 선택해주세요"

### Helper text 가이드

- **Default**: 보조 안내 (예: "거주 중인 지역을 선택해주세요")
- **Error**: 에러 메시지 (예: "필수 항목입니다", "올바른 값을 선택해주세요")
- **Disabled**: 안내 메시지 그대로 (단, 색상은 흐려짐)
- **선택 사항** — 필요 없으면 생략 가능

### State 전환 흐름

```
Default → 탭 → Bottom Sheet 열림 → 선택 → Default (값 채워짐)
       ↘ 잘못된 값/미입력 → Error
       
Disabled: 탭 차단, 인터랙션 없음
```

### Bottom Sheet 연동

Dropdown 클릭 시 열리는 Bottom Sheet의 Content Type은:
- **List_one** (단일 선택): 라디오 버튼 형태로 옵션 나열
- **List_mult** (다중 선택): 체크박스 형태 — 단, **다중 선택은 Dropdown보다 Chips 권장**

## 🔄 State 처리

- **Default**: 기본 표시 (Placeholder 또는 선택값)
- **Hover/Focus** (PC): 테두리 또는 배경 한 톤 진해짐
- **Active** (탭 순간): 살짝 압축 효과
- **Open** (Bottom Sheet 열린 상태): chevron 회전 또는 색상 변화 (선택적)
- **Filled** (값 선택됨): 텍스트 색 진해짐
- **Error**: 빨간 테두리 + 빨간 Helper text
- **Disabled**: 흐린 톤으로 고정 + 인터랙션 차단

## 🚫 금지 사항

- ❌ **옵션 2~4개에 사용** — Radio가 더 명확
- ❌ **chevron 제거** — Dropdown임을 알리는 핵심 시각 단서
- ❌ **Bottom Sheet 없이 인라인 펼침 (모바일)** — 모바일은 Bottom Sheet로 통일
- ❌ **Label 없이 Asterisk만 표시** — 무엇이 필수인지 불명확
- ❌ **Placeholder를 Label 대용** — Label은 따로, Placeholder는 입력 힌트
- ❌ **한 폼 내 Style 혼용** (Fill + Outline 섞어쓰기) — 통일 필수
- ❌ **Error 시 Helper text 없이 빨간 테두리만** — 무엇이 잘못됐는지 명시
- ❌ **다중 선택 용도 사용** — Chips 또는 Check 사용

## 📚 참고

- Figma: [Dropdown 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Bottom Sheet` (Service) — 옵션 선택 UI 제공
  - `Input` — 자유 텍스트 입력
  - `Radio` — 옵션 2~4개 단일 선택
  - `Chips` — 다중 선택 필터
  - `Check` — 체크박스 다중 선택
