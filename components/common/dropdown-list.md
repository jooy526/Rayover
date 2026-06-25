# Dropdown List

> 사용자가 선택할 수 있는 옵션을 **레이어로 떠서** 제공하는 컴포넌트. 다양한 트리거(Dropdown, 풀다운 버튼, 아이콘 버튼 등)와 함께 사용 가능합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**옵션을 현재 화면 위 레이어로 펼쳐 보여줘야 할 때** 사용합니다. 별도 화면 전환 없이 즉시 선택할 수 있게 합니다.

### 이럴 때 사용
- **Dropdown 인풋과 함께** — Dropdown 클릭 시 옵션 레이어로 노출 (PC/Admin 또는 Bottom Sheet 대신 가벼운 인터랙션이 적합한 경우)
- **풀다운 버튼**과 함께 — 정렬 기준, 필터 등
- **아이콘 버튼(케밥 ⋮)**과 함께 — 컨텍스트 메뉴 (편집/삭제/공유 등)
- **테이블/리스트 행 우측** 액션 메뉴
- 자동완성 결과 등 **간단한 옵션 선택**이 필요한 모든 곳

### 사용하지 말아야 할 때
- **모바일 폼에서 옵션이 많고 스크롤이 필요할 때** → **Bottom Sheet** 사용
- **다중 선택 필터** → **Chips**
- **고정된 단일 선택 폼** (옵션 2~4개) → **Radio** (펼쳐서 노출)

## 🤔 Dropdown vs Dropdown List

| 구분 | Dropdown | **Dropdown List** |
|---|---|---|
| 역할 | 폼 입력 **트리거** (인풋) | 옵션 **메뉴 자체** |
| 모양 | Input 형태 (Label + Helper) | 떠있는 리스트 박스 |
| 단독 사용 | ❌ 옵션 UI 별도 필요 | ✅ 다양한 트리거와 조합 가능 |
| 트리거 예시 | — | Dropdown, Button, Icon Button 등 |

> 💡 **두 컴포넌트는 함께 쓸 수도, 따로 쓸 수도 있습니다.**
> Dropdown 인풋 + Dropdown List 조합도 가능하고, Button + Dropdown List 조합도 가능합니다.

## 🧩 구조

```
Dropdown List (Container)
├── Container: radius 12, 흰 배경, shadow
└── list (Child Item) × N개 반복
    ├── leading icon (icon_null = 숨김 가능, 18×18)
    ├── Text (14px Medium)
    └── trailing icon_check (icon_null = 숨김 가능, 20×20)
        └─ 선택된 항목에만 체크 표시 (단일 선택 메뉴일 때)
```

## 🎨 Variants

### Container (Dropdown List 본체)
- **단일 컴포넌트** — 별도 variant 없음
- 안에 `list` 인스턴스를 필요한 만큼 반복 추가

### Child Item (`list`) — Variants 1축

| Variant | 옵션 |
|---|---|
| **Disabled** | `False` / `True` |

#### Disabled 차이
| 상태 | Text 색 |
|---|---|
| `False` | `label/strong` (`#3D3D3D`) |
| `True` | `label/assistive` (`#C1C1C1`) |

## 🎯 사용 토큰

### Container (Dropdown List 본체)
- **Radius**: 기본 `radius/4` (12px) — **트리거 컴포넌트의 radius에 맞춰 조정**
- **배경**: `static/white`
- **Shadow**: `shadow/emphasize` 또는 `shadow/strong` 권장 (떠있는 느낌)
- **상하 padding**: 약 12px
- **좌우 padding**: 약 12px

### Child Item (`list`)
- **Text 영역 높이**: 20
- **Item 간 간격**: 30px (절대 위치 기준)
- **좌우 padding**: container와 맞춤

### Typography
- Text: 14px Medium

### Icon
- Leading: 18 × 18 (`icon_null` = 숨김 기본)
- Trailing: 20 × 20 (`icon_check1`, 선택된 항목만 표시)

### Color
| 요소 | Default | Disabled |
|---|---|---|
| Text | `label/strong` (`#3D3D3D`) | `label/assistive` (`#C1C1C1`) |
| 배경 (Hover) | 옅은 Gray (`#F7F7F7` 권장) | 변화 없음 |
| 선택 체크 | `primary/normal` 또는 `label/strong` | — |

