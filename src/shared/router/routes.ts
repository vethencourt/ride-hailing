import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DashboardLayout.vue'),
      children: [
        {
          path: '',
          // component: () => import('../modules/vehicles/components/VehiclesList.vue')
          component: { template: '<div>Vehicle List</div>' }
        },
        {
          path: 'create',
          // component: () => import('../modules/vehicles/components/CreateVehicle.vue')
          component: { template: '<div>Vehicle Form</div>' }
        }
      ]
    },
    {
      path: '/',
      component: () => import('../layouts/AuthLayout.vue'),
      children: [
        // { path: 'login', component: () => import('../modules/auth/components/login.vue') },
        // { path: 'signup', component: () => import('../modules/auth/components/signup.vue') }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../components/NotFound.vue')
    }
  ]
})

export default router
