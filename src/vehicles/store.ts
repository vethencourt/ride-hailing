import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { CreateVehicle, Vehicle, VehicleListRequest, VehicleStatus } from './types'

import { useAuthStore } from '@/auth/store'
import { ITEMS_PER_PAGE } from '@/shared/constants/numbers'
import { formatDate } from '@/shared/utils/date'

import {
  fetchVehicles,
  createVehicle as createVehicleService,
  updateVehicle as updateVehicleService
} from './service'

export const useVehicleStore = defineStore('vehicles', () => {
  const authStore = useAuthStore()

  const vehicles = ref<Vehicle[]>([])
  const isLoading = ref(false)
  const isStatusLoading = ref(false)
  const error = ref<string | null>(null)
  const pagination = ref({
    page: 1,
    rowsPerPage: ITEMS_PER_PAGE,
    rowsNumber: 0,
    sortBy: 'createdAt',
    descending: true
  })

  const getVehicleCount = computed((): number => vehicles.value.length)

  async function getVehicles(body: VehicleListRequest) {
    isLoading.value = true

    try {
      const response = await fetchVehicles(body)
      const { pagination: pResponse, vehicles: vResponse } = response

      pagination.value.rowsNumber = pResponse.totalItems
      pagination.value.page = pResponse.currentPage
      pagination.value.rowsPerPage = pResponse.pageSize

      vehicles.value = vResponse.map((v) => {
        return {
          ...v,
          createdAt: formatDate(v.createdAt),
          updatedAt: formatDate(v.updatedAt)
        }
      })
    } catch (err: any) {
      error.value = err.response?.data?.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function createVehicle(vehicleForm: CreateVehicle) {
    isLoading.value = true
    error.value = null

    try {
      const response = await createVehicleService(vehicleForm)
      const newVehicle: Vehicle = {
        ...response,
        createdBy: authStore.user!,
        updatedBy: authStore.user!,
        createdAt: formatDate(response.createdAt),
        updatedAt: formatDate(response.updatedAt)
      }
      vehicles.value.unshift(newVehicle)
    } catch (err: any) {
      error.value = err.response?.data?.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function changeVehicleStatus(id: string, status: VehicleStatus) {
    isStatusLoading.value = true
    error.value = null

    try {
      const updated = await updateVehicleService({ status }, id)
      const formatted: Vehicle = {
        ...updated,
        createdAt: formatDate(updated.createdAt),
        updatedAt: formatDate(updated.updatedAt)
      }
      const i = vehicles.value.findIndex((v: Vehicle) => v.id === id)
      if (i !== -1) vehicles.value[i] = formatted
      else vehicles.value.unshift(formatted)
    } catch (err: any) {
      error.value = err.response?.data?.message
      throw err
    } finally {
      isStatusLoading.value = false
    }
  }

  return {
    vehicles,
    isLoading,
    isStatusLoading,
    error,
    pagination,
    getVehicles,
    createVehicle,
    changeVehicleStatus,
    getVehicleCount
  }
})
