# Snackbar

> 사용자 액션에 대한 **일시적인 피드백**을 제공하는 액션 가능한 알림 컴포넌트. **컨테이너 전체가 링크 역할**을 하거나 동작을 제공합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**사용자 액션 결과 + 후속 액션 유도**가 필요할 때 사용합니다. Toast가 단순 알림이라면, Snackbar는 **다음 행동을 제안하는** 알림입니다.

### 이럴 때 사용
- 액션 결과 + 이동 ("토리샵으로 이동" + chevron)
- 알림 + 액션 버튼 ("새 메시지" + "Action" 버튼)
- 사용자/이미지 정보가 동반된 알림 (Avatar/Image 포함)
- 부드러운 가이드 (팝업보다 약한 강조)

### 사용하지 말아야 할 때
- 단순 상태 알림 ("저장 완료") → **Toast**
- 사용자 결정 강제 → **Modal**
- 페이지 인라인 정보 → **Callout**
- 호버 기반 부가 정보 → **Tooltip / Popover**

### Snackbar vs Toast vs Modal

| | **Snackbar** | **Toast** | **Modal** |
|---|---|---|---|
| 콘텐츠 | **Title + Description** (2줄) | 단일 텍스트 | 자유 (제목+본문+버튼) |
| 액션 | **컨테이너 클릭 또는 Action 버튼** | 없음 | 명시적 버튼 필수 |
| 좌측 영역 | **Icon / Avatar / Image** | 상태 아이콘만 | 자유 |
| 자동 사라짐 | **3초** | **3초** | 사라지지 않음 |
| 강도 | 중간 (액션 유도) | 약함 (단순 알림) | 강함 (필수 결정) |

## 🧩 구조

```
Snackbar (328 × 62, radius 12, 회색 86%)
├── content (좌측 + 가운데)
│   ├── 좌측 요소 (Style별로 다름)
│   │   ├── Icon (흰 원형 + 아이콘) 
│   │   ├── Avatar (32×32, radius 16)
│   │   ├── Image (36×36, radius 3.6 - 거의 사각)
│   │   └── Image+radius (36×36, radius 18 - 완전 원)
│   │   *(Style=Text는 좌측 요소 없음 - Title만)*
│   └── Content
│       ├── Title (14px Medium, white)
│       └── Description (13px Regular, #DFDFDF)
└── 우측 영역 (Button별로 다름)
    ├── icon_chevron_right (Button=Icon)
    └── Action 텍스트 버튼 (Button=Text)
```

## 🎨 Variants — 1개 Component Set, **8 variants**

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **Button** (우측 영역) | `Icon` (chevron_right) / `Text` (Action 버튼) |
| **Style** (좌측 영역) | `Text` (없음) / `Icon` / `Avata` / `Image` / `Image+radius` |

> 💡 **`Button=Text, Style=Text`는 없음** — Action 버튼 있으면 좌측 요소도 있어야 (의도된 누락)

### 8 Variants 상세

#### Button=Icon 시리즈 (5개) — chevron 화살표
| Variant | 좌측 | 우측 | 사용 |
|---|---|---|---|
| `Button=Icon, Style=Text` | (없음) | chevron | 텍스트 중심 알림 + 이동 |
| `Button=Icon, Style=Icon` | 흰 원형 + icon_info2 | chevron | 정보 알림 + 이동 |
| `Button=Icon, Style=Avata` | Avatar (radius 16) | chevron | 사용자 알림 + 이동 |
| `Button=Icon, Style=Image` | Image (radius 3.6, 사각) | chevron | 콘텐츠/상품 + 이동 |
| `Button=Icon, Style=Image+radius` | Image (radius 18, 원형) | chevron | 프로필/브랜드 + 이동 |

#### Button=Text 시리즈 (4개) — Action 버튼
| Variant | 좌측 | 우측 | 사용 |
|---|---|---|---|
| `Button=Text, Style=Icon` | 흰 원형 + icon_info2 | Action | 정보 + 명시적 액션 |
| `Button=Text, Style=Avata` | Avatar | Action | 사용자 + 명시적 액션 |
| `Button=Text, Style=Image` | Image (사각) | Action | 콘텐츠 + 명시적 액션 |
| `Button=Text, Style=Image+radius` | Image (원형) | Action | 프로필 + 명시적 액션 |

