# Container

> 정보를 **체계적으로 표기**해 사용자가 정보를 쉽게 이해할 수 있도록 돕는 **콘텐츠 그룹화 컨테이너**. CMS Admin의 정보 섹션 구성에 사용됩니다.

## 📍 환경

- [ ] Common
- [ ] Service
- [x] **Admin (PC, CMS)**

## ⚠️ 컴포넌트 형태

> **Container 자체는 Figma Component Set으로 정의되지 않은 패턴 컴포넌트입니다.**
>
> Header만 Component Set으로 정형화되어 있고, Content 영역은 **콘텐츠에 맞춰 자유롭게 구성**합니다. 어떤 콘텐츠가 들어갈지 미리 알 수 없기 때문에 (form, list, table, text 등), 강제로 Component화하지 않고 **"Header 컴포넌트 + 자유 Content"** 패턴을 따릅니다.

## 🎯 사용 시점

CMS의 **정보 섹션 단위**로 콘텐츠를 그룹화할 때 사용합니다. 한 화면에 여러 정보 블록이 있을 때 각각을 시각적으로 분리하면서, 일관된 Header 구조로 사용성을 보장합니다.

### 이럴 때 사용
- 데이터 상세 페이지의 정보 그룹 (기본정보 / 권한 / 활동내역 등)
- 폼 페이지의 섹션 분리
- 설정 페이지의 카테고리 묶음
- 대시보드의 위젯 단위 콘텐츠

### 사용하지 말아야 할 때
- 단순 카드 1개만 → 일반 카드/박스 (Container는 섹션 그룹 단위)
- 모바일 환경 → Service의 `Card`/`Item Card` 사용
- 표 형식 데이터 → Table 컴포넌트
- 모달/시트 콘텐츠 → Modal/Bottom Sheet 자체 구조 사용

## 🧩 구조

```
Container (radius 12, white)
├── header (Component Set, 56h)
│   ├── 배경 #FBFBFB
│   ├── bottom stroke #ECECEC (옵션, 아코디언 접힘 시 제거)
│   ├── (선택) Icon (22×22, 좌측)
│   ├── Title (16px Medium)
│   ├── description (13px Regular, 옵션)
│   ├── (선택) Badge (좌측 또는 우측, 컨테이너 속성)
│   └── 우측 영역 (Variant별)
│       ├── Style=None → 없음 (또는 Badge)
│       ├── Style=Action button → Text 버튼 1~2개
│       └── Style=Acodian → Toggle (+ Badge)
└── content (자유 영역)
    └── 콘텐츠 자유롭게 배치 (form, list, text 등)
```

> 🔑 **Container = Header (정형) + Content (자유)** 조합 패턴
> - Header는 반드시 Component 사용 (일관성)
> - Content는 자유롭게 (유연성)

## 🎨 Variants — Header Component Set, **3 variants**

> ⚠️ **Container 자체는 Component Set이 아님** — 패턴 컴포넌트 (Header만 정형)

### Header Component Set의 3 variants

| Variant | 우측 영역 | 사용 케이스 |
|---|---|---|
| **`Style=None`** | (없음, 또는 Badge만) | 일반 정보 표시 — 편집 불가 |
| **`Style=Action button`** | **Text 버튼 1~2개** (Destructive + Normal) | 컨테이너 자체 편집 가능 |
| **`Style=Acodian`** *(Accordion 오타)* | **Toggle** + (선택) Badge | 접기/펴기 가능한 콘텐츠 |

### Style별 우측 요소 상세

#### `Style=None`
- Title만 (또는 Badge만 좌측)
- **타이틀 외 옵션 없는 경우 중앙정렬** 권장 (Figma 가이드)

#### `Style=Action button`
- `Button_Text_Destructive` (빨강 `#F94C50`) — 삭제, 취소 등
- `Button_Text_Normal` (회색 `#3D3D3D`) — 편집, 저장 등
- 보통 2개 함께 사용 (Destructive + Normal)

#### `Style=Acodian` (Accordion 오타)
- `Toggle` 아이콘 (펴짐/접힘)
- 선택적으로 Badge 함께 표시
- **접혔을 때 bottom stroke 제거**

## 🎯 사용 토큰

### Container 본체
- **Radius**: `radius/4` (12)
- **배경**: `static/white`
- **너비**: 콘텐츠에 맞춰 가변 (360 ~ 948+ 다양)

### Header
- **높이**: 56
- **배경**: `#FBFBFB` (옅은 회색)
- **Bottom stroke**: `line/normal` (`#ECECEC`), 1px
  - **아코디언 접힘 시 제거**
- **Padding (좌우)**: 16

