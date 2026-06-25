# 프로젝트: Rayover Design System

---

## 핵심 원칙 (카파시 4원칙)

1. **Think Before Coding** — 모호하면 먼저 질문. 추측을 사실처럼 말하지 말 것.
2. **Simplicity First** — 기존 컴포넌트/토큰 재사용 필수. 요청하지 않은 추상화 추가 금지.
3. **Surgical Changes** — 요청 범위 밖 리팩토링·포맷 변경·import 정리 금지.
4. **Goal-Driven Execution** — 모든 작업은 측정 가능한 완료 조건으로 끝남.

---

## 토큰 사용 규칙

- **하드코딩 절대 금지**: `#FF5722`, `16px`, `8px` 등 직접 입력 금지
- **CSS 변수 필수**: `var(--color-*)`, `var(--spacing-*)`, `var(--radius-*)`
- **Semantic 우선**: `var(--color-primary-strong)` > Palette 직접 참조
- 토큰 상세 값: `docs/DESIGN.md` 참조

---

## 컴포넌트 구조 (1컴포넌트 = 4파일)

```
components/[env]/[ComponentName]/
├── ComponentName.tsx        # 컴포넌트 구현
├── ComponentName.types.ts   # Props 타입 정의
├── ComponentName.stories.tsx # Storybook Story
└── index.ts                 # export
```

- `[env]`: `common` / `service` / `admin`
- **Service(모바일)**: `/common` + `/service` 폴더만
- **Admin(PC)**: `/common` + `/admin` 폴더만
- **환경 혼용 절대 금지**

---

## Figma 충실도 규칙

### Surgical (원칙 3 연결)
- Figma 원본 텍스트/variant만 사용
- 자의적 텍스트 변경·variant 추가 금지
- 변경된 모든 줄이 요청과 1:1 연결되어야 함

### Simplicity (원칙 2 연결)
- instance swap = prop으로 처리
- 단일 컴포넌트 + props/children 조합 (variant별 파일 분리 금지)
- 컴포넌트 너비: `w-full` + 부모 padding으로 제어

### Storybook
- Figma 컴포넌트 단위로만 Story 작성
- 모든 variant/state 커버 필수
- 컴포넌트 파일 저장 시 Story 없으면 경고 (hook)

---

## 에이전트 위임

| 작업 | 에이전트 |
|---|---|
| Figma URL → 코드 구현 | `.claude/agents/figma-implementer.md` |
| 토큰 불일치 감지·수정 | `.claude/agents/token-checker.md` |
| 빌드/타입/토큰/Story 검사 | `.claude/agents/design-qa.md` |
| 코드 전체 하드코딩 탐지 | `.claude/agents/design-reviewer.md` |

---

## 빌드 명령어

```bash
npm run dev          # 개발 서버
npm run build        # 프로덕션 빌드
npm run storybook    # Storybook 실행
npm run type-check   # TypeScript 검사
npm run lint         # ESLint
```

---

## 참고 문서

- 디자인 토큰·브랜드 가이드: `docs/DESIGN.md`
- 컴포넌트 상세 규칙: `components/[env]/[name]/README.md`
- Figma: https://www.figma.com/design/A64u6OZlUg4HTUWfZ4J0d7/
