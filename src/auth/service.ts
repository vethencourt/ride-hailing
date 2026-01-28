import type { LoginCredentials, LoginResponse } from './types'

import api from '@/shared/services/api'

export async function authenticate(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/auth/login', credentials)
  return response as unknown as LoginResponse
}

export async function register(credentials: LoginCredentials): Promise<any> {
  const response = await api.post<any>('/auth/signup', credentials)
  return response as any
}
