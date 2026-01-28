<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'

import type { Vehicle, VehicleListRequest } from '../types'
import type { QTableProps } from 'quasar'

import { useVehicleStore } from '@/vehicles/store'

import StatusSelect from './StatusSelect.vue'
import { getStatusText } from '../utils'

// define a prop to receive the search term
const props = defineProps<{
  filter: string
}>()

const store = useVehicleStore()
// TODO: use isLoading
const { vehicles, /*isLoading,*/ pagination } = storeToRefs(store)

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

async function handleRequest(requestProps: any) {
  const { page, rowsPerPage, sortBy, descending } = requestProps.pagination
  pagination.value.sortBy = sortBy
  pagination.value.descending = descending

  const requestBody: VehicleListRequest = {
    pagination: {
      page: page || 1,
      pageSize: rowsPerPage || 10
    },
    searchTerm: props.filter,
    sortBy: sortBy || 'createdAt',
    sortOrder: descending ? '-1' : '1'
  }

  await store.getVehicles(requestBody)
}

onMounted(() => {
  handleRequest({
    pagination: pagination.value,
    filter: props.filter
  })
})
</script>

<template>
  <q-table
    class="bg-dark"
    separator="horizontal"
    row-key="id"
    no-data-label="No se encontaron vehiculos"
    :rows
    :columns
    :visible-columns="visibleColumns"
    :filter="props.filter"
    :pagination
    :rows-per-page-options="[5, 10, 25, 50, 100]"
    @request="handleRequest"
    binary-state-sort
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
      <div class="full-width row flex-center q-gutter-sm q-pa-lg muted-text">
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
