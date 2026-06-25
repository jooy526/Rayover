# Check (Checkbox)

> 요소를 선택하는 컨트롤 컴포넌트. **중복 선택이 가능**합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**여러 항목을 동시에 선택**할 수 있어야 할 때 사용합니다.

### 이럴 때 사용
- 리스트에서 여러 아이템 선택 (삭제 대상, 공유 대상)
- 약관 동의 (개별 항목 체크)
- 필터 다중 선택 (카테고리 여러 개)
- 이미지 갤러리에서 여러 장 선택 (순서 표시 포함)
- 설정 중 복수 선택 항목

### 사용하지 말아야 할 때
- **단일 선택만 필요** → **Radio**
- **on/off 상태 제어** → **Switch**

## 🎨 Variants

### Color Set (3가지 — 각각 별도 Component Set)
| Set 이름 | Selected 색 | 주 용도 |
|---|---|---|
| `Check-Primary` | `primary/normal` (Orange) | **주요 선택** (기본) |
| `Check-Alternative` | `status/positive` (Blue `#595BFD`) | 특수 강조 (다른 선택과 구분 필요할 때) |
| `Check-Assistive` | `label/strong` (Black `#171717`) | 중립적 선택 |

### Variants (각 Color Set 내 4축 조합)
- **State**: `Selected` / `Selected(number)` / `Unselected` / `Unselected(hint)`
- **Size**: `Normal` (24) / `Small` (20) / `XSmall` (16)
- **Style**: `Default` / `Outline` / `Bg`
- **Disable**: `False` / `True`

## 🎯 사용 토큰

### 크기
| Size | 크기 | Radius |
|---|---|---|
| Normal | 24 × 24 | `radius/4` (12) |
| Small | 20 × 20 | `radius/~` (12 또는 약 11) |
| XSmall | 16 × 16 | `radius/3` (8~10) |

> 모든 사이즈가 **둥근 사각형** (Radio의 원형과 구분되는 지점)

### Style 3종

- **`Default`**: 테두리 있는 빈 박스 (기본)
- **`Outline`**: 흰 테두리 (어두운 배경/이미지 위에서 사용)
- **`Bg`**: 반투명 검정 배경 (opacity 6%) — 이미지 위 살짝 강조

### Color (Primary 기준 예시)

**Selected**
| 상태 | 배경 | 내부 (체크/숫자) |
|---|---|---|
| Default | `primary/normal` | `static/white` (아이콘 또는 숫자) |
| Disabled | 연한 Primary (`#FFD1B4`) | `static/white` |

**Unselected**
| State | 테두리 |
|---|---|
| Default (일반) | `label/assistive` (`#C1C1C1`) |
| Unselected(hint) | `label/assistive` + 내부 체크 아이콘 연하게 힌트 |
| Disabled | `line/normal` (`#DFDFDF`) |

### State: `Selected(number)` — 순서 번호 표시
- 선택 순서를 표시해야 할 때 사용 (예: 이미지 갤러리 "1, 2, 3" 순)
- Selected 체크 대신 **숫자 표시**
- Typography: Normal→14px Medium / Small→12px Medium / XSmall→12px Medium

## 📖 사용 가이드

### Unselect hint 사용 기준 (Figma 가이드 원문)
- **단일 리스트일 경우** → `Unselected(hint)` 사용 (빈 체크박스 안에 연한 체크 힌트)
- **2개 이상의 리스트** → `Unselect hint` **미사용** (일반 Unselected)

> 💡 리스트 하나일 때는 "여기를 눌러 체크하세요" 힌트가 필요하지만, 여러 개 나열되면 힌트 없이도 체크박스라는 게 명확하기 때문

### Style 선택 기준
- **Default**: 일반 배경 위 (80% 케이스)
- **Outline**: 어두운 배경, 이미지 위 체크 (흰 테두리로 가시성 확보)
- **Bg**: 반투명 이미지 위 (체크박스가 튀지 않도록)

### 숫자 배지 사용 기준
- **선택된 요소의 수가 중요할 경우** (Figma 원문)
- 예: 이미지 여러 장 선택 시 선택 순서를 보여줘야 할 때
- 단순 on/off 체크만 필요하면 일반 `Selected` 사용

### Size 선택 기준
- `Normal` (24): 기본. 리스트, 폼
- `Small` (20): 리스트 내 촘촘한 선택
- `XSmall` (16): 이미지 썸네일 위, 아주 촘촘한 UI

### Color Set 선택 기준
- `Primary`: 기본 (90% 케이스)
- `Alternative`: 다른 Primary와 시각적으로 구분 필요할 때 (예: 필터 vs 선택)
- `Assistive`: 중립적이어야 할 때 (예: 다크 모드 대응)

## 🔄 State 처리

- **Unselected**: 빈 상태
- **Unselected(hint)**: 빈 상태 + 힌트 표시 (단일 리스트 전용)
- **Selected**: 체크 아이콘 표시
- **Selected(number)**: 선택 순서 숫자 표시
- **Hover/Focus** (PC): 테두리 진해짐 또는 배경 틴트
- **Pressed**: 살짝 압축 효과
- **Disabled**: 연한 톤으로 고정

## 🚫 금지 사항

- ❌ **단일 선택 용도 사용** — Radio로 교체
- ❌ **임의 색상 변경** — 3가지 Color Set 중에서만
- ❌ **리스트 하나에 Unselect hint 안 쓰기** — 사용자가 체크박스인지 모를 수 있음
- ❌ **여러 리스트에 Unselect hint 남용** — 시각적 소음
- ❌ **한 그룹에 Size/Style 혼용** — 통일 필수
- ❌ **숫자 배지를 순서와 무관하게 사용** — 혼란 유발

## 📚 참고

- Figma: [Check 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Radio` — 단일 선택
  - `Switch` — on/off 토글
  - `Chip` — 선택 가능한 태그 (Multi-select 대체)
