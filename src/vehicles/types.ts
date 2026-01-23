import type { User } from '../auth/types'

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  createdAt: string
  updatedAt: string
  createdBy: User
  updatedBy: User
  status: VehicleStatus
}

export type VehicleStatus = 'AVAILABLE' | 'MAINTENANCE' | 'SERVICING'

export type CreateVehicle = Omit<Vehicle, 'id' | 'createdAt' | 'updatedAt' | 'updatedBy'>
