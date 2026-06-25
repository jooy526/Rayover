# Chips

> **정보, 선택, 콘텐츠 필터링, 특정 액션 유도**에 사용. 최소 두 가지 옵션이 있는 경우 필터링 목적으로 활용합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

**복수의 옵션 중에서 하나 또는 여러 개를 선택**하거나, **인기 키워드/검색 기록** 등을 시각적으로 나열할 때 사용합니다.

### 이럴 때 사용
- 카테고리 필터 (Idol / Makeup / Skincare 등)
- 인기 키워드 / 추천 태그
- 검색 기록 (삭제 가능)
- 다중 선택 필터
- 정보 태그 (해시태그처럼)

### 사용하지 말아야 할 때
- **단일 선택 (택1) 폼** → **Radio**
- **체크박스 형태의 동의 항목** → **Check**
- **on/off 토글** → **Switch**
- **클릭 가능한 주요 액션** → **Button**

## 🎨 Variants

### 🔑 핵심 분류 — 2개 Component Set

| Set 이름 | 모양 | 주 용도 |
|---|---|---|
| `chips_basic` | **채워진 배경** (Solid) | 인기 키워드, 추천 태그, 강조 표시 |
| `chips_filter` | **외곽선 + 옅은 배경** (Outline) | 다중 선택 필터, 검색 기록 |

---

### chips_basic (Solid 타입)

#### Color (5가지)
| Color | Selected=False | Selected=True |
|---|---|---|
| `Default` | 배경 `#F7F7F7`, 텍스트 `label/strong` | — |
| `White` | 배경 흰색 40% opacity, 텍스트 white | 배경 흰색, 텍스트 `primary/normal` |
| `Primary` | — | 배경 `primary/normal`, 텍스트 white |
| `Assistive` | — | 배경 `#8B8B8B`, 텍스트 white |
| `Black` | — | 배경 `#3D3D3D`, 텍스트 white |

> 💡 **`White`는 어두운 배경/이미지 위에서** 사용 (배경 대비를 위해 투명/흰색 처리)

---

### chips_filter (Outline 타입)

#### Color (3가지)
| Color | Selected=False | Selected=True |
|---|---|---|
| `Default` | 테두리 `line/normal` (`#DFDFDF`), 텍스트 `label/strong` | — |
| `Primary` | — | 테두리 `primary/normal`, 배경 `#FFE3D2`, 텍스트 `primary/normal` |
| `Assistive` | — | 테두리 `#8B8B8B`, 배경 `#F5F4F3`, 텍스트 `label/normal` |

---

### Size (3단계 — 양쪽 Set 공통)

| Size | 높이 | Typography | Icon |
|---|---|---|---|
| `Large` | 36 | 14px Regular | 16 × 16 |
| `Medium` | 30 | 13px Regular | 14 × 14 |
| `Small` | 24 | 12px Regular | 14 × 14 |

### Disable / Interaction
- 명시적인 Disable variant는 없음 (필요 시 `Default` 색상의 opacity 조정으로 처리)
- 인터랙션은 Selected ↔ Unselected 상태 전환

## 🎯 사용 토큰

### 모양
- **Radius**: `18` (모든 Size 공통) — pill 형태에 가까운 둥근 모서리
- **좌우 padding**: 약 12~16px (Size에 따라)

### 구조
```
chips
├── leading icon (선택, 기본 icon_null = 숨김)
├── Label (텍스트)
└── trailing icon (선택, x 또는 다른 아이콘)
```

### Color 토큰 매핑

**chips_basic / Selected=True / Primary**
- 배경: `primary/normal`
- 텍스트: `static/white`

**chips_filter / Selected=True / Primary**
- 테두리: `primary/normal`
- 배경: `#FFE3D2` (연한 Primary 톤)
- 텍스트: `primary/normal`

**Default (Unselected)**
- chips_basic → 배경 `#F7F7F7` + 텍스트 `label/strong`
- chips_filter → 테두리 `line/normal` + 텍스트 `label/strong`

## 📖 사용 가이드

### 어떤 Set을 써야 할까?

