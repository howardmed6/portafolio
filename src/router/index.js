import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../pages/AppHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
