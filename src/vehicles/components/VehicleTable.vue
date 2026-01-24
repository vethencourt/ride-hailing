<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'

import type { Vehicle } from '../types'
import type { QTableProps } from 'quasar'

import { ITEMS_PER_PAGE } from '@/shared/constants/numbers'
import { useVehicleStore } from '@/vehicles/store'

import StatusSelect from './StatusSelect.vue'
import { getStatusText } from '../utils'

// define a prop to receive the search term
const props = defineProps<{
  filter: string
}>()

const store = useVehicleStore()
const { vehicles } = storeToRefs(store)

const visibleColumns = ['make', 'model', 'year', 'createdBy', 'modifiedBy', 'status']
const columns = computed<QTableProps['columns']>(() => [
  {
    name: 'make',
    label: 'Marca',
    field: 'make',
    align: 'left',
    sortable: true
  },
  {
    name: 'model',
    label: 'Modelo',
    field: 'model',
    align: 'left',
    sortable: true
  },
  {
    name: 'year',
    label: 'Año',
    field: 'year',
    align: 'left',
    sortable: true
  },
  {
    name: 'createdBy',
    label: 'Creado',
    field: 'createdBy.email',
    align: 'center',
    sortable: true
  },
  { name: 'createdAt', label: 'Creado el', field: 'createdAt' },
  {
    name: 'modifiedBy',
    label: 'Modificado',
    field: 'updatedBy.email',
    align: 'center',
    sortable: true
  },
  { name: 'modifiedAt', label: 'Modificado el', field: 'modifiedAt' },
  {
    name: 'status',
    label: 'Estado',
    field: 'statusText',
    align: 'center'
  }
])

const rows = computed(() =>
  vehicles.value.map((v: Vehicle) => ({ ...v, statusText: getStatusText(v.status) }))
)

onMounted(() => store.getVehicles())
</script>

<template>
  <q-table
    class="bg-dark"
    :rows
    :columns
    :visible-columns="visibleColumns"
    :filter="props.filter"
    :pagination="{ page: 1, rowsPerPage: ITEMS_PER_PAGE }"
    :rows-per-page-options="[5, 10, 25, 50, 100]"
    row-key="id"
    separator="horizontal"
    no-data-label="No se encontaron vehiculos"
    flat
  >
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
</template>

<style lang="scss" scoped>
.vehicle-sub {
  font-size: 0.85rem;
  color: $muted-text;
}

.status-td {
  width: 160px;
}
</style>
