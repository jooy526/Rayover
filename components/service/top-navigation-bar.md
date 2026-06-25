# Top Navigation Bar

> 사용자가 머물고 있는 화면의 **제목과 주요 작업 버튼**을 제공하는 화면 최상위 네비게이션 컴포넌트.

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

## 🎯 사용 시점

**모든 화면의 최상단**에 배치되어 화면 식별과 주요 액션을 제공합니다. Tab Bar(하단 글로벌 네비)와 짝을 이루는 컴포넌트입니다.

### 이럴 때 사용
- 화면 제목 표시 (현재 어디인지 알림)
- 뒤로 가기, 닫기 등 화면 이동 액션
- Share, Save, More 등 주요 작업
- Tab 메인 화면의 사용자 프로필 진입
- 로고 노출 (앱의 메인 진입 화면)
- **Bottom Sheet 내부에도 사용 가능**

### 사용하지 말아야 할 때
- 앱 글로벌 페이지 이동 → **Tab Bar** (하단)
- 페이지 내 섹션 전환 → **Tab**
- 일시적 액션 → **Floating Button**

### Top Navigation Bar vs Tab Bar

| | **Top Navigation Bar** | **Tab Bar** |
|---|---|---|
| 위치 | 화면 **최상단** | 화면 **최하단** |
| 용도 | 현재 화면 정보 + 화면별 액션 | 앱 전체 페이지 이동 |
| 환경 | Service (Mobile) | Service (Mobile) |
| 위치 변경 | 화면마다 다름 | 모든 메인 화면 동일 |

## 🧩 구조

```
Top Navigation Bar (360 × 48, white)
├── Status Bar (iOS 시스템) — 44h
├── Button Area (Left, 150×40)
│   └── icon X / icon ← / 빈 영역
├── Title area (가운데 또는 좌측)
│   └── Title (18/20/22px)
└── Button Area (Right, 150×40)
    ├── icon button × 1~3
    ├── 또는 Avatar (User profile)
    └── 또는 Text button (e.g. "Share")
```

> 🔑 **3개의 영역(좌 버튼 / 타이틀 / 우 버튼)** 으로 구성된 패턴

## 🎨 Variants — 4개 Component Set

### 1️⃣ Top Navigation Bar Component Set — **3 variants** (본체)

| Variant | 좌 | 중앙 | 우 | 사용 |
|---|---|---|---|---|
| `Type=Title, Position=Center` | 버튼 | **Title (가운데)** | 버튼 | **상세 화면** (가장 일반적) |
| `Type=Title, Position=Left` | **Title (좌측)** | — | 버튼 | **첫 페이지 / 탭 메인** |
| `Type=Logo, Position=Left` | **Logo** | — | 버튼 | **로고 표시 화면** (Today 등) |

### 2️⃣ Title area Component Set — **13 variants**

**3축 조합:**

| 축 | 옵션 |
|---|---|
| **Position** | `center` / `Left` / `null` |
| **size** | `Small` (18px) / `normal` (20px) / `large` (22px) |
| **Color** | `Default` (검정) / `White` |
| **Null** | `False` (Title 표시) / `True` (Title 없음, position=null) |

#### Title size별 Typography

| size | Font | Weight | 사용 |
|---|---|---|---|
| `Small` | **18px** | Medium | 상세 화면 (가장 일반적) |
| `normal` | **20px** | Medium | 중간 강조 |
| `large` | **22px** | SemiBold | **탭 첫 페이지 / 메인** |

### 3️⃣ Button Area Component Set — **24+ variants**

**6축 조합:**

| 축 | 옵션 |
|---|---|
| **Button** | `empty` (빈) / `one` / `Two` / `Three` |
| **Right** | `False` (좌측 영역) / `True` (우측 영역) |
| **Type** | `Text` (텍스트 버튼) / `Icon` (아이콘 버튼) |
| **icon style** | `Default` (기본) / `White` (white 색) / `bg` (배경 있는 원형) |
| **Avata** | `False` / `True` (Avatar 포함) |
| **Size** | `normal` (28px icon) / `large` (30px icon) |

#### icon style 의미

