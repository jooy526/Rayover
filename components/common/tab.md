# Tab

> **하위 화면을 탐색**하기 위한 요소로, **화면의 로컬 탐색**에 사용하는 컴포넌트.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**한 화면 내에서 여러 섹션을 전환**해야 할 때 사용합니다. 페이지 전체 이동(Tab Bar)과는 다른, **로컬 네비게이션** 역할입니다.

### 이럴 때 사용
- 한 화면 내 카테고리 전환 (전체 / 인기 / 최신)
- 콘텐츠 필터 (피드 / 좋아요 / 저장)
- 마이페이지 섹션 (게시물 / 댓글 / 좋아요)
- 상세페이지의 정보 섹션 (개요 / 상세 / 리뷰)

### 사용하지 말아야 할 때
- 앱 전체 메인 네비게이션 → **Tab Bar** (Service 하단)
- 단일 선택 옵션 → **Radio**
- 다중 선택 필터 → **Chips**
- 페이지 이동 → **Header back + 새 페이지**

### Tab vs Tab Bar vs Chips

| | **Tab** | **Tab Bar** | **Chips** |
|---|---|---|---|
| 위치 | 화면 내부 (상단/중간) | 화면 **최하단** | 자유 |
| 용도 | 로컬 섹션 전환 | 앱 글로벌 페이지 이동 | 필터/태그 (다중 선택) |
| 환경 | Common | Service 전용 | Common |

## 🧩 구조

```
Tabs (컨테이너, 360 너비)
└── Tab × N개
    └── item (radius 8)
        └── title
            ├── Item (텍스트, 16px Medium)
            └── badge (5×5 도트, 선택)
            └── (Line=Bold line Text 시) 하단 진한 밑줄
```

## 🎨 Variants

### 1️⃣ Tabs (컨테이너) — 4 variants

| Variant | 사용 |
|---|---|
| `Type=Fixed, Style=Black` | **2~4개** 탭, 일반 배경 |
| `Type=Flexible, Style=Black` | **5개 이상** 탭, 일반 배경 (스크롤) |
| `Type=Fixed, Style=White` | **2~4개** 탭, **Primary 배경 위** |
| `Type=Flexible, Style=White` | **5개 이상** 탭, **Primary 배경 위** (스크롤) |

### 2️⃣ Tab (Child Item) — 12 variants

**4축:**

| 축 | 옵션 |
|---|---|
| **Select** | `True` / `False` |
| **Line** | `Undrline Text` / `Bold line Text` / `Text` |
| **Color** | `Default` / `White` |
| **Style** | `Fixed` / `Flexible` |

#### Line 종류 의미

