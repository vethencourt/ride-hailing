import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date: string, pattern = 'dd/MM/yyyy') => {
  if (!date) return 'N/A'

  try {
    return format(parseISO(date), pattern, { locale: es })
  } catch (_) {
    return 'Invalid Date'
  }
}
