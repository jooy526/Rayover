# Search

> 사용자가 **검색창을 사용하여 앱에서 제공하는 정보를 빠르게 찾을 수 있도록** 도와주는 검색 입력 컴포넌트.

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

## 🎯 사용 시점

**키워드 기반 검색**이 필요한 화면에서 사용합니다. 일반 텍스트 입력(Text Field)과 달리 **검색이라는 명확한 액션 의도**를 가진 전용 컴포넌트입니다.

### 이럴 때 사용
- 콘텐츠/상품 검색 (메인 검색)
- 카테고리 내 필터링 (서브 검색)
- 자동완성 + 최근/인기 검색어 제공
- Top navigation에 검색바 통합

### 사용하지 말아야 할 때
- 일반 텍스트 입력 → **Text Field**
- 단일 옵션 선택 → **Dropdown**
- 짧은 키워드 입력 → **Topic Field**
- 메시지 전송 → **Quick Reply**

### Search vs Text Field

| | **Search** | **Text Field** |
|---|---|---|
| 용도 | **검색 의도** 명확 | 일반 텍스트 입력 |
| 모양 | **캡슐 (radius 100)** | 둥근 사각 (radius 12) |
| 배경 | `#F7F7F7` 고정 | 화이트/회색 (variant별) |
| 닫기 버튼 | **x 버튼 내장** (Texting/Submitted) | 없음 |
| Label/Helper | **없음** | 있음 |
| 사용 위치 | Top navigation, 전용 검색 화면 | 폼 입력 |

## 🧩 구조

```
Search bar (컨테이너, 360×54)
├── Button Area (좌측, optional) — 58×40
│   └── icon_arrow_left (뒤로가기)
├── search (검색 필드, 캡슐)
│   ├── icon_search (선택)
│   ├── Placeholder Label / 입력값
│   └── x 버튼 (입력 중에만)
└── Button Area (우측, optional) — 58×40
    └── icon_search 또는 기타 액션
```

> 🔑 **search 필드 자체는 별도 컴포넌트** — Search bar 없이 단독 사용 가능

## 🎨 Variants — 2개 Component Set

### 1️⃣ Search bar Component Set — **3 variants** (컨테이너)

**1축:** `Type=Search` × `Icon` (배치)

| Variant | 좌측 | 가운데 | 우측 | 너비 |
|---|---|---|---|---|
| `Icon=right` | — | search 286 | icon 58 | 360 |
| `Icon=Left/Right` | icon 58 | search 244 | icon 58 | 360 |
| `Icon=left` | icon 58 | search 286 | — | 360 |

#### 사용 케이스

```
Icon=right         → 메인 화면 (Top navigation 없는 전용 검색 페이지)
                     [search ────────────] [icon]

Icon=Left/Right    → 검색 결과 화면, 카테고리 + 추가 액션
                     [←] [search ──────] [icon]

Icon=left          → 검색 진입 후 화면 (뒤로가기 + 검색 필드)
                     [←] [search ────────────────]
```

### 2️⃣ search Component Set — **4 variants** (필드 본체)

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **Entering** | `False` (입력 시작 전) / `True` (검색 제출 후) |
| **state** | `Default` / `focus` / `Texting` / `Submitted` |

#### 4 variants

| Variant | 표시 내용 | 사용 |
|---|---|---|
| `Entering=False, state=Default` | "Search" placeholder (회색) | **기본** — 진입 전 |
| `Entering=False, state=focus` | 커서 + 키보드 활성 | **포커스** — 키보드 노출 |
| `Entering=False, state=Texting` | 입력값 (검정) + **x 버튼** | **입력 중** — 자동완성 가능 |
| `Entering=True, state=Submitted` | 검색어 (검정) + **x 버튼** | **검색 완료** — 결과 표시 |

> 💡 **Texting과 Submitted의 시각적 차이는 미미** — 주로 상태 의미 (`Entering` 속성)로 구분

## 🎯 사용 토큰

### search 본체 (캡슐)
- **너비**: 286 (Icon=right/left) / 244 (Icon=Left/Right) / 328 (단독)
- **높이**: 42
- **Radius**: **100** (완전 캡슐)
- **배경**: `#F7F7F7` (모든 state 동일)

### Search bar 컨테이너
- **너비**: 360 (Mobile)
- **높이**: 54
- **배경**: `static/white`
- **Padding**: 좌우 16, 상하 6

### Button Area (좌/우)
- **너비**: 58
- **높이**: 40
- **icon size**: 24 × 24 (위치는 Frame 내부)

### Placeholder Label
| 상태 | Color |
|---|---|
| Default / focus | `label/assistive` (`#C1C1C1`) — 회색 |
| Texting / Submitted | `label/heavy` (`#242424`) — 검정 |

### Typography
- **Style**: 15px Medium
- **Line height**: 22

### x 버튼 (clear)
- **너비/높이**: 16 × 16
- **Radius**: 11.2 (캡슐)
- **배경**: `#C1C1C1`
- **icon_x size**: 12.8 × 12.8 (white)
- **위치**: search 우측 끝 (16px 안쪽 margin)

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 사용자는 검색창을 사용하여 앱에서 제공하는 정보를 빠르게 찾을 수 있습니다.
>
> **활용:**
> - **focus 상태**일 때 x버튼 클릭 → 입력한 키워드가 **삭제**됩니다.
> - **active 상태**일 때 x버튼 클릭 → 입력한 키워드가 삭제되고, **focus 상태로 변경**됩니다.

### 4단계 사용 흐름

