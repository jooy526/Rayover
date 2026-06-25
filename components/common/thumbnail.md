# Thumbnail

> **콘텐츠의 대표 이미지**로서 콘텐츠 내용을 추론할 수 있게 도와주는 역할. 화면 탐색 시 콘텐츠에 대한 빠른 이해와 색인을 도와줍니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**콘텐츠를 시각적으로 대표**하고, 사용자가 콘텐츠 내용을 빠르게 파악할 수 있게 해야 할 때 사용합니다.

### 이럴 때 사용
- 아이템 카드의 메인 이미지 (피드, 콘텐츠 리스트)
- 라이브/방송 콘텐츠 표시 (방영 시간 + 상태 뱃지)
- 사용자 콘텐츠 (UGC) 미리보기 (작성자 + 제목 + 좋아요/댓글)
- 광고/상품 썸네일 (할인 정보 + 태그)
- 투표 옵션 (A, B, C 형태)

### 사용하지 말아야 할 때
- 단순 프로필 이미지 → **Avatar**
- 일반 콘텐츠 카드 (이미지 없음) → **Card**
- 단독 라벨 표시 → **Badge**

## 🧩 핵심 구조 (3-Layer Stack)

Thumbnail은 **3개의 독립된 Component Set**이 조합되어 동작합니다.

```
Thumbnail (메인 컴포넌트, 비율 + 스타일 + radius 결정)
└── 위에 자유롭게 얹는 자식 인스턴스:
    ├── badge (상단/하단/구석에 정보 표시)
    ├── info (작성자, 콘텐츠 정보 — bottom 고정)
    └── (Content title 텍스트 — 자유 위치)
```

> 💡 **하위 인스턴스를 자유롭게 변경/조합** 가능 — 카드 컴포넌트 안에서 필요한 요소만 켜고 끔

## 🎨 Variants — 3개 Component Set

---

### 1️⃣ Thumbnail (메인 — 42 variants)

**3축 조합:**
- **Ratio (7가지)**: `1:1` / `5:4` / `4:5` / `3:4` / `4:3` / `3:2` / `2:3`
- **Style (2가지)**: `Image` / `Icon`
- **Radius (3가지)**: `0` / `6` / `12`

→ 총 `7 × 2 × 3 = 42 variants`

#### Ratio 가이드

| Ratio | 가로:세로 | 예시 사용 |
|---|---|---|
| `1:1` | 정사각형 | 피드 카드, 정형화된 그리드 |
| `5:4` | 약간 가로형 | 콘텐츠 리스트 |
| `4:5` | 약간 세로형 | 모바일 카드 |
| `3:4` | 세로형 | 인물 사진, 포스터 |
| `4:3` | 가로형 (전통) | 사진 썸네일 |
| `3:2` | 가로형 (와이드) | 풍경 사진, 배너 |
| `2:3` | 좁은 세로형 | 책 표지, 영화 포스터 |

> 🔑 **고정된 비율로 사용 + 사이즈는 자유롭게 조절** 가능 (비율 유지)

#### Style 차이

| Style | 모양 | 사용 |
|---|---|---|
| **`Image`** | 실제 이미지 (`IMAGE` fill) + 하단 그라디언트 오버레이 | 콘텐츠가 있을 때 (정상 상태) |
| **`Icon`** | 회색 배경 (`#EFEFEF`) + 가운데 카메라 아이콘 | 이미지가 없거나 로딩 실패 (placeholder) |

#### Radius 가이드

| Radius | 분위기 | 사용 |
|---|---|---|
| `0` | 직각 | 빽빽한 그리드, 모던/정형 |
| `6` | 약간 둥글게 | 카드 내부 (가장 무난) |
| `12` | 부드럽게 | 강조 콘텐츠, 큰 썸네일 |

---

### 2️⃣ Badge (Child Item — 30 variants)

**4축 조합:**
- **Style (6가지)**: `Onair` / `tag` / `Counting` / `Poll option` / `Sale` / `Button`
- **State (4가지)**: `Default` / `upcoming` / `Live` / `end`
- **margin (3가지)**: `12px` / `8px` / `4px`

#### Style별 색상 & 용도