> 🔑 **chevron(Button=Icon) vs Action(Button=Text) 차이**
> - chevron → **컨테이너 전체 클릭 시 이동** (페이지 전환 의미)
> - Action → **버튼만 클릭 시 액션 실행** (Action 외에는 자동 닫힘)

## 🎯 사용 토큰

### Snackbar 본체
- **너비**: 328 (Mobile 360 - 좌우 마진 16×2)
- **높이**: **62** (모든 Variant 통일)
- **Radius**: `radius/4` (12)
- **배경**: `#6F6F6F` opacity **86%** (Toast와 동일)

### Typography
| 요소 | Style | 색 |
|---|---|---|
| Title | 14px Medium | `static/white` |
| Description | **13px Regular** (모든 Variant 통일) | `#DFDFDF` (약간 옅은 white) |
| Action | 13px Medium | `static/white` |

### 좌측 요소 사이즈

| Style | 크기 | Radius | 배경 |
|---|---|---|---|
| `Text` | (없음) | — | — |
| `Icon` | 36×36 (안쪽 28×28 원) | 15.27 (캡슐) | white (안쪽 원) |
| `Avata` | 36×36 (안쪽 32×32) | 16 (Avatar) | `#ECECEC` |
| `Image` | 36×36 | **3.6** (거의 사각) | `#ECECEC` (이미지) |
| `Image+radius` | 36×36 | **18** (완전 원) | `#ECECEC` (이미지) |

### 우측 요소
| Button | 요소 | 크기 |
|---|---|---|
| `Icon` | icon_chevron_right | 24 × 24 (white) |
| `Text` | Action 버튼 | 51 × 24 (radius 4) |

### 간격
- 좌측 요소 ↔ Content: 6px
- Content ↔ 우측: 자동 (flex)
- 본체 좌우 padding: 16px

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 사용자 액션에 대한 **일시적인 피드백**을 제공
>
> **활용:**
> - **3초 뒤 자동으로 사라집니다.**
> - **컨테이너 전체가 링크 역할을 하거나, 동작을 제공합니다.**
> - **팝업에 비해 주의가 덜 필요한 피드백**으로 사용
>
> **Description (배치):** 간격에 유의하세요. 하단 16px 간격, 탭바와 플로팅 버튼이 있을 때는 16px 간격을 두고 사이에 배치. 디바이스 양쪽 마진 제외 크기 사용.

### Style 선택 가이드

```
좌측에 어떤 요소가 어울리는가?

텍스트 중심 (단순 알림)            → Style=Text (좌측 비움)
                                     예: "새 알림이 있습니다"

정보/안내 강조                    → Style=Icon
                                     예: "업로드 완료" + info 아이콘

사용자 관련 (특정 유저 액션)       → Style=Avata
                                     예: "John이 댓글을 남겼습니다"

상품/콘텐츠 관련                  → Style=Image (radius 3.6)
                                     예: 상품 카드, 책 표지 등 사각형 이미지

프로필/브랜드 (원형 강조)         → Style=Image+radius (radius 18)
                                     예: 토리샵, 브랜드 로고
```

### Button 선택 가이드

```
사용자가 어떻게 반응하길 원하는가?

전체 컨테이너 = 페이지 이동       → Button=Icon (chevron)
                                     예: "토리샵으로 이동" → 클릭 시 토리샵 페이지

명시적 액션 (수락/거절/실행)      → Button=Text (Action)
                                     예: "친구 요청 → [수락]"
                                     예: "Undo" 같은 즉시 실행
```

### Snackbar의 인터랙션 영역

#### Button=Icon 패턴
```
┌──────────────────────────────────┐
│                                  │
│  🟠  Title                    >   │ ← 전체 컨테이너 클릭 가능
│      Description                 │
│                                  │
└──────────────────────────────────┘
   ↑
   클릭 → 이동 / 페이지 전환
```

#### Button=Text 패턴
```
┌──────────────────────────────────┐
│                                  │
│  🟠  Title              [Action] │ ← Action만 클릭
│      Description                 │
│                                  │
└──────────────────────────────────┘
                              ↑
                              클릭 → 액션 실행
   (컨테이너는 클릭 X, 자동 dismiss만)
```

### 위치 가이드 (Toast와 동일)

```
[화면 콘텐츠]
                                ← 16px 간격
┌────────── Snackbar ──────────┐
│  🟠 Title              >      │
│     Description               │
└──────────────────────────────┘
                                ← 16px 간격
┌────────── Tab Bar ───────────┐
│  Today  Lounge  Circles ...  │
└──────────────────────────────┘
[iOS Safe Area]
```

