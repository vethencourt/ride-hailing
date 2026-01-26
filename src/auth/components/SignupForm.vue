<script setup lang="ts">
import { ref } from 'vue'

import type { LoginCredentials } from '../types'

import { checkRequired, checkEmail, checkPassword } from '@/shared/utils/form'

import { useAuthStore } from '../store'

interface SignupForm extends LoginCredentials {
  confirm: string
}

const store = useAuthStore()
const form = ref<SignupForm>({
  email: '',
  password: '',
  confirm: ''
})

function handleRegister() {
  const { email, password } = form.value
  const credentials: LoginCredentials = { email, password }
  store.signup(credentials)
}
</script>

<template>
  <q-form class="column" @submit="handleRegister">
    <q-input
      placeholder="Correo"
      v-model="form.email"
      bg-color="secondary"
      :rules="[checkRequired, checkEmail]"
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
    <q-input
      type="password"
      placeholder="Confirma Contraseña"
      v-model="form.password"
      bg-color="secondary"
      :rules="[checkRequired, checkPassword(form.password)]"
      standout
      dense
    />
    <div class="row justify-center q-gutter-md">
      <q-btn type="submit" label="Registrar" color="primary" />
      <!-- <q-btn
        label="Registro"
        color="secondary"
        @click="router.push({ name: AUTH_SIGNUP })"
        outline
      /> -->
    </div>
  </q-form>
</template>

<style lang="scss" scoped>
.q-form {
  max-width: 400px;
}
</style>
