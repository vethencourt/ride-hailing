<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

import type { CreateVehicle, VehicleStatus } from '../types'

import { useMetaStore } from '@/meta/store'
import { VEHICLE_LIST } from '@/shared/constants/routeNames'
import { VEHICLE_STATUSES } from '@/shared/constants/statusNames'
import { checkRequired } from '@/shared/utils/form'
import { qNotify } from '@/shared/utils/notify'
import { useVehicleStore } from '@/vehicles/store'

const emit = defineEmits<{
  cancel: []
}>()

const store = useVehicleStore()
const router = useRouter()
const q = useQuasar()
const form = ref<{
  make: { label: string; value: string } | null
  model: { label: string; value: string } | null
  year: { label: number; value: number } | null
  status: VehicleStatus | null
}>({
  make: null,
  model: null,
  year: null,
  status: null
})

const metaStore = useMetaStore()

const makeOptions = computed(() =>
  metaStore.makes.map((m) => ({ label: m.name, value: m.id }))
)
const modelOptions = computed(() =>
  metaStore.models.map((m) => ({ label: m.name, value: m.id }))
)
const yearOptions = computed(() =>
  metaStore.years.map((y) => ({ label: String(y.value), value: y.value }))
)

onMounted(async () => {
  try {
    await metaStore.getMakes()
  } catch (_) {
    qNotify(q, 'negative', 'Error al cargar marcas')
  }
})

watch(
  () => form.value.make,
  (newMake: any) => {
    form.value.model = null
    form.value.year = null
    if (newMake)
      metaStore.getModels(newMake.value).catch(() => {
        metaStore.models = []
      })
    else metaStore.models = []
  }
)

watch(
  () => form.value.model,
  (newModel: any) => {
    form.value.year = null
    if (newModel)
      metaStore.getYears(newModel.value).catch(() => {
        metaStore.years = []
      })
    else metaStore.years = []
  }
)

function handleCancel() {
  if (q.screen.xs) router.push({ name: VEHICLE_LIST })
  else emit('cancel')
}

async function handleSubmit() {
  try {
    const { make, model, year, status } = form.value
    const vehicle: CreateVehicle = {
      make: make!.label,
      model: model!.label,
      year: year!.value,
      status: status!
    }
    await store.createVehicle(vehicle)
    qNotify(q, 'positive', 'Vehículo creado con éxito')
    handleCancel()
  } catch (_) {
    qNotify(q, 'negative', 'Error al crear el vehículo')
  }
}
</script>

<template>
  <q-form class="column" @submit="handleSubmit">
    <q-select
      v-model="form.make"
      label="Marca"
      bg-color="secondary"
      :options="makeOptions"
      :rules="[checkRequired]"
      standout
    />
    <q-select
      v-model="form.model"
      label="Modelo"
      bg-color="secondary"
      :options="modelOptions"
      :rules="[checkRequired]"
      standout
    />
    <q-select
      v-model="form.year"
      label="Año"
      bg-color="secondary"
      :options="yearOptions"
      :rules="[checkRequired]"
      standout
    />
    <q-select
      v-model="form.status"
      label="Estado"
      bg-color="secondary"
      :options="VEHICLE_STATUSES"
      :rules="[checkRequired]"
      standout
    />
    <div class="row justify-center q-gutter-md">
      <q-btn type="submit" label="Crear" color="primary" />
      <q-btn label="Cancelar" color="accent" @click="handleCancel" outline />
    </div>
  </q-form>
</template>
