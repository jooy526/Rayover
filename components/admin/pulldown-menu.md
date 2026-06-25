# Pulldown Menu

> 사용자가 **선택할 수 있는 옵션을 제공**하기 위해 사용하는 범용 메뉴 컴포넌트. 풀다운 버튼이나 아이콘 버튼 클릭 시 **최상단 레이어로 노출**됩니다.

## 📍 환경

- [ ] Common
- [ ] Service
- [x] **Admin (PC, CMS)**

## 🎯 사용 시점

CMS에서 **여러 옵션 중 하나를 선택**하거나 **추가 액션 메뉴**를 제공할 때 사용합니다. 클릭 트리거 기반으로, 트리거 요소 주변에 floating으로 등장하는 메뉴입니다.

### 이럴 때 사용
- 풀다운 버튼 (▼) 클릭 시 옵션 목록
- 아이콘 버튼 (⋯ 더보기) 클릭 시 액션 메뉴
- 정렬/필터 옵션 선택
- 사용자 액션 메뉴 (편집/삭제/복사 등)
- 카테고리/태그 선택

### 사용하지 말아야 할 때
- 모바일 환경 → **Bottom Sheet** / **Action Sheet** (Service)
- 단순 정보 표시 → **Tooltip** / **Popover**
- 다중 선택 → **Checkbox 리스트** 또는 **Chips**
- 단일 입력 → **Dropdown** (Common)

### Pulldown Menu vs Dropdown

| | **Pulldown Menu** (Admin) | **Dropdown** (Common) |
|---|---|---|
| 환경 | PC Admin | Common |
| 너비 | 300 | 가변 |
| 용도 | **범용 옵션 선택 / 액션 메뉴** | 폼 필드 선택 |
| 트리거 | 풀다운/아이콘 버튼 | 입력 필드 |
| 인터랙션 | 클릭 트리거 | 입력 필드 클릭 |

## 🧩 구조

```
Pulldown menu (Component, 300×314, radius 12, white)
└── list × N개 (336×20 width 안에 들어가는 인스턴스)
    └── list (Component Set)
        ├── content
        │   ├── (선택) icon (20×20, 좌측)
        │   └── Text (14px Medium)
        └── icon_chevron_right (20×20, 우측)
```

> 🔑 **list는 Component Set, Pulldown menu 본체는 list의 컨테이너 Component**

## 🎨 Variants

### 1️⃣ Pulldown menu (Component, 본체)

- **너비**: 300
- **높이**: 가변 (예시: 314 — 10개 list 포함 시)
- **Radius**: 12
- **배경**: `static/white`
- **포함**: list 인스턴스 N개

### 2️⃣ list Component Set — **2 variants**

**1축:**

| 축 | 옵션 |
|---|---|
| **Disable** | `false` / `true` |

| Variant | 텍스트 색 | 사용 |
|---|---|---|
| `Disable=false` | `label/heavy` (`#171717`) | 일반 — 선택 가능 |
| `Disable=true` | `label/assistive` (`#C1C1C1`) | 비활성 — 선택 불가 |

**list 구조 (공통)**:
- 너비 336, 높이 20
- icon (20×20, 좌측, 옵션)
- Text (14px Medium)
- icon_chevron_right (20×20, 우측)

> 💡 **icon_chevron_right이 항상 표시** — 클릭 가능한 항목임을 시각적으로 강조

## 🎯 사용 토큰

### Pulldown menu 본체
- **너비**: 300 (고정)
- **Radius**: `radius/4` (12)
- **배경**: `static/white`
- **Padding (좌우)**: 12
- **Padding (상하)**: 12
- **Shadow** (Figma에는 명시 X, 권장): `0 4px 12px rgba(0,0,0,0.08)` — 최상단 레이어 표현

### list 항목
- **너비**: 336 (Pulldown menu 너비 - padding 좌우 6×2)
  - 단, 패딩 안에서 자연스럽게 늘어남
- **높이**: 20
- **간격 (list 사이)**: 10 (대략, Auto layout)

### Typography
| 요소 | Style | 색 |
|---|---|---|
| Text (Disable=false) | 14px Medium | `label/heavy` (`#171717`) |
| Text (Disable=true) | 14px Medium | `label/assistive` (`#C1C1C1`) |

### Icons
- **icon (좌측, 옵션)**: 20 × 20
- **icon_chevron_right (우측)**: 20 × 20
- 색: 컨텍스트에 따라 (보통 `#171717`)

### Hover State (Figma 정의 부족, 권장)
- 배경: `#F7F7F7` 같은 옅은 회색 (LNB Menu와 일관성)
- 텍스트 색 유지

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 사용자가 **선택할 수 있는 옵션을 제공**하는 목적으로 사용합니다.
>
> **활용:**
> - **풀다운 버튼이나 아이콘 버튼과 같은 구성요소와 함께 사용**합니다.
> - **최상단 레이어로 노출됩니다.**

### 트리거별 사용 패턴

#### 패턴 1: 풀다운 버튼 + Pulldown menu
```
[정렬: 최신순 ▼]
       ↓ 클릭
       ┌─────────────────────┐
       │  📅 최신순          › │ ← 현재 선택 (강조 가능)
       │  📅 오래된순        › │
       │  📅 인기순          › │
       │  📅 가나다순        › │
       └─────────────────────┘
```

#### 패턴 2: 아이콘 버튼 (⋯ 더보기) + Pulldown menu
```
[테이블 행 우측의  ⋯ ]
                   ↓ 클릭
       ┌─────────────────────┐
       │  ✏️ 편집            › │
       │  📋 복사            › │
       │  📊 통계 보기       › │
       │  🗑 삭제            › │
       └─────────────────────┘
```

