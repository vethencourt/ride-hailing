<script setup lang="ts">
import { ref } from 'vue'

import VehicleHeader from '../components/VehicleHeader.vue'
import VehicleTable from '../components/VehicleTable.vue'

const searchTerm = ref<string>('')
</script>

<template>
  <q-page>
    <vehicle-header v-model="searchTerm" />
    <vehicle-table :filter="searchTerm" />
  </q-page>
</template>

<style lang="scss" scoped></style>
