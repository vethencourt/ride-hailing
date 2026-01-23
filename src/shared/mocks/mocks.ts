import type { User } from '@/auth/types'
import type { Vehicle } from '@/vehicles/types'

export const USER: User = {
  id: '',
  email: 'name@email.com'
}

export const VEHICLES: Vehicle[] = Array.from({ length: 50 }).map((_, i) => {
  const idx = i + 1
  const pattern = idx % 3
  const now = new Date().toISOString()

  if (pattern === 1) {
    return {
      id: String(idx),
      make: 'Toyota',
      model: 'Yaris',
      year: 2020,
      status: 'AVAILABLE',
      createdAt: now,
      updatedAt: now,
      updatedBy: USER,
      createdBy: USER
    }
  }

  if (pattern === 2) {
    return {
      id: String(idx),
      make: 'Volkswagen',
      model: 'Golf',
      year: 2018,
      status: 'SERVICING',
      createdAt: now,
      updatedAt: now,
      updatedBy: USER,
      createdBy: USER
    }
  }

  return {
    id: String(idx),
    make: 'Ford',
    model: 'Mustang',
    year: 1967,
    status: 'MAINTENANCE',
    createdAt: now,
    updatedAt: now,
    updatedBy: USER,
    createdBy: USER
  }
})