| Style | State | 배경 | 텍스트 색 | 용도 |
|---|---|---|---|---|
| `Onair` | Default | 검정 10% opacity (반투명) | white | 예정된 방송 ("내일 10:00AM") |
| `Onair` | upcoming | 빨강 (`#EA1D22`) | white | 곧 시작 ("0h 00m 남음") |
| `Onair` | Live | 빨강 + ▶ play icon | white | 라이브 중 ("Live") |
| `tag` | upcoming | 흰색, radius 4 | `label/strong` (`#3D3D3D`) | 일반 태그 |
| `Counting` | Default | 검정 반투명 | white | 페이지/카운트 ("1/4") |
| `Poll option` | Default | `primary/normal` (`#FF5722`) | white | 투표 옵션 ("A", "B", "C") |
| `Sale` | Default | 어두운 회색 (`#3D3D3D`) | white | 할인 정보 ("190일 남음") |
| `Sale` | upcoming | 빨강 (`#EA1D22`) | white | 마감 임박 ("오늘 마감!") |
| `Sale` | end | 회색 (`#8B8B8B`) | 흐린 white (`#F7F7F7`) | 종료 상태 ("종료") |
| `Button` | Default | 검정 반투명 | white | 인터랙티브 버튼 (좋아요, 공유 등) |

#### Margin (Thumbnail 가장자리에서 떨어진 거리)

| margin | 사용 |
|---|---|
| `12px` | Thumbnail 큼 (Large 카드) |
| `8px` | Thumbnail 중간 (Medium 카드) |
| `4px` | Thumbnail 작음 (Small 카드, 그리드) |

> 💡 **Thumbnail 사이즈에 맞춰 margin 선택** — 큰 썸네일에는 12px, 작은 썸네일에는 4px

---

### 3️⃣ Info (Child Item — 6 variants)

**3축 조합:**
- **Bg**: `True` (그라디언트 오버레이 있음) / `false` (오버레이 없음)
- **Style**: `User content` / `Title`
- **Font size**: `Default` / `heading 1` / `heading 3`

#### Style별 구성

**`User content`** (3행 구성)
```
[Avatar] Username  ·  1m ago    ← 13px Medium (Username) + 11px Regular (시간)
Content Title                    ← 15px Medium
[♡ 0] [💬 0]                     ← 좋아요/댓글 카운트
```

**`Title` heading 1** — Content Title 한 줄 (22px SemiBold)

**`Title` heading 3** — Content Title 한 줄 (18px SemiBold)

#### Bg 차이

| Bg | 효과 | 사용 |
|---|---|---|
| `True` | 하단에 **검정→투명 그라디언트** 오버레이 | 이미지 위에 텍스트 가독성 확보 필요할 때 |
| `false` | 오버레이 없음 | 이미지가 단색이거나 텍스트 영역이 비어있을 때 |

> 💡 텍스트 색은 **Bg=True일 때도 흰색** — 그라디언트로 가독성을 보완

## 🎯 사용 토큰

### Thumbnail 메인
- **Radius**: 0 / 6 / 12 (Variant)
- **배경 (Style=Icon)**: `#EFEFEF`
- **placeholder icon**: `icon_camera_fill`, white

### Info 그라디언트 (Bg=True)
- 하단에서 위로 검정→투명 그라디언트 (보통 60~70% 위치까지)
- 텍스트는 흰색 (`static/white`)

### 좋아요/댓글 카운트 박스 (User content)
- 배경: 흰색 20% opacity (반투명 칩)
- radius: 15 (pill 형태)
- 텍스트: 흰색 13px Medium

### Badge radius
- Onair Default: 15 (반투명 pill)
- Onair upcoming/Live: 12~15
- tag: 4 (작고 각진)
- Sale: 12

### Typography (Info)
| Style / Font size | 텍스트 | 사이즈 |
|---|---|---|
| User content - Username | Bold 13 | 13px Medium |
| User content - 시간 | 11 Regular | 11px Regular |
| User content - Title | 15 | 15px Medium |
| Title - heading 1 | Title | 22px SemiBold |
| Title - heading 3 | Title | 18px SemiBold |

### Badge Typography
- 12px Medium (Onair, Counting, Sale)
- 11px Medium (tag)

## 📖 사용 가이드

### Figma 가이드 원문 정리