### Title 영역
| 요소 | Style | 색 |
|---|---|---|
| Title | 16px Medium | `label/heavy` (`#171717`) |
| description | 13px Regular | `label/alternative` (`#6F6F6F`) |
| Icon (선택) | 22 × 22 | 컨텐츠에 맞게 |

### Badge
- **배경**: `#FFE3D2` (Primary 옅은톤)
- **Text 색**: `#FF7733` (Primary)
- **Radius**: 4
- **너비**: 가변 (텍스트에 맞춰)
- **높이**: 20
- **Text 사이즈**: 11px Medium
- **위치**: 좌측 (None) 또는 우측 (Acodian)

### Action 버튼 (Style=Action button)
- **Button_Text_Destructive**: text `#F94C50`
- **Button_Text_Normal**: text `#3D3D3D`
- **너비**: 51, **높이**: 24
- **간격**: 4px (둘 사이)

### Toggle (Style=Acodian)
- **사이즈**: 24 × 24
- chevron_down (펴짐) / chevron_up (접힘)

### Content 영역
- **자유 padding** (콘텐츠에 따라)
- 일반적으로 좌우 16~24px
- **최소 높이 52** (placeholder Content가 들어갈 수 있는 공간)

## 📖 사용 가이드

### Figma 가이드 원문 정리 (8가지 핵심 원칙)

> **원칙:** 정보를 체계적으로 표기해 사용자가 정보를 쉽게 이해할 수 있도록 돕습니다.
>
> **활용:** Header 컴포넌트의 일관성을 유지하면서, 콘텐츠 영역을 유연하게 사용할 수 있습니다.
>
> 1. **"Header 영역은 반드시 컴포넌트를 사용합니다."**
> 2. **"타이틀 외 옵션을 제공하지 않는경우 중앙정렬을 사용합니다."**
> 3. **"여러 블럭이 한 섹션안에 존재할때, 콘텐츠의 내용이 길어져 한눈에 파악하기 어렵다면 아코디언기능을 사용합니다."**
> 4. **"bottom stroke는 아코디언을 접었을때 제공하지않습니다."**
> 5. **"컨테이너 자체를 편집할 수 있는경우 텍스트버튼을 제공합니다."**
> 6. **"컨테이너의 속성을 설명하기위해 뱃지를 사용해 키워드를 제공합니다."**
> 7. **"아이콘을 사용해 컨테이너의 정보이해를 도울수 있습니다."**
> 8. **"Description을 추가해 자세한 설명을 제공할 수 있습니다."**

### Style 선택 가이드

```
컨테이너의 역할이 무엇인가?

단순 정보 표시 (편집 불가)        → Style=None
                                     예: 사용자 정보 (이름, 이메일 등 읽기 전용)
                                     - 타이틀 외 옵션 없으면 중앙정렬

콘텐츠가 길고 자주 안 봄          → Style=Acodian
                                     예: 활동 로그, 부가 설정 등
                                     - 접을 수 있어 화면 절약
                                     - 접었을 때 bottom stroke 제거

전체 컨테이너 자체 편집 가능       → Style=Action button
                                     예: "수정" 버튼이 있는 정보 섹션
                                     - Destructive: 삭제/취소
                                     - Normal: 편집/저장
```

### Container 패턴 사용예시

#### 패턴 1: 기본 정보 표시 (Style=None)
```
┌──────────────────────────────────┐
│  [Badge]                         │ ← Style=None, 좌측 Badge
│         Title  Description       │ ← Title 중앙
│                                  │
├──────────────────────────────────┤ ← bottom stroke
│                                  │
│           Content                │ ← 자유 콘텐츠
│                                  │
└──────────────────────────────────┘
```

#### 패턴 2: 액션 버튼 (Style=Action button)
```
┌──────────────────────────────────┐
│  Title  Description    [삭제][편집]│ ← 우측 Text 버튼
├──────────────────────────────────┤
│                                  │
│           Content                │
│                                  │
└──────────────────────────────────┘
```

#### 패턴 3: 아코디언 (Style=Acodian)
```
펴진 상태:
┌──────────────────────────────────┐
│  Title  Description       ⌄ [Badge]│ ← Toggle + Badge
├──────────────────────────────────┤ ← bottom stroke
│           Content                │
└──────────────────────────────────┘

접힌 상태:
┌──────────────────────────────────┐
│  Title  Description       › [Badge]│ ← bottom stroke 제거
└──────────────────────────────────┘
```

#### 패턴 4: 풍부한 Header
```
┌──────────────────────────────────┐
│  📦 Title  Description    [Text Badge]│ ← Icon + Description + 우측 Badge
├──────────────────────────────────┤
│           Content                │
└──────────────────────────────────┘
```

### Header 영역 가이드