```
1. Default
   "Search" placeholder, 회색
   → 사용자가 탭하면 ↓

2. focus
   커서 등장 + 키보드 노출
   - 최근 검색어 / 인기 검색어 화면 노출 권장
   → 사용자가 입력 시작 ↓

3. Texting
   입력값 검정 + x 버튼 등장
   - 자동완성 추천 단어 노출
   → 사용자가 검색 실행 ↓ (키보드 enter or 검색 아이콘)

4. Submitted
   검색어 유지 + x 버튼
   - 검색 결과 화면 노출
```

### x 버튼 동작 가이드 (중요!)

> **focus 상태:** x 클릭 → 키워드 삭제 → focus 유지
> **active(Texting/Submitted) 상태:** x 클릭 → 키워드 삭제 → **focus 상태로 변경**

```
Texting 상태에서 x 클릭
   ↓
키워드 삭제 + 키보드 유지 + 자동완성 사라짐
   ↓
focus 상태 (재입력 가능)
```

> 💡 화면을 떠나지 않고 다시 검색할 수 있게 하기 위함

### Search bar Variant 선택 가이드

```
검색 진입점 (메인 검색)            → Icon=right
                                     [search ─] [search icon]
                                     사용자가 탭하면 검색 화면으로 이동

검색 결과 페이지 (뒤로가기 + 추가)  → Icon=Left/Right
                                     [←] [search ─] [filter]

검색 입력 페이지 (뒤로가기만)      → Icon=left
                                     [←] [search ──────────────]
```

### 검색 결과 화면 구성 (사용예시 참조)

#### Focus 상태 화면
```
[← search ──────────]
─────────────────────
최근 검색어         모두 지우기
[메디올] [메이크업] [달바]    ← chip (radius 4, #EFEFEF)

인기 검색어
[메디올] [메이크업] [헬로키티] [스킨케어]   ← chip (radius 14, stroke)
[썬크림] [비건]
```

#### Texting 상태 화면
```
[← search [이|         ] [x]]
─────────────────────
🔍 이니스프리
🔍 이너뷰티

자동완성 추천 (어두운 회색 원형 아이콘 + 검색어)
```

#### Submitted 상태 화면
```
[← search [이셀러     ] [x]]
─────────────────────
[Hot deals] [Live] [Seller] [Daily]   ← Tab (Flexible)

이셀러 [쇼피셀러] [🔥 열정 답변자]  지금
이셀러1245 [쇼피셀러]
이셀러 [쇼피셀러]
이셀러12 [쇼피셀러] [🔥 열정 답변자]  지금
```

### 자동완성 가이드 (Texting 상태)

- **icon**: 회색 원형 (`#DFDFDF`, radius 14) + 검색 아이콘 (16px)
- **단어**: 13px Medium, `#242424`
- **위치**: search 바로 아래 list

### 검색어 칩 가이드

| 종류 | 모양 | 색 |
|---|---|---|
| **최근 검색어** | radius 4, fill `#EFEFEF` | text `#3D3D3D` |
| **인기 검색어** | radius 14, stroke `#DFDFDF` | text `#3D3D3D` |

### Top navigation에 통합 시

- search 단독 컴포넌트만 사용 (Search bar X)
- Top navigation의 Title area를 search로 대체 가능
- 좌측에 icon_arrow_left 추가

## 🔄 State 처리

### 흐름도

```
[화면 진입]
   ↓
Default
   ↓ (탭)
focus → 키보드 노출, 최근/인기 검색어 표시
   ↓ (입력)
Texting → 자동완성, x 버튼 등장
   ├ x 클릭 → focus로 복귀
   ├ enter/검색 → Submitted
   └ 뒤로가기 → 화면 이탈
Submitted
   ├ x 클릭 → focus로 복귀
   └ 뒤로가기 → 화면 이탈
```

### 키보드 인터랙션

- **focus 진입**: 시스템 키보드 자동 노출
- **enter 키**: 검색 실행 → Submitted state
- **focus 해제**: 키보드 사라짐 (다른 영역 탭 시)

## 🚫 금지 사항

- ❌ **radius 변경** — 100 (캡슐) 고정
- ❌ **배경색 변경** — `#F7F7F7` 고정
- ❌ **Label / Helper text 추가** — 검색은 단일 라인 전용
- ❌ **여러 줄 입력 허용** — 검색어는 한 줄
- ❌ **focus 상태에서 자동완성 노출** — Texting부터 (입력값이 있어야)
- ❌ **x 버튼 클릭 시 화면 이탈** — focus로 복귀 (정의된 동작)
- ❌ **Default에 x 버튼 표시** — 입력값이 없는데 삭제할 게 없음
- ❌ **Texting에서 x 버튼 누락** — 입력 시 항상 x 버튼 필수
- ❌ **Search bar 너비 변경** — 360 (Mobile) 고정
- ❌ **검색어 placeholder를 의미 없는 텍스트로** — "Search" 명확하게

## 📚 참고

- Figma: [Search 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Text Field` — 일반 텍스트 입력
  - `Top Navigation Bar` (Service) — 검색바 통합 가능
  - `Tab` — Submitted 결과의 카테고리 분류 (Hot deals/Live/Seller/Daily)
  - `Chips` — 최근/인기 검색어 표시
  - `Avatar` — 검색 결과의 사용자 표시
  - `Badge` — 검색 결과의 부가 정보 (쇼피셀러, 🔥 열정 답변자)
- 사용 예:
  - 메인 화면 검색 진입 (Icon=right)
  - 검색 결과 페이지 (Icon=Left/Right)
  - 검색 입력 (Icon=left)
  - 카테고리별 검색 (Search + Tab 조합)