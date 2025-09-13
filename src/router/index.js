import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../pages/AppHome.vue'
import AppContactPage from '../pages/AppContactPage.vue'
import AppAboutmePage from '../pages/AppAboutmePage.vue'
import AppCookiesPage from '@/pages/AppCookiesPage.vue'
import AppPrivacyPage from '@/pages/AppPrivacyPage.vue'
import NeighborhoodInfographicPage from '../pages/NeighborhoodInfographicPage.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/contact',
    name: 'Contact',
    component: AppContactPage
  },
 {
    path: '/about-me',
     name: 'AboutMe',
    component: AppAboutmePage
   },
   {
     path: '/cookies',
     name: 'Cookies',
     component: AppCookiesPage
   },
   {
     path: '/privacy',
     name: 'Privacy',
     component: AppPrivacyPage
   },
   {
     path: '/senaneighborhoodInfographic',
     name: 'NeighborhoodInfographic',
     component: NeighborhoodInfographicPage
   }

]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
