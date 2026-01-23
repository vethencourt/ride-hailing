<script setup lang="ts">
import type { VehicleStatus } from '../types'

import BadgeComponent from '@/shared/components/BadgeComponent.vue'
import { VEHICLE_STATUSES } from '@/shared/constants/statusNames'

defineProps<{
  value: VehicleStatus
}>()

const emit = defineEmits<{
  onStatusChange: [value: VehicleStatus]
}>()
</script>

<template>
  <q-select
    :model-value="value"
    @update:model-value="(val) => emit('onStatusChange', val)"
    :options="VEHICLE_STATUSES"
    borderless
  >
    <template v-slot:selected>
      <badge-component v-if="value" :status="value" />
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <badge-component :status="scope.opt" />
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style lang="scss">
.q-select .q-field__append {
  padding-left: 8px;
}
</style>
