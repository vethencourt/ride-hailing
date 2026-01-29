import type { Make, Model, Year } from './types'

import api from '@/shared/services/api'

export async function fetchMakes(): Promise<Make[]> {
  const response = await api.get<Make[]>('/meta/makes')
  return response as unknown as Make[]
}

export async function fetchModels(makeId: string): Promise<Model[]> {
  const response = await api.get<Model[]>(`/meta/models/${makeId}`)
  return response as unknown as Model[]
}

export async function fetchYears(modelId: string): Promise<Year[]> {
  const response = await api.get<Year[]>(`/meta/years/${modelId}`)
  return response as unknown as Year[]
}
