import { createRouter, createWebHistory } from 'vue-router'

import { VEHICLE_LIST, VEHICLE_CREATE, AUTH_LOGIN, AUTH_SIGNUP } from '../constants/routeNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '', // Matches "/" exactly
          redirect: '/fleet' // Send to /fleet
        },
        {
          path: 'fleet',
          name: VEHICLE_LIST,
          component: () => import('@/vehicles/components/VehicleList.vue')
        },
        {
          path: 'fleet/create',
          name: VEHICLE_CREATE,
          // component: () => import(''@/vehicles/components/VehicleForm.vue'')
          component: { template: '<div>Vehicle Form</div>' }
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
          // component: () => import('@/auth/components/loginForm.vue')
          component: { template: '<div><login/div>' }
        },
        {
          path: 'signup',
          name: AUTH_SIGNUP,
          // component: () => import('@/auth/components/SignupForm.vue')
          component: { template: '<div>signup</div>' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../components/NotFound.vue')
    }
  ]
})

export default router
