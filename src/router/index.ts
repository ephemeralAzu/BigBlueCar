import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'Аутентификация',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/find',
      name: 'Найти попутку',
      component: () => import('../views/FindView.vue')
    },
    {
      path: '/create',
      name: 'Опубликовать поездку',
      component: () => import('../views/CreateView.vue')
    }
  ]
})

export default router