| Line | 모양 | 사용 |
|---|---|---|
| `Undrline Text` | 텍스트 + **얇은 밑줄** (#EFEFEF) | 미선택 기본 |
| `Bold line Text` | 텍스트 + **진한 밑줄** (선택 색) | 선택 강조 |
| `Text` | 밑줄 없음 | 라인 디자인 안 쓸 때 |

## 🎯 사용 토큰

### Tab 본체
- **Radius (item)**: 8
- **너비 (Fixed)**: 82 (4개 균등 배치)
- **너비 (Flexible)**: 57 (자동, 스크롤 지원)
- **높이**: 40
- **Item 영역 높이**: 28 (선택) / 34 (미선택, 밑줄 영역 X)

### Color (Style=Default — 일반 배경)
| 상태 | Text | Bottom Line |
|---|---|---|
| Select=True | `label/heavy` (`#171717`) | `label/heavy` (`#171717`) |
| Select=False | `label/assistive` (`#C1C1C1`) | `line/normal` (`#EFEFEF`) |

### Color (Style=White — Primary 배경 위)
| 상태 | Text | Bottom Line |
|---|---|---|
| Select=True | `static/white` | `static/white` |
| Select=False | `#FFD1B4` (Primary 옅은톤) | `line/normal` (`#EFEFEF`) 또는 없음 |

### Typography
- Item: 16px Medium

### Badge
- 5 × 5 원형 (radius 999 / full)
- Color (Default): `#FF7733` (Primary)
- Color (White): `static/white`
- 위치: 텍스트 우측 (5px 떨어져)

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 하위 화면을 탐색하기 위한 요소로, 화면의 **로컬 탐색**에 사용
>
> **활용:** **아이템 개수에 따라 두 가지 종류**를 활용
>
> **Fixed:** 2~4개의 탭 항목이 있을 경우 사용
> **Flexible:** 탭 항목이 5개 이상인 경우 권장
>
> **상황에 따라 뱃지를 사용해 해당 탭을 강조**할 수 있음
>
> **Primary color 배경 위에 탭바를 사용해야 할 경우 White Style 사용**

### Type 선택 가이드

```
탭 개수가 몇 개인가?

2~4개  → Type=Fixed
        - 4등분 균등 배치
        - 한 눈에 모든 탭 보임
        - 스크롤 없음

5개 이상 → Type=Flexible  
        - 탭 너비 자동 (콘텐츠에 맞춤)
        - 가로 스크롤 지원
        - 화면 너비 초과 시 자연스럽게 스와이프
```

### Style 선택 가이드

```
배경 색이 무엇인가?

흰색/연한 배경        → Style=Black
                        - 검정 텍스트, 회색 라인
                        - 일반적인 사용

Primary(주황) 배경    → Style=White
                        - 흰색 텍스트, 옅은 톤 미선택
                        - 가독성 확보
```

### Line 종류 선택 가이드

```
선택 강조를 어떻게 표시할까?

탭 하단에 진한 라인     → Bold line Text (선택 시)
                          + Undrline Text (미선택 시)
                          → 가장 일반적

라인 없이 텍스트 색만   → Text (Line=Text)
                          → 미니멀 디자인
                          → 컴팩트한 영역에 적합
```

### Badge 활용

- **새 콘텐츠 알림**: 새 댓글, 새 알림 등
- **데이터 변화**: 업데이트된 섹션 표시
- **가벼운 강조**: 5×5 작은 도트로 눈에 띔

> 💡 모든 탭에 Badge 다는 것 X — **변화가 있는 탭에만** 표시

### 선택 상태 표시 원칙

- **하나의 탭만** Select=True
- 클릭 시 즉시 콘텐츠 영역도 전환
- **Bold line Text** 사용 시 라인이 텍스트 아래 강조선으로 표시되어 명확

### 콘텐츠 영역 연동

```
[ Tab 1 ][ Tab 2 ][ Tab 3 ][ Tab 4 ]
  ━━━━━

──────────────────────────────────
│                                 │
│        Tab 1의 콘텐츠           │
│                                 │
──────────────────────────────────

→ Tab 클릭 시 ─ 라인이 해당 탭으로 이동
→ 콘텐츠 영역도 동시에 변경 (페이드 또는 슬라이드)
```

### Flexible 스크롤 동작

- 화면 너비 초과 시 가로 스크롤
- **선택된 탭이 화면 중앙**에 오도록 자동 스크롤
- 스크롤 인디케이터는 표시하지 않음 (자연스러운 스와이프)

## 🔄 State 처리

- **Select=False**: 미선택, 옅은 색
- **Select=True**: 선택 강조 (텍스트 진한 색 + 진한 라인)
- **Hover** (PC): 미선택 탭에 살짝 배경 또는 텍스트 색 변화
- **Pressed**: 선택 직전 시각적 피드백

### 상태 흐름
```
초기: 첫 번째 탭 Select=True (기본)
    ↓
다른 탭 클릭
    ↓
이전 탭 Select=False, 새 탭 Select=True
콘텐츠 영역 전환 (애니메이션)
```

## 🚫 금지 사항

- ❌ **2~4개 탭에 Flexible 사용** — Fixed가 더 균형감 있음
- ❌ **5개 이상 탭에 Fixed 사용** — 텍스트 잘림 / 답답함
- ❌ **Primary 배경 위에 Style=Black 사용** — 텍스트 가독성 저하
- ❌ **여러 탭 동시 Select=True** — 한 번에 하나만
- ❌ **Bold line Text를 미선택 상태에 사용** — 시각적 혼란
- ❌ **모든 탭에 Badge 표시** — 강조 의미 사라짐
- ❌ **탭 텍스트 너무 길게** — Fixed는 특히 한 단어 권장
- ❌ **Tab Bar처럼 페이지 이동 용도로 사용** — 로컬 탐색 전용

## 📚 참고

- Figma: [Tab 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Tab Bar` (Service) — 앱 전체 글로벌 네비게이션 (하단 고정)
  - `Chips` — 다중 선택 필터
  - `Radio` — 단일 선택 옵션
  - `Badge` — Tab 위 알림 도트와는 다름 (별개)
- 사용 예:
  - 마이페이지: 게시물 / 댓글 / 좋아요 (3 Fixed)
  - 콘텐츠 카테고리: 전체 / 음식 / 패션 / 여행 / ... (5+ Flexible)
  - Primary 배너 위 탭: White Style

## 🔧 Figma 발견 이슈 (사용자 검토 필요)

> 발견한 오타/일관성 이슈 — 수정 권장

1. **Variant 이름 `Line=Undrline Text`** → **`Line=Underline Text`** (Undrline → Underline 오타, **모든 12 variants에 영향**)
2. **사용예시 디스크립션 `Discription`** → **`Description`** (페이지 내 2곳)
3. **`FIxed 스타일`** → **`Fixed 스타일`** (대문자 I 오타 — 디스크립션 내)
4. **레이어 이름 `\blabel`** (페이지 상단) → 백슬래시 제거 → **`label`**
