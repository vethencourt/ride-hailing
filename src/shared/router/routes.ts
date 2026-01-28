import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '@/auth/store'

import { VEHICLE_LIST, VEHICLE_CREATE, AUTH_LOGIN, AUTH_SIGNUP } from '../constants/routeNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/fleet'
        },
        {
          path: 'fleet',
          name: VEHICLE_LIST,
          component: () => import('@/vehicles/pages/VehiclesPage.vue')
        },
        {
          path: 'fleet/create',
          name: VEHICLE_CREATE,
          component: () => import('@/vehicles/pages/VehicleCreatePage.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: AUTH_LOGIN,
          component: () => import('@/auth/pages/LoginPage.vue')
        },
        {
          path: 'signup',
          name: AUTH_SIGNUP,
          component: () => import('@/auth/pages/SignupPage.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../components/NotFound.vue')
    }
  ]
})

router.beforeEach(async (to, _, next) => {
  const authStore = useAuthStore()
  const isPublicRoute = [AUTH_LOGIN, AUTH_SIGNUP].includes(to.name as string)

  if (!isPublicRoute && !authStore.isAuthenticated) {
    next({ name: AUTH_LOGIN })
  } else if (isPublicRoute && authStore.isAuthenticated) {
    next({ name: VEHICLE_LIST })
  } else {
    next()
  }
})

export default router
