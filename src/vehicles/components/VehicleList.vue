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
  <q-list separator>
    <template v-for="vehicle in vehicles" :key="vehicle.id">
      <VehicleItem :vehicle="vehicle" />
    </template>
  </q-list>
</template>

<style lang="scss" scoped>
.q-list {
  width: 75%;
  margin: auto;
}
</style>
