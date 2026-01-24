<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

import { DEBOUNCE_DELAY } from '@/shared/constants/numbers'
import { VEHICLE_CREATE } from '@/shared/constants/routeNames'

const props = defineProps<{
  modelValue: string // Changed from searchTerm to modelValue
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void // Changed event name
}>()

const router = useRouter()
const q = useQuasar()

function handleButtonClick() {
  if (q.screen.xs) router.push({ name: `${VEHICLE_CREATE}` })
  //else open modal
}
</script>

<template>
  <div class="header-container row">
    <div class="col-md-6 col-xs-12">
      <h5>Vehículos</h5>
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
          @click="handleButtonClick"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
