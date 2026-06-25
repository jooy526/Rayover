# Toast

> **오류, 완료, 로딩 진행 메시지 등 상태 알림**을 제공하기 위해 사용하는 일시적 피드백 컴포넌트.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**작업 결과나 시스템 상태**를 사용자에게 가볍게 전달할 때 사용합니다. **3초 후 자동으로 사라지며**, 사용자 액션으로 종료할 수 없습니다.

### 이럴 때 사용
- 완료 알림 ("저장 완료", "삭제 완료")
- 가벼운 경고 ("네트워크 연결이 불안정합니다")
- 에러 메시지 ("로그인 실패")
- 진행 상태 알림 ("업로드 중...")
- 사용자 액션의 결과 피드백

### 사용하지 말아야 할 때
- 사용자 결정/확인이 필요한 메시지 → **Modal**
- 인라인 폼 검증 메시지 → **Helper text** (Text Field)
- 페이지 영역 안내 → **Callout**
- 트리거 옆 정보 → **Tooltip / Popover**
- 영구적인 알림 → **Badge** + 알림센터

### Toast vs Modal vs Callout

| | **Toast** | **Modal** | **Callout** |
|---|---|---|---|
| 지속시간 | **3초 자동 사라짐** | 사용자가 닫을 때까지 | 영구 (페이지 내) |
| 사용자 액션 | 닫기 불가 | 필수 | 가능 |
| 위치 | 화면 하단 floating | 화면 중앙 (오버레이) | 페이지 인라인 |
| 강도 | 약함 | 강함 | 중간 |

## 🧩 구조

```
Toast (radius 12, 328×56)
├── (선택) icon (22×22, radius 12)
│   └── 상태 아이콘 (18×18)
└── Text (15px Medium, white)
```

## 🎨 Variants — 1 Component Set, 4 variants

**2축 조합:**

| 축 | 옵션 |
|---|---|
| **State** | `Default` / `Complete` / `Wrong` / `Error` |
| **Icon** | `False` (텍스트만) / `True` (아이콘 포함) |

### 4 variants

| Variant | 배경 | Icon 배경 | Icon 종류 | 사용 |
|---|---|---|---|---|
| `Default, Icon=False` | `#6F6F6F` 86% | — | — | 일반 정보 알림 |
| `Complete, Icon=True` | `#6F6F6F` 86% | `#31C78B` (초록) | `icon_check1` | 작업 완료 |
| `Wrong, Icon=True` | `#6F6F6F` 86% | `#FFC240` (노랑) | `icon_info2` | 가벼운 경고 |
| `Error, Icon=True` | `#EA1D22` 70% (빨강) | `#FFFFFF` | `icon_error_fill` | 심각한 오류 |

> 🔑 **Error만 배경색이 빨강** — 시각적으로 즉시 구분되도록 강한 강조

> 💡 **Default만 Icon=False** — 다른 상태는 모두 아이콘 필수 (의미 강화)

## 🎯 사용 토큰

### Toast 본체
- **너비**: 328 (디바이스 너비 - 좌우 마진 16×2)
- **높이**: 56
- **Radius**: `radius/4` (12)
- **내부 padding**: 좌우 16, 상하 16

### 배경 (state별)
| State | 배경 색 | Opacity |
|---|---|---|
| Default / Complete / Wrong | `#6F6F6F` | **86%** (반투명) |
| Error | `status/destructive` (`#EA1D22`) | **70%** |

> 💡 반투명 배경으로 **뒤 콘텐츠가 살짝 비춰** 부유감 있게 표현

### Icon (22×22 컨테이너)
- **Container Radius**: 12 (캡슐)
- **Icon size**: 18×18 (안에 들어가는 실제 아이콘)
- **간격 (Icon ↔ Text)**: 16

| State | Icon 배경 | Icon 색 | Icon 종류 |
|---|---|---|---|
| Complete | `status/positive` (`#31C78B`) | white | `icon_check1` |
| Wrong | `status/cautionary` (`#FFC240`) | white | `icon_info2` |
| Error | white | `status/destructive` (`#EA1D22`) | `icon_error_fill` |

### Text
- **Style**: 15px Medium
- **색**: `static/white`
- **정렬**: Left

## 📖 사용 가이드

### Figma 가이드 원문 정리

> **원칙:** 오류, 완료, 로딩 진행 메시지 등 **상태 알림**을 제공하기 위해 사용
>
> **활용:** **3초 뒤 자동으로 사라집니다. 사용자 액션으로 종료할 수 없습니다.**
>
> **간격에 유의하세요:**
> - 하단 16px의 간격을 두고 배치
> - 탭바와 플로팅 버튼이 있을 때는, 16px 간격을 두고 사이에 배치
> - 디바이스 크기의 양쪽 마진을 제외한 크기로 사용

