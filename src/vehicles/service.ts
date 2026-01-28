import type { CreateVehicle, Vehicle, VehicleListRequest, VehicleListResponse } from './types'

import api from '@/shared/services/api'

export async function fetchVehicles(body: VehicleListRequest): Promise<VehicleListResponse> {
  const response = await api.post<VehicleListResponse>('/vehicles', body)
  return response as unknown as VehicleListResponse
}

export async function createVehicle(vehicle: CreateVehicle): Promise<any> {
  const response = await api.post<any>('/vehicles/create', vehicle)
  return response as any
}

export async function updateVehicle(
  vehicle: Partial<CreateVehicle>,
  id: string
): Promise<Vehicle> {
  const response = await api.post<Vehicle>(`/vehicles/${id}`, vehicle)
  return response as unknown as Vehicle
}
