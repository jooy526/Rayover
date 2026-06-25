# Icon Button

> 아이콘만으로 구성된 버튼. **공간을 최소화**하면서 명확한 액션을 제공합니다.

## 📍 환경

- [x] **Common (Admin + Service 공통)**
- [ ] Service
- [ ] Admin

## 🎯 사용 시점

- 툴바/탭바의 액션 버튼
- 검색 닫기(×), 뒤로 가기(←), 메뉴(≡) 등 **보편적 아이콘**으로 의미가 명확한 액션
- 카드/리스트 아이템의 부가 액션 (좋아요 ♥, 북마크 🔖)
- 입력 필드 내 clear(×), show/hide (👁)
- **밀도 높은 영역**에서 공간 절약이 필요할 때

### 사용하지 말아야 할 때
- 아이콘 의미가 불분명할 때 → **Button** + 텍스트 사용
- 떠있는 주요 액션 → **Floating Button**
- 텍스트가 주 내용일 때 → **Text Button** 또는 일반 **Button**

## 🎨 Variants

### Style (4개)

| 이름 | 모양 | 용도 |
|---|---|---|
| `Normal` | 배경 없음 (기본 상태) | 가장 많이 쓰이는 중립 아이콘 버튼 |
| `Solid` | Primary 색 꽉 찬 배경 | 강조 아이콘 액션 |
| `Solid_gray` | Gray 꽉 찬 배경 | 중립적 강조 |
| `Outline` | 테두리만 | 은은한 경계감 필요할 때 |

### Size (4단계)

| Size | 크기 | Icon 크기 | Radius |
|---|---|---|---|
| `Small` | 24 × 24 | 16 × 16 | 14 (거의 full) |
| `Medium` | 32 × 32 | 20 × 20 | 17 (거의 full) |
| `Large` | 40 × 40 | 24 × 24 | 24 (거의 full) |
| `XLarge` | 48 × 48 | 28 × 28 | 24 (거의 full) |

> 💡 **모든 Size의 radius가 컨테이너 절반에 가까워 원형에 가까움**

### Disable / Interaction
- `Disable`: False / True
- `Interaction`: Default / Hover/Focus / Pressed

## 🎯 사용 토큰

### Radius
```
Small  → radius/~7 (14px)
Medium → radius/~ (17px)
Large  → radius/~ (24px)
XLarge → radius/~ (24px)
```
> 사실상 **거의 원형**. 정식으로 완전 원형이 필요하면 `radius/full` 사용.

### Color — Style별

**Normal (배경 없음)**
| 상태 | 배경 | 아이콘 |
|---|---|---|
| Default | 없음 | 자체 색 유지 |
| Hover/Focus | 연한 Gray (`#F7F7F7`) | 자체 색 |
| Pressed | 더 연한 Gray (`#EFEFEF`) | 자체 색 |
| Disabled | 없음 | 흐리게 |

**Solid (Primary)**
| 상태 | 배경 | 아이콘 |
|---|---|---|
| Default | `primary/normal` | `static/white` |
| Hover/Focus | `primary/strong` | `static/white` |
| Pressed | `primary/heavy` | `static/white` |
| Disabled | 연한 Gray | `static/white` |

**Solid_gray**
| 상태 | 배경 |
|---|---|
| Default | 연한 Gray (`#ECECEC`) |
| Hover/Focus | 중간 Gray (`#DFDFDF`) |
| Pressed | 진한 Gray (`#C1C1C1`) |
| Disabled | 가장 연한 Gray (`#EFEFEF`) |

**Outline**
| 상태 | 배경 | 테두리 |
|---|---|---|
| Default | `static/white` | `line/normal` |
| Hover/Focus | 연한 Gray | `line/normal` |
| Pressed | 중간 Gray | `line/normal` |
| Disabled | `static/white` | 연한 Gray |

## 📖 사용 가이드

### Style 선택 기준
- **Normal**: 80% 케이스 (가장 기본). 공간 소모 최소, 화면에 녹아듦
- **Solid**: 주요 강조 액션 (예: 카드 내 저장 버튼)
- **Solid_gray**: 중립적이되 시각적 분리가 필요할 때
- **Outline**: 배경 위에서 경계감 필요할 때

### 아이콘 선택 원칙
- **보편적 의미**의 아이콘만 사용 (직관적이어야 함)
- 최소 3초 안에 의미 파악이 안 되면 → **Button + 텍스트** 사용
- 접근성을 위해 `aria-label` 반드시 지정 (예: `aria-label="뒤로 가기"`)

### Size 선택
- `Small` (24): 인풋 내부, 촘촘한 툴바
- `Medium` (32): 일반 툴바, 리스트 아이템 (기본값)
- `Large` (40): 헤더, 주요 액션
- `XLarge` (48): 프로필 영역, 강조 액션

### 터치 영역 주의 (모바일)
Small(24), Medium(32)은 **실제 터치 영역이 작음**.
→ 주변에 **투명 padding**을 추가해서 최소 44×44 터치 영역 확보 권장.

## 🔄 State 처리

- **Default**: 기본 표시
- **Hover/Focus** (PC): 배경 추가 또는 한 톤 진해짐
- **Pressed**: 더 진한 배경 또는 압축 효과
- **Disabled**: 흐리게 + 인터랙션 차단
- **Active/Selected** (토글 상태): 별도로 Solid/Fill 상태로 전환 가능 (예: 좋아요 눌림)

## 🚫 금지 사항

- ❌ **의미 불분명한 아이콘 사용** — 모르면 Button + Text
- ❌ **aria-label 누락** — 접근성 필수
- ❌ **Small/Medium에 터치 padding 없이 모바일 배치** — 44×44 터치 영역 확보
- ❌ **Destructive 의미로 빨강 배경 임의 적용** — Icon Button에는 Destructive 정식 variant 없음 (위험 액션은 Button이나 Action Sheet로)
- ❌ **텍스트 추가** — Icon Button은 아이콘 only. 텍스트 붙이려면 일반 Button 사용
- ❌ **Size 혼합** — 같은 영역 내에서는 Size 통일

## ⚠️ 알려진 이슈

- **Figma 가이드 원칙/활용 텍스트 비어있음** — 가이드 문서 작성 필요
- **프레임 헤더가 "Floating Button 사용예시"로 잘못 표기** — 실제로는 Icon Button (복붙 흔적)
- **Icon Button에는 Destructive variant 없음** — 필요 시 디자인 팀에 추가 요청

## 📚 참고

- Figma: [Icon Button 페이지 링크]
- Storybook: [링크]
- 연관 컴포넌트:
  - `Button` — 텍스트 + 아이콘 버튼
  - `Floating Button` — 떠있는 액션 (FAB)
  - `Text Button` — 텍스트만
