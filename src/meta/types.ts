export interface Make {
  id: string
  name: string
}

export interface Model {
  id: string
  makeId: string
  name: string
}

export interface Year {
  id: string
  modelId: string
  value: number
}
