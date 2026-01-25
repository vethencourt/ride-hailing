<script setup lang="ts">
import { computed } from 'vue'

import VehicleForm from '@/vehicles/components/VehicleForm.vue'

import { CREATE_TITLE } from '../constants'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

function handleCancel() {
  isOpen.value = false
}
</script>

<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card flat>
      <q-card-section>
        <h5>{{ CREATE_TITLE }}</h5>
      </q-card-section>
      <q-card-section>
        <VehicleForm @cancel="handleCancel" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style lang="scss" scoped>
.q-card {
  width: 50%;
  padding: 1rem 0;

  .q-card__section {
    width: 75%;
    margin: 0 auto;
  }
}
</style>
