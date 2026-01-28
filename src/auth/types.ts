export interface User {
  id: string
  email: string
}

export interface RegisterUser extends Omit<User, 'id'> {
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}

export type LoginCredentials = Pick<RegisterUser, 'email' | 'password'>
