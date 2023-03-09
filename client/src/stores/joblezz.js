// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
//

const baseUrl = 'http://localhost:3000'
// const baseUrl = ''

export const useJoblezzStore = defineStore('joblezz', {

  // STATE
  state: () => ({
    isLogin: false,
    dataJobs: [],
    oneJob : ''
  }),

  actions: {
    
    // REGISTER
    async register({ email, password }) {
      try {
        let role = 'customer'
        let { data } = await axios({
          url: baseUrl + '/register',
          method: 'POST',
          data: { email, password, role}
        })

        // SET PAGE TO LOGIN
        // NOTIF
        this.router.push({ name: 'LoginPage'})

      } catch (err) {
        console.log(err);
      }

    },

    // LOGIN
    async login({ email, password }) {
      try {
        const { data } = await axios({
          url: baseUrl + '/login',
          method: 'POST',
          data: { email, password },
        });
        
        this.isLogin = true;
        this.router.push({ name: 'HomePage' });

        // SET TO LOCALSTORAGE
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)
        
        // NOTIF
      
      } catch (err) {
        console.log(err);
      }
    },


    // LOGOUT - DONE
    logout() {
      this.isLogin = false
      localStorage.clear()
      // NOTIF
      this.router.push({ name: 'LoginPage'})
    },


    // FETCH ALL JOBS - DONE
    async fetchJobs() {

      try {
        const { data } = await axios({
          url: baseUrl + '/getalljobs',
          method: "GET",
        });

        this.dataJobs = data;

      } catch (err) {
        console.log(err);
      }
    },


    // FETCH ONE JOB FOR DETAIL
    async getOneJob(id) {

      try {
        const { data } = await axios({
          url: baseUrl + `/jobs/${id}`,
          method: 'GET',
        });

        this.oneJob = data;

        // this.router.push(`/jobs/${id}`)

      } catch (err) {
        console.log(err);
      }
    },
    
  },


})