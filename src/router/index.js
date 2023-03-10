import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import ProfilePage from '../pages/ProfilePage.vue'
import JobPage from '../pages/JobPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/job',
      name: 'JobPage',
      component: JobPage
    },
  ]
})





export default router