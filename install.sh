#!/bin/bash
# install.sh — Rayover Design System Harness 설치 스크립트

set -e

BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🎨 Rayover Design System Harness 설치 시작${NC}\n"

# 1. 현재 디렉토리 확인
if [ ! -f "package.json" ]; then
  echo -e "${YELLOW}⚠️  package.json이 없습니다. 프로젝트 루트에서 실행하세요.${NC}"
  exit 1
fi

# 2. 디렉토리 생성
echo "📁 디렉토리 생성 중..."
mkdir -p .claude/agents
mkdir -p .claude/hooks
mkdir -p docs
mkdir -p components/common
mkdir -p components/service
mkdir -p components/admin

# 3. 파일 복사
echo "📄 파일 복사 중..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cp "$SCRIPT_DIR/CLAUDE.md" ./CLAUDE.md
cp "$SCRIPT_DIR/.claude/CLAUDE.md" ./.claude/CLAUDE.md
cp "$SCRIPT_DIR/.claude/agents/"*.md ./.claude/agents/
cp "$SCRIPT_DIR/.claude/hooks/"*.mjs ./.claude/hooks/
cp "$SCRIPT_DIR/.claude/settings.json" ./.claude/settings.json
cp "$SCRIPT_DIR/docs/DESIGN.md" ./docs/DESIGN.md

# 4. hooks 실행 권한
chmod +x .claude/hooks/*.mjs

# 5. Tailwind v4 CSS 변수 파일 생성 (없는 경우)
if [ ! -f "src/styles/tokens.css" ] && [ ! -f "app/styles/tokens.css" ]; then
  echo "🎨 토큰 CSS 변수 파일 생성 중..."
  mkdir -p src/styles 2>/dev/null || mkdir -p app/styles
  TARGET_DIR="src/styles"
  [ -d "app" ] && TARGET_DIR="app/styles"

  cat > "$TARGET_DIR/tokens.css" << 'CSSEOF'
/* Rayover Design Tokens — 자동 생성, 직접 수정하지 마세요 */
/* 원본: docs/DESIGN.md */

@theme {
  /* Primary */
  --color-primary-normal: #FF7733;
  --color-primary-strong: #FF5722;
  --color-primary-heavy: #DD3F00;

  /* Label */
  --color-label-strong: #242424;
  --color-label-normal: #3D3D3D;
  --color-label-sub: #6F6F6F;
  --color-label-placeholder: #C1C1C1;
  --color-label-disabled: #DFDFDF;

  /* Line */
  --color-line-normal: #EFEFEF;
  --color-line-strong: #DFDFDF;

  /* Status */
  --color-status-success: #00A371;
  --color-status-success-light: #5AE39E;
  --color-status-positive: #595BFD;
  --color-status-positive-light: #BCBDFE;
  --color-status-warning: #FFA500;
  --color-status-warning-light: #FFCE65;
  --color-status-destructive: #EA1D22;
  --color-status-destructive-light: #FFD1B4;

  /* Static */
  --color-static-white: #FFFFFF;
  --color-static-black: #000000;

  /* Spacing */
  --spacing-1: 2px;
  --spacing-2: 4px;
  --spacing-3: 6px;
  --spacing-4: 8px;
  --spacing-5: 10px;
  --spacing-6: 12px;
  --spacing-7: 16px;
  --spacing-8: 20px;
  --spacing-9: 24px;
  --spacing-10: 28px;
  --spacing-11: 32px;
  --spacing-12: 36px;
  --spacing-13: 40px;
  --spacing-14: 44px;
  --spacing-15: 48px;
  --spacing-16: 52px;
  --spacing-17: 56px;

  /* Radius */
  --radius-xsmall: 4px;
  --radius-2: 6px;
  --radius-3: 8px;
  --radius-4: 12px;
  --radius-5: 16px;
  --radius-6: 20px;
  --radius-7: 24px;
  --radius-full: 50%;

  /* Shadow */
  --shadow-normal: 0 0 20px rgba(0, 0, 0, 0.04);
  --shadow-emphasize: 0 0 30px rgba(0, 0, 0, 0.08);
}
CSSEOF
  echo -e "  → ${TARGET_DIR}/tokens.css 생성 완료"
fi

echo ""
echo -e "${GREEN}✅ 설치 완료!${NC}"
echo ""
echo "생성된 파일:"
echo "  📄 CLAUDE.md"
echo "  📄 .claude/CLAUDE.md"
echo "  🤖 .claude/agents/ (4개)"
echo "  🪝 .claude/hooks/ (4개)"
echo "  ⚙️  .claude/settings.json"
echo "  🎨 docs/DESIGN.md"
echo "  🎨 src/styles/tokens.css (또는 app/styles/)"
echo ""
echo -e "${BLUE}다음 단계:${NC}"
echo "  1. tokens.css를 프로젝트 entry에 import"
echo "  2. Claude Code에서 CLAUDE.md 읽기 확인"
echo "  3. 'design-qa' 에이전트로 첫 검사 실행"
