<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

import type { LoginCredentials } from '../types'

import { AUTH_SIGNUP, VEHICLE_LIST } from '@/shared/constants/routeNames'
import { checkRequired, checkEmail } from '@/shared/utils/form'
import { qNotify } from '@/shared/utils/notify'

import { useAuthStore } from '../store'

const store = useAuthStore()
const router = useRouter()
const q = useQuasar()
const form = ref<LoginCredentials>({
  email: '',
  password: ''
})

async function handleLogin() {
  console.log('1. clicked button')
  try {
    console.log('2. calling...')
    await store.login(form.value)
    qNotify(q, 'positive', 'Bienvenido a Ride Hailing')
    router.push({ name: VEHICLE_LIST })
    console.log('3 all good')
  } catch (err) {
    console.log('3 bad shit', err)
    qNotify(q, 'negative', 'Error al iniciar sesión')
  }
}
</script>

<template>
  <q-form class="column" @submit.prevent="handleLogin">
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
    <div class="row justify-center q-gutter-md">
      <q-btn type="submit" label="Ingresar" color="primary" :loading="store.loading" />
      <q-btn
        label="Registro"
        color="secondary"
        :disable="store.loading"
        @click="router.push({ name: AUTH_SIGNUP })"
        outline
        type="button"
      />
    </div>
  </q-form>
</template>

<style lang="scss" scoped>
.q-form {
  max-width: 400px;
}
</style>
