// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
//

// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://joblezz-h8-production.up.railway.app'

export const useJoblezzStore = defineStore('joblezz', {

  // STATE
  state: () => ({
    isLogin: false,
    isLoading: false,
    isPremium: false,
    dataJobs: [],
    oneJob : {},
    dataHistory: [],
  }),

  actions: {
    
    // REGISTER
    async register({ email, password }) {
      try {
        let { data } = await axios({
          url: baseUrl + '/register',
          method: 'POST',
          data: { email, password }
        })

        console.log(data, '<<<<<< HASIL REGISTER');

        // NOTIF
        Swal.fire(
          'SUKSES!',
          'Berhasil daftar bosss!',
          'success'
        )

        // SET PAGE TO LOGIN
        this.router.push('/login')

        // console.log();

      } catch (err) {
        console.log(err);
        Swal.fire(
          'ERROR!',
          'Ada yang salah boss',
          'error'
        )
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

        console.log(data, '<<<<<<< DATA DARI LOGIN');
        
        this.isLogin = true;
        // this.router.push({ name: 'HomePage' });
        this.router.push('/');

        // SET TO LOCALSTORAGE
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.email)
        localStorage.setItem('isPremium', data.isPremium)
        this.isPremium = data.isPremium
        
        // NOTIF
        Swal.fire(
          'SUKSES!',
          'Berhasil login bosss!',
          'success'
        )
      
      } catch (err) {
        console.log(err);
        Swal.fire(
          'GAGAL BOSQUE!',
          'Email/Pass salah',
          'error'
        )
      }
    },


    // LOGOUT - DONE
    logout() {
      this.isLogin = false
      localStorage.clear()
      // NOTIF
      Swal.fire(
        'SUKSES!',
        'Berhasil logout bosss!',
        'success'
      )

      this.router.push({ name: 'LoginPage'})
    },


    // GET HISTORY
    async getHistory(id) {
      try {
        const { data } = await axios({
          url: baseUrl + '/gethistory',
          method: "GET",
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        });

        console.log(data, '<<<<<<< getHistory');

        this.dataHistory = data
      
      } catch (err) {
        console.log(err);
      }
    },


    // APPLY TO JOB
    async applyJob(job) {
      try {
        const { data } = await axios({
          url: baseUrl + '/applyjob',
          method: "POST",
          data: { job },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        });

        // console.log(data, '<<<<<<< applyJob');

        Swal.fire(
          'SUKSES!',
          'Berhasil apply kerjaan!',
          'success'
        )

        // SET PAGE TO LOGIN
        this.router.push('/profile')
      
      } catch (err) {
        console.log(err);
        Swal.fire(
          'ERROR!',
          'Anda harus premium boss! Maksimal cuma 3 kalo gratis mah!',
          'error'
        )
      }
    },


    // FETCH ALL JOBS - DONE
    async fetchJobs() {

      try {

        // SET LOADING to TRUE
        this.isLoading = true

        const { data } = await axios({
          url: baseUrl + '/getalljobs',
          method: "GET",
        });

        this.dataJobs = data;

        // SET LOADING to FALSE
        this.isLoading = false

      } catch (err) {
        console.log(err);
      }
    },


    // GET ONE USER - DONE
    async getOneUser() {
      try {
        const { data } = await axios({
          url: baseUrl + '/getuser',
          method: "GET",
        });

        console.log(data, '<<<<<<< getOneUser CLIENT');

        // UPDATE LOCALSTORAGE
        localStorage.setItem('isPremium', data.isPremium)
        
        // UPDATE isPremium STATE
        this.isPremium = data.isPremium


      } catch (err) {
        console.log(err);
      }
    }, //


    // CHANGE TO PREMIUM
    async changePremium() {
      try {
        const { data } = await axios({
          url: baseUrl + '/getpremium',
          method: "PATCH",
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        });

        // console.log(data, '<<<<<<< changePremium');

        // UPDATE THE USER to LOCALSTORAGE
        this.getOneUser()

        Swal.fire(
          'SUKSES!',
          'Selamat udah jadi member premium boss!',
          'success'
        )
      
      } catch (err) {
        console.log(err);
        Swal.fire(
          'GAGAL!',
          'Bayar dulu bosss',
          'error'
        )
      }
    },


    // GET PREMIUM
    async getPremium() {

      try {

        // GET MIDTRANS TOKEN
        const { data } = await axios({
          url: baseUrl + '/generate-midtrans-token',
          method: "POST",
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        });

        this.dataJobs = data;

        const cp = this.changePremium

        // SHOW MODAL MIDTRANS
        window.snap.pay(data.token, {
          onSuccess: function(result){
            
            // console.log(result);
            
            // CHANGE TO PREMIUM
            cp()

          },
          onPending: function(result){
            /* You may add your own implementation here */
            // alert("wating your payment!");
            console.log(result);
          },
          onError: function(result){
            /* You may add your own implementation here */
            // alert("payment failed!");
            console.log(result);
          },
          onClose: function(){
            /* You may add your own implementation here */
            // alert('you closed the popup without finishing the payment');
          }
        })

      } catch (err) {
        console.log(err);
      }
    },

    // SET ONE JOB FOR JOBPAGE
    getOneJob(job) {
      // console.log(job, '<<<<<<< job dari getOneJob')
      this.oneJob = job
    },
    
  },


})