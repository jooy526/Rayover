# CMS Chips (chips_filter)

> CMS Admin 환경에서 **필터링/선택**을 위해 사용하는 chip 컴포넌트. **Title + 선택된 값**을 한 chip 안에 표시하고, **삭제 기능**까지 포함합니다.

## 📍 환경

- [ ] Common
- [ ] Service
- [x] **Admin (PC, CMS)**

## 🎯 사용 시점

CMS의 **데이터 테이블/리스트 필터링**에 사용합니다. 사용자가 적용한 필터를 시각적으로 표시하고, 클릭으로 수정/삭제할 수 있도록 합니다.

### 이럴 때 사용
- 게시물/사용자 등 **데이터 리스트 상단의 필터** 표시
- 다중 필터 적용 시 (날짜 + 상태 + 카테고리 등)
- 적용된 필터의 **현재 값** 한눈에 파악
- 필터 **수정/삭제** 인터페이스

### 사용하지 말아야 할 때
- 모바일 환경 → **Service의 chips_filter** 사용
- 단순 태그 표시 (필터링 X) → **Service의 chips_basic**
- 단일 옵션 선택 → **Radio**
- 검색 기반 필터 → **Search**

### CMS Chips vs Service chips_filter

| | **CMS chips_filter** (Admin) | **chips_filter** (Service) |
|---|---|---|
| 환경 | **PC Admin** | Mobile |
| State 수 | **4개** (+ Hover, Delete hover) | 3개 (Default/Selected/Disabled) |
| 구조 | **Title + divider + Text(값)** | Label 단독 |
| Delete 기능 | **있음** (chip 자체 제거) | 없음 (선택 토글만) |
| 색 톤 | 회색 톤 (PC UI) | 다양한 색 |
| 사이즈 | normal / Large | Small / Medium / Large |

## 🧩 구조

```
[CMS]chips_filter (radius 18, 캡슐)
├── (선택) icon_left (16~18px) — 아이콘 위치
├── Title (필터 이름, 13/14px Medium)
├── divider (15×15 영역, 작은 구분점)
├── Text (선택된 값, 13/14px Regular)
└── (Hover 시) delete 영역
    ├── gradient fade 배경
    └── icon_delete (22~24px)
```

> 🔑 **Title + Text 페어 구조**가 핵심
> - 일반 chip은 단일 라벨 (예: "메뉴")
> - CMS chip은 **"메뉴 · 핫딜"** 형태로 적용된 값까지 함께 표시

## 🎨 Variants — 1개 Component Set, **8 variants**

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **State** | `Default` / `Hover` / `Delete hover` / `Press` |
| **Size** | `normal` (30h) / `Large` (36h) |

### 4가지 State

| State | 배경 | 테두리 | Delete 영역 | 사용 |
|---|---|---|---|---|
| `Default` | `#F5F4F3` | `#8B8B8B` | 없음 | 평상시 |
| `Hover` | `#ECECEC` (진해짐) | `#555555` (진해짐) | **등장** (gradient fade) | 마우스 올림 |
| `Delete hover` | `#ECECEC` | `#555555` | 등장 (Hover와 동일) | delete 아이콘 호버 |
| `Press` | `#DFDFDF` (가장 진함) | `#8B8B8B` | 없음 | 클릭 직전 |

> 💡 **Delete hover와 Hover는 시각적으로 동일** — 차이는 delete 아이콘 위에 마우스가 있는지 여부 (툴팁 표시 등 추가 인터랙션)

### 2가지 Size

| Size | 높이 | Typography | icon (좌) |
|---|---|---|---|
| `normal` | **30** | 13px Medium / 13px Regular | 16 |
| `Large` | **36** | 14px Medium / 14px Regular | 18 |

> 💡 **PC Admin 환경에서 일반적으론 `normal`(30h) 사용**, 강조가 필요하면 `Large`(36h)

## 🎯 사용 토큰

### 본체
- **Radius**: 18 (캡슐)
- **Padding (좌우)**: 12

