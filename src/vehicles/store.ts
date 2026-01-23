import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Vehicle, VehicleStatus } from './types'

import { fetchVehicles } from './service'

export const useVehicleStore = defineStore('vehicles', () => {
  const vehicles = ref<Vehicle[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const getVehicle = computed(
    () =>
      (id: string): Vehicle | undefined =>
        vehicles.value.find((v) => v.id === id)
  )
  const getVehicleCount = computed((): number => vehicles.value.length)

  async function getVehicles() {
    loading.value = true
    const response = await fetchVehicles()
    vehicles.value = response
    loading.value = false
  }

  async function changeVehicleStatus(id: string, status: VehicleStatus) {
    const vehicle = vehicles.value.find((v) => v.id === id)
    if (vehicle) vehicle.status = status
  }

  return {
    vehicles,
    loading,
    error,
    getVehicles,
    changeVehicleStatus,
    getVehicle,
    getVehicleCount
  }
})