| icon style | 모양 | 사용 |
|---|---|---|
| `Default` | 단순 아이콘 (28~30px) | 흰 배경 화면 |
| `White` | white 색 아이콘 | **이미지/Primary 배경 위** (가독성 확보) |
| `bg` | 배경 원형 (32×32, `#F5F4F3`, radius 18) | 강조된 액션 |

### 4️⃣ Frame 37678 Component Set — **4 variants** (Avatar 자리)

Tab Bars의 User profile과 **동일한 시스템**:

| Variant | 구성 | 사용 |
|---|---|---|
| `Property 1=User` | Avatar 31.5 | 일반 로그인 사용자 |
| `Property 1=Creator` | Avatar 31.5 + sub-Avatar 20 (white border) | 크리에이터 권한자 |
| `Property 1=Creator mode` | Avatar 28 + sub-Avatar 20 | 크리에이터 모드 활성화 중 |
| `Property 1=Guest mode` | `icon_user` 28 | 비로그인 |

## 🎯 사용 토큰

### Top Navigation Bar 본체
- **너비**: 360 (Mobile)
- **높이**: 48
- **배경**: `static/white`

### Status Bar
- **높이**: 44 (iOS 표준, 시스템 영역)

### Button Area
- **너비**: 150 (좌/우 동일)
- **높이**: 40
- **위치**: 화면 좌측 끝(Left) 또는 우측 끝(Right)

### Icon Button (개별)
| Size | 너비 | 높이 |
|---|---|---|
| `normal` | 28 | 28 |
| `large` | 30 | 30 |

### Icon Button (icon style=bg)
- 너비/높이: 32 × 32
- 배경: `#F5F4F3`
- Radius: 18 (캡슐)
- icon: 22 × 22

### Title area
- **너비**: 120 (가운데)
- **높이**: 40

### Title 색
| Color | Color 값 |
|---|---|
| `Default` | `label/heavy` (`#000000`) |
| `White` | `static/white` |

### Button (Text type) 색
- 일반: `label/normal` (`#3D3D3D`)
- 강조 (Share 등): Primary 옅은톤 (`#FFAE7C`)

### Avatar (Frame 37678)
- 일반 size: 31.5 × 31.5 (User/Creator)
- Creator mode: 28 × 28 (작은 사이즈)
- sub-Avatar: 20 × 20

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 사용자가 머물고 있는 화면의 **제목과 주요 작업버튼**을 제공
>
> **활용:** 화면 **최상위에 위치**합니다. 테스크의 이름이 제목이 될 수 있으며, 텍스트 영역에 벗어나지 않도록 사용합니다. **바텀시트에서 사용 가능**합니다.
>
> **사용 케이스별 가이드:**
> - "탭을 대표하는 첫번째 페이지에는 **큰 아이콘과 큰 타이틀**을 사용해주세요."
> - "배경이 있는 아이콘 3개를 사용하려면 **텍스트를 왼쪽에 정렬**해야 합니다."
> - "왼쪽에는 **취소 또는 이전화면 이동 버튼**을 사용합니다."
> - "오른쪽 영역에 버튼을 배치할 때는, **자주 사용하는 작업 버튼을 왼쪽에서 오른쪽 순으로** 배치합니다."

### 화면별 패턴 가이드

#### 패턴 1: 탭 첫 페이지 (Today, Hot deals 메인 등)
```
[Hot deals (large 22)]              [icon] [icon] [Avatar]
─────────────────────────────────────────────────────────
- Title: large size (22px SemiBold)
- Position: Left
- 우측: 검색/북마크 + Avatar (User profile)
- icon style: Default + Avata=True
```

#### 패턴 2: 상세 페이지 (수정/작성/조회)
```
[X]    [Hot deals (Small 18)]              
─────────────────────────────────────────────────────────
- Title: Small size (18px Medium)
- Position: Center
- 좌측: icon_x (취소/뒤로)
- 우측: 비어있거나 1~2개 액션
```

#### 패턴 3: 작업 가능한 상세 페이지
```
[X]    [Hot deals]                              [Share]
─────────────────────────────────────────────────────────
- Title: Center
- 좌측: icon_x
- 우측: Text 버튼 (Share, Save, Done 등)
- 우측 텍스트 색: Primary 옅은톤 (#FFAE7C)
```

