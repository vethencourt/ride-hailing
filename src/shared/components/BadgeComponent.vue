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
  return s === 'DISPONIBLE'
    ? 'status-available'
    : s === 'MANTENIMIENTO'
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
