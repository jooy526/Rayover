#!/usr/bin/env node
/**
 * Hook: check-story-exists.mjs
 * 컴포넌트 파일 저장 시 Story 파일 누락 경고
 */

import { existsSync, readFileSync } from 'fs'
import { dirname, basename, join } from 'path'
import { notify } from './notify.mjs'

const input = JSON.parse(readFileSync('/dev/stdin', 'utf8'))
const filePath = input?.tool_input?.file_path || input?.tool_input?.path || ''

// 컴포넌트 파일만 검사 (.tsx, components 폴더 내)
if (!filePath.includes('/components/') || !filePath.endsWith('.tsx') || filePath.includes('.stories.')) {
  process.exit(0)
}

const dir = dirname(filePath)
const componentName = basename(filePath, '.tsx')
const storyPath = join(dir, `${componentName}.stories.tsx`)

if (!existsSync(storyPath)) {
  const msg = `Story 파일 없음: ${storyPath}`
  console.warn(`\n⚠️  ${msg}\n`)
  notify('Story 누락', msg)
}

process.exit(0)
