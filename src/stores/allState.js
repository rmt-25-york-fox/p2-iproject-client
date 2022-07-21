import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:3000';

export const useAllStateStore = defineStore({
  id: 'allState',
  state: () => ({
    isLoggedIn: false,
    merchants: [],
    favorites: [],
  }),
  actions: {
    logoutHandler(){
      localStorage.clear();
      this.isLoggedIn = false;

      this.router.push('/');
    },
    async loginHandler(objFormUser){
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          phoneNumber: objFormUser.phoneNumber,
        });

        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('id', response.data.id);
        localStorage.setItem('fullName', response.data.fullName);
        localStorage.setItem('phoneNumber', response.data.phoneNumber);
        localStorage.setItem('role', response.data.role);

        this.isLoggedIn = true;
        this.router.push('/');

      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.message
        });
      }
    },
    async registerHandler(objFormUser){
      try {
        const response = await axios.post(`${baseUrl}/register`, {
          phoneNumber: objFormUser.phoneNumber,
          role: 'Admin'
        });

        this.router.push('/');

      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
        });
      }
    },
    async getMerchants(){
      try {
        const response = await axios.get(`${baseUrl}/merchants`, {
          headers: {
            access_token: localStorage.getItem('access_token'),
          },
        });
        this.merchants = response.data;
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message
        });
      }
    },
    // async addMyHeroes(HeroId){
    //   try {
    //     const response = await axios(`${baseUrl}/myheroes/${HeroId}`, {
    //       method: 'POST',
    //       headers: {
    //         access_token: localStorage.getItem('access_token'),
    //       },
    //     });
    //   } catch (err) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: err.response.data.message
    //     });
    //   }
    // },
    // async getMyHeroes(){
    //   try {
    //     const response = await axios.get(`${baseUrl}/myheroes`, {
    //       headers: {
    //         access_token: localStorage.getItem('access_token'),
    //       },
    //     });

    //     this.myHeroes = response.data;
    //   } catch (err) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: err.response.data.message
    //     });
    //   }
    // },
    // async playMyHeroes(HeroId){
    //   try {
    //     const response = await axios(`${baseUrl}/myheroes/${HeroId}`, {
    //       method: 'PATCH',
    //       headers: {
    //         access_token: localStorage.getItem('access_token'),
    //       },
    //     });
    //   } catch (err) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: err.response.data.message
    //     });
    //   }
    // },
    changeStateIsLoggedIn(){
       if(localStorage.getItem('access_token')){
        this.isLoggedIn = true;
       }
    }
  }
});