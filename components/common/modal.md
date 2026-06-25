# Modal

> **앱 콘텐츠 앞에 나타나** 사용자에게 중요한 정보를 전달하거나 **사용자의 선택이 필요할 때** 사용하는 컴포넌트.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**중요한 정보를 명확히 전달**하거나 **사용자 결정이 필요한 순간**에 사용합니다. 다른 인터랙션을 일시 차단하고 모달에 집중하게 합니다.

### 이럴 때 사용
- 중요한 알림 (계정 상태, 결제 안내 등)
- 사용자 확인이 필요한 작업 (삭제, 결제, 약관 동의)
- 마일리지/포인트 사용 안내
- 이벤트 안내 (Event text 포함)
- 프로필 기반 액션 확인 (특정 사용자에 대한 행동)

### 사용하지 말아야 할 때
- 단순 피드백 (성공/실패 알림) → **Toast**
- 옵션 선택 → **Bottom Sheet** / **Action Sheet**
- 페이지 내 강조 안내 → **Callout**
- 항상 보여야 하는 인라인 정보 → **Callout**

### Modal vs Bottom Sheet
| | **Modal** | **Bottom Sheet** |
|---|---|---|
| 강도 | 강한 포커스 (가운데) | 부드러운 등장 (하단) |
| 용도 | 중요 결정/알림 | 옵션 선택, 정보 확장 |
| 외부 클릭 | **닫히지 않음** | 일반적으로 닫힘 |
| 내용 | 짧고 명확 | 다양한 콘텐츠 |

## 🧩 핵심 구조

```
Modal (280 × auto, radius 12, 흰 배경)
├── Content (필수)
│   ├── (선택) Profile / Icon / Color Icon / Platform logo
│   ├── Title (16px Medium #242424, 가운데 정렬)
│   ├── Description (14px Regular #6F6F6F)
│   └── (선택) Event text / Mileage 박스
└── Button area (필수)
    └── Type에 따라 1~2개 버튼 (가로/세로)
```

> 🔑 **Modal은 Content + Button area 조합으로 무조건 구성** — Content Type과 Button area Type 자유 조합

## 🎨 Variants — 3개 Component Set

### 1️⃣ Modal 메인 (단일 컴포넌트)
- 별도 variant 없음
- 안에 Content와 Button area를 인스턴스로 조합

### 2️⃣ Content Component Set — **7 Type**

| Type | 구성 | 사용 |
|---|---|---|
| `Title` | Title + Description | **기본 알림 모달** |
| `Title+Eventtext` | Platform logo + Event text + Title + Description | **이벤트 안내** (이벤트 강조) |
| `Profile+Title` | Avatar(48) + Title + Description | **사용자 관련 액션** 확인 |
| `Icon + Title` | icon_info(40) + Title + Description | **정보성 알림** (단순 아이콘) |
| `Color Icon + Title` | 그라디언트 원(40) + Title + Description | **마일리지/포인트** 컨셉 강조 |
| `Title + Mileage` | Title + Description + Mileage 박스 1행 | **마일리지 적립/안내** |
| `Title + useMileage` | Title + Description + Mileage 박스 3행(잔액/사용/총합) | **마일리지 사용 확인** |
| `Profile+Title+Mileage` | Avatar(48) + Title + Description + Mileage 박스 | **프로필 + 마일리지 액션** |

### 3️⃣ Button area Component Set — **8 Type**

| Type | 구성 | 사용 |
|---|---|---|
| `Text` | Text Button 1개 (Confirm) | 단순 확인 |
| `Text + Text` | Text Button 2개 (Cancel + Action) | 가벼운 양자 선택 |
| `H Text + Button` | Text Cancel + Solid Primary (가로) | 일반적인 확인/취소 |
| `V Button + Text` | Solid Primary 위 + Text Cancel 아래 | **액션 강조** + 취소 옵션 |
| `H Button + Button` | Solid Assistive + Solid Primary (가로) | 동등한 두 액션 |
| `Button` | Solid Primary 단독 | 단일 강한 액션 |
| `V Button + Button` | Solid Primary + Solid Assistive (세로) | **두 액션 모두 강조** |
| `V Button + lineButton` | Solid Primary + Outline Primary (세로) | 주/부 액션 모두 Primary 색 |