> **"Header 영역은 반드시 컴포넌트를 사용합니다."**

- ✅ Header Component Set의 3 variants만 사용
- ❌ 직접 그려서 Title/Description 배치 X
- ❌ Header 높이 임의 변경 (56 고정) X

### 정렬 규칙

```
Style=None + 우측 옵션 없음
  → 중앙 정렬 (Title이 가운데)

Style=None + Badge (좌측)
  → 좌측 정렬

Style=Action button
  → 좌측 정렬 (Title 좌측, 버튼 우측)

Style=Acodian
  → 좌측 정렬 (Title 좌측, Toggle 우측)
```

### Badge 활용 가이드

> **"컨테이너의 속성을 설명하기위해 뱃지를 사용해 키워드를 제공합니다."**

| 컨테이너 속성 | Badge 텍스트 예시 |
|---|---|
| 필수 정보 | "필수" |
| 새로 추가됨 | "NEW" |
| 베타 기능 | "BETA" |
| 권한 정보 | "관리자" |
| 카운트 | "3" |

### Description 활용

> **"Description을 추가해 자세한 설명을 제공할 수 있습니다."**

- Title 보충 설명
- 13px Regular `#6F6F6F`
- 한 줄 권장 (길어지면 별도 안내 문구로)

### Icon 활용

> **"아이콘을 사용해 컨테이너의 정보이해를 도울수 있습니다."**

- 좌측 22×22
- 컨테이너 카테고리 시각화 (예: 사람 아이콘 = 사용자 정보)
- 모든 Container에 일관된 사이즈 적용

### 아코디언 사용 가이드

> **"여러 블럭이 한 섹션안에 존재할때, 콘텐츠의 내용이 길어져 한눈에 파악하기 어렵다면 아코디언기능을 사용합니다."**

```
한 화면에 Container 6개 이상
   ↓
모두 펴져있으면 화면 너무 길어짐
   ↓
중요도 낮은 컨테이너부터 Style=Acodian으로 변경
   ↓
사용자가 필요시 펴서 확인
```

> 💡 **첫 진입 시 모두 접혀있게** 또는 **자주 보는 것만 펴져있게** 선택

### bottom stroke 규칙 (중요!)

> **"bottom stroke는 아코디언을 접었을때 제공하지않습니다."**

```
펴진 상태:
[Header]
─────────  ← stroke 있음
[Content]

접힌 상태:
[Header]   ← stroke 없음 (Header만 보이므로 깔끔)
```

## 🔄 State 처리

### Style=Acodian 상태 흐름

```
[펴진 상태]
   ↓ Toggle 클릭
[접힌 상태] (bottom stroke 제거, content 영역 사라짐)
   ↓ Toggle 클릭
[펴진 상태]
```

### 애니메이션 권장

- **펼침**: 200~300ms ease-out (height 자연 증가)
- **접힘**: 200~300ms ease-in
- **Toggle 회전**: chevron_down ↔ chevron_up

### Style=Action button 인터랙션

- **Destructive 클릭**: 확인 Modal 노출 권장 (삭제 등 위험)
- **Normal 클릭**: 즉시 액션 또는 편집 모드 진입

## 🚫 금지 사항

- ❌ **Header를 직접 그리기** — 반드시 Component Set 사용
- ❌ **3가지 Style 한 화면 무분별 혼용** — 같은 섹션은 같은 Style 권장
- ❌ **아코디언 접힌 상태에 bottom stroke 표시** — 정의된 동작 위반
- ❌ **Title 외 옵션 없는데 좌측 정렬** — 중앙정렬 권장
- ❌ **Action button 3개 이상** — 1~2개만
- ❌ **Header 높이 56 외 사용** — 일관성 깨짐
- ❌ **다른 radius (12 외)** — Container radius 12 고정
- ❌ **Header 배경 색 변경** — `#FBFBFB` 고정
- ❌ **Container 안에 Container 중첩** — 정보 구조 복잡해짐
- ❌ **Description 두 줄 이상** — 한 줄 권장 (길면 content 영역으로)

## 📚 참고

- Figma: [Container 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `header` (Component Set) — 이 페이지의 핵심 자식 컴포넌트
  - `Button` — Action 버튼 (Destructive/Normal)
  - `Badge` — 컨테이너 속성 표시
  - `Modal` — Destructive 액션 확인용
  - `CMS Chips` — Container 안 필터로 활용 가능
- 사용 예:
  - 사용자 상세 페이지: 기본정보(None) / 권한(Action button) / 활동로그(Acodian)
  - 콘텐츠 관리: 메타데이터(Action button) / 본문(None) / 통계(Acodian)
  - 설정 페이지: 일반(None) / 알림(Acodian) / 보안(Action button)
