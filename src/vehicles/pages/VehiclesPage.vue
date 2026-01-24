<script setup lang="ts">
import { ref } from 'vue'
// import { useQuasar } from 'quasar'

// import FabButton from '@/shared/components/FabButton.vue'
// import { VEHICLE_CREATE } from '@/shared/constants/routeNames'

import VehicleHeader from '../components/VehicleHeader.vue'
import VehicleTable from '../components/VehicleTable.vue'

// const q = useQuasar()

const searchTerm = ref<string>('')
</script>

<template>
  <q-page>
    <vehicle-header v-model="searchTerm" />
    <vehicle-table :filter="searchTerm" />
    <!-- <fab-button
      v-if="q.screen.xs"
      icon="add"
      color="primary"
      text-color="accent"
      :to="{ name: VEHICLE_CREATE }"
    /> -->
  </q-page>
</template>

<style lang="scss" scoped></style>
