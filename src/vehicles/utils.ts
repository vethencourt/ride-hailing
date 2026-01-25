import type { VehicleStatus } from './types'

export function getStatusText(s: VehicleStatus | null): string {
  switch (s) {
    case 'AVAILABLE':
      return 'disponible'
    case 'MAINTENANCE':
      return 'mantenimiento'
    case 'SERVICING':
      return 'servicio'
    default:
      return ''
  }
}
