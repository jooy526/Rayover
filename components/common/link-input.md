# Link Input

> 사용자가 **링크를 입력**할 때 가독성을 높이고, **참여를 유도**하기 위해 사용하는 입력 컴포넌트. 입력된 링크를 자동으로 미리보기(Preview)로 변환합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**사용자가 링크(URL)를 입력**해야 하고, 입력된 링크의 **콘텐츠를 미리 보여줘서** 참여를 유도해야 할 때 사용합니다.

### 이럴 때 사용
- 게시물 작성 시 링크 첨부 (블로그/SNS)
- 라이브 방송 링크 공유
- 외부 콘텐츠 링크 첨부 (커뮤니티, 댓글)
- URL 등록 폼 (프로필 링크 등록 등)

### 사용하지 말아야 할 때
- 일반 텍스트 입력 → **Input** (텍스트)
- 옵션 선택 → **Dropdown**
- 미리보기 불필요한 단순 URL 저장 → **Input** (text/url type)

## 🧩 구조

```
Link Input
├── Label (14px Medium #3D3D3D, "Label")
├── input (상태에 따라 모양 변화)
│   ├── 입력 모드 (44h, radius 22 pill)
│   │   ├── icon_link (좌측, 20×20)
│   │   ├── 텍스트 영역 ("Link" placeholder 또는 입력값)
│   │   └── icon_x_fill (Typing 상태에서만, 우측)
│   └── 미리보기 모드 (80h, radius 12)
│       ├── Thumbnail 또는 Link Icon (80×80)
│       └── content
│           ├── Title (13px Regular)
│           ├── Description (11px Regular #8B8B8B)
│           └── Text/URL (11px Regular #C1C1C1)
└── Helper text (12px Regular)
```

## 🎨 Variants — Link input Component Set (6개)

### State (1축, 6 variants)

| State | 설명 |
|---|---|
| `Default` | 빈 입력 상태 (입력 가능 시작점) |
| `Focus` | 포커스 (테두리 표시) |
| `Typing` | 입력 중 (커서 + 삭제 x 버튼) |
| `Preview+thumbnail` | 링크 분석 완료, **썸네일 있음** |
| `Preview+icon` | 링크 분석 완료, **썸네일 없음** → 링크 아이콘 |
| `Error` | 링크 구조 오류 (잘못된 URL) |

## 🎯 사용 토큰

### State별 input 모양

| State | 배경 | 테두리 | Radius | Height |
|---|---|---|---|---|
| `Default` | `#F7F7F7` | 없음 | **22 (pill)** | 44 |
| `Focus` | `#F7F7F7` | `line/normal` (`#DFDFDF`) | 22 | 44 |
| `Typing` | `#F7F7F7` | `line/normal` (`#DFDFDF`) | 22 | 44 |
| `Preview+thumbnail` | `#FBFBFB` | `#EFEFEF` | **12 (rounded)** | 80 |
| `Preview+icon` | `#FBFBFB` | `#EFEFEF` | 12 | 80 |
| `Error` | `#F7F7F7` | `status/destructive` (`#F94C50`) | 22 | 44 |

> 🔑 **Preview 상태에서 input의 모양이 완전히 변경**됨
> - 일반 입력: 높이 44, **pill 형태** (radius 22)
> - 미리보기: 높이 80, **둥근 사각형** (radius 12)
> - 이는 "입력 중인 단순 텍스트"와 "링크가 인식된 풍부한 컨텐츠"를 시각적으로 구분하기 위함

### Color (텍스트)

| 요소 | Color |
|---|---|
| Label | `label/strong` (`#3D3D3D`) |
| Placeholder "Link" | `label/assistive` (`#C1C1C1`) |
| 입력값 (Typing) | `label/assistive` (`#C1C1C1`) → 실제 사용 시 `label/strong` |
| Helper text (Default) | `label/alternative` (`#8B8B8B`) |
| Helper text (Error) | `status/destructive` (`#F94C50`) |
| Preview Title | `#242424` (label/heavy 근처) |
| Preview Description | `label/alternative` (`#8B8B8B`) |
| Preview Text/URL | `label/assistive` (`#C1C1C1`) |

### Typography

| 요소 | Style |
|---|---|
| Label | 14px Medium |
| 입력 텍스트 / Placeholder | 14px Regular |
| Helper text | 12px Regular |
| Preview Title | 13px Regular |
| Preview Description | 11px Regular |
| Preview Text | 11px Regular |

### Icon

| Icon | 크기 | 위치 |
|---|---|---|
| `icon_link` (입력 모드) | 20 × 20 | input 좌측 |
| `icon_link` (Preview+icon, fallback) | 32 × 32 | image 박스(80×80) 가운데 |
| `icon_x_fill` (Typing) | 24 × 24 | input 우측 |

### Preview 모드 구성

**Preview+thumbnail (썸네일 있을 때)**
```
┌──┬──────────────────────┐
│TH│ Title                 │   TH = Thumbnail 80×80
│  │ Description           │
│  │ URL/Text              │
└──┴──────────────────────┘
```

