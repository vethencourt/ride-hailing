<script setup lang="ts">
import type { VehicleStatus } from '@/vehicles/types'

defineProps<{
  status: VehicleStatus
  clickable?: boolean
}>()

const emits = defineEmits<{
  (e: 'click'): void
}>()

function statusClass(s: VehicleStatus): string {
  return s === 'AVAILABLE'
    ? 'status-available'
    : s === 'MAINTENANCE'
      ? 'status-maintenance'
      : 'status-servicing'
}

function statusText(s: VehicleStatus): string {
  switch (s) {
    case 'AVAILABLE':
      return 'disponible'
    case 'MAINTENANCE':
      return 'mantenimiento'
    case 'SERVICING':
      return 'servicio'
    default:
      return ''
  }
}
</script>

<template>
  <q-badge
    class="item-badge"
    :class="[statusClass(status), { 'cursor-pointer': clickable }]"
    @click="() => emits('click')"
  >
    {{ statusText(status) }}
  </q-badge>
</template>

<style scoped lang="scss">
.item-badge {
  padding: 0.5em 1em;
  font-size: 0.75rem;
  font-weight: 600;
  color: $dark;

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
