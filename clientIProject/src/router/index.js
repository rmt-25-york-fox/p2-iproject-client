import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisPage from '../views/RegisterPage.vue'


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
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const access_token = localStorage.access_token
  if(access_token && to.name === 'login'){
    next({name:'home'})
  }else if(!access_token && (to.name === 'home'||to.name === 'myheroes')){
    next({name:'login'})
  }else{
    next()
  }
})

export default router
