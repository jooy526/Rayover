# Switch

> **활성화 여부**를 제어하는 on/off 토글 컨트롤. 두 가지 옵션 중 **디폴트 옵션이 있을 때** 사용합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**즉시 반영되는 on/off 설정**에 사용합니다.

### 이럴 때 사용
- 알림 설정 (푸시 알림 on/off)
- 개인정보 공개 여부
- 다크 모드 토글
- 자동 저장 on/off
- 기능 활성화 (예: "New messages 알림")

### 사용하지 말아야 할 때
- **단일 선택 (택1)** → **Radio**
- **다중 선택** → **Check**
- **"저장" 버튼을 눌러야 적용되는 설정** → Check 사용 권장 (Switch는 즉시 반영이 기본)

## 🎨 Variants

### Color Set (2가지 — 각각 별도 Component Set)
| Set 이름 | Active=true 색 | 주 용도 |
|---|---|---|
| `switch_Primary` | `primary/normal` (Orange `#FF5722`) | 브랜드 강조 토글 (기본) |
| `switch_Normal` | `label/strong` (Black `#3D3D3D`) | 중립적 토글 (iOS 시스템 설정 느낌) |

### Variants (각 Color Set 내 3축)
- **Size**: `small` / `medium` / `large`
- **Active**: `true` (on) / `false` (off)
- **Disable**: `False` / `True`

→ 각 Set당 `3 × 2 × 2 = 12 variants`

## 🎯 사용 토큰

### 크기 (Track × Thumb)

| Size | Track | Thumb |
|---|---|---|
| `small` | 24 × 16 | 12 |
| `medium` | 32 × 20 | 16 |
| `large` | 36~37 × 22 | 18 |

> **Track radius 100** = 완전 pill shape (타원)
> **Thumb radius 100** = 완전 원형

### Color (switch_Primary 기준)

**Active=true (켜짐)**
| 상태 | Track | Thumb |
|---|---|---|
| Default | `primary/normal` (`#FF5722`) | `static/white` |
| Disabled | 연한 Primary (`#FFD1B4`) | `static/white` |

**Active=false (꺼짐)**
| 상태 | Track | Thumb |
|---|---|---|
| Default | `label/assistive` (`#C1C1C1`) | `static/white` |
| Disabled | 연한 Gray (`#ECECEC`) | 더 연한 Gray (`#F7F7F7`) |

### Color (switch_Normal 기준)

**Active=true (켜짐)**
| 상태 | Track |
|---|---|
| Default | `label/strong` (`#3D3D3D`) |
| Disabled | `line/normal` (`#DFDFDF`) |

**Active=false (꺼짐)**
- Primary와 동일 (회색 계열)

## 📖 사용 가이드

### 배치 원칙 (Figma 가이드 원문)
> **항상 우측에 위치**하며, 기본 구성요소와 색상은 **임의로 변경 불가**

```
┌──────────────────────────┐
│  Notifications      ▢━●  │  ← 우측 고정
│  Award              ▢━●  │
│  New messages       ●━▢  │
└──────────────────────────┘
```

### Color Set 선택 기준
- **Primary**: 브랜드 액션과 연관된 토글 (알림, 추천 기능 등)
- **Normal**: 중립적 시스템 설정 느낌 (iOS 스타일 — 다크모드, 자동저장 등)

### Size 선택 기준
- `small` (24×16): 촘촘한 리스트, 밀도 높은 UI
- `medium` (32×20): 일반 설정 화면 (기본 권장)
- `large` (36×22): 강조가 필요한 주요 토글, 접근성 우선 화면

### 즉시 반영 원칙
- Switch는 **탭하는 순간 즉시 상태 변경 + 서버 반영**이 기본
- 저장 버튼을 누를 필요가 없어야 함
- 반영에 시간이 걸리면 로딩 상태 처리 필요

### 라벨과 조합
- 라벨(설명)은 **좌측**, Switch는 **우측** 고정
- 라벨만으로 on/off 상태가 명확해야 함 (예: "알림" O, "알림을 받으시겠습니까?" X)

## 🔄 State 처리

- **Active=false (off)**: Track 회색, Thumb 좌측
- **Active=true (on)**: Track Primary/Normal 색, Thumb 우측
- **Transition**: 탭 시 Thumb이 부드럽게 좌우 이동 (약 200ms)
- **Hover/Focus** (PC): Track 한 톤 진해짐
- **Pressed**: Thumb 살짝 커지는 효과 (선택적)
- **Disabled**: 연한 톤으로 고정 + 인터랙션 차단
- **Loading (선택)**: 비동기 반영 중이면 Thumb 위에 스피너

## 🚫 금지 사항

- ❌ **좌측 배치** — 항상 우측 고정
- ❌ **색상/구성요소 임의 변경** — Figma 원문 규칙 ("임의로 변경 불가")
- ❌ **"저장 버튼 눌러야 반영"** — Switch는 즉시 반영이 기본
- ❌ **단일 선택 리스트에 사용** — Radio 사용
- ❌ **2개 이상 옵션 중 하나 선택** — Radio나 Dropdown
- ❌ **라벨 없이 Switch만 단독 배치** — 무슨 설정인지 불명확
- ❌ **한 화면에 Size 혼용** — 통일 필수
- ❌ **즉시 반영이 어려운 경우** — Loading/에러 처리 설계 필요

## 📚 참고

- Figma: [Switch 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Radio` — 단일 선택 (택1)
  - `Check` — 다중 선택
  - `Toggle Button` — 버튼 형태 토글 (있는 경우)
