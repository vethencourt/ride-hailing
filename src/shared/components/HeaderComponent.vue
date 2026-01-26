<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/auth/store'

import { AUTH_LOGIN } from '../constants/routeNames'

const router = useRouter()
const store = useAuthStore()

function handleLogout() {
  store.logout()
  router.push({ name: AUTH_LOGIN })
}
</script>

<template>
  <q-header class="bg-primary" elevated>
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="/logo.png" />
        </q-avatar>
        Ride Hailing
      </q-toolbar-title>
      <q-btn icon="power_settings_new" @click="handleLogout" flat dense />
    </q-toolbar>
  </q-header>
</template>
