# [컴포넌트 이름]

> 컴포넌트의 한 줄 설명 (예: 상태나 분류를 시각적으로 표시)

## 📍 환경

- [ ] Common (Admin + Service 공통)
- [ ] Service (Mobile 전용)
- [ ] Admin (PC 전용)

## 🎨 Variants

사용 가능한 variant 조합:

- **size**: `Small` / `Medium` / `Large`
- **type**: `Fill` / `Outline` / `Ghost`
- **color**: `Natural` / `Accent` / `Error` / `Disabled`

> ⚠️ 존재하지 않는 조합 사용 금지

## 🎯 사용 토큰

이 컴포넌트가 사용하는 토큰:

- **padding**: `inset/*` 참조
- **radius**: `radius/*` 참조
- **typography**: `Text Style 이름` 참조
- **color (bg)**: `color semantic` 참조
- **color (text)**: `color semantic` 참조

> 실제 값은 Figma Variables / Text Style 참조

## 📖 사용 가이드

### 언제 어느 variant를 선택할까

- **Fill + Accent**: 주요 강조, 페이지당 1~2개
- **Outline + Default**: 일반적인 경우
- **Ghost + Default**: 약한 강조, 부가 액션

### 구성 요소 (Slots)

- leading icon (선택)
- label (필수)
- trailing icon (선택)

## 🔄 State 처리

- **Default**: 기본 상태
- **Hover/Focus**: [설명]
- **Pressed**: [설명]
- **Disabled**: [설명]
- **Loading**: [필요한 경우]

## 🚫 금지 사항

- ❌ 한 화면에 Primary 2개 이상
- ❌ 임의 크기/색상 변형
- ❌ 다른 컴포넌트와 결합 변형

## 📚 참고

- Figma: [컴포넌트 링크]
- Storybook: [컴포넌트 링크]
