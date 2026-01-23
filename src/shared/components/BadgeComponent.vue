<script setup lang="ts">
import type { VehicleStatus } from '@/vehicles/types'

const props = defineProps<{
  status: VehicleStatus
  clickable?: boolean
}>()

const { status } = props

const emits = defineEmits<{
  (e: 'click'): void
}>()

function statusClass(s: VehicleStatus) {
  return s === 'AVAILABLE'
    ? 'status-available'
    : s === 'MAINTENANCE'
      ? 'status-maintenance'
      : 'status-servicing'
}
</script>

<template>
  <q-badge
    class="item-badge"
    :class="[statusClass(status), { 'cursor-pointer': clickable }]"
    @click="() => emits('click')"
  >
    {{ status.toLowerCase() }}
  </q-badge>
</template>

<style scoped lang="scss">
.item-badge {
  padding: 0.5em 1em;
  font-size: 0.75rem;
  font-weight: 600;
  color: black;

  &.status-available {
    background-color: $positive;
  }

  &.status-maintenance {
    background-color: $warning;
  }

  &.status-servicing {
    background-color: $info;
  }
}
</style>
