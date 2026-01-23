<script setup lang="ts">
import { debounce } from 'quasar'

import type { Vehicle } from '@/vehicles/types'
import type { VehicleStatus } from '@/vehicles/types'

import { DEBOUNCE_DELAY } from '@/shared/constants/numbers'
import StatusSelect from '@/vehicles/components/StatusSelect.vue'
import { useVehicleStore } from '@/vehicles/store'

const props = defineProps<{ vehicle: Vehicle }>()
const { id, make, model, year, createdBy } = props.vehicle
const store = useVehicleStore()

const debouncedStatusChange = debounce((id: string, status: VehicleStatus) => {
  store.changeVehicleStatus(id, status)
}, DEBOUNCE_DELAY)

function handleStatusChange(newStatus: VehicleStatus) {
  debouncedStatusChange(id, newStatus)
}
//TODO: Change qitem to an expandable to show more vehicle details
</script>

<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label>{{ make }} {{ model }} - {{ year }}</q-item-label>
      <q-item-label caption>{{ createdBy.email }}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <StatusSelect :value="props.vehicle.status" @onStatusChange="handleStatusChange" />
    </q-item-section>
  </q-item>
</template>

<style scoped lang="scss"></style>
