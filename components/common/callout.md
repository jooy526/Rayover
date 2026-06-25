# Callout

> 요소의 **짧은 부가설명**이 필요할 때 사용. 사용자 액션 없이 간단한 추가정보를 제공하는 툴팁

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**요소 근처에 떠서 간단한 부가 정보를 안내**할 때 사용합니다.

### 이럴 때 사용
- 아이콘/버튼에 대한 짧은 설명 ("새 글쓰기")
- 상태 안내 ("수정됨", "N명 좋아요")
- 신규 기능 안내 ("NEW")
- 입력 필드의 힌트
- 어떤 요소가 무엇을 의미하는지 즉각 알려주기

### 사용하지 말아야 할 때
- **긴 설명이 필요할 때** → **Detail Tooltip** 사용 (제목 + 설명 분리)
- **사용자 액션(클릭/호버) 후 반응** → **Tooltip** (호버 기반)
- **중요한 상태 피드백** → **Toast** 또는 **Badge**
- **사용자가 읽고 반드시 이해해야 할 정보** → 본문 텍스트나 Modal

## 🧩 구조

```
Callout
├── pin (본체, radius 16)
│   ├── leading icon (선택)
│   ├── Title (가운데 정렬)
│   └── trailing icon (선택)
└── arrow (방향 지시)
```

## 🎨 Variants (5축 조합)

### 1. Direction (2가지)
- **`Top`** — arrow가 **아래**에 있음 (Callout이 대상 요소의 **위**에 표시)
- **`Bottom`** — arrow가 **위**에 있음 (Callout이 대상 요소의 **아래**에 표시)

### 2. BG Blur (2가지)
- **`off`** — 불투명 (기본)
- **`on`** — 반투명 (opacity 0.2~0.7 적용, 배경 내용 살짝 비침)

### 3. Size (3단계)
| Size | Pin 높이 | Typography |
|---|---|---|
| `Large` | 32 | 14px SemiBold |
| `Medium` | 24 | 12px Medium |
| `Small` | 18 | 11px Regular |

### 4. Style (5가지 — 색상 테마)
| Style | Pin 색 | Title 색 | 용도 |
|---|---|---|---|
| `Black` | `#3d3d3d` | `static/white` | 기본, 가장 강조 |
| `Gray` | `#8b8b8b` | `static/white` | 중립적 안내 |
| `Orange` | `primary/normal` | `static/white` | 브랜드 강조 (NEW, HOT 등) |
| `Orange-gost` | 연한 Orange (`#ffe3d2`) | `primary/normal` | 은은한 브랜드 강조 |
| `White` | `static/white` | `label/normal` | 어두운 배경 위 대비용 |

### 5. Arrow Location ⭐ Child Component
별도 컴포넌트로 제공되는 **arrow**는 길이/위치에 따라 바꿔 사용:

| Direction | Location | 설명 |
|---|---|---|
| top | left | arrow가 아래-왼쪽 |
| top | center | arrow가 아래-가운데 (기본) |
| top | right | arrow가 아래-오른쪽 |
| bottom | left | arrow가 위-왼쪽 |
| bottom | center | arrow가 위-가운데 (기본) |
| bottom | right | arrow가 위-오른쪽 |

> 💡 **Callout 길이와 대상 요소 위치에 따라 arrow location을 조정**합니다.

## 🎯 사용 토큰

### 모양
- **Pin radius**: `radius/5` (16px) — 모든 Size 공통
- **Arrow 높이**: 6px

### Typography
- Large → `Label 1/Normal-semibold` (14px)
- Medium → `Caption 1/Normal-medium` (12px)
- Small → `Caption 2/Normal-regular` (11px)

### Color (Style별 배경)
- Black → `#3d3d3d` (또는 `label/strong` 근처 Gray)
- Gray → `label/alternative` (`#8B8B8B`)
- Orange → `primary/normal`
- Orange-gost → 연한 Primary 톤 (`#FFE3D2`)
- White → `static/white`

