#!/usr/bin/env node
/**
 * Hook: protect-files.mjs
 * .env 파일 수정 차단
 */

import { readFileSync } from 'fs'

const input = JSON.parse(readFileSync('/dev/stdin', 'utf8'))
const filePath = input?.tool_input?.file_path || input?.tool_input?.path || ''

const PROTECTED = [
  /\.env$/,
  /\.env\./,
]

if (PROTECTED.some(p => p.test(filePath))) {
  console.error(`\n🚫 보호된 파일 수정 차단: ${filePath}\n`)
  process.exit(2) // exit 2 = Claude Code에서 block signal
}

process.exit(0)
