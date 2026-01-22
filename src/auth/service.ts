import type { LoginCredentials, User } from './types'

import { USER } from '@/shared/mocks/mocks'

export async function authenticate(_credentials: LoginCredentials): Promise<User> {
  return Promise.resolve(USER)
}

export async function register(_credentials: LoginCredentials): Promise<User> {
  return Promise.resolve(USER)
}
