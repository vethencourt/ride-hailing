import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { LoginCredentials, User } from './types'

import { authenticate, register } from './service'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  async function signup(credentials: LoginCredentials) {
    loading.value = true
    const response = await register(credentials)
    user.value = response
    token.value = ''
    loading.value = false
  }

  async function login(credentials: LoginCredentials) {
    loading.value = true
    const response = await authenticate(credentials)
    user.value = response
    token.value = ''
    loading.value = false
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('user-token')
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