#### 패턴 3: 비활성 항목 포함
```
       ┌─────────────────────┐
       │  ✏️ 편집            › │ ← Disable=false
       │  📋 복사            › │ ← Disable=false
       │  ⚠ 권한없음        › │ ← Disable=true (회색)
       │  🗑 삭제            › │ ← Disable=false
       └─────────────────────┘
```

→ 권한이 없거나 현재 상황에서 불가능한 액션은 `Disable=true`

### 위치 가이드

> **"최상단 레이어로 노출"**

```
트리거 요소 클릭
   ↓
Pulldown menu 등장
   ├ 트리거 아래쪽이 충분 → 아래로 펼침
   ├ 화면 하단 가까움 → 위로 펼침
   └ 좌측 정렬 (트리거의 좌측 끝과 맞춤)
```

### list 항목 작성 가이드

| 요소 | 가이드 | 예시 |
|---|---|---|
| **icon (좌측)** | 액션의 의미를 시각화 | ✏️ (편집), 🗑 (삭제), 📋 (복사) |
| **Text** | 짧은 동사형 또는 명사 | "편집", "최신순", "목록 보기" |
| **icon_chevron_right** | 항상 표시 (클릭 가능 표시) | (자동) |

### Disable 활용

```
Disable=false (기본)
  ├ 사용자가 선택 가능
  ├ Hover 효과
  └ 클릭 시 액션 실행

Disable=true
  ├ 회색으로 표시
  ├ Hover 효과 없음
  ├ 클릭 시 동작 없음
  └ 권한 없음 / 일시적 비활성 등에 사용
```

> 💡 **비활성 항목을 숨기지 말고 보여주는 게 좋음** — 사용자가 "왜 이 액션이 없지?" 혼란 방지

### 닫기 동작 (Popover와 동일)

- **외부 영역 클릭** → 자동 닫힘
- **list 항목 클릭** → 액션 실행 + 자동 닫힘
- **ESC 키** → 닫힘
- **다른 트리거 클릭** → 기존 메뉴 닫히고 새 메뉴 열림

### 항목 개수 가이드

| 개수 | 권장 |
|---|---|
| **1~10개** | OK (가장 일반적) |
| **11~15개** | 가능, 스크롤 필요할 수 있음 |
| **16개 이상** | 비권장 — 검색 기능 있는 다른 UI 고려 (예: Combobox, Modal) |

### 그룹핑 (옵션)

긴 list는 구분선 또는 카테고리 헤더로 그룹화:
```
┌─────────────────────┐
│  편집 그룹          │ ← (구분 헤더, 회색 11px)
│  ✏️ 편집           › │
│  📋 복사           › │
│  ─────────────────  │ ← (구분선)
│  공유 그룹          │
│  🔗 링크 복사      › │
│  📤 공유           › │
│  ─────────────────  │
│  🗑 삭제 (빨강)    › │ ← Destructive 액션은 별도 그룹
└─────────────────────┘
```

> 📝 Figma에는 정의 안 된 패턴, 항목 많을 때 권장

### Destructive 액션 처리

- 삭제 같은 위험한 액션은 **하단 별도 영역**에 배치
- 텍스트 색을 빨강 (`#EA1D22`)으로 변경
- 클릭 시 **확인 Modal** 노출 권장 (즉시 실행 X)

## 🔄 State 처리

### list 항목 인터랙션 흐름

```
[Default (Disable=false)]
   ↓ mouseenter
[Hover] (배경 옅어짐, 권장 #F7F7F7)
   ↓ click
액션 실행 + Pulldown menu 닫힘

[Disabled (Disable=true)]
   ├ Hover 효과 없음
   └ Click 무시
```

### Pulldown menu 자체

```
[Hidden]
   ↓ 트리거 클릭
[Open] (페이드 + 슬라이드 등장)
   ├ list 클릭 → 액션 + [Closing]
   ├ 외부 클릭 → [Closing]
   └ ESC → [Closing]
[Closing] (페이드 아웃)
   ↓
[Hidden]
```

### 등장/사라짐 애니메이션 권장

- **등장**: 페이드 인 + 위/아래 살짝 슬라이드 (200ms ease-out)
- **사라짐**: 페이드 아웃 (150ms ease-in)

## 🚫 금지 사항

- ❌ **트리거 없이 표시** — 풀다운 버튼/아이콘 버튼 등 명확한 트리거 필요
- ❌ **외부 클릭으로 닫히지 않음** — 정의된 동작 (최상단 레이어)
- ❌ **너비 임의 변경** — 300 고정
- ❌ **Radius 12 외 사용** — 일관성
- ❌ **모든 항목을 Disable=true로** — 메뉴 자체가 의미 없음
- ❌ **너무 많은 항목 (20+)** — 다른 UI 고려
- ❌ **Pulldown menu 안에 또 다른 Pulldown** — 중첩 메뉴 X (대신 Sub menu 패턴이나 Modal 활용)
- ❌ **icon_chevron_right 제거** — 클릭 가능 표시 유지
- ❌ **트리거에서 멀리 떨어진 위치** — 관련성 명확하게
- ❌ **여러 Pulldown 동시 노출** — 한 번에 하나만

## 📚 참고

- Figma: [Pulldown menu 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Dropdown` (Common) — 폼 필드 선택형
  - `Popover` — 호버 기반 정보 (Pulldown은 클릭 기반)
  - `Action Sheet` (Service) — 모바일 버전 액션 메뉴
  - `Modal` — Destructive 액션 확인용
- 사용 예:
  - 정렬 옵션 (최신순/오래된순/인기순)
  - 테이블 행 더보기 메뉴 (편집/복사/삭제)
  - 카테고리 선택
  - 사용자 권한별 가능 액션 표시 (Disable 활용)