> 1. **고정된 비율**로 사용
> 2. **사이즈는 자유롭게 조절** (비율 유지)
> 3. 하위 인스턴스 변경 가능
> 4. **뱃지, 카운트 뱃지, 태그, 콘텐츠 정보 등을 조합**해서 사용
> 5. **가로 또는 세로 사이즈를 입력해서 비율 변형 없이 사용**
> 6. **Content title의 텍스트 스타일 변경** 가능

### 조합 패턴 예시

#### 패턴 1: 라이브 방송 카드
```
Thumbnail (1:1, Image, radius 12)
├── badge (Onair=Live, margin 12)              ← 좌상단
├── badge (Counting "1/4", margin 12)          ← 우상단 (페이지)
└── info (Title=heading 1, Bg=True)            ← 하단
```

#### 패턴 2: 사용자 콘텐츠 (UGC)
```
Thumbnail (4:5, Image, radius 6)
├── badge (Sale, "오늘 마감!", margin 8)       ← 좌상단
└── info (User content, Bg=True)               ← 하단
   ├── Avatar + Username + 시간
   ├── Content Title
   └── 좋아요/댓글 카운트
```

#### 패턴 3: 투표 카드
```
Thumbnail (1:1, Image, radius 12)
├── badge (Poll option "A", margin 8)          ← 좌상단
└── info (Title=heading 3, Bg=True)            ← 하단
```

### ⚠️ 가장 중요한 원칙

> **tag 뱃지와 Content info는 같이 사용할 수 없습니다.** (Figma 원문)

- tag 뱃지를 쓸 때 → info 컴포넌트 끄기
- info 컴포넌트를 쓸 때 → tag 뱃지 빼기
- 둘 다 텍스트가 많아서 시각적으로 충돌

### 사이즈 가이드

- **고정된 비율**을 유지해야 하므로 가로 또는 세로 한쪽만 입력
- 비율 자동 계산되어 다른 한 쪽이 결정됨
- 예: 1:1 → 200×200, 300×300 등 (정사각형 유지)

### Content title 텍스트 스타일 변경

- info의 `Font size` variant로 변경 (heading 1 / heading 3)
- 더 세밀한 조정이 필요하면 인스턴스 내부에서 직접 변경 가능

### 겹침 방지 (Figma 원문)

> "하위 컨텐츠들이 겹치지 사이즈 및 콘텐츠들을 적절히 사용합니다."

- 작은 썸네일에 너무 많은 badge/info 올리지 말 것
- 일반적으로 **Thumbnail 1개당 badge 2~3개 + info 1개** 권장
- 사이즈가 작으면 (예: 100×100 이하) badge 1개 + Content title 정도만

## 🔄 State 처리

### Style별 상태
- **Image (정상)**: 실제 이미지 표시
- **Icon (placeholder)**: 이미지 로딩 실패/없음
- **Loading**: skeleton (별도 컴포넌트로 처리 권장)

### Badge State 흐름 (Sale 예시)
```
Default ("190일 남음") → upcoming ("오늘 마감!") → end ("종료")
```

### Onair State 흐름
```
Default ("내일 10:00AM") → upcoming ("0h 00m 남음") → Live ("Live")
```

## 🚫 금지 사항

- ❌ **tag 뱃지 + Content info 동시 사용** — Figma 원문 명시 금지
- ❌ **고정 비율 무시하고 임의 비율 사용** — Variant ratio 중에서만 선택
- ❌ **하위 콘텐츠끼리 겹치기** — 사이즈와 조합 적절히
- ❌ **작은 썸네일에 badge 4개 이상** — 시각적 과부하
- ❌ **Image 스타일에 placeholder 색** 임의 적용 — Icon 스타일 사용
- ❌ **margin 임의 조정** — 12/8/4 중에서만 선택
- ❌ **그라디언트 오버레이 임의 제거** (Bg=True에서) — 텍스트 가독성 깨짐
- ❌ **모든 Style의 badge를 한 화면에서 혼용** — 시각적 혼란


## 📚 참고

- Figma: [Thumbnail 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Avatar` — Info의 User content 안에 사용
  - `Badge` — Thumbnail badge와는 별개의 일반 뱃지
  - `Card` — Thumbnail을 내장 요소로 자주 사용
- 활용 시점:
  - 피드 / 그리드 / 리스트
  - 라이브 방송 / 콘텐츠 카드
  - 상품 / 광고 / 투표
