# Item Card

> **제품 및 콘텐츠 정보를 집약적으로 전달**하는 카드 컴포넌트. 사용자에게 **상세페이지로 이동을 유도**합니다.

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

> Thumbnail + 콘텐츠 정보가 핵심 — 모바일 갤러리/리스트가 주 사용처

## 🎯 사용 시점

**제품 또는 사용자 콘텐츠를 그리드/리스트 형태로 노출**하고, **상세페이지로 진입을 유도**해야 할 때 사용합니다.

### 이럴 때 사용
- 상품 갤러리 / 카탈로그 (Service)
- 라이브 방송 / 제품 콘텐츠 그리드
- 유저 작성 콘텐츠 (UGC) 피드
- 검색 결과 리스트
- 카테고리별 콘텐츠 모아보기

### 사용하지 말아야 할 때
- 단순 이미지 표시 (텍스트 정보 없음) → **Thumbnail** 단독
- 프로필 카드 (사용자 정보만) → 별도 User Card
- 단일 콘텐츠 상세 영역 → 상세페이지 레이아웃

## 🧩 핵심 구조

```
Itemcard
├── Thumbnail (필수)
│   └── badge × N (Thumbnail 위에 얹는 자식)
└── Product Info (콘텐츠 정보 영역)
    ├── (Creator=Service만) Product Brand
    ├── Content Title
    ├── (Creator=User만) writer (Avatar + Username)
    └── 강조 영역
        ├── Emphasis=Rating: Rating 박스 강조
        ├── Emphasis=Price: Price 강조
        └── (User) 할인율 + 가격 (10% + $1,000)
```

> 🔑 **Thumbnail은 필수 자식 컴포넌트** — Item Card는 단독으로 존재하지 않음

## 🎨 Variants — Itemcard Component Set (12개)

### 4축 조합

| 축 | 옵션 |
|---|---|
| **Creator** | `User` / `Service` |
| **Emphasis** | `-` (User일 때만) / `Rating` / `Price` |
| **Orientation** | `Portait` (세로형) / `Landscape` (가로형) |
| **Bg** | `False` (배경 없음) / `True` (흰 배경 + radius 8) |

### 12 Variants 매트릭스

| # | Creator | Emphasis | Orientation | Bg |
|---|---|---|---|---|
| 1 | User | - | Portait | False |
| 2 | Service | Rating | Portait | False |
| 3 | Service | Price | Portait | False |
| 4 | User | - | Landscape | False |
| 5 | Service | Rating | Landscape | False |
| 6 | Service | Price | Landscape | False |
| 7 | User | - | Portait | True |
| 8 | Service | Rating | Portait | True |
| 9 | Service | Price | Portait | True |
| 10 | User | - | Landscape | True |
| 11 | Service | Rating | Landscape | True |
| 12 | Service | Price | Landscape | True |

> 💡 **User일 때 Emphasis는 항상 `-`** (사용자 콘텐츠는 Rating/Price 강조 없음)

## 🎯 사용 토큰

### Creator별 구조 차이

#### `Creator=User` (유저 콘텐츠)

```
[Thumbnail 200×200, radius 6]
  └── badge "내일 10:00AM" (Onair Default)

Content Title              ← 14px Medium #3D3D3D
[Avatar 20] Username       ← 12px Medium #3D3D3D
[10% $1,000]               ← 16px Bold (10% #EA1D22, $ #171717)
```

**핵심 요소:**
- Avatar 20 × 20 (radius 10)
- 가격 영역에 **할인율(빨강) + 가격(검정)** 조합 사용 가능

#### `Creator=Service / Emphasis=Rating`

```
[Thumbnail 200×200, radius 6]

Brand                      ← 12px Regular #555555
Content Title              ← 14px Medium #3D3D3D
$ 1,000                    ← 14px Regular #6F6F6F (작게)
[★ 5.0  00]                ← Rating 박스 22h 강조
```

#### `Creator=Service / Emphasis=Price`

```
[Thumbnail 200×200, radius 6]

Brand                      ← 12px Regular #555555
Content Title              ← 14px Medium #3D3D3D
[★ 5.0 00]                 ← Rating 16h 작게 (별점 12px, 카운트 11px)
$ 1,000                    ← 16px Bold #171717 (강조)
```

### Orientation 차이

#### Portait (세로형 갤러리)
- **Thumbnail**: 200 × 200 (정사각형)
- **카드 너비**: 200
- 텍스트 영역: 하단

#### Landscape (가로형 리스트)
- **Thumbnail (User)**: 48 × 48 (작음)
- **Thumbnail (Service)**: 86~88 × 86~88
- **카드 너비**: 300
- 텍스트 영역: 우측

### Bg 차이

| Bg | 카드 배경 | Radius | Padding |
|---|---|---|---|
| `False` | 투명 | 없음 | 카드 자체 padding 없음 |
| `True` | `static/white` | 8 | 8px 내부 여백 |

> 💡 `Bg=True`는 카드 그룹화/구분이 필요할 때 사용 (배경 위에서 떠보이게)

### Color 토큰

| 요소 | Color |
|---|---|
| Brand text | `#555555` (label/alternative와 별개의 회색 — 좀 더 진함) |
| Content Title | `label/strong` (`#3D3D3D`) |
| Username | `label/strong` (`#3D3D3D`) |
| Price (Rating emphasis) | `#6F6F6F` (회색, 14px Regular) |
| Price (Price emphasis / User) | `label/heavy` (`#171717`) Bold |
| 할인율 | `status/destructive` (`#EA1D22`) Bold |
| Rating Score | `label/strong` (`#3D3D3D`) Medium |
| Rating Count | `#6F6F6F` Regular |

