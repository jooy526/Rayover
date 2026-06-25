# Rayover Design System — DESIGN.md

> 브랜드 성격, 토큰 실제 값, 컴포넌트 조합 규칙을 정의합니다.
> AI(Claude)는 이 파일을 통해 "어떻게 보여야 하는가"를 이해합니다.

---

## 브랜드 성격

- **서비스명**: Rayover
- **플랫폼**: Service(모바일 360px) + Admin(PC)
- **톤**: 에너지감 있는 오렌지 브랜드 컬러, 깔끔한 흰 배경, 절제된 그레이 계층
- **폰트**: Pretendard (전용 폰트, 시스템 폰트 대체 금지)
- **분위기**: 정보 밀도 낮음(Service) / 높음(Admin), 터치 친화적 모바일 우선

---

## 컬러 토큰

### Semantic 컬러 — 코드에서 반드시 이 토큰 사용

#### Primary (브랜드)

| 토큰 | 실제 값 | CSS Variable |
|---|---|---|
| `primary/normal` | `#FF7733` | `var(--color-primary-normal)` |
| `primary/strong` | `#FF5722` | `var(--color-primary-strong)` |
| `primary/heavy` | `#DD3F00` | `var(--color-primary-heavy)` |

#### Label (텍스트)

| 토큰 | 실제 값 | CSS Variable |
|---|---|---|
| `label/strong` | `#242424` | `var(--color-label-strong)` |
| `label/normal` | `#3D3D3D` | `var(--color-label-normal)` |
| `label/sub` | `#6F6F6F` | `var(--color-label-sub)` |
| `label/placeholder` | `#C1C1C1` | `var(--color-label-placeholder)` |
| `label/disabled` | `#DFDFDF` | `var(--color-label-disabled)` |

#### Line (구분선/테두리)

| 토큰 | 실제 값 | CSS Variable |
|---|---|---|
| `line/normal` | `#EFEFEF` | `var(--color-line-normal)` |
| `line/strong` | `#DFDFDF` | `var(--color-line-strong)` |

#### Status

| 토큰 | 실제 값 | CSS Variable |
|---|---|---|
| `status/success` | `#00A371` | `var(--color-status-success)` |
| `status/success-light` | `#5AE39E` | `var(--color-status-success-light)` |
| `status/positive` | `#595BFD` | `var(--color-status-positive)` |
| `status/positive-light` | `#BCBDFE` | `var(--color-status-positive-light)` |
| `status/warning` | `#FFA500` | `var(--color-status-warning)` |
| `status/warning-light` | `#FFCE65` | `var(--color-status-warning-light)` |
| `status/destructive` | `#EA1D22` | `var(--color-status-destructive)` |
| `status/destructive-light` | `#FFD1B4` | `var(--color-status-destructive-light)` |

#### Static

| 토큰 | 실제 값 | CSS Variable |
|---|---|---|
| `static/white` | `#FFFFFF` | `var(--color-static-white)` |
| `static/black` | `#000000` | `var(--color-static-black)` |

### Palette (직접 사용 금지 — Semantic에 없는 일회성 케이스만 예외)

**Orange:** `#602600` `#7E2A00` `#A33100` `#C13A00` `#DD3F00` `#FF5722`★ `#FF7733` `#FFAE7C` `#FFD1B4` `#FFE3D2` `#FFF3EB`

**Gray:** `#171717` `#242424` `#333333` `#3D3D3D` `#555555` `#6F6F6F` `#8B8B8B` `#A5A5A5` `#C1C1C1` `#DFDFDF` `#ECECEC` `#EFEFEF` `#F5F4F3` `#F7F7F7` `#FBFBFB`

**Red:** `#6F0004` `#8D0018` `#AE0010` `#CE0012` `#EA1D22` `#F94C50` `#FF7B7E` `#FFC3C4` `#FFEDED` `#FEF8F8`

**Blue:** `#111179` `#1C1D92` `#2C2EB6` `#4142D9` `#595BFD` `#8284FD` `#9B9CFE` `#BCBDFE` `#DEDEFF` `#F1F1FF`

**Green:** `#003743` `#00A371` `#5AE39E`

**Yellow:** `#FFA500` `#FFCE65` `#FFFEDF`

---

## Spacing 토큰

> 4px 기준. 8배수 원칙, 좁은 간격 예외(2, 6, 10).

| 토큰 | 값 | | 토큰 | 값 |
|---|---|---|---|---|
| `spacing/1` | `2px` | | `spacing/10` | `28px` |
| `spacing/2` | `4px` ← 기준 | | `spacing/11` | `32px` |
| `spacing/3` | `6px` | | `spacing/12` | `36px` |
| `spacing/4` | `8px` | | `spacing/13` | `40px` |
| `spacing/5` | `10px` | | `spacing/14` | `44px` |
| `spacing/6` | `12px` | | `spacing/15` | `48px` |
| `spacing/7` | `16px` | | `spacing/16` | `52px` |
| `spacing/8` | `20px` | | `spacing/17` | `56px` |
| `spacing/9` | `24px` | | | |

