<script setup lang="ts">
import { ref } from 'vue'

import { DEBOUNCE_DELAY } from '@/shared/constants/numbers'
import { VEHICLE_CREATE } from '@/shared/constants/routeNames'

import VehicleTable from '../components/VehicleTable.vue'

const searchTerm = ref('')
</script>

<template>
  <q-page>
    <div class="header-container">
      <h5 class="text-center">Vehículos</h5>
      <div class="row items-center">
        <q-input
          class="q-mr-md"
          placeholder="Buscar"
          v-model="searchTerm"
          :debounce="DEBOUNCE_DELAY"
          dense
          standout
        />
        <q-btn
          class="small-btn"
          color="primary"
          :to="{ name: `${VEHICLE_CREATE}` }"
          label="Crear"
        />
      </div>
    </div>
    <vehicle-table :filter="searchTerm" />
    <!-- <q-page-sticky class="fab-button" position="bottom-right">
      <q-btn
        icon="add"
        color="primary"
        text-color="accent"
        :to="{ name: `${VEHICLE_CREATE}` }"
        fab
      />
    </q-page-sticky> -->
  </q-page>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.fab-button {
  right: 10%;
  bottom: 10%;
}
</style>