### Typography

| 요소 | Style |
|---|---|
| Brand | 12px Regular |
| Content Title | 14px Medium |
| Username | 12px Medium |
| Price (강조) | 16px Bold |
| Price (보조) | 14px Regular |
| 할인율 | 16px Bold |
| Rating Score (강조) | 15px Medium |
| Rating Score (보조) | 12px Medium |
| Rating Count | 12px Regular (강조) / 11px Regular (보조) |

### 기타 토큰
- **Card radius (Bg=True)**: `radius/3` (8)
- **Thumbnail radius**: 6 (Item Card 안에서는 6 고정)
- **Avatar radius (User)**: 10 (full)
- **Rating box radius**: 14

## 📖 사용 가이드

### Figma 가이드 원문 정리

> 1. **유저가 작성한 컨텐츠와 서비스가 제공하는 제품 컨텐츠를 구별**하여 제공
> 2. **제품 내 필수정보를 삭제하지 않고** 사용
> 3. **이미지를 강조할 경우 → 세로형 갤러리** 레이아웃 사용
> 4. **컨텐츠 정보를 강조할 경우 → 가로형 리스트** 레이아웃 사용

### Creator 선택 기준

```
유저가 작성한 콘텐츠?
  └─ Yes → Creator=User
            (writer 영역 표시: Avatar + Username)
  └─ No  → Creator=Service
            (Brand 영역 표시 + Rating/Price 강조 선택)
```

### Emphasis 선택 (Service일 때)

```
사용자에게 어떤 정보를 가장 강조하고 싶은가?

평점/리뷰가 핵심 → Emphasis=Rating
  - Rating 박스 22h 크게 (별점 15px, 카운트 12px)
  - Price는 14px Regular로 작게

가격이 핵심 → Emphasis=Price
  - Price 16px Bold로 크게
  - Rating은 16h 작게 (별점 12px, 카운트 11px)
```

### Orientation 선택

```
이미지가 메인이고, 시각적 임팩트 중요?
  → Portait (세로형 갤러리)
  - 보통 2~3열 그리드
  - Thumbnail 비율 1:1 (200×200)

콘텐츠 정보가 메인이고, 한 줄에 한 항목?
  → Landscape (가로형 리스트)
  - 1열 리스트
  - Thumbnail 작게 (User 48 / Service 88)
```

### Bg 선택

- **`Bg=False`**: 일반적 (카드 사이 구분이 thumbnail/spacing으로 충분)
- **`Bg=True`**: 회색/이미지 배경 위에 카드를 띄워야 할 때, 카드끼리 명확한 구분 필요할 때

### 갤러리 vs 리스트 활용

```
[ Portait Bg=False ]
┌──────┐ ┌──────┐ ┌──────┐
│ Thumb │ │ Thumb │ │ Thumb │
│       │ │       │ │       │
└──────┘ └──────┘ └──────┘
 Title    Title    Title
 Brand    Brand    Brand
 ★ 5.0    ★ 5.0    ★ 5.0

[ Landscape Bg=True ]
┌────────────────────────────┐
│ ┌──┐  Brand                │
│ │  │  Content Title         │
│ │  │  ★ 5.0  00             │
│ └──┘  $ 1,000               │
└────────────────────────────┘
┌────────────────────────────┐
│ ┌──┐  Brand                │
│ ...                        │
└────────────────────────────┘
```

### 필수정보 보존 원칙 (Figma 원문)

- **Service 카드는 Brand + Title + (Rating 또는 Price) 모두 표시**
- **User 카드는 Title + writer 모두 표시**
- 필수정보 중 하나라도 빠지면 → 다른 컴포넌트로 (예: Thumbnail 단독)

### Thumbnail 내부 조합

Item Card 내 Thumbnail은 다음 자식을 자유롭게 켜고 끔:
- `badge` (Onair, Sale, tag 등) — 위치/상태 강조
- `info` (gradient overlay) — Item Card 내에서는 보통 사용 안 함 (Product Info가 외부에 있음)

## 🔄 State 처리

- **Default**: 기본 표시
- **Hover/Focus** (PC): 약한 shadow 또는 thumbnail scale up
- **Pressed**: 살짝 scale down
- **Loading**: skeleton (별도 컴포넌트)
- **Out of stock**: badge로 처리 (Sale=end 활용 가능)

## 🚫 금지 사항

- ❌ **User 카드에 Rating/Price 강조 적용** — Emphasis는 Service 전용
- ❌ **Service 카드에서 Brand 누락** — Service 카드의 필수 정보
- ❌ **User 카드에서 writer 누락** — User 카드의 필수 정보
- ❌ **이미지 강조 케이스에 Landscape 사용** — Portait 갤러리 사용
- ❌ **콘텐츠 정보 강조 케이스에 Portait 사용** — Landscape 리스트 사용
- ❌ **Thumbnail 없이 Item Card 사용** — Thumbnail은 필수
- ❌ **한 화면에 User/Service 시각적 구분 없이 혼용** — 사용자 혼란
- ❌ **Bg=False/True 한 그리드 내 혼용** — 통일 필수
- ❌ **Orientation 혼용** — 한 그리드/리스트는 한 종류로


## 📚 참고

- Figma: [Item Cards 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Thumbnail` — Item Card의 필수 자식
  - `Avatar` — User 카드의 writer 영역
  - `Badge` — Thumbnail 안에 들어가는 상태 표시
  - `Card` (있는 경우) — 더 일반적인 카드 컴포넌트
- 사용 예:
  - 갤러리: 메인 피드, 카테고리 그리드
  - 리스트: 검색 결과, 즐겨찾기, 장바구니 미리보기