| 화면 구성 | Snackbar 위치 |
|---|---|
| Tab bar만 있음 | Tab bar **위 16px 간격** |
| Tab bar + Floating Button | Floating Button **위 16px 간격** |
| 다른 컴포넌트 없음 | 화면 **하단 16px 간격** |

### 사용예시 패턴 (Figma)

```
사용예시 (Style=Image+radius, Button=Icon):
┌──────────────────────────────────┐
│                                  │
│  🟠  토리샵으로 이동           >  │
│      판매자 토리샵에서 구매할    │
│      수 있습니다.                 │
│                                  │
└──────────────────────────────────┘
   ↑ 클릭하면 → 토리샵 페이지로 이동
```

이 패턴은 **상품 게시물에서 판매자 페이지 이동을 자연스럽게 유도**할 때 자주 사용됩니다.

### 텍스트 작성 가이드

| 요소 | 가이드 | 예시 |
|---|---|---|
| **Title** | 핵심 결과/상태를 한 줄로 | "토리샵으로 이동", "친구 요청", "댓글 작성됨" |
| **Description** | Title 보충 설명 | "판매자 토리샵에서 구매할 수 있습니다", "수락하시겠어요?" |
| **Action** | 짧은 동사 (1~2단어) | "Undo", "수락", "보기", "이동" |

> 💡 Title은 명사형 권장, Description은 자연스러운 문장

### 동시 노출 처리

- **여러 Snackbar 동시 노출 X** — 새 Snackbar 등장 시 기존 즉시 교체
- 또는 큐(queue)로 순차 처리

### 등장/사라짐 애니메이션 권장

```
등장: 하단에서 슬라이드 + 페이드 인 (250ms)
유지: 3초 (또는 사용자 인터랙션까지)
사라짐: 페이드 아웃 (200ms)
```

> 💡 사용자가 Action 버튼이나 컨테이너를 클릭하면 즉시 사라짐

## 🔄 State 처리

### 흐름도

```
[사용자 액션]
   ↓
Snackbar 등장 (하단에서 슬라이드)
   ↓
   ├ 3초 경과 → 자동 사라짐
   ├ 사용자 클릭 (Button=Icon) → 페이지 이동 + 사라짐
   ├ Action 클릭 (Button=Text) → 액션 실행 + 사라짐
   └ 새 Snackbar 등장 → 즉시 교체
```

### 인터랙션 우선순위

1. **Action 버튼** (Button=Text)
2. **컨테이너 전체** (Button=Icon)
3. **자동 dismiss** (3초)

## 🚫 금지 사항

- ❌ **컨테이너 클릭 액션 정의 없이 Button=Icon 사용** — chevron이 의미 없어짐
- ❌ **3초 이상 노출** — 정의된 시간 준수
- ❌ **여러 Snackbar 동시 표시** — 한 번에 하나만
- ❌ **Title 누락** — Description만 있으면 의미 약함
- ❌ **Action 버튼 텍스트 너무 길게** — 1~2단어 권장
- ❌ **Style=Avata에 사용자와 무관한 이미지** — Avatar는 사용자 전용
- ❌ **Style=Image와 Avata 혼동** — Image는 36×36, Avata도 36×36이지만 안쪽 32×32
- ❌ **Image vs Image+radius 같은 화면 혼용** — 일관성 깨짐
- ❌ **너비 임의 변경** — 328 고정
- ❌ **하단 16px 간격 무시** — Tab bar/Floating Button과 겹치지 않게
- ❌ **빨간 배경 (Error 강조)** — 그건 Toast의 Error variant 역할

## 📚 참고

- Figma: [Snackbar 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Toast` — 단순 상태 알림 (액션 없음)
  - `Modal` — 사용자 결정이 필수인 강한 알림
  - `Avatar` — Style=Avata에 사용
  - `Thumbnail` — Style=Image/Image+radius에 활용 가능
  - `Tab Bar` (Service) — Snackbar 노출 시 위에 16px 간격
- 사용 예:
  - 상품 게시물에서 "판매자 페이지로 이동" 유도 (Image+radius + chevron)
  - 친구 요청 알림 + 수락/거절 (Avata + Action)
  - 정보 안내 + 자세히 보기 (Icon + chevron)
  - 댓글 작성 후 Undo (Icon + Action="Undo")