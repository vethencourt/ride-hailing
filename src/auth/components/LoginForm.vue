<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import type { LoginCredentials } from '../types'

import { AUTH_SIGNUP, VEHICLE_LIST } from '@/shared/constants/routeNames'
import { checkRequired, checkEmail } from '@/shared/utils/form'

import { useAuthStore } from '../store'

const store = useAuthStore()
const router = useRouter()
const form = ref<LoginCredentials>({
  email: '',
  password: ''
})

function handleLogin() {
  store.login(form.value)
  router.push({ name: VEHICLE_LIST })
}
</script>

<template>
  <q-form class="column" @submit="handleLogin">
    <q-input
      placeholder="Correo"
      v-model="form.email"
      bg-color="secondary"
      :rules="[checkRequired, checkEmail]"
      lazy-rules
      standout
      dense
    />
    <q-input
      type="password"
      placeholder="Contraseña"
      v-model="form.password"
      bg-color="secondary"
      :rules="[checkRequired]"
      standout
      dense
    />
    <div class="row justify-center q-gutter-md">
      <q-btn type="submit" label="Ingresar" color="primary" />
      <q-btn
        label="Registro"
        color="secondary"
        @click="router.push({ name: AUTH_SIGNUP })"
        outline
      />
    </div>
  </q-form>
</template>

<style lang="scss" scoped>
.q-form {
  max-width: 400px;
}
</style>
