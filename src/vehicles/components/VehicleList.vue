<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import VehicleItem from '@/vehicles/components/VehicleItem.vue'
import { useVehicleStore } from '@/vehicles/store'

const store = useVehicleStore()
const { vehicles } = storeToRefs(store)

onMounted(() => store.getVehicles())
</script>

<template>
  <q-list class="bg-secondary" separator>
    <template v-for="vehicle in vehicles" :key="vehicle.id">
      <VehicleItem :vehicle="vehicle" />
    </template>
  </q-list>
</template>

<style lang="scss" scoped>
.q-list {
  width: 75%;
  height: 100%;
  margin: auto;
}
</style>