### BG Blur On 시 opacity
- Black → 0.7
- Gray → 0.4
- Orange → 0.7
- Orange-gost → 0.2
- White → 0.7

### Icon
- Large: 18 × 18
- Medium: 14 × 14
- Small: 12 × 12
- 좌/우 slot 각각 (`icon_null` = 숨김 상태)

## 📖 사용 가이드

### 배치 원칙 (Figma 가이드 기반)
- **중요 콘텐츠를 가리지 않도록** 대상 요소의 위 또는 아래에 배치
- **대상 요소 바로 옆**에 붙여서 연관성 명확히
- **사용자 액션(클릭/호버) 없이** 자동 노출

### Direction 선택
- 대상 요소 **위에 공간 있으면** → `Top` (arrow 아래로)
- 대상 요소 **아래에 공간 있으면** → `Bottom` (arrow 위로)
- 화면 가장자리에서 잘리지 않도록 조정

### Arrow Location 선택
- Callout **길이가 대상보다 크면** → center
- Callout이 **대상의 왼쪽 끝에 맞춰지면** → left
- Callout이 **대상의 오른쪽 끝에 맞춰지면** → right

```
예시 (Top / Bottom / Arrow Location)

[Button]              [Button]              [Button]
   ╱                     ╲                     ╲
╭──────╮             ╭──────╮             ╭────────╮
│ 안내 │             │ 안내 │             │ 긴 안내 │
╰──────╯             ╰──────╯             ╰────────╯
 left                 center                 right
```

### Style 선택 기준
- **Black**: 기본 (가장 많이 사용)
- **Gray**: 덜 강조, 중립적 (부가 정보)
- **Orange**: 신규 기능/이벤트 강조 ("NEW" 등)
- **Orange-gost**: 브랜드감 있지만 은은하게
- **White**: 어두운 배경/이미지 위에서 대비 확보

### Size 선택
- `Large`: 가장 강조 (타이틀 요소 옆)
- `Medium`: 기본
- `Small`: 촘촘한 UI, 아이콘 옆 짧은 설명

### BG Blur 사용 기준
- **off**: 배경과 명확히 분리 필요할 때 (기본)
- **on**: 배경 이미지/컨텐츠 위에서 **살짝 비치는 느낌**으로 UI에 녹아들게 할 때

### 텍스트 길이
- **한 줄 10자 이내** 권장
- 이보다 길어지면 **Detail Tooltip** 사용 (제목 + 설명으로 분리)

## 🔄 State 처리

Callout은 **정적 표시** 컴포넌트 — 기본적으로 State 변화 없음.

- **Appear**: 대상 요소 표시와 함께 등장 (페이드 또는 슬라이드)
- **Visible**: 고정 표시
- **Dismiss (선택)**: 일정 시간 후 자동 사라짐 또는 close 아이콘 탭

> 💡 **호버/클릭 상호작용은 Callout이 아닙니다** — Tooltip/Detail Tooltip 사용

## 🚫 금지 사항

- ❌ **긴 설명 텍스트** — 10자 이내 권장. 길면 Detail Tooltip 사용
- ❌ **여러 줄 구성** — Callout은 한 줄
- ❌ **중요 콘텐츠 위에 덮어쓰기** — 가리지 않도록 배치
- ❌ **사용자 액션(클릭/호버)으로 트리거** — 그건 Tooltip
- ❌ **임의 색상 사용** — 5가지 Style 중에서만
- ❌ **Arrow 없이 사용** — Callout은 **대상을 가리키는 화살표가 본질**
- ❌ **한 화면에 Callout 여러 개 동시 노출** — 시각적 산만함

## 📚 참고

- Figma: [Callout 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Tooltip` — 호버 기반 툴팁
  - `Detail Tooltip` — 긴 설명용 (제목 + 설명)
  - `Toast` — 알림 / 피드백
  - `Badge` — 상태 표시