**Preview+icon (썸네일 없을 때 fallback)**
```
┌──┬──────────────────────┐
│🔗│ Title                 │   회색 박스(#EFEFEF) + icon_link 32×32
│  │ Description           │
│  │ URL/Text              │
└──┴──────────────────────┘
```

## 📖 사용 가이드

### 동작 흐름 (Figma 가이드 원문 기반)

```
1. Default
   └─ 사용자 탭 → Focus

2. Focus
   └─ 사용자 입력 시작 → Typing

3. Typing (커서 + x 버튼 노출)
   ├─ x 버튼 탭 → 입력 내용 삭제, Focus 상태 유지
   └─ 입력 완료 (URL 인식) ↓

4. URL 분석
   ├─ 썸네일 있음 → Preview+thumbnail
   ├─ 썸네일 없음 → Preview+icon
   └─ 구조 오류 (잘못된 URL) → Error
       └─ Preview 상태로 전환되지 않음
```

### State별 사용 가이드

#### Default
- 빈 상태, placeholder "Link" 표시
- icon_link로 "여기에 링크를 넣어주세요" 시각적 단서

#### Focus
- 사용자가 input을 탭한 직후
- 테두리 등장 (`line/normal`) — 입력 가능한 상태임을 알림
- 아직 입력 시작 전

#### Typing
- 사용자가 입력 중인 상태
- **커서 표시 ("|")**
- **icon_x_fill 등장** (입력값 일괄 삭제 가능)
- ⚠️ **x 버튼 클릭 시 → 입력 내용 삭제 + Focus 상태 유지** (Default로 가지 않음)

#### Preview+thumbnail
- URL 분석 성공, 썸네일 있음
- 썸네일 + 메타정보 (Title / Description / URL) 표시
- input 박스 모양이 **둥근 사각형(radius 12, 높이 80)**으로 변경

#### Preview+icon
- URL 분석 성공, 썸네일 없음
- **회색 박스(#EFEFEF) + icon_link 32×32**으로 fallback
- 메타정보는 동일하게 표시

#### Error
- **링크의 구조적 문제** (잘못된 URL 형식 등)
- Preview로 전환되지 않고 Error 상태 유지
- 빨간 테두리 + 빨간 Helper text
- 사용자에게 무엇이 잘못됐는지 명시

### Preview 영역의 메타정보 출처

링크의 Open Graph (OG) 또는 메타 태그를 파싱해서 표시:
- **Title** — `<og:title>` 또는 `<title>`
- **Description** — `<og:description>` 또는 `<meta description>`
- **Thumbnail** — `<og:image>` (있으면)
- **URL** — 입력된 링크의 도메인 또는 전체 URL

### x 버튼 동작 원칙 (Figma 원문)

> "Focus 상태에서 x 버튼을 클릭시 입력중이던 내용이 삭제되고, Focus 상태를 유지합니다."

- ❌ Default로 돌아가지 않음
- ✅ Focus 유지 → 사용자가 바로 다른 링크를 입력할 수 있음
- 사용자 흐름 끊지 않는 좋은 UX 패턴

### Error 처리 원칙

- **잘못된 URL 형식**: "올바른 URL을 입력해주세요"
- **로드 실패 (404 등)**: "링크를 불러올 수 없습니다"
- **금지된 도메인**: "지원하지 않는 링크입니다"
- Helper text로 구체적 안내

## 🔄 State 흐름

```
Default → (탭) → Focus → (입력) → Typing
                              ├─ (x 클릭) → Focus (값 삭제)
                              ├─ (URL 인식 OK) → Preview+thumbnail
                              ├─ (URL 인식 OK, 썸네일 X) → Preview+icon
                              └─ (URL 인식 실패) → Error
                                                 └─ (재입력) → Typing
```

## 🚫 금지 사항

- ❌ **x 버튼 클릭 시 Default로 돌아가기** — Focus 유지가 원칙
- ❌ **Error 상태에서 Preview로 강제 전환** — 잘못된 링크는 Preview 금지
- ❌ **Preview 메타정보 임의 편집 가능하게** — 자동 파싱 결과만 표시
- ❌ **썸네일 없을 때 Preview+icon 대신 빈 영역** — fallback 필수
- ❌ **Helper text 누락 (Error 시)** — Error는 반드시 안내 필요
- ❌ **일반 텍스트 입력에 사용** — 그건 Input 컴포넌트
- ❌ **Preview 상태의 radius/높이 임의 변경** — 입력 모드와 명확히 구분돼야


## 📚 참고

- Figma: [Link Input 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Input` — 일반 텍스트 입력
  - `Thumbnail` — Preview+thumbnail에 사용 (80×80 기준)
  - `Dropdown` — 옵션 선택형 입력
- 사용 예:
  - 게시물/댓글 작성 시 링크 첨부
  - 프로필 외부 링크 등록
  - 라이브/콘텐츠 공유
