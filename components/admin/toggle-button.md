# Toggle Button

> 사용자가 **여러 옵션을 파악하고 선택**할 수 있게 도와주는 분절형 버튼 그룹. 보통 **2~3개의 옵션** 중 하나를 선택할 때 사용합니다.

## 📍 환경

- [ ] Common
- [ ] Service
- [x] **Admin (PC, CMS)**

## 🎯 사용 시점

**여러 옵션을 한눈에 보여주고**, 그중 하나를 선택하게 할 때 사용합니다. 분절된 버튼 그룹이 한 컨테이너 안에 묶여 있어, **선택 가능한 옵션이 무엇인지 명확하게** 표현됩니다.

### 이럴 때 사용
- 기간/시간 단위 전환 (일/주/월)
- 뷰 전환 (List/Grid/Card)
- 정렬 방식 (오름/내림차순)
- 필터 짧은 카테고리 (전체/내 글/스크랩)
- 상태 필터 (진행중/완료/전체)

### 사용하지 말아야 할 때
- **on/off 단일 토글** → **Switch**
- **4개 이상 옵션** → **Tab** 또는 **Dropdown**
- **사용자에게 익숙하지 않은 옵션** → 라벨 + Radio 권장
- **선택 결과가 페이지 전환** → **Tab**

### Toggle Button vs Switch vs Tab

| | **Toggle Button** | **Switch** | **Tab** |
|---|---|---|---|
| 옵션 수 | **2~3개** | **2개 (on/off)** | 2개 이상 |
| 용도 | 옵션 중 하나 선택 | 켬/끔 단일 | 페이지/섹션 전환 |
| 모양 | 분절 버튼 그룹 | 토글 슬라이더 | 가로 탭 |
| 텍스트 | **버튼 안 필수** | 외부 라벨 | 탭 라벨 |
| 결과 | 옵션 변경 (즉시) | 상태 변경 | 콘텐츠 전환 |

## 🧩 구조

```
Toggle button (컨테이너)
├── 배경 #EFEFEF
├── Stroke #DFDFDF
├── Radius 6 (Round=False) 또는 30 (Round=True 캡슐)
└── Button × N개 (2 or 3)
    ├── (선택) icon_null (icon 자리)
    └── Button (텍스트)
```

> 🔑 **컨테이너 안에 분절된 Button들이 들어가는** 구조

## 🎨 Variants — 2개 Component Set

### 1️⃣ Toggle button (Component Set, 컨테이너) — **8 variants**

**3축 조합:**

| 축 | 옵션 |
|---|---|
| **Count** | 옵션 개수 (2 / 3) |
| **Round** | `False` (radius 6) / `True` (radius 30, 캡슐) |
| **Size** | `Medium` (32h) / `Large` (38h) |

| Count | Round | Size | 너비 |
|---|---|---|---|
| 2 | False | Medium | 203 |
| 2 | False | Large | 203 |
| 2 | True | Medium | 203 (cornerRadius 30) |
| 2 | True | Large | 203 (cornerRadius 30) |
| 3 | False | Medium | 203 |
| 3 | False | Large | 233 |
| 3 | True | Medium | 203 (cornerRadius 30) |
| 3 | True | Large | 233 (cornerRadius 30) |

> 💡 **Round=True (캡슐)**: 부드러운 인상, 일반적인 필터 선택
> 💡 **Round=False (radius 6)**: 정형적, 데이터/관리 화면

### 2️⃣ Button (Component Set, 개별 버튼) — **12 variants**

**3축 조합:**

| 축 | 옵션 |
|---|---|
| **State** | `Default` / `Hover` / `Selected` |
| **Radius** | `6` (사각) / `100%` (캡슐) |
| **Size** | `Medium` (30h) / `Large` (36h) |

→ 3 × 2 × 2 = **12 variants**

#### State별 색상

| State | 배경 | 텍스트 색 |
|---|---|---|
| `Default` | `#EFEFEF` (컨테이너와 동일) | `label/alternative` (`#8B8B8B`) — 회색 |
| `Hover` | `#F7F7F7` | `#6F6F6F` |
| **`Selected`** | **`#FFFFFF`** (흰색) | **`#242424`** (진한 검정) |

> 🔑 **Selected만 시각적으로 두드러짐**
> - 컨테이너 배경(회색) 위에 흰색 버튼 떠올려 visual lift
> - 텍스트도 가장 진한 검정

## 🎯 사용 토큰

### Toggle button 컨테이너
- **배경**: `#EFEFEF`
- **Stroke**: `#DFDFDF`, 1px
- **Radius**: 6 (Round=False) / **30 (Round=True 캡슐)**
- **Size별 높이**: Medium 32 / Large 38
- **내부 padding**: 1px (버튼이 컨테이너에 살짝 안쪽으로)

### Button (개별)
- **Radius**: 6 (Radius=6) / 15 (Round=True, Medium) / 18 (Round=True, Large)
- **Size별 높이**: Medium 30 / Large 36
- **너비**: 가변 (텍스트에 맞춤, Count=2일 때 더 넓음)
- **Padding**: 좌우 자동 (centered)

### Typography (Button Text)
| Size | Style |
|---|---|
| `Medium` | 14px Medium |
| `Large` | 16px Medium |

### State별 텍스트 색
| State | Color |
|---|---|
| Default | `label/alternative` (`#8B8B8B`) |
| Hover | `label/strong` (`#6F6F6F`) |
| **Selected** | `label/heavy` (`#242424`) |

