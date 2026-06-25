#!/usr/bin/env node
/**
 * Hook: check-design-tokens.mjs
 * 파일 저장 시 하드코딩 색상/spacing/radius 감지 (원칙 3 강제)
 * Claude Code PostToolUse hook으로 실행
 */

import { readFileSync } from 'fs'
import { notify } from './notify.mjs'

const PATTERNS = [
  { regex: /#[0-9A-Fa-f]{3,8}\b/g, type: '색상 하드코딩', suggest: 'var(--color-*)' },
  { regex: /(?:padding|margin|gap):\s*\d+px/g, type: 'Spacing 하드코딩', suggest: 'var(--spacing-*)' },
  { regex: /border-radius:\s*\d+px/g, type: 'Radius 하드코딩', suggest: 'var(--radius-*)' },
  { regex: /font-size:\s*\d+/g, type: 'Typography 하드코딩', suggest: 'Text Style 이름 사용' },
]

const EXCLUDE_PATTERNS = [
  /\.stories\.tsx$/,
  /DESIGN\.md$/,
  /\.config\./,
  /node_modules/,
]

const input = JSON.parse(readFileSync('/dev/stdin', 'utf8'))
const filePath = input?.tool_input?.file_path || input?.tool_input?.path || ''

if (!filePath || EXCLUDE_PATTERNS.some(p => p.test(filePath))) {
  process.exit(0)
}

let content
try {
  content = readFileSync(filePath, 'utf8')
} catch {
  process.exit(0)
}

const violations = []

for (const { regex, type, suggest } of PATTERNS) {
  const matches = [...content.matchAll(regex)]
  for (const match of matches) {
    const lineNum = content.slice(0, match.index).split('\n').length
    violations.push({ type, value: match[0], line: lineNum, suggest })
  }
}

if (violations.length > 0) {
  const msg = violations
    .map(v => `[${v.type}] Line ${v.line}: "${v.value}" → ${v.suggest}`)
    .join('\n')

  console.error(`\n⚠️  디자인 토큰 위반 감지 (${filePath})\n${msg}\n`)
  notify('토큰 위반 감지', `${filePath}\n${violations.length}건`)

  // 경고만 출력, 저장 차단하지 않음 (exitCode 0)
}

process.exit(0)
