<script setup lang="ts">
import { useQuasar } from 'quasar'

import { DEBOUNCE_DELAY } from '@/shared/constants/numbers'
import { VEHICLE_CREATE } from '@/shared/constants/routeNames'

const props = defineProps<{
  modelValue: string // Changed from searchTerm to modelValue
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void // Changed event name
}>()

const q = useQuasar()
</script>

<template>
  <div class="header-container row">
    <div class="col-md-6 col-xs-12">
      <h5 :class="q.screen.xs ? 'text-center' : ''">Vehículos</h5>
    </div>
    <div class="row col-md-6 col-xs-12">
      <div class="col-xs-10 text-right">
        <q-input
          class="full-width"
          placeholder="Buscar"
          :model-value="props.modelValue"
          @update:model-value="(v) => emits('update:modelValue', v as string)"
          :debounce="DEBOUNCE_DELAY"
          standout
          dense
        />
      </div>
      <div class="col-xs-2 text-right">
        <q-btn
          class="small-btn"
          color="primary"
          :label="q.screen.xs ? undefined : 'Crear'"
          :icon="q.screen.xs ? 'add' : undefined"
          :to="{ name: `${VEHICLE_CREATE}` }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  & > div,
  .q-btn {
    height: 40px;
  }
}
</style>