#### 패턴 4: bg 아이콘 3개 (강조형)
```
[Logo]                          [bg-icon][bg-icon][bg-icon]
─────────────────────────────────────────────────────────
- 우측 3개 bg 아이콘 (#F5F4F3 배경 원형)
- Title은 반드시 좌측 정렬
- (가운데 정렬 시 공간 부족)
```

### 좌측 버튼 가이드

> **"왼쪽에는 취소 또는 이전화면 이동 버튼을 사용합니다."**

| 상황 | 권장 아이콘 |
|---|---|
| 모달/시트 닫기 | `icon_x` |
| 이전 화면 이동 | `icon_arrow_left` (back) |
| 첫 페이지 (이동 X) | 비어있음 또는 Logo |

### 우측 버튼 가이드

> **"자주 사용하는 작업 버튼을 왼쪽에서 오른쪽 순으로 배치합니다."**

```
중요도 ←  ━━━━━  → 중요도
                              [덜 중요][중간][가장 중요]

예: [filter] [search] [more]   ← 가장 자주 쓰는 게 우측 끝
```

- **최대 3개 버튼** 권장 (Three variant)
- 4개 이상이면 **More(...)** 버튼으로 묶기
- Avatar(우측 끝)는 항상 가장 우측 (사용자 영역)

### Title 가이드

- **태스크 이름이 제목**이 됨 (예: "Hot deals", "프로필 수정")
- **텍스트 영역 벗어나지 않게** (긴 텍스트는 말줄임표)
- **이모지/특수문자 자제** (식별성 우선)

### Color=White 사용 케이스

- **이미지 배경 위** (히어로 이미지 화면)
- **Primary 배경 위**
- **그라디언트 배경**

→ Title color=White + Button icon style=White 함께 사용

### Bottom Sheet에서 사용

> **"바텀시트에서 사용 가능"**

- Bottom Sheet 상단에 Top navigation bar 배치 가능
- 일반적으로 X(닫기) + Title(가운데) 또는 Title(좌측) + 액션 패턴
- Status Bar는 표시 X (모바일 OS 영역이 아니므로)

## 🔄 State 처리

- **표시**: 모든 화면 상단에 항상 표시
- **스크롤 시**: 일부 화면은 fade/축소 인터랙션 가능
- **Tab 변경 시**: Title 변경
- **Modal/Bottom Sheet**: 별도의 Top navigation 사용 가능

### 상태 흐름
```
첫 페이지 진입
   → Type=Title, Position=Left, size=large
   → 좌측 Title + 우측 Avatar/Button

상세 화면 이동
   → Type=Title, Position=Center, size=Small
   → 좌측 Back/X + 가운데 Title + 우측 액션

Modal/Bottom Sheet 노출
   → 자체 Top navigation bar 표시
   → Status Bar 없이
```

## 🚫 금지 사항

- ❌ **Title 4종 이상 size 혼용** — Small/normal/large만 사용
- ❌ **좌측에 자주 쓰는 액션 배치** — 좌측은 닫기/뒤로만
- ❌ **우측 4개 이상 버튼** — More 버튼으로 묶기
- ❌ **bg 아이콘 3개 + Title 가운데 정렬** — 공간 부족, Title 좌측 강제
- ❌ **이미지 배경에 Default color Title** — White color 필수
- ❌ **Title을 가운데 정렬했는데 좌측 버튼이 없음** — 비대칭, 빈 영역 어색
- ❌ **Status Bar 영역 임의 변경** — iOS 시스템 영역 (44h)
- ❌ **너무 긴 Title** — 말줄임표 처리, 이상적으로 한 줄에 들어가는 길이
- ❌ **bg 스타일 아이콘과 Default 아이콘 혼용** — 같은 영역 내 일관성

## 📚 참고

- Figma: [Top navigation bar 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Tab Bar` (Service) — 화면 하단 글로벌 네비
  - `Avatar` — 우측 사용자 영역
  - `Bottom Sheet` (Service) — Top navigation을 내부에 사용
  - `Floating Button` (Service) — 별도의 액션 버튼
- 사용 예:
  - 메인 피드 (Title large + Avatar)
  - 글 상세 (X + 가운데 Title + Share)
  - 글 작성 (X + 가운데 Title + Done)
  - 로고 페이지 (Logo + Search)
