import { createRouter, createWebHistory } from 'vue-router';
import LandingView from '../views/LandingView.vue';
import GoogleMapsView from '../views/GoogleMapsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/gmaps',
      name: 'gmaps',
      component: GoogleMapsView,
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('access_token');

//   if(to.name !== 'login' && !token){
//     next('/pub/login');
//   // } else if (to.name === 'login' && token){
//   //   next('/');
//   // } else if(to.name === 'bookmark' && !token) {
//   //   next('/');
//   } else {
//     next();
//   }
// });

export default router;
