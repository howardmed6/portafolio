import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../pages/AppHome.vue'
import AppContact from '../pages/AppContact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
