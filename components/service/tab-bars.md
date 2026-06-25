# Tab Bars

> 웹사이트 **최하단에 위치**하며, 사용자의 **페이지 이동**을 돕기 위해 사용하는 글로벌 네비게이션 컴포넌트.

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

## 🎯 사용 시점

**앱의 메인 네비게이션**으로, 사용자가 핵심 영역 사이를 빠르게 이동할 수 있게 해주는 글로벌 컴포넌트입니다. 거의 모든 메인 화면에 노출됩니다.

### 이럴 때 사용
- 앱의 메인 화면들 사이 이동 (홈, 라운지, 서클 등)
- 비로그인/로그인/크리에이터 모드 구분 표시
- 크리에이터 콘텐츠 등록 진입 (Creator mode의 plus 버튼)

### 사용하지 말아야 할 때
- 페이지 내 섹션 전환 → 별도 **Tab** 컴포넌트
- 일시적 액션 → **Floating Button**
- 옵션 메뉴 → **Bottom Sheet**
- 상세 화면(메인 외) → 표시 안 함 (Header + Back으로 대체)

## 🧩 핵심 구조

```
Tab bar (전체 영역, 360 × 90/93)
├── 상단 fade 그라디언트 (#FAF7F6, opacity 0→80%)
│   └── Tab bar 위 콘텐츠가 부드럽게 가려지도록
├── tapbar (실제 탭 영역, 336 × 58/61, radius 30, 흰 배경)
│   └── Tab × N개
│       ├── icon (28 × 28)
│       └── label (11px Medium)
└── IOS Safe area + Home Indicator (32h, 검정 4h 인디케이터)
```

> 🔑 **둥근 캡슐 모양 (radius 30)** — 화면 하단에 떠있는 느낌으로 디자인

## 🎨 Variants — 2개 Component Set

### 1️⃣ Tab bar Component Set — **12 variants**

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **select** | `Default` / `Tab 1` / `Tab 2` / `Tab 3` / `Tab 4` / `Tab 5` |
| **Creator mode** | `False` (일반 5탭) / `True` (크리에이터 3탭) |

#### Creator mode 차이

**`Creator mode=False` (일반 5탭)**
| Tab | Icon | Label |
|---|---|---|
| Tab 1 | `icon_home_fill` | Today |
| Tab 2 | `icon_chat bubble3_fill` | Lounge |
| Tab 3 | `icon_group1_fill` | Circles |
| Tab 4 | `icon_point_fill` | R Point |
| Tab 5 | `User profile` | Profile |

**`Creator mode=True` (크리에이터 3탭)**
| Tab | Icon | Label |
|---|---|---|
| Tab 1 | `icon_feed_fill` | Dash board |
| Tab 2 | **`button` (plus, 44×36, radius 8)** | (라벨 없음) |
| Tab 5 | `User profile` (Creator mode) | rayover |

> 🔑 **Creator mode는 가운데에 등록 버튼**이 있는 3탭 구조 — 일반 사용자와 다른 워크플로우

### 2️⃣ User profile Component Set — **4 variants** (Tab 5 자식)

| Variant | 구성 | 사용 |
|---|---|---|
| `Property 1=User` | Avatar 27 | **로그인 일반 사용자** |
| `Property 1=Creator` | Avatar 27 + sub-Avatar 17 우하단 | **크리에이터 권한자** |
| `Property 1=Creator mode` | Avatar 24 + sub-Avatar 17 (작아진 사이즈) | **크리에이터 모드 활성화 중** |
| `Property 1=Guest mode` | `icon_user_fill` 28 | **비로그인 사용자** |

## 🎯 사용 토큰

### Tab bar 본체
- **Radius (tapbar)**: 30 (캡슐)
- **배경 (tapbar)**: `static/white`
- **너비 (tapbar)**: 336
- **높이 (tapbar)**: 58 (일반) / 61 (User=Creator일 때 sub-avatar 영역 확보)
- **상단 그라디언트**: `#FAF7F6`, opacity 0 → 80%

### Tab (개별)
- **너비**: 일반 5탭 시 `52.8` (균등 분배), Creator 모드 시 96
- **높이**: 50 (일반)
- **Icon**: 28 × 28
- **Label**: 11px Medium

### Color (텍스트 — 선택 상태)
| 상태 | Color |
|---|---|
| 미선택 | `label/alternative` (`#8B8B8B`) |
| 선택 | `label/heavy` (`#171717`) |

> 💡 Icon은 **fill 아이콘**으로 통일 (border 형태 X) — 시각적 무게감 유지

### Creator mode의 plus 버튼
- 너비/높이: 44 × 36
- 배경: `#F5F4F3` (연한 회색)
- Radius: 8
- icon_plus: 24 × 24, color `#8B8B8B`

### IOS Safe area
- 높이: 32
- Home Indicator: 130 × 4, radius 2, 검정

### User profile 자식들 (Tab 5)
| Variant | Avatar 크기 | 추가 요소 |
|---|---|---|
| User | 27 | — |
| Creator | 27 | sub-Avatar 17 (우하단, white border) |
| Creator mode | 24 | sub-Avatar 17 |
| Guest | — | `icon_user_fill` 28 |

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 웹사이트 **최하단**에 위치하며, 사용자의 **페이지 이동**을 돕기 위해 사용
>
> **활용:** 하위 인스턴스를 변경하여 사용 가능. **지정된 색 이외의 색은 사용불가**

