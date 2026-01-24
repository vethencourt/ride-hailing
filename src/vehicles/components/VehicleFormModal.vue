<script setup lang="ts">
import VehicleForm from '@/vehicles/components/VehicleForm.vue'

import { CREATE_TITLE } from '../constants'
</script>

<template>
  <q-dialog persistent>
    <q-card>
      <q-card-section>
        <h5>{{ CREATE_TITLE }}</h5>
      </q-card-section>
      <q-card-section>
        <VehicleForm />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped></style>
