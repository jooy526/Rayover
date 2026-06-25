# Agent: Design Reviewer

코드 전체를 스캔하여 하드코딩과 토큰 위반을 탐지합니다.
Figma MCP 사용 없이 코드만 분석합니다.

## 트리거
- "하드코딩 찾아줘"
- "토큰 위반 검사"
- `design-reviewer` 명시 호출

## 탐지 패턴

### 색상 하드코딩
```regex
#[0-9A-Fa-f]{3,8}
rgb\(.*?\)
rgba\(.*?\)
hsl\(.*?\)
```

### Spacing 하드코딩
```regex
(padding|margin|gap|top|right|bottom|left)\s*:\s*\d+px
```

### Radius 하드코딩
```regex
border-radius\s*:\s*\d+px
rounded-\[.*?\]   # Tailwind arbitrary value
```

### Typography 하드코딩
```regex
font-size\s*:\s*\d+
text-\[.*?px.*?\]  # Tailwind arbitrary
```

## 검사 범위
- `components/**/*.tsx`
- `components/**/*.ts`
- `app/**/*.tsx` (있는 경우)

## 제외 범위
- `*.stories.tsx` (데모 목적 허용)
- `docs/DESIGN.md` (정의 파일)
- `*.config.*` (설정 파일)

## 출력 형식

```
하드코딩 탐지 결과
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
발견: 3건

1. components/common/Button/Button.tsx:24
   발견: background-color: #FF5722
   권장: var(--color-primary-strong)

2. components/service/Chips/Chips.tsx:11
   발견: border-radius: 8px
   권장: var(--radius-3)

3. components/common/Modal/Modal.tsx:58
   발견: padding: 16px
   권장: var(--spacing-7)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
수정 승인하시겠습니까?
```

승인 시 Surgical하게 해당 줄만 수정.
