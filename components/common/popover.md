# Popover

> **선택이나 작업이 필요할 때** 사용하는 컴포넌트. 더 많은 정보나 옵션을 제공하여 사용자가 결정을 내리거나 행동을 취할 수 있도록 도와줍니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**트리거 요소(버튼, 아이콘 등) 주변에 떠서** 부가 정보나 가벼운 액션 제공이 필요할 때 사용합니다. Tooltip과 비슷하지만 **사용자 액션을 유도**한다는 점에서 다릅니다.

### 이럴 때 사용
- 신규 기능 안내 / 온보딩 힌트
- 트리거 요소에 대한 설명 + 닫기 액션
- 가벼운 강조 메시지 (이벤트 알림 등)
- 마우스 호버가 아닌 **클릭 트리거 기반 정보**
- "이것이 새 기능입니다" 같은 발견(discovery) 도움

### 사용하지 말아야 할 때
- 사용자 결정이 필요한 중요한 알림 → **Modal**
- 호버 시 단순 정보 → **Tooltip**
- 페이지 인라인 알림 → **Callout**
- 옵션 선택 메뉴 → **Dropdown List**
- 일시적 피드백 → **Toast**

### Popover vs Tooltip vs Modal

| | **Popover** | **Tooltip** | **Modal** |
|---|---|---|---|
| 트리거 | 클릭 | 호버/포커스 | 시스템 트리거 |
| 닫기 | 외부 클릭 또는 x 버튼 | 자동 사라짐 | 명시적 버튼만 |
| 강도 | 중간 | 약함 | 강함 |
| 액션 포함 | 가능 (close 등) | 없음 | 필수 |

## 🧩 구조

```
Popover
├── pin (radius 12, 색은 Style에 따라)
│   ├── (선택) icon_x — 좌측 닫기
│   ├── Container
│   │   ├── Title (15px Medium)
│   │   └── Description (12px Regular)
│   └── (선택) icon_x — 우측 닫기
└── arrow (Direction에 따라 4방향)
```

> 🔑 **Popover + arrow는 별개 Component Set**
> - Popover는 본체
> - arrow는 미세 위치 조정용 child component

## 🎨 Variants

### 1️⃣ Popover Component Set — **24 variants**

**3축 조합:**

| 축 | 옵션 |
|---|---|
| **Direction** | `top` / `bottom` / `left` / `right` |
| **BG Blur** | `off` (단색) / `on` (반투명·블러) |
| **Style** | `Black` / `Gray` / `Orange` / `Orange-goast` |

→ 실제 4 × 2 × 4 = **32 조합 가능** (Figma상 24 인스턴스 정의)

#### Direction
화살표가 **어느 면에서 트리거를 향하는지** 결정:
- `top` — Popover가 트리거 **위**에 위치, 화살표 **아래**
- `bottom` — Popover가 트리거 **아래**, 화살표 **위**
- `left` — Popover가 트리거 **왼쪽**, 화살표 **오른쪽**
- `right` — Popover가 트리거 **오른쪽**, 화살표 **왼쪽**

#### BG Blur
| | 효과 | 사용 |
|---|---|---|
| `off` | 단색 fill | 명확한 가독성 필요 |
| `on` | 반투명 + (앱에서 backdrop-filter blur 적용) | 콘텐츠 위 부드럽게 |

#### Style별 색상

| Style | BG (off) | BG (on, 반투명) | Title | Description |
|---|---|---|---|---|
| `Black` | `#3D3D3D` | 검정 70% | white | `#F5F4F3` |
| `Gray` | `#8B8B8B` | 검정 40% | white | `#F5F4F3` |
| `Orange` | `primary/normal` (`#FF5722`) | `#FF3D00` 70% | white | `#F5F4F3` |
| `Orange-goast` | `#FFE3D2` (Primary 연한톤) | `#FF5722` 20% | `#FF5722` | `#FF5722` |

