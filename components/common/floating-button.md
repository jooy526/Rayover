# Floating Button (FAB)

> 화면 위에 **떠있는** 원형 버튼. 가장 기본적이고 일반적인 **주요 행동**을 제공합니다.

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

> PC/Admin 환경에서는 일반 Button 또는 Icon Button 사용 권장

## 🎯 사용 시점

- 화면의 **가장 기본적이고 일반적인 기능** (글쓰기, 추가, 작성 등)
- 스크롤되는 컨텐츠 위에 **항상 떠있어야** 하는 핵심 액션
- 빈 상태에서 "시작하기" 같은 강조 액션

### 사용하지 말아야 할 때
- 부가 액션 / 여러 액션 중 하나 → **Button** 또는 **Icon Button**
- 컨텐츠와 같은 평면 액션 → **Button**
- 한 화면에 2개 이상 필요 → FAB 원칙 위반 (주요 액션은 하나만)

## 🎨 Variants

### Style (3개)

| 이름 | 모양 | 용도 |
|---|---|---|
| `Solid` | Primary 색 꽉 찬 (주력) | 가장 강조되는 주요 액션 |
| `Normal` | 흰 배경 | 중립적 떠있는 액션 |
| `Outline` | 흰 배경 + 테두리 | 배경과 대비를 위한 보조 |

### Size
- `Large` — 54 × 54 (기본)
- `XLarge` — 54 × 54 (실질적으로 동일 크기, Style에 따라 구분)

> ⚠️ **Large와 XLarge의 실제 크기가 동일함** (54 × 54). 명목상 분리되어 있지만 사이즈 차이는 없어보임 — 디자인팀 확인 필요.

### Disable / Interaction
- `Disable`: False / True
- `Interaction`: Default / Hover/Focus / Pressed

## 🎯 사용 토큰

### 크기 & 모양
- **크기**: 54 × 54 (고정)
- **radius**: 27 (= `radius/full`, 완전 원형)
- **아이콘 크기**: 30 × 30

### Color (Solid 기준)
| 상태 | 배경 | 아이콘 |
|---|---|---|
| Default | `primary/normal` | `static/white` |
| Hover/Focus | `primary/strong` | `static/white` |
| Pressed | `primary/heavy` | `static/white` |
| Disabled | 연한 Gray | `static/white` |

### Color (Normal 기준)
| 상태 | 배경 |
|---|---|
| Default | `static/white` |
| Hover/Focus | 연한 Gray (`#F7F7F7`) |
| Pressed | 중간 Gray (`#EFEFEF`) |
| Disabled | 연한 Gray (`#ECECEC`) |

### Color (Outline 기준)
| 상태 | 배경 | 테두리 |
|---|---|---|
| Default | `static/white` | `line/normal` |
| Hover/Focus | 연한 Gray | `line/normal` |
| Pressed | 중간 Gray | `line/normal` |
| Disabled | 연한 Gray | `line/normal` |

### Shadow
FAB는 "떠있는" 느낌을 주기 위해 Shadow 필수.
→ `shadow/emphasize` 또는 `shadow/strong` 권장

## 📖 사용 가이드

### 배치 규칙 (Figma 가이드 기반)

```
┌──────────────────────────┐
│                          │
│      콘텐츠              │
│                          │
│                          │
│                          │
│                ╭──╮      │ ← 16px 여백
│                │FAB│      │
│                ╰──╯      │
│    [Tab Bar Tab Bar]     │ ← 탭바 있으면 그 위에
└──────────────────────────┘
```

- **화면 모서리에서 16px 여백** 유지
- **하단 탭바가 있으면 탭바 위에 배치** (탭바를 가리지 않도록)
- 일반적으로 **우측 하단**에 배치 (한국/영어권 관례)

### 확장형 FAB (메뉴 펼치기)
같은 카테고리의 메뉴를 묶어서 사용 가능:
- 펼쳐지는 메뉴는 **3~6개**가 적정
- 너무 많으면 ActionSheet 또는 BottomSheet 전환 고려

```
    ╭──────────────╮
    │  📝  글쓰기   │
    ├──────────────┤
    │  📷  사진    │
    ├──────────────┤
    │  🎥  영상    │
    ╰──────────────╯
              ╭──╮
              │FAB│  ← 탭하면 메뉴 펼쳐짐
              ╰──╯
```

### Style 선택 기준
- **Solid (Primary)**: 90% 케이스 — 가장 강조되는 주요 액션 (글쓰기, 추가)
- **Normal**: 배경과 대비가 필요할 때 (컨텐츠 위)
- **Outline**: Normal만으로 경계가 불명확할 때

### 아이콘 선택
- **단순하고 명확한 아이콘** 사용 (pencil, plus, camera 등)
- 접근성: `aria-label` 필수 ("글쓰기", "추가하기" 등)

## 🔄 State 처리

- **Default**: 화면에 떠있음 (Shadow 적용)
- **Hover/Focus** (PC): 색상 한 톤 진해짐
- **Pressed**: 색상 두 톤 진해짐 + 살짝 압축 효과
- **Disabled**: 연한 Gray + 클릭 차단
- **Scroll Hide (선택)**: 스크롤 다운 시 숨기고, 스크롤 업 시 노출
- **Expanded**: 메뉴 펼쳐진 상태 (확장형일 때)

## 🚫 금지 사항

- ❌ **한 화면에 FAB 2개 이상** — 주요 액션은 하나
- ❌ **16px 여백 침범** — 모서리에 너무 가까이 붙이지 말 것
- ❌ **탭바 가리기** — 탭바가 있으면 반드시 그 위로
- ❌ **PC/Admin 환경에서 사용** — Mobile 전용
- ❌ **임의 크기 변경** — 54 × 54 고정
- ❌ **Shadow 제거** — FAB는 떠있어야 함
- ❌ **확장 메뉴 7개 이상** — 시각적 과부하
- ❌ **아이콘 없이 FAB** — FAB는 아이콘 필수

## 📚 참고

- Figma: [Floating Button 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Button` — 일반 버튼
  - `Icon Button` — 공간 절약용 아이콘 버튼
  - `Action Sheet` — FAB 확장 대신 사용 가능
- 배치 관련: Tab Bar, iOS Safe Area
