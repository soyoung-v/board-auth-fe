import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      component: () => import('../views/SignUp.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/SignIn.vue'),
    }
  ],
})

export default router