### 2️⃣ arrow Component Set — **12 variants** (Child item)

**2축:**

| 축 | 옵션 |
|---|---|
| **Direction** | `top` / `bottom` / `Right` / `Left` |
| **Location** | `center` / `left` (또는 Top) / `right` (또는 bottom) |

→ 4 × 3 = **12 variants**

#### Location 의미

화살표가 Popover의 어느 위치에서 나오는지 미세 조정:

```
Direction=top (Popover 위에 위치, 화살표 아래)
                          ┌─────────────┐
   Location=left          │  Popover    │
                          ╲ ─────────── │
                          ▼ ▲           │
                            └─ trigger 좌측 정렬
                                    
   Location=center        │  Popover    │
                          │ ─────────── │
                          │     ▼       │
                          ▲ trigger 가운데 정렬
                          
   Location=right         │  Popover    │
                          │ ─────────── ╱
                          │           ▼ ▲
                            trigger 우측 정렬 ─┘
```

→ **트리거의 길이/위치에 따라 화살표만 좌·중·우로 이동**시켜 사용

## 🎯 사용 토큰

### Popover 본체 (pin)
- **Radius**: `radius/4` (12)
- **배경**: Style에 따라 (위 표 참조)
- **너비**: 유동 (콘텐츠 길이에 따라, 최소 82, 최대 196 권장)
- **높이**: 50 (기본 1줄) / 66+ (2줄 이상)
- **내부 padding**: 좌우 12, 상하 9

### Typography
| 요소 | Style |
|---|---|
| Title | 15px Medium |
| Description | 12px Regular |

### Title/Description 색
| Style | Title 색 | Description 색 |
|---|---|---|
| Black/Gray/Orange | white | `#F5F4F3` |
| Orange-goast | `#FF5722` | `#FF5722` |

### icon_x (닫기 버튼)
- 20 × 20
- white (Black/Gray/Orange)
- `#FF5722` (Orange-goast)
- 좌측 또는 우측 배치 가능

### arrow
- 가로 방향 (top/bottom): width 가변, **height 6**
- 세로 방향 (left/right): **width 6**, height 가변
- 색: pin과 동일한 색

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 선택이나 작업이 필요할 때 사용. 더 많은 정보나 옵션을 제공하여 사용자가 결정을 내리거나 행동을 취할 수 있도록 도움
>
> **활용:** 팝오버는 **클릭 시에만 나타나며**, 트리거 요소 주변에 배치되어 관련 맥락을 제공. **팝오버 밖을 클릭하거나 확인 버튼으로 닫을 수 있음**
>
> **위치:** top, bottom, right, left의 **기본 방향**이 있고, 길이나 위치에 따라 **화살표의 location을 left, center, right, top, bottom으로 바꿔서 사용**

### Direction 선택 가이드

```
트리거 요소가 화면 어디에 있는가?

화면 상단 가까이      → Direction=bottom (Popover가 아래로 펼침)
화면 하단 가까이      → Direction=top    (Popover가 위로 펼침)
화면 우측 가까이      → Direction=left   (Popover가 좌측으로 펼침)
화면 좌측 가까이      → Direction=right  (Popover가 우측으로 펼침)
화면 가운데           → Direction=bottom 기본 권장
```

### arrow Location 선택 가이드

트리거의 **가로/세로 위치에 맞춰** 화살표만 미세 조정:

```
트리거가 짧고 Popover가 길 때:
[ ────────────────  Popover  ────────── ]
                  ▼
        [trigger]   ← Popover보다 좁으므로 arrow를 left로 이동
```

- 트리거가 화면 좌측 가까이 → **Location=left** (또는 Top)
- 트리거가 가운데 → **Location=center**
- 트리거가 화면 우측 가까이 → **Location=right** (또는 bottom)

### Style 선택 가이드

