import type { User } from '../auth/types'

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  status: VehicleStatus
  createdAt: string
  updatedAt: string
  updatedBy: User
}

export type VehicleStatus = 'AVAILABLE' | 'MAINTENANCE' | 'SERVICING'

export type CreateVehicle = Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt' | 'updatedBy'>
