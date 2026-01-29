import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Make, Model, Year } from './types'

import { fetchMakes, fetchModels, fetchYears } from './service'

export const useMetaStore = defineStore('meta', () => {
  const makes = ref<Make[]>([])
  const models = ref<Model[]>([])
  const years = ref<Year[]>([])
  const isLoading = ref(false)

  async function getMakes() {
    isLoading.value = true
    try {
      const response = await fetchMakes()
      makes.value = response
    } catch (err: any) {
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function getModels(makeId: string) {
    isLoading.value = true
    try {
      const response = await fetchModels(makeId)
      models.value = response
    } catch (err: any) {
      throw err
    } finally {
      isLoading.value = false
    }
  }

  async function getYears(modelId: string) {
    isLoading.value = true
    try {
      const response = await fetchYears(modelId)
      years.value = response
    } catch (err: any) {
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    makes,
    models,
    years,
    isLoading,
    getMakes,
    getModels,
    getYears
  }
})