## 📖 사용 가이드

### Figma 가이드 원문 (활용)

> **"풀다운 버튼이나 아이콘 버튼과 같은 구성요소와 함께 사용합니다.
> 최상단 레이어로 노출됩니다.
> Dropdown 또는 버튼 radius 사이즈에 맞춰서 사용합니다."**

### 트리거 컴포넌트 매칭 (자유롭게 조합 가능)

| 트리거 | 사용 케이스 | Radius 매칭 |
|---|---|---|
| **Dropdown 인풋** | 폼 옵션 선택 (PC/가벼운 모바일 인터랙션) | Dropdown radius (12) |
| **풀다운 버튼** (Text + chevron) | 정렬, 필터 | 버튼 radius (8 또는 12) |
| **Icon Button (케밥 ⋮)** | 컨텍스트 메뉴 (편집/삭제/공유) | Icon Button radius |
| **Text Button** | 인라인 메뉴 트리거 | 4 또는 12 |
| **검색 인풋** | 자동완성 결과 | Input radius |

### Radius 매칭 원칙

활용 원칙에 따라 **트리거 컴포넌트의 radius와 일치**시켜 시각적 연결성을 만듭니다:

```
Dropdown(radius 12) + Dropdown List → 12로 맞춤
Button(radius 8) + Dropdown List → 8로 맞춤
Icon Button(거의 원형) + Dropdown List → 기본 12 사용 (너무 작은 radius는 가독성 저하)
```

### 노출 위치

- **최상단 레이어**(z-index 가장 위)로 노출
- 트리거 컴포넌트 **바로 아래에 정렬** (좌측 또는 우측 끝 맞춤)
- 화면 가장자리 잘림 방지 (필요 시 위로 펼침)

### Item 구성 가이드

- **leading icon**: 옵션 의미 강화에 사용 (예: 🗑 삭제, 📝 편집)
- **trailing icon_check**: **현재 선택된 항목**에만 표시 (단일 선택 메뉴일 때)
- **다중 선택**이면 → **Check** 컴포넌트를 leading에 사용 (옵션 많으면 Bottom Sheet 권장)

### Item 개수 가이드

- **권장: 3~7개**
- 8개 이상 → **스크롤 영역**으로 처리하거나, 모바일은 **Bottom Sheet 전환** 고려
- 너무 많으면 그룹핑/검색 기능 추가

## 🔄 State 처리

### Container
- **Closed**: 표시 안 됨
- **Open**: 화면 위에 펼쳐짐 (페이드/슬라이드 애니메이션)
- **Click outside**: 닫힘 (외부 영역 탭하면 자동 dismiss)

### Item
- **Default**: 기본 표시
- **Hover/Focus** (PC): 옅은 배경 등장
- **Pressed**: 살짝 진한 배경
- **Selected**: trailing icon_check 표시
- **Disabled**: 흐린 텍스트 + 인터랙션 차단

## 🚫 금지 사항

- ❌ **트리거 컴포넌트와 정렬 어긋남** — 좌측/우측 끝을 트리거에 맞출 것
- ❌ **트리거 radius와 동떨어진 radius** — 매칭 원칙 위반
- ❌ **8개 이상 옵션 빽빽이 나열** — 스크롤 또는 Bottom Sheet 전환
- ❌ **Shadow 제거** — 떠있는 레이어임을 시각적으로 알릴 수 없음
- ❌ **외부 클릭 시 닫히지 않음** — 인터랙션 답답함
- ❌ **다중 선택 + icon_check 동시 사용** — 다중 선택은 Check 컴포넌트로
- ❌ **z-index 낮은 곳에 배치** — 최상단 레이어가 원칙

## 📚 참고

- Figma: [Dropdown list 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Dropdown` — 폼 인풋 트리거 (함께 사용 가능)
  - `Button` — 풀다운 버튼 트리거 (함께 사용 가능)
  - `Icon Button` — 케밥 메뉴 트리거 (함께 사용 가능)
  - `Bottom Sheet` (Service) — 옵션 많을 때 모바일 대안
  - `Action Sheet` (Service) — 컨텍스트 액션 메뉴 (모바일)
  - `Check` — 다중 선택 시 leading 아이콘으로 사용