### Background & Border (State별)
| State | 배경 | Stroke |
|---|---|---|
| Default | `#F5F4F3` | `#8B8B8B` |
| Hover | `#ECECEC` | `#555555` (진함) |
| Delete hover | `#ECECEC` | `#555555` |
| Press | `#DFDFDF` | `#8B8B8B` |

### Typography

| 요소 | normal | Large | 색 |
|---|---|---|---|
| Title (필터 이름) | 13px Medium | 14px Medium | `label/heavy` (`#242424`) |
| Text (값) | 13px Regular | 14px Regular | `label/strong` (`#3D3D3D`) |

### divider (가운데 구분 영역)
- 너비/높이: 15 × 15
- 빈 영역으로 시각적 분리 효과 (icon_null 자리)

### icon_left (선택)
- normal: 16 × 16
- Large: 18 × 18
- 색: 보통 비활성 (visible: false) — 필요 시 사용

### Delete 영역 (Hover/Delete hover에서 등장)
- **너비**: 42 (normal) / 44 (Large)
- **높이**: 28 (normal) / 34 (Large)
- **배경**: gradient fade (`#ECECEC` 우측으로 0% → 100%)
- **icon_delete**: 22 (normal) / 24 (Large), 색 `#3D3D3D`
- **위치**: chip 우측 끝에서 자연스럽게 fade-in

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 정보, 선택, 콘텐츠 필터링, 그리고 특정 액션을 유도할때 사용. **최소 두가지 옵션이 있는 경우에 필터링 목적으로 사용됩니다.**
>
> **활용:**
> - 필터링 하고자 하는 데이터 **상단에 위치**합니다.
> - 하위 인스턴스를 **변경할 수 있습니다**.
> - 선택한 필터의 값이 **divider 우측에 표기**됩니다.
> - **왼쪽에서 오른쪽으로 나열**하여 사용. **줄바꿈이나 스와이프** 기능을 넣을 수 있습니다.
>
> **Description 1:** 필터 생성의 순서대로 왼쪽에서 오른쪽으로 나열하여 사용합니다.
>
> **Description 2:** chip 전체 hover 상태일때 클릭 시 해당 필터를 **수정할 수 있는 바텀시트 또는 모달이 제공**됩니다. chip 내 delete 아이콘 호버시, **삭제 기능이 활성화**되며 **툴팁으로 기능 활성화를 안내**합니다. 클릭시 chip 전체가 삭제됩니다.

### 인터랙션 흐름 (가장 중요!)

```
[Default] - 평상시 chip 표시
   ↓ 마우스 올리면
[Hover] - 배경 진해짐 + delete 영역 등장
   ├ chip 본체 클릭 → 필터 수정 모달/바텀시트 노출
   └ delete 아이콘 위로 마우스 이동
        ↓
   [Delete hover] - 툴팁 "삭제" 안내
        ├ delete 클릭 → chip 전체 삭제
        └ 마우스 빠지면 → Hover 상태로 복귀
```

### 두 가지 클릭 영역

```
┌──────────────────────────────────────┐
│                                      │
│   📅  메뉴   ·   핫딜       │  🗑   │
│                                      │
└──────────────────────────────────────┘
   ↑                              ↑
   chip 본체 클릭                  delete 아이콘 클릭
   → 필터 수정 모달               → chip 자체 삭제
```

### 사용예시 패턴 (Figma 사용예시 참조)

#### 패턴 1: 다중 필터 나열
```
Popular keywords
[📅 메뉴 · 핫딜] [📅 작성 날짜 · 2025.03.14]
[📅 상태 · 승인완료]
```

→ **여러 필터를 줄바꿈해서 사용**, 좌→우 순서대로 적용 순서 유지

#### 패턴 2: Hover 시 delete 노출
```
Popular keywords
[📅 상태 · 승인완료    🗑]
                       ↑
              마우스 올리면 등장
```

#### 패턴 3: Delete hover + 툴팁 (Badge로 표시)
```
Popular keywords
            ┌────┐
            │삭제 │  ← 툴팁
            └─▼──┘
[📅 상태 · 승인완료    🗑]
                       ↑
              마우스 올림
```

### 배치 가이드

> **"필터링하고자 하는 데이터 상단에 위치"**