**Semantic Spacing 용도:**
- `inset/*` — 컴포넌트 내부 padding
- `stack/*` — 세로 방향 gap
- `inline/*` — 가로 방향 gap

---

## Radius 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `radius/xsmall` | `4px` | 태그, 칩, 배지 등 소형 |
| `radius/2` | `6px` | 버튼, 인풋 (소) |
| `radius/3` | `8px` | 버튼, 인풋 ← **기본값** |
| `radius/4` | `12px` | 카드, 모달, 팝업 (소) |
| `radius/5` | `16px` | 카드, 모달, 팝업 |
| `radius/6` | `20px` | 바텀시트, 블락 (소) |
| `radius/7` | `24px` | 바텀시트, 블락 |
| `radius/full` | `50%` | 완전 원형 |

> container 크기에 비례해 큰 번호 선택. 모호하면 `radius/3`.

---

## Typography 토큰

> 폰트: **Pretendard** 전용. fontSize/weight 직접 지정 금지.

### Title (페이지 타이틀)

| 스타일 | 굵기 | 크기 | 행간 | 자간 |
|---|---|---|---|---|
| Title 1 / Bold~Regular | 700/600/500/400 | 36px | 48px | -2% |
| Title 2 / Bold~Regular | 700/600/500/400 | 28px | 38px | -1.5% |
| Title 3 / Bold~Regular | 700/600/500/400 | 24px | 32px | -1.5% |

### Heading (섹션 타이틀)

| 스타일 | 굵기 | 크기 | 행간 | 자간 |
|---|---|---|---|---|
| Heading 1 / Bold~Regular | 700/600/500/400 | 22px | 30px | 0 |
| Heading 2 / Bold~Regular | 700/600/500/400 | 20px | 28px | 0 |
| Heading 3 / Bold~Regular | 700/600/500/400 | 18px | 26px | 0 |

### Body (본문)

| 스타일 | 굵기 | 크기 | 행간 |
|---|---|---|---|
| Body 1 / Normal / Bold~Regular | 700~400 | 16px | 24px |
| Body 1 / Reading / Bold~Regular | 700~400 | 16px | 26px |
| Body 2 / Normal / Bold~Regular | 700~400 | 15px | 22px |
| Body 2 / Reading / Bold~Regular | 700~400 | 15px | 24px |

### Label / Caption

| 스타일 | 크기 | 행간 |
|---|---|---|
| Label 1 / Bold~Regular | 14px | 20px |
| Label 2 / Bold~Regular | 13px | 18px |
| Caption 1 / Bold~Regular | 12px | 16px |
| Caption 2 / Bold~Regular | 11px | 14px |

---

## Shadow 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `shadow/normal` | `0 0 20px rgba(0,0,0,0.04)` | 카드, 기본 컴포넌트 |
| `shadow/emphasize` | `0 0 30px rgba(0,0,0,0.08)` | 모달, 팝업, 팝오버 |

---

## 환경 구분

| 구분 | 플랫폼 | 기준 해상도 | 컴포넌트 위치 |
|---|---|---|---|
| **Service** | Mobile | 360px | `/components/service/*` |
| **Admin** | PC | — | `/components/admin/*` |
| **Common** | 양쪽 공용 | — | `/components/common/*` |

키워드: "앱/모바일/유저" → Service / "관리자/어드민/PC" → Admin / 명시 없으면 **되묻기**

---

## 컴포넌트 조합 규칙

- Solid Primary는 **한 화면에 1개**
- 가로 정렬 시 중요 행동 **항상 우측**
- 모든 컴포넌트 `w-full` + 부모 padding으로 너비 제어
- Storybook은 Figma 컴포넌트 단위로만

### State 처리 필수
`Default` → `Hover/Focus` → `Pressed` → `Disabled` (+ `Loading` / `Empty` / `Error`)

---

## 금지 사항

| 금지 | 대신 |
|---|---|
| Hex 직접 입력 (`#FF5722`) | `var(--color-primary-strong)` |
| 임의 숫자 (`padding: 17px`) | `var(--spacing-*)` |
| `box-shadow` 직접 지정 | `shadow/*` 토큰 |
| `font-size` 직접 지정 | Text Style 이름 참조 |
| Admin ↔ Service 컴포넌트 혼용 | 환경별 폴더에서 선택 |
| 유사 컴포넌트 신규 생성 | 기존 재사용 |
| 반응형 미디어쿼리 | 고정 그리드 사용 |

---

## Figma 레이어 네이밍 컨벤션

- 컴포넌트: `ComponentName/Variant/State` (예: `Button/Solid-Primary/Default`)
- 프레임: `kebab-case` (예: `home-feed`, `product-detail`)
- 그룹: 의미 있는 명사 (예: `Header`, `Content`, `Footer`)
- 아이콘: `icon/[name]` (예: `icon/search`, `icon/close`)
