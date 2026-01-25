import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { Notify } from 'quasar'

import type { CreateVehicle, Vehicle, VehicleStatus } from './types'

import { NOTIFY_TIME } from '@/shared/constants/numbers'
import { USER } from '@/shared/mocks/mocks'
import { formatDate } from '@/shared/utils/date'

import { fetchVehicles } from './service'

export const useVehicleStore = defineStore('vehicles', () => {
  const vehicles = ref<Vehicle[]>([])
  const isLoading = ref(false)
  const isStatusLoading = ref(false)
  const error = ref<string | null>(null)

  const getVehicle = computed(
    () =>
      (id: string): Vehicle | undefined =>
        vehicles.value.find((v) => v.id === id)
  )
  const getVehicleCount = computed((): number => vehicles.value.length)

  async function getVehicles() {
    isLoading.value = true
    const response = await fetchVehicles()

    vehicles.value = response.map((v) => {
      return {
        ...v,
        createdAt: formatDate(v.createdAt),
        updatedAt: formatDate(v.updatedAt)
      }
    })

    isLoading.value = false
  }

  async function createVehicle(vehicleForm: CreateVehicle) {
    isLoading.value = true
    setTimeout(() => {
      const status = vehicleForm.status as VehicleStatus
      const vehicle: Vehicle = {
        ...vehicleForm,
        id: crypto.randomUUID(),
        createdAt: formatDate(new Date().toISOString()),
        updatedAt: formatDate(new Date().toISOString()),
        createdBy: USER,
        updatedBy: USER,
        status
      }
      vehicles.value.push(vehicle)

      isLoading.value = false
      Notify.create({
        type: 'positive',
        message: `Vehículo creado`,
        timeout: NOTIFY_TIME,
        classes: 'notify-dark-text'
      })
    }, 2500)
  }

  async function changeVehicleStatus(id: string, status: VehicleStatus) {
    isStatusLoading.value = true
    setTimeout(() => {
      const vehicle = vehicles.value.find((v) => v.id === id)

      if (vehicle) {
        vehicle.status = status
        const { make, model, year } = vehicle
        isStatusLoading.value = false

        Notify.create({
          type: 'positive',
          message: `Estado de ${make} ${model} ${year} actualizado`,
          timeout: NOTIFY_TIME,
          classes: 'notify-dark-text'
        })

        return
      }
      isStatusLoading.value = false
    }, 2500)
  }

  return {
    vehicles,
    isLoading,
    isStatusLoading,
    error,
    getVehicles,
    createVehicle,
    changeVehicleStatus,
    getVehicle,
    getVehicleCount
  }
})