| 상황 | 추천 Style |
|---|---|
| 일반 정보 안내 | **Black** |
| 부드러운 안내 | **Gray** |
| 이벤트/프로모션 강조 | **Orange** |
| Primary 톤 유지하며 부드럽게 | **Orange-goast** |

### BG Blur 선택 가이드

- **off (단색)**: 텍스트 가독성이 중요할 때, 단색 배경 위
- **on (블러)**: 이미지/복잡한 콘텐츠 위, 콘텐츠를 살짝 비추며 부드러운 인상

### 닫기 버튼 (icon_x) 위치

- **좌측**: 텍스트 강조형 (오른쪽으로 갈수록 시선이 자연스럽게 닫기로 도달)
- **우측**: 일반적인 닫기 버튼 (시스템 표준)
- **둘 다 사용 X** — 한쪽만 선택

### 콘텐츠 길이 가이드

```
짧은 한 줄          → 기본 (50h)
긴 두 줄 이상       → Description이 자동 wrap (66h+)
3줄 이상            → Modal 또는 Bottom Sheet 고려
```

### 외부 영역 클릭 동작

> **Modal과의 가장 큰 차이점:** Popover는 **외부 클릭으로 닫힘**

- ✅ 외부 영역 클릭 → 자동 dismiss
- ✅ x 버튼 클릭 → 닫힘
- ✅ ESC 키 → 닫힘 (PC)

### 트리거와의 관계

- 트리거 요소 **바로 옆**에 배치 (보통 8~12px 간격)
- 화살표는 트리거의 **시각적 중심**을 가리킴
- 화면 가장자리 잘림 시 **Direction 자동 반전** 권장 (예: bottom → top)

## 🔄 State 처리

- **Hidden**: 표시 안 됨 (기본)
- **Open**: 페이드 + 살짝 슬라이드 등장 (Direction 반대 방향에서 들어옴)
- **Closing**: 페이드 아웃
- **외부 클릭**: 자동 닫힘
- **icon_x 클릭**: 닫힘

### 등장 애니메이션 권장

- Direction=top → 아래에서 위로 슬라이드 + fade in
- Direction=bottom → 위에서 아래로 슬라이드 + fade in
- 200~250ms 권장

## 🚫 금지 사항

- ❌ **외부 클릭으로 닫히지 않음** — 정의된 동작 위반 (Modal과 혼동)
- ❌ **3줄 이상 긴 콘텐츠** — Modal/Bottom Sheet로 이동
- ❌ **arrow 없이 사용** — 트리거와의 관계가 불명확
- ❌ **Direction과 arrow 위치 불일치** — Direction=top인데 arrow가 위쪽
- ❌ **트리거에서 멀리 떨어진 배치** — 관계가 끊김
- ❌ **여러 Popover 동시 노출** — 사용자 시선 분산
- ❌ **icon_x 좌우 동시 사용** — 한쪽만
- ❌ **Style 4개 한 화면에 혼용** — 일관성 깨짐, 한 화면 1~2 Style만

## 📚 참고

- Figma: [Popover 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Tooltip` — 호버형 단순 정보
  - `Modal` — 강한 포커스, 중요 결정
  - `Callout` — 인라인 알림
  - `Bottom Sheet` (Service) — 모바일 풀스크린 옵션
  - `Toast` — 일시적 피드백
- 사용 예:
  - 신규 기능 발견 (onboarding hint)
  - 버튼 옆 부가 설명 + 닫기
  - 이벤트/프로모션 알림 (Orange Style)

## 🔧 Figma 발견 이슈 (사용자 검토 필요)

> 발견한 오타들 — 수정 권장

1. **`Discription` (50+ 인스턴스)** → `Description` (Component Set 본체와 모든 인스턴스)
2. **레이어 이름 `Discription` (사용예시 디스크립션 텍스트)** → `Description`
3. **`Style=Orange-goast`** → **`Style=Orange-ghost`** (goast는 ghost 오타)
