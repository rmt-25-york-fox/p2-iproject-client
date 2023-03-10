import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/topsites',
      name: 'topsites',
    },
    {
      path: '/urls',
      name: 'urls',
      // component: UrlLists
    }
  ]
})

export default router
