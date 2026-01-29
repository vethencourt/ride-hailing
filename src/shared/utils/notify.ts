import type { QVueGlobals } from 'quasar'

import { NOTIFY_TIME } from '@/shared/constants/numbers'

export function qNotify(
  q: QVueGlobals,
  type: 'positive' | 'negative' | 'warning' | 'info',
  message: string
) {
  q.notify({
    type,
    message,
    timeout: NOTIFY_TIME,
    textColor: 'dark'
  })
}
