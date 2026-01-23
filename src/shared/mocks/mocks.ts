import type { User } from '@/auth/types'
import type { Vehicle } from '@/vehicles/types'

export const USER: User = {
  id: '',
  email: 'name@email.com'
}

export const VEHICLES: Vehicle[] = [
  {
    id: '',
    make: 'Toyota',
    model: 'Yaris',
    year: 2020,
    status: 'AVAILABLE',
    createdAt: '0',
    updatedAt: '0',
    updatedBy: USER,
    createdBy: USER
  },
  {
    id: '',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2018,
    status: 'SERVICING',
    createdAt: '0',
    updatedAt: '0',
    updatedBy: USER,
    createdBy: USER
  },
  {
    id: '',
    make: 'Ford',
    model: 'Mustang',
    year: 1967,
    status: 'MAINTENANCE',
    createdAt: '0',
    updatedAt: '0',
    updatedBy: USER,
    createdBy: USER
  },
  {
    id: '',
    make: 'Toyota',
    model: 'Yaris',
    year: 2020,
    status: 'AVAILABLE',
    createdAt: '0',
    updatedAt: '0',
    updatedBy: USER,
    createdBy: USER
  },
  {
    id: '',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2018,
    status: 'SERVICING',
    createdAt: '0',
    updatedAt: '0',
    updatedBy: USER,
    createdBy: USER
  },
  {
    id: '',
    make: 'Ford',
    model: 'Mustang',
    year: 1967,
    status: 'MAINTENANCE',
    createdAt: '0',
    updatedAt: '0',
    updatedBy: USER,
    createdBy: USER
  }
]