### 사용자 상태별 Tab 5 표시

```
사용자 로그인 안 함         → User profile (Guest mode) — icon_user
일반 로그인 사용자          → User profile (User) — Avatar
크리에이터 권한 보유        → User profile (Creator) — Avatar + sub-Avatar
                              ↓ Tab 5 클릭 시
                              "크리에이터 모드 변환" Bottom Sheet 제공
크리에이터 모드 활성화 중    → User profile (Creator mode) — 작아진 Avatar
                              + Tab bar는 Creator mode=True (3탭)
```

### Creator mode 워크플로우

1. **크리에이터 권한 보유 사용자**가 Tab bar에 노출 (5탭 일반 모드)
2. **Tab 5 (Profile) 클릭** → "크리에이터 모드 전환" Bottom Sheet
3. 전환 확인 → **Tab bar가 3탭 Creator mode로 변경**
   - Dash board / Plus / rayover
4. Plus 버튼 → 콘텐츠 등록 플로우

### 색 사용 원칙 (중요)

> **"지정된 색 이외의 색은 사용불가"**

- 미선택 텍스트: `#8B8B8B` 고정
- 선택 텍스트: `#171717` 고정
- Icon 색상도 변경 불가
- Brand color로 강조 X (라벨 색만 변화)

### select 상태 표시

- **현재 페이지의 Tab만** select 상태 적용
- 텍스트 색이 검정으로 변경
- Icon은 fill 형태 유지 (icon 자체 색은 안 바뀜)

### Tab bar 위 콘텐츠 처리

- **상단 그라디언트** (#FAF7F6, opacity 0→80%)로 탭 위 콘텐츠가 자연스럽게 사라지도록
- 스크롤 콘텐츠가 Tab bar에 가려지지 않도록 **하단 padding 90~93px 확보**

## 🔄 State 처리

- **표시**: 메인 화면들에 항상 노출
- **숨김**: 상세 화면, Modal, Bottom Sheet 노출 시 숨김 권장
- **Selected Tab 변경**: 페이지 이동과 함께 select variant 변경
- **사용자 상태 변경**: Tab 5의 User profile variant 변경

### 모드 전환 흐름

```
일반 모드 (5탭)
  └─ 크리에이터 모드 진입 시
     ↓ (애니메이션: 페이드/모핑)
크리에이터 모드 (3탭)
  └─ 크리에이터 모드 종료 시
     ↓
일반 모드 (5탭)
```

## 🚫 금지 사항

- ❌ **Brand color로 텍스트 색 변경** — 지정 색만 사용
- ❌ **Icon을 outline 형태로 변경** — fill 아이콘 통일
- ❌ **Tab 개수 임의 추가/삭제** — 5탭(일반) / 3탭(Creator) 외 X
- ❌ **Label 누락** — 모든 탭은 label 필수
- ❌ **상단 그라디언트 제거** — 콘텐츠 가독성 깨짐
- ❌ **IOS Safe area 무시** — Home Indicator 영역 확보 필수
- ❌ **상세 화면에 Tab bar 노출** — 메인 화면 전용
- ❌ **사용자 상태 무시한 Tab 5 표시** — Guest/User/Creator/Creator mode 정확히 매칭
- ❌ **radius 30 임의 변경** — 캡슐 형태 유지
- ❌ **여러 Tab 동시 select 표시** — 한 번에 하나만

## 📚 참고

- Figma: [Tab bars 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Avatar` — User profile 자식
  - `Bottom Sheet` (Service) — Creator mode 전환 시 사용
  - `Floating Button` (Service) — Tab bar와 다른 일시적 액션
  - `Header` (있는 경우) — 화면 상단 네비게이션 (Tab bar는 하단 전용)
- 사용 예:
  - 메인 피드 / 라운지 / 서클 / 포인트 / 프로필 (5탭)
  - 크리에이터 대시보드 / 콘텐츠 등록 / rayover 프로필 (3탭)

## 🔧 Figma 발견 이슈 (사용자 검토 필요)

> 발견한 오타/일관성 이슈 — 수정 권장

1. **레이어 이름 `tapbar`** → **`tabbar`** (tap → tab 오타)
2. **레이어 이름 `\bIOS Safe area`** → 백슬래시+b 제어 문자 포함 → **`iOS Safe area`** 정리
3. **레이어 이름 `\blabel`** (페이지 상단) → 백슬래시 제거 → **`label`**
4. **사용예시 디스크립션 `Discription`** → **`Description`** (페이지 내 3곳)
5. **레이어 이름 `Tab 5` 안의 ` icon_plus`** → 앞 공백 제거 → **`icon_plus`**
6. **`Dash board`** → **`Dashboard`** (한 단어 권장 / 공백 사용 시 일관성 확인 필요)
7. **`Tab 3 (Circles) select 시 색이 #3D3D3D`** — 다른 탭은 `#171717` → 통일 권장 (디자인 의도 확인 필요)