## 🎯 사용 토큰

### Modal 본체
- **Radius**: `radius/4` (12)
- **배경**: `static/white`
- **너비**: 280 (모바일 기준)
- **Content padding**: 좌우 24, 상단 32
- **Button area padding**: 좌우 24

### Title
- 16px Medium
- Color: `#242424` (label/heavy 근처)
- 정렬: **center**

### Description
- 14px Regular
- Color: `label/alternative` (`#6F6F6F`)

### Event text (Title+Eventtext용)
- 20px Medium
- Color: `primary/normal` (`#FF5722`)
- Platform logo 20×20과 함께 가로 배치

### Avatar (Profile 타입)
- 48 × 48, radius 24 (full)

### Icon
- `Icon + Title`: 40 × 40
- `Color Icon + Title`: 40 × 40 그라디언트 원형 (옐로우→오렌지→그린)

### Mileage 박스 (1행 — Title + Mileage)
- 배경: `#FFF3EB` (Primary 연한 톤)
- 테두리: `primary/normal` (`#FF5722`)
- Radius: 8
- 텍스트: 15px Regular `#FF5722`
- 숫자: 15px **Bold** `#FF5722`
- 높이: 38

### Mileage 박스 (3행 — Title + useMileage)
- Radius: 8
- 1행 (잔액): 14px Regular `#8B8B8B` + 14px Medium `#C1C1C1`
- 2행 (사용): 14px Regular `#8B8B8B` + 14px Medium **`#F94C50`** (차감 강조)
- 3행 (총합): 15px Regular `#3D3D3D` + 15px **Bold** `#3D3D3D`
- 높이: 102

### Button (Solid Primary)
- 배경: `primary/normal` (`#FF5722`)
- Radius: 8
- 높이: 40
- 텍스트: 15px Medium white

### Button (Solid Assistive)
- 배경: `#ECECEC`
- Radius: 8
- 높이: 40
- 텍스트: 15px Medium `#3D3D3D`

### Button (Outline Primary)
- 테두리: `primary/normal`
- Radius: 8
- 높이: 40
- 텍스트: 15px Medium `#FF5722`

### Button (Text)
- 배경 없음, Radius 4
- 높이: 32
- 텍스트: 15px Medium `#3D3D3D` (Normal) / `#FF5722` (Primary)

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 앱 콘텐츠 앞에 나타나 사용자에게 중요한 정보를 내보내거나 사용자 선택이 필요할 때 사용
>
> **활용:** 상황에 따라 용도에 맞는 모달을 사용. **모달 외 영역을 클릭하더라도 모달은 닫히지 않습니다.**

### 두 가지 대표 패턴 (Figma 사용예시 기반)

#### 패턴 1: 액션 강조형
> **"사용자의 목적이 명확할 때 액션 버튼을 강조하여 사용. 세로형 버튼을 사용하고, Cancel 버튼을 반드시 포함."**

```
Content: Title + Description
Button area: V Button + Text  또는  V Button + Button  또는  V Button + lineButton
```

- 사용자가 무엇을 해야 하는지 명확함
- Primary 액션을 위에 크게, Cancel을 아래에 텍스트로 배치
- **Cancel은 반드시 포함** (탈출구 보장)

#### 패턴 2: 기본 알림형
> **"기본 알림 모달로 사용. 버튼을 하나만 제공하거나, Cancel 버튼을 나란히 제공. 목적에 따라 프로필 또는 아이콘을 포함시켜 사용."**

```
Content: Title  또는  Profile+Title  또는  Icon + Title
Button area: Text  또는  Text + Text  또는  H Text + Button  또는  H Button + Button
```

- 단순 확인 또는 양자 선택
- Profile/Icon으로 맥락 강화 가능

### Content Type 선택 가이드

