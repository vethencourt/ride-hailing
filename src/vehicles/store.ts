import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Vehicle } from './types'

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

  return {
    vehicles,
    loading,
    error,
    getVehicles,
    getVehicle,
    getVehicleCount
  }
})
