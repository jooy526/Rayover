# Button

> 사용자에게 **주요 행동을 유도**하고 결과를 예측할 수 있게 도와주는 기본 버튼 컴포넌트

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

- 주요 액션 유도 (저장/확인/제출 등)
- 보조 액션 제공 (취소/뒤로 등)
- 위험 액션 경고 (삭제/탈퇴 등)

### 한 화면에 여러 버튼을 쓸 때
**중요도에 따른 시각적 위계를 부여**합니다.

### 사용하지 말아야 할 때
- 아이콘만 필요 → **Icon Button**
- 텍스트만 필요 (밑줄 링크 스타일) → **Text Button**
- 떠있는 주요 액션 → **Floating Button (FAB)**
- 인라인 보조 액션 → **Text Button**

## 🎨 Variants

Button은 **Style × Color × Size × Disable × Interaction** 5축 조합입니다.

### Style × Color 조합 (6개)

| 이름 | Style | Color | 주 용도 |
|---|---|---|---|
| `Solid / Primary` | Solid (꽉 찬) | Primary 브랜드 | **주요 CTA** |
| `Solid / Assistive` | Solid | Gray 중립 | 중간 강조 액션 |
| `Solid / Destructive` | Solid | Red | 위험 주요 액션 (삭제 등) |
| `Outline / Primary` | Outline (외곽선) | Primary | 보조 주요 액션 |
| `Outline / Assistive` | Outline | Gray | 중립/취소 액션 |
| `Outline / Destructive` | Outline | Red | 위험 보조 액션 |

### Size (3단계)

| Size | 높이 | Typography | Radius |
|---|---|---|---|
| `Small` | 32 | Caption 1/Medium (13px) | `radius/3` (8) |
| `Medium` | 40 | Body 2/Normal-medium (15px) | `radius/3` (8) |
| `Large` | 50 | Body 1/Normal-medium (18px) | `radius/5` (14) ※ Outline은 12 |

### Disable
- `False` — 활성화 (Interaction 상태 적용)
- `True` — 비활성화 (색상 고정, 모든 Interaction 상태 동일)

### Interaction (Disable=False일 때만)
- `Default` — 기본
- `Hover/Focus` — 마우스 오버/포커스
- `Pressed` — 눌린 상태

## 🎯 사용 토큰

### Color (Solid / Primary 기준 예시)
| 상태 | Background | Text |
|---|---|---|
| Default | `primary/normal` | `static/white` |
| Hover/Focus | `primary/strong` | `static/white` |
| Pressed | `primary/heavy` | `static/white` |
| Disabled | Primary 연한 톤 (`#FFE3D2`) | `static/white` |

### Radius
- Small/Medium: `radius/3` (8px)
- Large Solid: `radius/5` (14px)
- Large Outline: **12px** (Solid와 다름 — 테두리 2px 제외한 시각적 동일성 확보 목적)

### Typography
- Small: `Caption 1/Normal-medium`
- Medium: `Body 2/Normal-medium`
- Large: `Body 1/Normal-medium`

### Icon
- Small/Medium: 16~18px
- Large: 20px
- 좌측 (leading) / 우측 (trailing) 슬롯 각각 있음 (`icon_null` = 숨김)

## 📖 사용 가이드

### Style × Color 선택 플로우차트

```
주요 액션 → Solid / Primary
  │
  ├─ 위험 액션? → Solid / Destructive
  └─ 중립/보조? → Solid / Assistive

보조 액션 → Outline / Primary
  │
  ├─ 위험 보조? → Outline / Destructive
  └─ 취소/뒤로? → Outline / Assistive
```

### 한 화면 다중 버튼 조합 (Figma 가이드 원칙)

**명확한 권장 행동이 있을 때 (세로 정렬 권장)**
```
[ Solid / Primary   ]  ← 권장
[ Outline / Primary ]  ← 대안
```

**중요도가 비슷한 두 행동**
```
[ Outline / Primary ]
[ Outline / Primary ]
```

**주요 행동 + 보조 행동의 자유도를 열어둘 때**
```
[ Solid / Primary     ]  ← 명확한 추천
[ Text Button (보조)  ]  ← 자유 선택
```

**가로 정렬할 때**
```
[ Outline / Primary ]  [ Solid / Primary ]
        (뒤로)              (확인)
```
→ **중요 행동은 항상 우측에 배치**

### 간격 권장
- **세로 정렬**: 버튼 사이 12px (`spacing/4`)
- **가로 정렬**: 버튼 사이 8px (`spacing/3`)

### Size 선택 기준
- `Large` — 메인 CTA, 화면 하단 고정 버튼
- `Medium` — 폼 내부, 일반 액션 (기본값)
- `Small` — 리스트 아이템 내 액션, 밀집된 영역

### 아이콘 사용
- 아이콘 색상은 **버튼의 속성 색을 따라감** (텍스트와 동일)
- leading / trailing 중 **한 방향에만 사용** 권장
- 양쪽 다 쓰면 시각적 균형이 깨짐

### 원형 버튼
원형 버튼이 필요할 때는 Radius를 규격에 맞춰 사용 (Radius 가이드 참고)
→ **정식 원형 버튼이 필요하면 Floating Button 또는 Icon Button 사용 권장**

## 🔄 State 처리

- **Default**: 기본 표시
- **Hover/Focus**: 색상 한 단계 진해짐 (Primary는 `primary/strong`)
- **Pressed**: 색상 두 단계 진해짐 (`primary/heavy`)
- **Disabled**: 연한 톤으로 고정 (클릭/인터랙션 모두 무시)
- **Loading**: (필요 시) 스피너 표시, 텍스트 숨김 or "로딩 중..." 대체

## 🚫 금지 사항

- ❌ **한 화면에 Solid Primary 2개 이상** — 주요 CTA는 하나만
- ❌ **Solid Destructive + Solid Primary 동시 사용** — 혼란 유발
- ❌ **임의 색상/radius 값 사용** — 정의된 variant만
- ❌ **Radius 개별 수정** — Size에 연동된 값 고정
- ❌ **Size 혼합** (한 화면에 Large + Small 섞어 쓰기) — 일관된 Size 유지
- ❌ **Disabled 상태에 Interaction 적용** — Disabled는 정적
- ❌ **가로 정렬 시 주요 행동 왼쪽 배치** — 항상 우측

## 📚 참고

- Figma: [Button 페이지 링크 추가]
- Storybook: [링크 추가]
- 연관 컴포넌트:
  - `Icon Button` — 아이콘만 있는 버튼
  - `Text Button` — 텍스트만 있는 버튼 (보조 액션)
  - `Floating Button` — 떠있는 주요 액션 (FAB)
  - `Button Area` — Bottom Sheet 등에 들어가는 버튼 영역 레이아웃
