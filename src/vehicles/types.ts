import type { User } from '../auth/types'

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number | null
  createdAt: string
  updatedAt: string
  createdBy: User
  updatedBy: User
  status: VehicleStatus
}

export type VehicleStatus = 'AVAILABLE' | 'MAINTENANCE' | 'SERVICING'

export type CreateVehicle = Omit<
  Vehicle,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy' | 'status'
> & { status: VehicleStatus | null }
