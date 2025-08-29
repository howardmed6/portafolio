import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../pages/AppHome.vue'

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
  // {
  //   path: '/about-me',
  //   name: 'AboutMe',
  //   component: AppAboutme
  // },
  // {
  //   path: '/cookies',
  //   name: 'Cookies',
  //   component: AppCookies
  // },
  // {
  //   path: '/privacy',
  //   name: 'Privacy',
  //   component: AppPrivacy
  // },
  // {
  //   path: '/timeline',
  //   name: 'Timeline',
  //   component: AppTimeline
  // }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
