<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'

import type { Vehicle } from '../types'
import type { QTableProps } from 'quasar'

import { ITEMS_PER_PAGE } from '@/shared/constants/numbers'
import { useVehicleStore } from '@/vehicles/store'

import StatusSelect from './StatusSelect.vue'

// define a prop to receive the search term
const props = defineProps<{
  filter: string
}>()

const store = useVehicleStore()
const { vehicles } = storeToRefs(store)

function getVehicleName(vehicle: Vehicle): string {
  return `${vehicle.make} ${vehicle.model} - ${vehicle.year}`
}

const visibleColumns = ['vehicle', 'createdBy', 'modifiedBy', 'status']
const columns = computed<QTableProps['columns']>(() => [
  {
    name: 'vehicle',
    label: 'Vehículo',
    field: (row: Vehicle) => getVehicleName(row),
    align: 'left'
  },
  { name: 'createdBy', label: 'Creado', field: 'createdBy.email', align: 'center' },
  { name: 'createdAt', label: 'Creado el', field: 'createdAt' },
  { name: 'modifiedBy', label: 'Modificado', field: 'updatedBy.email', align: 'center' },
  { name: 'modifiedAt', label: 'Modificado el', field: 'modifiedAt' },
  { name: 'status', label: 'Estado', field: 'status', align: 'center' }
])

onMounted(() => store.getVehicles())
</script>

<template>
  <div class="table-wrap">
    <q-table
      class="bg-dark"
      :rows="vehicles"
      :columns="columns"
      :visible-columns="visibleColumns"
      :filter="props.filter"
      :pagination="{ page: 1, rowsPerPage: ITEMS_PER_PAGE }"
      row-key="id"
      separator="horizontal"
      no-data-label="No se encontaron vehiculos"
      flat
    >
      <template v-slot:body-cell-vehicle="props">
        <q-td :props="props">
          <div class="vehicle-cell">
            <div>{{ props.row.make }} {{ props.row.model }} - {{ props.row.year }}</div>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-createdBy="props">
        <q-td :props="props">
          <div class="vehicle-cell">
            <div>
              {{ props.row.createdBy.email }}
            </div>
            <div class="vehicle-sub">{{ props.row.createdAt }}</div>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-modifiedBy="props">
        <q-td :props="props">
          <div class="vehicle-cell">
            <div>
              {{ props.row.updatedBy.email }}
            </div>
            <div class="vehicle-sub">{{ props.row.updatedAt }}</div>
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-status="props">
        <q-td :props="props" class="status-td">
          <StatusSelect
            :value="props.row.status"
            @onStatusChange="(val) => store.changeVehicleStatus(props.row.id, val)"
          />
        </q-td>
      </template>
      <template v-slot:no-data="{ message }">
        <div class="full-width row flex-center q-gutter-sm q-pa-lg text-gray">
          <span> {{ message }} </span>
        </div>
      </template>
    </q-table>
  </div>
</template>

<style lang="scss" scoped>
.table-wrap {
  width: 75%;
  margin: auto;
}

.vehicle-sub {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.status-td {
  width: 160px;
}
</style>