```
어떤 정보를 강조할까?

단순 알림                  → Title
이벤트 안내                → Title+Eventtext
특정 사용자 관련           → Profile+Title
정보 강조 (info icon)      → Icon + Title
마일리지/포인트 시각 강조  → Color Icon + Title
마일리지 적립 안내         → Title + Mileage
마일리지 사용 확인         → Title + useMileage
프로필 + 마일리지          → Profile+Title+Mileage
```

### Button area Type 선택 가이드

```
얼마나 강하게 액션을 유도하고 싶은가?

단일 확인 버튼만 필요  → Text 또는 Button
양자 가벼운 선택       → Text + Text 또는 H Text + Button
일반적 확인/취소       → H Text + Button
액션 강하게 강조       → V Button + Text 또는 V Button + Button
대등한 두 액션         → H Button + Button
주/부 모두 Primary톤   → V Button + lineButton
```

### 외부 영역 클릭 동작 (중요)

> **모달 외 영역을 클릭하더라도 모달은 닫히지 않습니다.**

- ❌ Bottom Sheet처럼 외부 탭으로 dismiss → 안 됨
- ✅ **반드시 모달 내 버튼**(Confirm/Cancel/Action)을 통해서만 닫힘
- 이는 사용자가 **실수로 모달을 닫고 중요한 결정을 놓치는 것을 방지**

### Cancel 버튼 권장

- **세로형 버튼 사용 시 Cancel 반드시 포함** (Figma 가이드 명시)
- 단일 확인용(Type=Text, Type=Button)은 예외
- 사용자에게 **빠져나갈 길**을 항상 제공

### 마일리지 박스 활용

#### 1행 (Title + Mileage)
- 단순한 마일리지 정보 표시
- "현재 보유 마일리지: 50M" 같은 적립/안내

#### 3행 (useMileage) — 사용 확인 시
```
보유 마일리지         100M
사용 마일리지        -50M  ← 빨강 강조
사용 후 잔액          50M  ← Bold 강조
```
- **차감을 빨강으로**, **결과를 Bold로** 시각화
- 사용자가 거래 결과를 명확히 인지

## 🔄 State 처리

- **Hidden**: 표시 안 됨 (기본)
- **Open**: 가운데에 페이드+스케일 등장 (배경 어둡게 dim)
- **Closing**: 페이드 아웃
- **외부 영역 (dim) 클릭**: 닫히지 않음 (인터랙션 무시)

### 등장 애니메이션 권장
- Fade in + Scale up (95% → 100%) 200~300ms
- 배경 dim: black 50% 정도

## 🚫 금지 사항

- ❌ **외부 클릭으로 닫기** — 정의된 원칙 위반
- ❌ **Cancel 없이 V Button + V Button만 사용** — 탈출구 없음 (단일 Button은 예외)
- ❌ **Title 없이 Description만 사용** — Title은 모달의 핵심 정보
- ❌ **모달 안에 또 다른 모달 띄우기** — 사용자 혼란
- ❌ **모달 안에 긴 스크롤 콘텐츠** — Bottom Sheet로 이동
- ❌ **너비 280 무시하고 임의 변경** — 모바일 최적화 깨짐
- ❌ **Solid Primary 버튼 2개 가로 배치** — 어느 게 주 액션인지 불분명 (H Button + Button은 Assistive + Primary)
- ❌ **간단한 알림에 모달 사용** — Toast가 적합

## 📚 참고

- Figma: [Modal 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Bottom Sheet` (Service) — 옵션/콘텐츠 확장 (모바일)
  - `Toast` — 가벼운 피드백
  - `Callout` — 페이지 내 인라인 알림
  - `Button` — Solid Primary/Assistive/Outline Primary
  - `Text Button` — Normal/Primary
  - `Avatar` — Profile Type
- 사용 시점:
  - 결제 확인 / 마일리지 사용
  - 계정 삭제 / 데이터 영구 삭제
  - 이벤트 안내 / 알림
  - 프로필 관련 액션 (차단/팔로우 등)
