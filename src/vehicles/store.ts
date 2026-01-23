import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Notify } from 'quasar'

import type { Vehicle, VehicleStatus } from './types'

import { NOTIFY_TIME } from '@/shared/constants/numbers'
import { formatDate } from '@/shared/utils/date'

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

    vehicles.value = response.map((v) => {
      return {
        ...v,
        createdAt: formatDate(v.createdAt),
        updatedAt: formatDate(v.updatedAt)
      }
    })

    loading.value = false
  }

  async function changeVehicleStatus(id: string, status: VehicleStatus) {
    const vehicle = vehicles.value.find((v) => v.id === id)
    if (vehicle) {
      vehicle.status = status
      const { make, model, year } = vehicle
      const message = `Estado de ${make} ${model} ${year} actualizado`
      Notify.create({ type: 'positive', message, timeout: NOTIFY_TIME, classes: 'notify-dark-text' })
    }
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
