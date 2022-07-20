import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisPage from '../views/RegisterPage.vue'
import DetailPage from '../views/DetailPage.vue'
import AddRequestPage from '../views/AddRequestPage.vue'
import MyTaskPage from '../views/MyTaskPage2.vue'
import MyRequestPage from '../views/MyRequestPage.vue'

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
      component : LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component : RegisPage
    },
    {
      path: '/request/:id',
      name: 'detail',
      component : DetailPage
    },
    {
      path: '/myTask',
      name: 'myTask',
      component : MyTaskPage
    },
    {
      path: '/myRequest',
      name: 'myRequest',
      component : MyRequestPage
    },
    {
      path: '/addRequest',
      name: 'addRequest',
      component : AddRequestPage
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const access_token = localStorage.access_token
  if(access_token && to.name === 'login'){
    next({name:'home'})
  }else if(!access_token && (to.name === 'home'||to.name === 'detail'||to.name === 'addRequest'||to.name ==='myRequest'||to.name ==='myTask')){
    next({name:'login'})
  }else{
    next()
  }
})

export default router
