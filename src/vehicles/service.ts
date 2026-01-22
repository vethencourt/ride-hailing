import type { Vehicle } from './types'

import { VEHICLES } from '@/shared/mocks/mocks'

// TODO: el try va aqui
// TODO: user el tipo ApiResponse aqui
export function fetchVehicles(): Promise<Vehicle[]> {
  return Promise.resolve(VEHICLES)
}
