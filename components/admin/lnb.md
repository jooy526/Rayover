# LNB (Left Navigation Bar)

> CMS Admin의 **좌측 네비게이션 바**. 사용자가 **필요한 것을 찾고, 현재 위치를 알 수 있도록** 도와주는 페이지 레벨 글로벌 네비게이션입니다.

## 📍 환경

- [ ] Common
- [ ] Service
- [x] **Admin (PC, CMS)**

## 🎯 사용 시점

CMS Admin 페이지의 **모든 화면 좌측에 고정**되는 글로벌 네비게이션입니다. 모바일의 Tab Bar와 같은 역할이지만 **세로 사이드바 형태**입니다.

### 이럴 때 사용
- CMS Admin 모든 페이지의 좌측 고정 네비게이션
- 메인 메뉴 + 서브 메뉴 (2-depth) 구조
- 계정 설정 / 로그아웃 진입
- 현재 위치 표시 (어떤 페이지인지)

### 사용하지 말아야 할 때
- 모바일 환경 → **Tab Bar** (Service, 하단)
- 페이지 내 섹션 전환 → **Tab**
- 임시 메뉴 → **Dropdown**

### LNB vs Tab Bar (모바일)

| | **LNB** (Admin) | **Tab Bar** (Service) |
|---|---|---|
| 위치 | 화면 **좌측** 세로 | 화면 **하단** 가로 |
| 메뉴 수 | **다수** (12+) | 5개 (또는 3개 Creator) |
| 깊이 | **2-depth** (Menu + Sub menu) | 1-depth |
| Selected 색 | `#FFE3D2` 배경 + `#FF5722` 텍스트 | 텍스트만 색 변화 |
| 환경 | PC | Mobile |

## 🧩 구조

```
LNB (Component, 224×가변, 우측 stroke)
├── Logo 영역 (192×56)
│   └── Group 19510 (Logo SVG)
├── Menu 영역 (LNB List 인스턴스 N개)
│   └── LNB List
│       ├── Menu (38h, Sub menu=True/False)
│       └── (선택) Sub menu × N개 (32h)
└── menu10 (하단 계정 영역, 192×56)
    ├── Avatar (32×32, radius 16)
    ├── User name (16px Medium)
    └── Button_icon_Normal (32×32, icon_setting)
        └── 클릭 시 Profile setting pulldown 오버레이
```

## 🎨 Variants — 4개 Component Set + 1 Component

### 0️⃣ LNB (Component, 본체)
- **너비**: 224
- **높이**: 가변 (1080 등 콘텐츠에 맞춰)
- **배경**: `static/white`
- **우측 stroke**: `line/normal` (`#DFDFDF`), 1px

### 1️⃣ Menu Component Set — **5 variants**

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **State** | `Default` / `Disabled` / `Hover` / `Hover List` / `Pressed` |
| **Selected** | `False` (Default/Disabled/Hover/Hover List) / `True` (Pressed) |

| State | 배경 | 텍스트 색 | 사용 |
|---|---|---|---|
| `Default, False` | 없음 | `#171717` | 기본 |
| `Disabled, False` | 없음 | `#C1C1C1` | 비활성 |
| `Hover, False` | `#F7F7F7` | `#171717` | 마우스 오버 |
| `Hover List, False` | `#F7F7F7` | `#171717` | List 영역 hover |
| `Pressed, True` | **`#FFE3D2`** | **`#FF5722`** | **선택 상태** |

> 💡 **Hover와 Hover List는 시각적으로 동일** — Hover List는 서브메뉴 컨테이너 호버 시 부모 메뉴에 적용

**구조 (모든 Menu variant)**:
- 너비 200, 높이 38
- Radius 6
- Account Icon (20×20, 좌측)
- Account Text (15px Medium)
- badge (5×5 도트, `#FF5722`, 우측)

### 2️⃣ Sub menu Component Set — **4 variants**

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **State** | `Default` / `Disabled` / `Hover` / `pressed` |
| **Selected** | `False` (Default/Disabled/Hover) / `True` (pressed) |

| State | 배경 | 텍스트 색 |
|---|---|---|
| `Default, False` | 없음 | `#171717` |
| `Disabled, False` | 없음 | `#C1C1C1` |
| `Hover, False` | `#F7F7F7` | `#171717` |
| `pressed, True` | `#FFE3D2` | `#FF5722` |

**구조**:
- 너비 200, 높이 32 (Menu보다 6 작음)
- Radius 6
- Account Text (14px Medium) — Menu보다 1px 작음
- **Icon 없음, Badge 없음**

### 3️⃣ LNB List Component Set — **2 variants** (Menu + Sub menu 묶음)

