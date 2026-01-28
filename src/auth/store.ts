import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { LoginCredentials, User } from './types'

import { authenticate, register } from './service'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(JSON.parse(localStorage.getItem('user-data') || 'null'))
  const token = ref<string | null>(localStorage.getItem('user-token'))
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  async function handleAuth(
    action: (c: LoginCredentials) => Promise<{ user: User; token: string }>,
    credentials: LoginCredentials
  ) {
    loading.value = true
    error.value = null
    try {
      const response = await action(credentials)
      user.value = response.user
      token.value = response.token

      localStorage.setItem('user-token', response.token)
      localStorage.setItem('user-data', JSON.stringify(response.user))
    } catch (err: any) {
      error.value = err.response?.data?.message
      throw err
    } finally {
      loading.value = false
    }
  }

  async function signup(credentials: LoginCredentials) {
    await handleAuth(register, credentials)
  }

  async function login(credentials: LoginCredentials) {
    await handleAuth(authenticate, credentials)
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-data')
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    signup
  }
})