```
인기 키워드 / 추천 태그 표시
  → chips_basic (Solid가 시각적으로 강조됨)

다중 선택 필터
  → chips_filter (Outline이 선택/미선택 구분에 좋음)

검색 기록 (삭제 가능)
  → chips_filter + icon_x trailing icon

어두운 배경 위 사용
  → chips_basic의 White color
```

### 배치 원칙 (Figma 가이드 기반)

1. **필터링 데이터 상단에 위치**
2. **왼쪽 → 오른쪽** 나열 (한국 읽기 방향 기본)
3. **양쪽이 잘리도록 배치 금지** — 양 끝이 화면 밖으로 잘리면 안 됨
4. **너비 초과 시 줄바꿈** — Fill 활용해서 다음 줄로 자연스럽게 배치
5. **가로 스와이프 시** — 칩 순서를 변경하거나 결합해서 스와이프 영역을 명확히 인식할 수 있게

```
✅ 좋은 예 (줄바꿈 + 왼쪽 정렬)
[Idol] [Makeup] [Skincare]
[Sunblock] [Lip]

❌ 나쁜 예 (양쪽 잘림)
...al] [Makeup] [Skincare] [Sun...
```

### 다중 선택 (chips_filter 전용)

- **다중 선택 가능** — 여러 칩 동시 Selected 상태 OK
- **⚠️ Select color는 한 화면에 한 유형만 사용** (Figma 원문)
  - Primary와 Assistive를 같은 그룹에서 섞어 쓰지 말 것

```
✅ 좋은 예 (한 그룹은 한 Color)
[●Idol] [○Makeup] [●Skincare] [○Sunblock]  ← 모두 Primary

❌ 나쁜 예 (Color 혼용)
[●Idol(Primary)] [●Makeup(Assistive)] ...   ← 시각적 혼란
```

### 삭제 가능한 칩 (검색 기록 등)

- **trailing icon에 `icon_x` 활용** → 클릭 시 칩 삭제
- **⚠️ icon_x 사용 시 Select 상태는 사용 불가** (Figma 원문)
  - 즉, 삭제 칩은 Selected/Unselected 토글 없이 항상 같은 상태

```
[Idol ✕] [Makeup ✕] [Skincare ✕]   ← Search history 패턴
```

### Size 선택 기준

- `Large` (36): 메인 필터, 강조가 필요한 카테고리
- `Medium` (30): 일반 필터, 중간 밀도 (기본 권장)
- `Small` (24): 촘촘한 UI, 보조 태그

### Color Set 내 사용 빈도

**chips_basic 추천 사용**
- `Default` (60%): 일반 비활성 상태
- `Primary` (Selected) (30%): 선택 강조
- `Black` / `Assistive`: 디자인 톤에 맞게
- `White`: 어두운 배경 위 전용

**chips_filter 추천 사용**
- `Default` (Unselected) + `Primary` (Selected): 가장 일반적인 필터 패턴
- `Default` + `Assistive`: 차분한 톤이 필요할 때

## 🔄 State 처리

- **Default (Unselected)**: 기본 표시
- **Selected**: 색상/배경 변화
- **Hover/Focus** (PC): 한 톤 진해짐
- **Pressed**: 살짝 압축 효과
- **Disabled**: 별도 variant 없음, opacity로 처리
- **Removed (icon_x 클릭)**: 칩 자체가 사라짐

## 🚫 금지 사항

- ❌ **chips_filter에서 한 화면 Color 혼용** — 한 유형(Primary 또는 Assistive)만 선택
- ❌ **icon_x + Select 상태 동시 사용** — 둘 중 하나만
- ❌ **양쪽 잘리도록 배치** — 양끝이 화면 밖으로 나가면 안 됨
- ❌ **단일 선택 용도 사용** — Radio 사용
- ❌ **체크박스 대체** — 동의 항목 등은 Check
- ❌ **임의 색상 추가** — 정의된 Color 중에서만
- ❌ **너비 초과 시 잘라내기** — 줄바꿈 또는 스와이프로 처리
- ❌ **Size 혼용** — 같은 그룹은 Size 통일
- ❌ **버튼 대체 사용** — 주요 액션이면 Button

## 📚 참고

- Figma: [Chips 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Radio` — 단일 선택
  - `Check` — 체크박스 다중 선택
  - `Button` — 주요 액션
  - `Badge` — 단순 라벨링 (선택 불가)
