<script setup lang="ts">
import { ref } from 'vue'

import { DEBOUNCE_DELAY } from '@/shared/constants/numbers'
import { VEHICLE_CREATE } from '@/shared/constants/routeNames'

import VehicleTable from '../components/VehicleTable.vue'

const searchTerm = ref('')
</script>

<template>
  <q-page>
    <div class="header-container row">
      <div class="col-md-6 col-sm-12">
        <h5>Vehículos</h5>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="row">
          <q-input
            class="q-mr-md"
            placeholder="Buscar"
            v-model="searchTerm"
            :debounce="DEBOUNCE_DELAY"
            standout
            dense
          />
          <q-btn
            class="small-btn"
            color="primary"
            label="Crear"
            :to="{ name: `${VEHICLE_CREATE}` }"
          />
        </div>
      </div>
    </div>
    <vehicle-table :filter="searchTerm" />
    <!-- <q-page-sticky class='fab-button' position='bottom-right'>
      <q-btn
        icon='add'
        color='primary'
        text-color='accent'
        :to='{ name: `${VEHICLE_CREATE}` }'
        fab
      />
    </q-page-sticky> -->
  </q-page>
</template>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  & > div {
    height: 40px;
  }
}
// .fab-button {
//   right: 10%;
//   bottom: 10%;
// }
</style>
