<script setup lang="ts">
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

import type { CreateVehicle, VehicleStatus } from '../types'

import { VEHICLE_LIST } from '@/shared/constants/routeNames'
import { VEHICLE_STATUSES } from '@/shared/constants/statusNames'
import { checkRequired } from '@/shared/utils/form'
import { MAKES, MODELS, YEARS } from '@/vehicles/constants'
import { useVehicleStore } from '@/vehicles/store'

import { getStatusText } from '../utils'

const emit = defineEmits<{
  cancel: []
}>()

const store = useVehicleStore()
const router = useRouter()
const q = useQuasar()
const form = ref<CreateVehicle>({
  make: '',
  model: '',
  year: null,
  status: null
})

function handleCancel() {
  if (q.screen.xs) router.push({ name: VEHICLE_LIST })
  else emit('cancel')
}

async function handleSubmit() {
  store.createVehicle(form.value)
  handleCancel()
}
</script>

<template>
  <q-form class="column" @submit="handleSubmit">
    <q-select
      v-model="form.make"
      label="Marca"
      :options="MAKES"
      :rules="[checkRequired]"
      standout
    />
    <q-select
      v-model="form.model"
      label="Modelo"
      :options="MODELS"
      :rules="[checkRequired]"
      standout
    />
    <q-select
      v-model="form.year"
      label="Año"
      :options="YEARS"
      :rules="[checkRequired]"
      standout
    />
    <q-select
      v-model="form.status"
      label="Estado"
      :options="VEHICLE_STATUSES"
      :rules="[checkRequired]"
      standout
    >
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
    <div class="row justify-center q-gutter-md">
      <q-btn type="submit" label="Crear" color="primary" />
      <q-btn label="Cancelar" color="accent" @click="handleCancel" outline />
    </div>
  </q-form>
</template>

<style lang="scss" scoped>
.q-form {
  gap: 0.25rem;
  margin: auto;
}
</style>