```
┌─────────────────────────────────────────┐
│ Popular keywords                        │ ← 라벨
│                                         │
│ [필터1] [필터2] [필터3]                  │ ← chip 행 1
│ [필터4]                                 │ ← chip 행 2 (줄바꿈)
│                                         │
├─────────────────────────────────────────┤
│ Table / List 데이터                      │
│ ...                                     │
└─────────────────────────────────────────┘
```

### 줄바꿈 vs 스와이프

| 환경 | 권장 |
|---|---|
| **PC Admin** | **줄바꿈** (가로 공간 충분, 한눈에 모든 필터 보임) |
| Tablet | 둘 다 가능 |
| 모바일 | 스와이프 (가로 스크롤) — 단, CMS는 PC 전용이라 해당 X |

### 텍스트 작성 가이드

| 요소 | 가이드 | 예시 |
|---|---|---|
| **Title** | 필터의 **속성 이름** (명사) | "메뉴", "상태", "작성 날짜", "카테고리" |
| **Text (값)** | 선택된 **구체적 값** | "핫딜", "승인완료", "2025.03.14" |

> 💡 Title은 짧을수록 좋음 (1~5자), Text는 짧고 명확하게

### 다중 값 선택 처리 (예: "승인완료 외 2")

```
[📅 상태 · 승인완료]               (1개 선택)
[📅 상태 · 승인완료 외 2]           (3개 선택, 1개+나머지 카운트)
```

→ 첫 번째 값 + "외 N" 형태로 압축 권장

### Hover/Delete hover 시 툴팁

> Figma 가이드: **"툴팁으로 기능 활성화를 안내합니다."**

- delete 아이콘 hover 시 작은 Badge "삭제" 노출
- 위치: delete 아이콘 위쪽
- 색: 검정 40% + white 텍스트 (#000 opacity 0.4)
- 사이즈: 32×20, radius 6

## 🔄 State 처리

### 흐름도

```
[Default]
   ↓ mouseenter
[Hover] (delete 영역 fade-in)
   ├ click chip 본체 → [Press] → 필터 수정 모달
   ├ mouseenter delete → [Delete hover] (툴팁 노출)
   │   ├ click delete → chip 삭제
   │   └ mouseleave delete → [Hover]
   └ mouseleave chip → [Default]
```

### 애니메이션 권장

- **delete 영역 fade-in**: opacity 0 → 1 (150ms)
- **배경 색 전환**: 100ms ease
- **chip 삭제**: 좌측 슬라이드 + fade out (200ms)

## 🚫 금지 사항

- ❌ **Service chips_filter와 혼용** — 환경별로 다른 컴포넌트
- ❌ **divider 영역 임의 제거** — Title과 Text의 시각적 구분이 깨짐
- ❌ **다른 색상 (Primary 등) 사용** — 회색 톤만 (`#F5F4F3`/`#ECECEC`/`#DFDFDF`)
- ❌ **Hover 상태에서 delete 누락** — 정의된 인터랙션
- ❌ **delete 클릭 시 chip 부분만 사라짐** — chip 전체 삭제
- ❌ **chip 본체 클릭 시 삭제** — 본체는 수정, delete만 삭제
- ❌ **줄바꿈 없이 가로 무한 스크롤** — PC는 줄바꿈 권장
- ❌ **여러 chip을 다른 Size로 혼용** — 한 영역엔 같은 Size
- ❌ **"필터" 외 용도로 사용** — 필터링 전용 컴포넌트

## 📚 참고

- Figma: [Chips 페이지 링크 - CMS chips_filter Component Set]
- Storybook: [링크]
- 연관 컴포넌트:
  - `chips_filter` (Service) — 모바일용 필터 chip
  - `chips_basic` (Service) — 단순 태그/라벨
  - `Modal` / `Bottom Sheet` — 필터 수정 시 노출
  - `Badge` — Delete hover 시 툴팁으로 사용
  - `Tooltip` (CMS) — 호버 안내
- 사용 예:
  - 게시물 관리 테이블 상단 필터
  - 사용자 검색 결과 필터
  - 분석 대시보드의 기간/카테고리 필터
  - 데이터 다운로드 조건 표시