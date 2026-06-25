# Action Sheet

> 사용자가 시작해야 하는 **행동에 대한 옵션 목록**을 하단에서 제공하는 모바일 전용 컴포넌트

## 📍 환경

- [ ] Common
- [x] **Service (Mobile 전용)**
- [ ] Admin

## 🎯 사용 시점

**공유, 삭제, 저장, 신고** 등 **사용자 주도 행동**의 선택지를 제시할 때 사용합니다.

### 이럴 때 사용
- 2개 이상의 액션 중 하나를 선택해야 할 때
- 현재 컨텍스트에 대한 액션 메뉴가 필요할 때 (예: 게시글 우측 상단 `⋮` 메뉴)
- 위험한 액션(삭제 등)을 다른 액션과 함께 제시할 때

### 사용하지 말아야 할 때
- 단순 정보 전달 → **Toast** 또는 **Callout** 사용
- 복잡한 입력/설정이 필요할 때 → **Bottom Sheet** 사용
- 확인/취소만 필요할 때 → **Modal** 사용

## 🧩 구조

```
Action Sheet
├── Option 그룹 (radius/4, 흰 배경)
│   ├── Option × N (일반 액션)
│   └── Destructive Option (선택, 위험 액션)
│
├── Close 버튼 (별도 분리)
│
└── iOS Safe Area (자동 적용)
```

## 🎨 Variants

각 Option의 타입:

- **Normal** — 일반 액션 (공유, 저장 등)
- **Destructive** — 위험 액션 (삭제, 신고 등) — `status/destructive` 색상

### Option 내부 구성 (Slots)

- Leading icon (선택)
- Action 텍스트 (필수)
- Trailing icon (선택)

## 🎯 사용 토큰

- **옵션 그룹 배경**: `static/white` 또는 `label/assistive` 계열
- **전체 배경**: 더 옅은 Gray (오버레이 아래)
- **컨테이너 radius**: `radius/4` (12px)
- **내부 버튼 radius**: `radius/1` (4px)
- **옵션 텍스트**:
  - Normal → `label/normal`
  - Destructive → `status/destructive`
- **Close 텍스트**: `label/normal` (SemiBold)
- **Typography**:
  - Option: `Body 1/Normal-medium` (16px)
  - Close: `Body 1/Normal-semibold` (16px)
- **아이콘**: 24 × 24

## 📖 사용 가이드

### 행동 동작
- **버튼을 누르기 전까지 Action Sheet는 닫히지 않음**
- 배경 dim 영역 탭 시 닫힘 (Close 버튼과 동일한 동작)
- Close 버튼 탭 시 닫힘

### 옵션 순서 권장사항
1. 가장 일반적인 액션을 상단에
2. **Destructive 액션은 최하단에 배치**
3. 옵션 개수는 최대 5~6개 권장

### 아이콘 사용
- 모든 옵션에 아이콘을 붙이거나, 전부 텍스트만 쓰거나 **통일**
- 섞어서 일부만 아이콘 달지 말 것

## 🔄 State 처리

- **Default**: 옵션 표시
- **Pressed**: 옵션 탭 시 즉각 시각 피드백
- **Loading**: 액션 처리 중 (필요 시) — 해당 옵션 비활성화
- **Opening/Closing**: 하단에서 슬라이드 업/다운 애니메이션

## 🚫 금지 사항

- ❌ **옵션 7개 이상** — 선택 피로 유발 (많으면 Bottom Sheet + List로 대체)
- ❌ **Destructive 2개 이상** — 위험 액션은 하나만
- ❌ **옵션 텍스트 2줄 이상** — 한 줄로 끝나는 간결한 동사 사용
- ❌ **Close 버튼 생략** — 항상 포함
- ❌ **PC 환경에서 사용** — PC는 Dropdown Menu 또는 Context Menu 사용

## 📚 참고

- Figma: [Action Sheet 페이지 링크 추가]
- Storybook: [링크 추가]
- 연관 컴포넌트:
  - `Bottom Sheet` — 더 복잡한 컨텐츠용
  - `Modal` — 확인/취소 다이얼로그
  - `Toast` — 단순 알림
