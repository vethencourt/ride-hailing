<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

import type { LoginCredentials } from '../types'

import { VEHICLE_LIST } from '@/shared/constants/routeNames'
import { checkRequired, checkEmail, checkPassword } from '@/shared/utils/form'
import { qNotify } from '@/shared/utils/notify'

import { useAuthStore } from '../store'

interface SignupForm extends LoginCredentials {
  confirm: string
}

const store = useAuthStore()
const router = useRouter()
const q = useQuasar()
const form = ref<SignupForm>({
  email: '',
  password: '',
  confirm: ''
})

async function handleRegister() {
  try {
    const { email, password } = form.value
    const credentials: LoginCredentials = { email, password }
    await store.signup(credentials)
    qNotify(q, 'positive', 'Cuenta creada exitosamente')
    router.push({ name: VEHICLE_LIST })
  } catch (_) {
    qNotify(q, 'negative', 'Error al crear la cuenta')
  }
}
</script>

<template>
  <q-form class="column" @submit="handleRegister">
    <q-input
      placeholder="Correo"
      bg-color="secondary"
      v-model="form.email"
      :disable="store.loading"
      :rules="[checkRequired, checkEmail]"
      lazy-rules
      standout
      dense
    />
    <q-input
      type="password"
      placeholder="Contraseña"
      bg-color="secondary"
      v-model="form.password"
      :disable="store.loading"
      :rules="[checkRequired]"
      standout
      dense
    />
    <q-input
      type="password"
      placeholder="Confirma Contraseña"
      bg-color="secondary"
      v-model="form.confirm"
      :disable="store.loading"
      :rules="[checkRequired, checkPassword(form.password)]"
      standout
      dense
    />
    <div class="row justify-center q-gutter-md">
      <q-btn type="submit" label="Registrar" color="primary" />
    </div>
  </q-form>
</template>

<style lang="scss" scoped>
.q-form {
  max-width: 400px;
}
</style>
