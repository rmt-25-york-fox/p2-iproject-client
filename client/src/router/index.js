import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import MyTodosPage from '../views/MyTodosPage.vue'
import ChatPage from '../views/ChatPage.vue'
import AddFitnessPage from '../views/AddFitnessPage.vue'
import HistoryPage from '../views/HistoryPage.vue'
import SubscribePage from '../views/SubscribePage.vue'
import RegisterPage from '../views/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/mytodos',
      name: 'mytodos',
      component: MyTodosPage
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatPage
    },
    {
      path: '/add',
      name: 'add',
      component: AddFitnessPage
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryPage
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: SubscribePage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else next()
})

export default router