### Icon (선택)
- Medium: 20 × 20 (icon_null 자리)
- Large: 24 × 24

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 사용자가 **여러 옵션을 파악하고 선택**할 수 있게 도와줍니다.
>
> **활용:** **2개 또는 3개의 옵션이 있을 경우에 사용**합니다.

### Round 선택 가이드

```
부드러운 인상, 필터/콘텐츠 영역에 적합
   → Round=True (캡슐, radius 30)
   예: "전체 / 내 글 / 스크랩" 필터

정형적, 데이터/관리 화면에 적합
   → Round=False (radius 6)
   예: "활성 / 비활성" 상태 필터
```

### Size 선택 가이드

| Size | 사용 |
|---|---|
| `Medium` (30h, 14px) | 기본 — 대부분의 케이스 |
| `Large` (36h, 16px) | 강조 필요 시 (메인 영역) |

### Count 가이드

```
2개 옵션:
[Active] [Inactive]
[일주일] [한달]
[오름차순] [내림차순]

3개 옵션:
[일] [주] [월]
[전체] [내 글] [스크랩]
[List] [Grid] [Card]
```

> ❌ **4개 이상은 권장 X** — Tab 또는 Dropdown 사용
> 예외: Round=True에는 Count4 variant도 있음 (예시 컴포넌트엔 있음)

### 텍스트 작성 가이드

| 좋은 예 | 나쁜 예 |
|---|---|
| "일 / 주 / 월" | "1일 / 7일 / 30일" (너무 김) |
| "List / Grid" | "리스트 보기 / 격자 보기" (너무 김) |
| "활성 / 비활성" | "활성 상태 / 비활성 상태" (반복) |

- **짧고 명확하게** (1~3단어)
- **같은 카테고리 내 일관성** (모두 명사 또는 모두 동사)
- **상호 배타적인 옵션만** (동시 선택 X)

### 사용 패턴 예시

#### 패턴 1: 기간 전환
```
┌─────────────────────────┐
│ 활동 통계               │
│                         │
│  [일] [주] [월]          │ ← Count=3, Round=True
│                         │
│  [그래프 영역]          │
└─────────────────────────┘
```

#### 패턴 2: 뷰 전환
```
┌─────────────────────────┐
│ 게시물 목록      [≡][▦] │ ← Count=2, Round=False
│                         │
│  [List View]            │
└─────────────────────────┘
```

#### 패턴 3: 콘텐츠 필터
```
┌─────────────────────────┐
│  ━━━━━━━━━━━━━━━━━━━━   │
│  [전체][내 글][스크랩]   │ ← Count=3, Round=True
│  ━━━━━━━━━━━━━━━━━━━━   │
│  [Card list]            │
└─────────────────────────┘
```

### 옵션 순서 가이드

```
시간/순서 기준
   → 작은 단위 → 큰 단위 (왼쪽 → 오른쪽)
   예: 일 → 주 → 월

빈도 기준 (자주 쓰는 게 왼쪽)
   → 가장 많이 사용 → 가끔 사용
   예: 전체 → 내 글 → 스크랩

기본값을 첫 번째 위치
   → 처음 진입 시 선택되는 옵션을 좌측에
```

## 🔄 State 처리

### Selected 상태 관리

```
한 그룹에 항상 1개의 Selected 보장
   ↓
사용자가 다른 옵션 클릭
   ↓
이전 Selected → Default
새 클릭 옵션 → Selected
   ↓
즉시 콘텐츠 변경 / 필터 적용
```

### 인터랙션 흐름

```
[Default]
   ↓ mouseenter (PC)
[Hover] (배경 #F7F7F7, 텍스트 약간 진해짐)
   ↓ click
[Selected] (배경 흰색, 텍스트 가장 진함)
   ├ 다른 옵션 클릭 → 기존 Selected → Default
   └ 같은 옵션 클릭 → 변화 없음 (이미 Selected)
```

### 애니메이션 권장

- **배경 색 전환**: 100ms ease
- **Selected 변화**: 부드러운 fade (150ms)

## 🚫 금지 사항

- ❌ **4개 이상 옵션** — Tab 또는 Dropdown 사용
- ❌ **다중 선택 (체크박스 처럼)** — Toggle Button은 단일 선택
- ❌ **선택 안 된 상태 (모두 Default)** — 항상 1개는 Selected
- ❌ **on/off 단일 토글로 사용** — Switch 사용
- ❌ **버튼 안 텍스트 누락** — 옵션 의미 불명확
- ❌ **Round 혼용** — 한 그룹은 모두 같은 Round
- ❌ **Size 혼용** — 한 그룹은 모두 같은 Size
- ❌ **state별 색 임의 변경** — Selected만 흰 배경 + 진한 텍스트
- ❌ **너비 임의 변경** — 정의된 사이즈 고정
- ❌ **Disabled state 임의 추가** — 정의 없음 (전체 비활성은 컨테이너 opacity 활용)

## 📚 참고

- Figma: [Toggle button 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Switch` — on/off 단일 토글
  - `Tab` — 페이지/섹션 전환
  - `Radio` — 라벨 있는 단일 선택
  - `Chips` — 다중 선택 가능 / 더 작은 영역
  - `Dropdown` — 4개 이상 옵션
- 사용 예:
  - 통계 화면의 기간 전환 (일/주/월)
  - 게시물 목록 뷰 전환 (List/Grid)
  - 정렬 방향 (오름/내림)
  - 콘텐츠 필터 (전체/내 글/스크랩)
  - 상태 필터 (진행중/완료/전체)