| Variant | 구성 |
|---|---|
| `Sub menu=True` | Menu 1개 + Sub menu 5개 (펼친 상태) |
| `Sub menu=False` | Menu 1개만 (서브메뉴 없음) |

> 🔑 **하위 메뉴 있는 메뉴 = `Sub menu=True`, 없는 메뉴 = `Sub menu=False`**

### 4️⃣ Profile setting pulldown menu (Component)

LNB 하단 Setting 버튼 클릭 시 **오버레이로 등장**하는 풀다운 메뉴.

**구조** (240×288):
- **상단**: Avatar (40×40) + User name (16px Medium) + email (12px Regular)
- **메뉴 5개**: icon (20×20) + Menu 텍스트 (14px Medium) + icon_chevron_right
- **하단**: 로그아웃 (빨강 `#EA1D22`) + icon_signout
- **Radius**: 12
- **배경**: white

## 🎯 사용 토큰

### LNB 본체
- **너비**: 224 (좌우 padding 16 포함, 콘텐츠 영역 192)
- **배경**: `static/white`
- **우측 stroke**: `#DFDFDF`, 1px

### Menu / Sub menu 공통
- **Radius**: 6
- **너비**: 200 (LNB 너비 - 좌우 padding 12×2)

### Menu 전용
- **높이**: 38
- **Icon**: 20 × 20 (좌측)
- **Text**: 15px Medium
- **Badge (도트)**: 5 × 5, radius 999, color `#FF5722`

### Sub menu 전용
- **높이**: 32
- **Text**: 14px Medium
- 좌측 들여쓰기: Sub menu는 **들여쓰기 없이 동일한 좌측 위치** (Figma 기준)

### State별 색상 (공통)

| State | 배경 | 텍스트 |
|---|---|---|
| Default | 없음 | `label/heavy` (`#171717`) |
| Disabled | 없음 | `label/assistive` (`#C1C1C1`) |
| Hover / Hover List | `#F7F7F7` | `#171717` |
| **Pressed (Selected)** | **`#FFE3D2`** | **`primary/normal` (`#FF5722`)** |

### menu10 (하단 계정)
- **너비**: 192, 높이 56
- **Radius**: 6
- **Avatar**: 32×32, radius 16, `#ECECEC`
- **User name**: 16px Medium `#171717`
- **Setting button**: 32×32, radius 17 (icon_setting 20×20)

### Profile setting pulldown menu
- **너비**: 240, 높이: 288 (가변)
- **Radius**: 12
- **상단 Avatar**: 40×40, radius 20
- **메뉴 항목**: 20px height
- **로그아웃 색**: `#EA1D22` (status/destructive)

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 사용자가 필요한 것을 찾고, 현재 위치를 알 수 있도록 도와줍니다.
>
> **활용:**
> - **메뉴를 클릭하면 해당 페이지로 이동**합니다.
> - 하위 메뉴 있을 경우 상위 메뉴 클릭시, **아코디언 형식으로 하위 메뉴가 펼쳐집니다**.
> - **하나의 하위메뉴 아코디언만 펼칠 수 있습니다.**
> - 다른 하위 메뉴 있는 상위 메뉴 클릭시 **기존 펼쳐졌던 아코디언은 접힙니다**.
> - **하단 계정 설정 버튼을 클릭하면, 풀 다운 메뉴가 오버레이** 됩니다.

### 메뉴 클릭 동작 흐름

```
[메뉴 클릭]
   ├ Sub menu=False (서브 없음)
   │   → 즉시 페이지 이동
   │
   └ Sub menu=True (서브 있음)
       → 아코디언 펼침
       → 다른 서브메뉴 펼친 게 있으면 → 자동으로 접힘
       → 사용자가 Sub menu 클릭
           → 페이지 이동
```

### 메뉴 구조 가이드 (실제 Rayover Admin 메뉴)

```
LNB
├── Logo
├── Menu (Sub menu=False)        대시보드
├── Menu (Sub menu=True)         계정
│   └── Sub menu × N             회원 관리, 권한 관리, ...
├── Menu (Sub menu=True)         게시글 관리
│   └── Sub menu × N             게시글, 댓글, 신고, ...
├── Menu (Sub menu=False)        홈
├── Menu (Sub menu=True)         크리에이터 콘텐츠
│   └── Sub menu × N
├── Menu (Sub menu=True)         투표
├── Menu (Sub menu=True)         포인트
├── Menu (Sub menu=True)         미션
├── Menu (Sub menu=True)         이벤트
├── Menu (Sub menu=True)         기프트카드
├── Menu (Sub menu=False)        공지사항
├── Menu (Sub menu=True)         고객문의 및 피드백
├── Menu (Sub menu=True)         시스템
└── menu10 (하단 계정 영역)
    ├── Avatar + User name
    └── Setting button → Profile pulldown 오버레이
```

