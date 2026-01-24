VehicleCreatePageVehicleCreatePage
<script setup lang="ts">
import { useRouter } from 'vue-router'

import VehicleForm from '@/vehicles/components/VehicleForm.vue'

import { CREATE_TITLE } from '../constants'

const router = useRouter()
</script>

<template>
  <q-page>
    <div class="header-container">
      <q-btn
        class="back-button"
        icon="keyboard_arrow_left"
        text-color="dark-text"
        @click="router.back()"
        round
        flat
      />
      <h5>{{ CREATE_TITLE }}</h5>
    </div>
    <VehicleForm />
  </q-page>
</template>

<style lang="scss" scoped>
.q-page {
  padding: 0 1rem;

  .header-container {
    .q-btn {
      position: fixed;
    }

    h5 {
      width: fit-content;
      margin: auto;
    }
  }
}
</style>
