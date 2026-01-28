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

export interface VehicleListRequest {
  pagination: Pagination
  searchTerm?: string
  sortBy?: keyof Vehicle
  sortOrder?: '1' | '-1'
}

export interface VehicleListResponse {
  vehicles: Vehicle[]
  pagination: PaginationResponse
}

export type VehicleStatus = 'AVAILABLE' | 'MAINTENANCE' | 'SERVICING'

export interface Pagination {
  page: number
  pageSize: number
}

export interface PaginationResponse {
  currentPage: number
  pageSize: number
  totalItems: number
}

export type CreateVehicle = Omit<
  Vehicle,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy' | 'status'
> & { status: VehicleStatus | null }