### 한 번에 하나만 펼침 (중요!)

> **"하나의 하위메뉴 아코디언만 펼칠 수 있습니다."**

```
초기 상태:
[계정 ⌃]                ← 펼침
  · 회원 관리
  · 권한 관리
[게시글 관리 ⌄]          ← 접힘

게시글 관리 클릭
   ↓
[계정 ⌄]                ← 자동 접힘
[게시글 관리 ⌃]          ← 펼침
  · 게시글
  · 댓글
  · 신고
```

→ **사용자 시선 분산 방지** + 화면 공간 절약

### Selected 상태 가이드

```
현재 페이지의 메뉴/서브메뉴만 Selected=True
  ├ Menu Selected → 배경 #FFE3D2 + 텍스트 #FF5722
  └ Sub menu Selected → 배경 #FFE3D2 + 텍스트 #FF5722

같은 효과 (배경+텍스트 모두 변화)
```

### Badge 활용

> 5×5 작은 도트 (Menu에만 있음)

- 새 알림 / 업데이트 표시
- 변경 사항 있는 카테고리 강조
- 모든 메뉴에 표시 X — **변화 있는 메뉴에만**

### Hover List vs Hover

```
Hover (기본):
   메뉴 자체에 마우스 올림
   → 그 메뉴만 #F7F7F7 배경

Hover List:
   서브메뉴 컨테이너 영역에 마우스 올림
   → 부모 메뉴도 #F7F7F7 배경 유지
   (사용자가 서브메뉴를 보고 있다는 시각적 신호)
```

### Setting 버튼 + Profile pulldown

```
[하단 계정 영역]
  Avatar  User name  ⚙ ← 클릭
              ↓
    ┌─────────────────────────┐
    │  ◯  User name           │
    │     email               │
    │  ─────────────────────  │
    │  📋 Menu              › │
    │  📋 Menu              › │
    │  📋 Menu              › │
    │  📋 Menu              › │
    │  📋 Menu              › │
    │  ─────────────────────  │
    │  🚪 로그아웃 (빨강)      │
    └─────────────────────────┘
```

→ 위치: Setting 버튼 위쪽 또는 옆쪽으로 fade-in

## 🔄 State 처리

### 메뉴 인터랙션 흐름

```
[Default] ━━━ mouseenter ━━━> [Hover]
   │                              │
   │                              ├ click (Sub menu=False)
   │                              │   → 페이지 이동, [Pressed]
   │                              │
   │                              └ click (Sub menu=True)
   │                                  → 아코디언 펼침
   │                                  → 다른 펼친 메뉴 접힘
   │
   └─ Disabled: 인터랙션 차단
```

### 페이지 이동 시

```
사용자가 다른 메뉴 클릭
   ↓
이전 메뉴: Pressed=True → Default
   ↓
새 메뉴: Default → Pressed=True
   ↓
페이지 콘텐츠 영역 변경
```

## 🚫 금지 사항

- ❌ **여러 서브메뉴 동시 펼침** — 한 번에 하나만
- ❌ **Selected 색 임의 변경** — `#FFE3D2` + `#FF5722` 고정
- ❌ **Menu와 Sub menu의 사이즈 통일** — Menu 15px/38h, Sub menu 14px/32h
- ❌ **Sub menu에 Icon 추가** — Sub menu는 텍스트만
- ❌ **Sub menu에 Badge 추가** — Badge는 Menu에만
- ❌ **너비 임의 변경** — 224 (LNB), 200 (Menu/Sub menu) 고정
- ❌ **Setting 버튼 외 위치에 Profile pulldown 트리거** — 정의된 진입점만
- ❌ **로그아웃 색 임의 변경** — `#EA1D22` (Destructive) 고정
- ❌ **3-depth 이상 메뉴** — 2-depth (Menu + Sub menu)만
- ❌ **여러 LNB 노출** — 화면당 한 개만 (글로벌 네비)
- ❌ **모든 Menu에 Badge 도트 표시** — 변화 있는 메뉴만

## 📚 참고

- Figma: [LNB 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Container` (Admin) — LNB 우측 콘텐츠 영역에 사용
  - `CMS Chips` (Admin) — 데이터 페이지 필터
  - `Button` — Setting 버튼, 로그아웃 등
  - `Avatar` — 하단 menu10 + Profile pulldown
- 사용 예:
  - CMS Admin 모든 페이지 좌측 고정
  - 대시보드 / 게시글 관리 / 사용자 관리 등
  - 아코디언 펼치며 하위 메뉴 탐색
  - Setting 버튼 → 계정 정보 / 로그아웃