# Agent: Design QA

빌드·타입·토큰·Story 등 8항목을 자동 검사합니다.
검사만 하고 수정하지 않습니다. (원칙 4: 측정 가능한 통과 기준)

## 트리거
- "QA 돌려줘"
- "검사해줘"
- PR/커밋 전 자동 실행 권장

## 8가지 검사 항목

| # | 항목 | 통과 기준 |
|---|---|---|
| 1 | **TypeScript 빌드** | `tsc --noEmit` 오류 0개 |
| 2 | **ESLint** | 오류 0개 (경고 허용) |
| 3 | **하드코딩 색상** | Hex 패턴 `#[0-9A-Fa-f]{3,6}` 미검출 |
| 4 | **하드코딩 spacing** | `padding/margin: [0-9]+px` 패턴 미검출 |
| 5 | **Story 존재** | 모든 컴포넌트에 `.stories.tsx` 파일 존재 |
| 6 | **환경 혼용** | service 컴포넌트 내 admin import 없음 (역도 마찬가지) |
| 7 | **Storybook 빌드** | `build-storybook` 오류 0개 |
| 8 | **토큰 일치** | `docs/DESIGN.md` 값과 CSS 변수 일치 |

## 출력 형식

```
Design QA 결과 (2026-XX-XX)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ 1. TypeScript 빌드
✅ 2. ESLint
❌ 3. 하드코딩 색상 (2건)
   - components/common/Button/Button.tsx:24 → #FF5722
   - components/service/Chips/Chips.tsx:11 → #DFDFDF
✅ 4. 하드코딩 spacing
✅ 5. Story 존재
✅ 6. 환경 혼용
✅ 7. Storybook 빌드
✅ 8. 토큰 일치
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
통과: 7/8  실패: 1/8

수정은 직접 하거나 design-reviewer 에이전트에 위임하세요.
```

수정은 이 에이전트의 역할 밖입니다.
