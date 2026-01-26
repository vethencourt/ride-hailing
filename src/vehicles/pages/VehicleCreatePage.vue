<script setup lang="ts">
import BackButton from '@/shared/components/BackButton.vue'
import VehicleForm from '@/vehicles/components/VehicleForm.vue'

import { CREATE_TITLE } from '../constants'
</script>

<template>
  <q-page>
    <div class="header-container">
      <back-button text-color="dark-text" />
      <h5>{{ CREATE_TITLE }}</h5>
    </div>
    <VehicleForm />
  </q-page>
</template>

<style lang="scss" scoped>
.q-page {
  padding: 0 1rem;

  .header-container {
    :deep(.back-button) {
      position: fixed;
    }

    h5 {
      width: fit-content;
      margin: auto;
    }
  }
}
</style>
