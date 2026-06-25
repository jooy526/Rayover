#!/usr/bin/env node
/**
 * notify.mjs
 * OS별 데스크탑 알림 유틸리티
 */

import { execSync } from 'child_process'
import { platform } from 'os'

export function notify(title, message) {
  const os = platform()
  try {
    if (os === 'darwin') {
      execSync(`osascript -e 'display notification "${message}" with title "${title}"'`)
    } else if (os === 'linux') {
      execSync(`notify-send "${title}" "${message}"`)
    } else if (os === 'win32') {
      execSync(
        `powershell -Command "[Windows.UI.Notifications.ToastNotificationManager, Windows.UI.Notifications, ContentType = WindowsRuntime] | Out-Null; $t = [Windows.UI.Notifications.ToastTemplateType]::ToastText02; $x = [Windows.UI.Notifications.ToastNotificationManager]::GetTemplateContent($t); $x.GetElementsByTagName('text')[0].AppendChild($x.CreateTextNode('${title}')); $x.GetElementsByTagName('text')[1].AppendChild($x.CreateTextNode('${message}')); [Windows.UI.Notifications.ToastNotificationManager]::CreateToastNotifier('Rayover').Show([Windows.UI.Notifications.ToastNotification]::new($x))"`
      )
    }
  } catch {
    // 알림 실패해도 작업 계속
  }
}

// CLI로 직접 실행 시
if (process.argv[2] && process.argv[3]) {
  notify(process.argv[2], process.argv[3])
}
