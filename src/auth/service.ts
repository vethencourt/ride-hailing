import type { LoginCredentials, LoginResponse } from './types'

import api from '@/shared/services/api'

export async function authenticate(credentials: LoginCredentials): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/auth/login', credentials)
  return data
}

export async function register(credentials: LoginCredentials): Promise<any> {
  const { data } = await api.post<any>('/auth/register', credentials)
  return data
}
