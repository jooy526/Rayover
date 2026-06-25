# Text Button

> 부가적인 행동을 제안하며, **주요 행동에 방해되지 않도록 시각적 무게감을 최소화**한 버튼

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

- **선택적 행동**이나 **부가 기능** 제공
- 탑 네비게이션 바의 Done/Cancel 등 액션
- 토스트/스낵바 내 액션
- 카드 하단의 "자세히 보기" 등 부가 진입
- 인라인 텍스트 내 클릭 가능한 액션
- **밀도 높은 인터페이스**에서 공간 절약

### 사용하지 말아야 할 때
- 페이지의 주요 CTA → **Button (Solid)**
- 단순 아이콘 액션 → **Icon Button**
- 떠있는 주요 액션 → **Floating Button**

## 🎨 Variants

### Color (4개)
| 이름 | 용도 |
|---|---|
| `Primary` | 브랜드 강조 액션 |
| `Destructive` | 삭제/탈퇴 등 위험 액션 |
| `Normal` | 중립 액션 (가장 일반적) |
| `Assistive` | 가장 약한 강조 (옵션적 액션) |

### Size (4단계)
| Size | 높이 | Typography |
|---|---|---|
| `Small` | 20 | 11px Medium |
| `Medium` | 24 | 13px Medium |
| `Large` | 32 | 15px Medium |
| `XLarge` | 32 | 16px Medium |

### Disable
- `False` / `True`

### Interaction (Disable=False일 때만)
- `Default`
- `Hover/Focus`
- `Pressed`

### Hover Style ⭐ Text Button만의 특징
- **`None`** — 호버 시 배경 없음 (텍스트 색상만 변화)
- **`Fill`** — 호버 시 연한 배경이 나타남

> 💡 **모바일에서는 `None` 스타일 권장** (호버 개념이 없음)
> 💡 **PC에서는 `Fill` 스타일 권장** (클릭 가능함을 시각적으로 명확히)

## 🎯 사용 토큰

### Radius
- 모든 Size 공통: `radius/1` (4px) — 일반 Button(8~14px)보다 훨씬 작음

### Color (Primary 기준 예시)
| 상태 | Hover Style=None | Hover Style=Fill |
|---|---|---|
| Default | 텍스트 `primary/normal` | 텍스트 `primary/normal`, 배경 없음 |
| Hover/Focus | 텍스트 `primary/strong` | 배경 연한 Primary, 텍스트 `primary/strong` |
| Pressed | 텍스트 `primary/heavy` | 배경 Primary 좀 더 진하게 |
| Disabled | 텍스트 `primary` 연한 톤 | (Disable은 Hover Style 무관) |

### Typography
- Small: 11px Medium
- Medium: 13px Medium
- Large: 15px Medium
- XLarge: 16px Medium

### Padding/Size
- 버튼 박스가 작고 촘촘함 (텍스트 중심이라 padding 적음)
- Icon 들어갈 때만 slot 사용 (icon_null 기본)

## 📖 사용 가이드

### Color 선택 플로우

```
Primary     — 브랜드 강조가 필요하면
Destructive — 위험 액션 (삭제 등)
Normal      — 제일 일반 (중립적)
Assistive   — 가장 약한 보조 (옵션적)
```

### Hover Style 선택 원칙
- **모바일**: 무조건 `None` (호버 없음)
- **PC**:
  - 클릭 가능함을 명확히 할 필요 있으면 `Fill`
  - 텍스트 흐름 중 자연스럽게 있어야 하면 `None`

### 활용 예시 (Figma 가이드 기반)

**탑 네비게이션 바**
```
[←]        Title        [Done]  ← Text Button Primary
```

**토스트/스낵바**
```
ⓘ Title            [Action]    ← Text Button Normal
  Description
```

**카드 하단**
```
┌─────────────────────────┐
│   [Thumbnail]           │
│   Card Title            │
│   Secondary text...     │
│   [자세히 보기 →]       │  ← Text Button Primary
└─────────────────────────┘
```

### 텍스트 길이 원칙
- **너무 긴 문장 사용 금지** — 1~3단어 권장
- 동사형 또는 명확한 지시어

## 🔄 State 처리

- **Default**: 텍스트만 표시
- **Hover/Focus**:
  - None → 텍스트 색상 진해짐
  - Fill → 배경 등장 + 텍스트 색상 진해짐
- **Pressed**: 색상 더 진해짐
- **Disabled**: 연한 톤으로 고정

## 🚫 금지 사항

- ❌ **주요 CTA로 사용** — 주요 액션은 Solid Button
- ❌ **긴 문장** — Text Button은 짧고 명확해야
- ❌ **모바일에서 Fill 스타일 사용** — None 권장
- ❌ **여러 개 나란히 배치** — 시각적 혼란 (1~2개 권장)
- ❌ **아이콘 중심 사용** — 그건 Icon Button이나 일반 Button
- ❌ **임의 색상 조합** — 4가지 Color 중에서만 선택

## 📚 참고

- Figma: [Text Button 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Button` — 주요/보조 액션 (Solid/Outline)
  - `Icon Button` — 아이콘만 있는 버튼
  - `Floating Button` — 떠있는 주요 액션
  - Toast, Top Navigation, Bottom Sheet 등이 Text Button을 내장 요소로 사용
