# Badge

> 상태, 분류, 정보를 시각적으로 간결하게 표시하는 작은 라벨 컴포넌트

## 📍 환경

- [x] Common (Admin + Service 공통)
- [ ] Service (Mobile 전용)
- [ ] Admin (PC 전용)

## 🎨 Variants

- **size**: `Small` / `Medium` / `Large`
- **type**: `Fill` / `Ghost` / `Outline`
- **color**: `Natural` / `Accent` / `Error` / `Alternative` / `Disable`

> ⚠️ 존재하지 않는 조합 사용 금지

## 🎯 사용 토큰

- **padding**: `inset/*` 참조 (size에 따라)
- **radius**: `radius/1` (4px)
- **typography**: `Label 2/*` 또는 `Caption 1/*`
- **color (bg/text)**: `color semantic` 내에서 type별로 선택

> 실제 값은 Figma Variables 참조

## 📖 사용 가이드

### 언제 어느 조합을 선택할까

**Type 선택**
- **Fill**: 강조가 필요한 상태 표시 (예: "NEW", "HOT")
- **Ghost**: 정보성 태그 (예: 카테고리, 분류)
- **Outline**: 은은한 표시 (예: 비활성 상태)

**Color 선택**
- **Accent**: 브랜드 강조 (페이지당 제한적)
- **Natural**: 중립적 정보
- **Error**: 에러/경고
- **Alternative**: 대안적 정보
- **Disable**: 비활성화

### 구성 요소

- label 텍스트 (필수)
- 아이콘 (선택 — 상세는 Figma 참조)

## 🔄 State 처리

Badge는 **정적 표시** 컴포넌트로 기본적으로 State 변화 없음.
클릭 가능한 Badge가 필요하면 → **Chip** 컴포넌트 사용.

## 🚫 금지 사항

- ❌ 한 화면에 5개 이상 사용 (시각적 노이즈)
- ❌ Accent를 과도하게 사용
- ❌ 긴 텍스트 삽입 (1~2 단어 권장)
- ❌ 인터랙션 필요 시 Badge 대신 Chip 사용

## 📚 참고

- Figma: [Badge 페이지 링크 추가]
- Storybook: [Badge 링크 추가]
