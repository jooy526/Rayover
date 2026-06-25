# Radio Button

> **단일 선택**이 필요할 때 사용하는 Control 컴포넌트. 다른 옵션 선택 시 이전 선택은 자동 해제됩니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**여러 옵션 중 하나만** 선택해야 할 때 사용합니다.

### 이럴 때 사용
- 설문 답변 (객관식)
- 옵션 선택 (배송 방법, 결제 수단 등)
- 필터 분류 (가격순/인기순/최신순 중 하나)
- 프로필 설정 중 택1 옵션

### 사용하지 말아야 할 때
- **여러 개 동시 선택** → **Check**
- **on/off 토글** → **Switch**
- **드롭다운이 더 적절한 경우** (옵션 5개 이상) → **Dropdown**

## 🎨 Variants

### Variant 축 (3개)
- **Size**: `normal` (24) / `small` (20)
- **Disable**: `False` / `True`
- **Select**: `True` (선택됨) / `False` (미선택)

→ 총 `2 × 2 × 2 = 8 variants`

## 🎯 사용 토큰

### 크기 & 모양
- **normal**: 24 × 24 (radius 12 = 원형)
- **small**: 20 × 20 (radius 10 = 원형)
- **안쪽 점** (선택 시): normal은 12px, small은 10px 원형

### Color

**Select=True (선택됨)**
| 상태 | 배경 | 안쪽 점 |
|---|---|---|
| Default | `primary/normal` | `static/white` |
| Disabled | 연한 Primary (`#FFD1B4`) | `static/white` |

**Select=False (미선택)**
| 상태 | 배경 | 테두리 |
|---|---|---|
| Default | 없음 | `label/assistive` (`#C1C1C1`) |
| Disabled | 없음 | `line/normal` (`#DFDFDF`) |

## 📖 사용 가이드

### 기본 배치 원칙 (Figma 가이드 기반)
- **기본적으로 우측 배치** (리스트 형태)
- **리스트 우측에 컨텐츠가 있을 경우** (예: 케밥 메뉴) → **좌측에 배치**

```
기본 (우측)              좌측 배치 (우측에 컨텐츠 있을 때)
┌──────────────────┐    ┌──────────────────────┐
│ 🧑 Jerry      ⦿  │    │ ⦿  🧑 Jerry       ⋮ │
│ 🧑 Jerry      ○  │    │ ○  🧑 Jerry       ⋮ │
└──────────────────┘    └──────────────────────┘
```

### 기본값(디폴트) 제공 원칙
- **항상 디폴트 옵션을 제공**합니다 (Figma 원문)
- 사용자가 선택 안 했을 때 자동으로 기본값이 선택되어 있어야 함
- 아무것도 선택 안 된 상태로 제시하지 말 것

### Size 선택 기준
- `normal` (24): 기본. 리스트 아이템, 설정 화면
- `small` (20): 촘촘한 UI, 필터 옵션

### 그룹 구성 원칙
- **같은 그룹(같은 질문)의 Radio는 Size 통일**
- 옵션 간 적절한 간격 유지 (최소 24px)
- 라벨 텍스트는 **Body 1~2** 사용

## 🔄 State 처리

- **Default (Unselected)**: 빈 원 + 회색 테두리
- **Selected**: Primary 배경 + 흰 점
- **Hover/Focus** (PC): 테두리 진해짐
- **Pressed**: 살짝 압축 효과
- **Disabled + Selected**: 연한 Primary 배경
- **Disabled + Unselected**: 연한 테두리

## 🚫 금지 사항

- ❌ **디폴트 없이 제시** — 항상 기본 선택값 지정
- ❌ **다중 선택 허용** — 그건 Check 사용
- ❌ **한 그룹에 Size 혼용** — 통일 필수
- ❌ **옵션 1개만 있는 Radio** — 무의미 (Checkbox 또는 다른 UI 사용)
- ❌ **옵션 5개 이상** — Dropdown/Picker 전환 고려
- ❌ **임의 색상 변경** — Primary 계열 고정


## 📚 참고

- Figma: [Radio Button 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Check` — 다중 선택용
  - `Switch` — on/off 토글
  - `Dropdown` — 옵션 많을 때 대체
