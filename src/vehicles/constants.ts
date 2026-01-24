export const MAKES = ['Toyota', 'Volkswagen', 'Ford']

export const MODELS = ['Corolla', 'Golf', 'Focus']

const startYear = 1960
const endYear = 2026
const length = { length: endYear - startYear + 1 }
export const YEARS = Array.from(length, (_, i) => startYear + i)

export const CREATE_TITLE = 'Registrar Vehículo'