### State 선택 가이드

```
어떤 종류의 상태를 알릴 것인가?

일반 정보 ("저장 중", "전송 중")    → Default
완료/성공 ("저장 완료", "삭제 완료")   → Complete (초록 ✓)
가벼운 경고 ("네트워크 불안정")        → Wrong (노랑 !)
심각한 오류 ("로그인 실패", "삭제 실패") → Error (빨강)
```

### 위치 가이드 (중요!)

> **"하단 16px 간격"이 핵심**

```
[화면 콘텐츠]
                                ← 16px 간격
┌──────────── Toast ────────────┐
│  ✓  Delete Completed.         │
└───────────────────────────────┘
                                ← 16px 간격
┌──────────── Tab Bar ──────────┐
│  Today  Lounge  Circles ...   │
└───────────────────────────────┘
[iOS Safe Area]
```

#### 위치 케이스

| 화면 구성 | Toast 위치 |
|---|---|
| Tab bar만 있음 | Tab bar **위 16px 간격** |
| Tab bar + Floating Button | Floating Button **위 16px 간격** |
| Tab bar 없음 | 화면 **하단 16px 간격** |
| Modal/Bottom Sheet 위 | Modal **위에 별도 노출** (오버레이) |

### 너비 가이드

- **고정 너비 328** (Mobile 360 - 좌우 마진 16×2)
- 화면 너비에 따라 자동 조정 X — Mobile 기준 고정값
- 너무 긴 텍스트는 한 줄로 처리, 잘리면 말줄임표

### 텍스트 작성 가이드

| 좋은 예 | 나쁜 예 |
|---|---|
| "Delete Completed." | "삭제가 정상적으로 완료되었습니다." (너무 길음) |
| "Network unstable" | "Error 502" (사용자에게 의미 X) |
| "Saved" | "저장 버튼을 클릭하셨습니다" (불필요) |

- **간결하게** 한 문장
- **결과 중심**으로 작성
- 사용자가 읽기 전에 사라질 수 있음을 고려
- 행동 유도 X (Toast는 닫을 수 없음)

### 동시 노출 처리

- **여러 Toast 동시 노출 X** — 새 Toast 등장 시 기존 Toast 즉시 사라짐
- 또는 큐(queue)로 순차 처리

### 등장/사라짐 애니메이션 권장

```
등장: 하단에서 슬라이드 + 페이드 인 (200ms)
유지: 3초
사라짐: 페이드 아웃 (200ms)
```

## 🔄 State 처리

- **Hidden**: 평소 표시 안 됨
- **Showing**: 사용자 액션 트리거로 등장
- **Auto-dismiss**: 3초 후 자동 사라짐
- **Replace**: 새 Toast 등장 시 기존 즉시 교체

### State별 트리거 예시

| State | 트리거 예시 |
|---|---|
| `Default` | "Loading...", "Sending..." |
| `Complete` | 저장/삭제/전송 성공 |
| `Wrong` | 네트워크 약함, 일시적 문제 |
| `Error` | API 실패, 권한 에러, 인증 실패 |

## 🚫 금지 사항

- ❌ **닫기 버튼 추가** — Toast는 사용자 액션으로 종료 불가 (정의된 동작)
- ❌ **3초 이상 노출** — 정의된 시간 준수
- ❌ **여러 Toast 동시 표시** — 한 번에 하나만
- ❌ **사용자 결정 요청** — Modal로 처리
- ❌ **링크/버튼 포함** — 클릭 불가, Toast는 정보 전달만
- ❌ **너무 긴 텍스트** — 한 줄 한 문장 권장
- ❌ **하단 16px 간격 무시** — Tab bar/Floating Button과 겹치지 않게
- ❌ **너비 임의 변경** — 328 고정 (디바이스 양쪽 16 마진)
- ❌ **상태와 다른 색 사용** — Complete=초록, Wrong=노랑, Error=빨강 고정
- ❌ **중요한 알림에 사용** — 사용자가 놓칠 수 있음 → Modal 권장

## 📚 참고

- Figma: [Toast 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Modal` — 사용자 결정이 필요한 강한 알림
  - `Callout` — 페이지 인라인 정보
  - `Tooltip` / `Popover` — 트리거 기반 부가 정보
  - `Badge` — 영구적인 알림 표시
- 사용 예:
  - 게시물 저장 완료 → Toast (Complete)
  - 네트워크 불안정 → Toast (Wrong)
  - 로그인 실패 → Toast (Error)
  - 데이터 동기화 중 → Toast (Default)
