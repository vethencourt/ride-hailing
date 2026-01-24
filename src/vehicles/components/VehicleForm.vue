<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import type { CreateVehicle, VehicleStatus } from '../types'

import { VEHICLE_STATUSES } from '@/shared/constants/statusNames'
import { MAKES, MODELS, YEARS } from '@/vehicles/constants'
import { useVehicleStore } from '@/vehicles/store'

import { getStatusText } from '../utils'

const store = useVehicleStore()
const router = useRouter()
const form = ref<CreateVehicle>({
  make: '',
  model: '',
  year: null,
  status: 'AVAILABLE'
})

async function handleSubmit() {
  await store.createVehicle(form.value)
  router.push({ name: 'VehicleList' })
}
</script>

<template>
  <q-form class="column" @submit="handleSubmit">
    <q-select v-model="form.make" :options="MAKES" label="Marca" standout />
    <q-select v-model="form.model" :options="MODELS" label="Modelo" standout />
    <q-select v-model="form.year" :options="YEARS" label="Año" standout />
    <q-select v-model="form.status" :options="VEHICLE_STATUSES" label="Estado" standout>
      <template v-slot:selected>
        {{ getStatusText(form.status) }}
      </template>
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            {{ getStatusText(scope.opt as VehicleStatus) }}
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-form>
</template>

<style lang="scss" scoped>
.q-form {
  gap: 0.5rem;
  width: 50%;
  margin: auto;
}
</style>
