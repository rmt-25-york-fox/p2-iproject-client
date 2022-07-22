import { defineStore } from 'pinia'
import axios from 'axios'
import axiosInstance from '../axiosInstance'
import Swal from 'sweetalert2'

export const useSportStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl: 'http://localhost:3000',
    isLogin: '',
    isError: '',
    page: 0,
    title: '',
    rating: '',
    genreId: '',
    sports: [],
    fitness: [],
    histories: [],
    plans: [
      { name: 'Free', price: 0, benefit1: 'Join community' },
      {
        name: 'Gold',
        price: 100000,
        benefit1: 'Join community',
        benefit2: 'Get personal trainer'
      },
      {
        name: 'Premium',
        price: 1000000,
        benefit1: 'Join community',
        benefit2: 'Get personal trainer',
        benefit3: 'Get nutritionist'
      }
    ]
  }),
  getters: {
    doubleCount: state => state.counter * 2
  },
  actions: {
    async signUpHandler(objCredential) {
      try {
        console.log(objCredential.email, objCredential.password, '<<<<<<<<')
        const returnData = await axios.post(this.baseUrl + '/register', {
          email: objCredential.email,
          password: objCredential.password
        })

        console.log(returnData.data)

        Swal.fire({
          icon: 'success',
          title: `Success!`,
          text: `You have been successfully registered`
        })

        this.router.push({ name: 'login' })
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: `Error  ${err.response.status} ${err.response.statusText}!`,
          text: err.response.data.message
        })
      }
    },
    toRegisterPage() {
      this.router.push({ name: 'register' })
      console.log('toSignUp terpanggil')
    },
    toLoginPage() {
      this.router.push({ name: 'login' })
      console.log('toSignUp terpanggil')
    },
    toHomePage() {
      this.router.push({ name: 'home' })
      console.log('toSignUp terpanggil')
    },
    async changeSubscribe() {
      try {
        axios({
          method: 'patch',
          url: `${this.baseUrl}/changeSubscribe`,
          headers: { access_token: localStorage.access_token },
          data: { email: localStorage.email }
        })

        Swal.fire(
          'Success',
          'You are subscribed! Thank you for using our service!',
          'success'
        )
      } catch (err) {
        console.log(err)
      }
    },
    toSubscribePage() {
      this.router.push({ name: 'subscribe' })
    },
    async getHistories() {
      try {
        const response = await axios.get(this.baseUrl + '/pub/histories', {
          headers: { access_token: localStorage.access_token }
        })

        console.log('isi test axios getHistories>>>>', response.data.data)

        this.histories = response.data.data
        console.log('this histories>>>>', this.histories)
      } catch (err) {
        console.log(err)
      }
    },
    toHistory() {
      this.getHistories()
      this.router.push({ name: 'history' })
      this.getHistories()
    },

    handleCredentialResponse(response) {
      console.log('Encoded JWT ID token: ' + response.credential)
      axios({
        method: 'POST',
        url: `${this.baseUrl}/google-sign-in`,
        headers: { credential: response.credential }
      })
        .then(res => {
          console.log(res)
          const { access_token, email } = res.data

          localStorage.access_token = access_token
          localStorage.email = email

          this.getMovies()
          this.getHistories()

          this.isLogin = true
          this.page = 'HomePage'
        })
        .catch(err => {
          console.log(err, 'Google sign in error!')
        })
    },

    mounted() {
      if (localStorage.access_token && localStorage.email) {
        this.isLogin = true
      }
      const cb = this.handleCredentialResponse

      window.onload = function () {
        google.accounts.id.initialize({
          client_id:
            '983408498980-8si4t9mtg6i4daaknelku7adsc7cr4n9.apps.googleusercontent.com',
          callback: cb
        })
        google.accounts.id.renderButton(
          document.getElementById('google-button-login'),
          { theme: 'outline', size: 'large' }
        )
      }
    },
    async logoutHandler() {
      try {
        if (!localStorage.access_token) {
          Swal.fire({
            icon: 'error',
            title: `Error!`,
            text: `Please login first!`
          })
        } else {
          localStorage.clear()

          Swal.fire({
            icon: 'success',
            title: `Success!`,
            text: `You are successfully logout`
          })

          this.router.push({ name: 'login' })

          // this.router.push({ name: 'login' })
          google.accounts.id.revoke(localStorage.email, done => {
            google.accounts.id.disableAutoSelect()
            console.log('consent revoked')
            localStorage.clear()

            Swal.fire({
              icon: 'success',
              title: `Success!`,
              text: `You are successfully logout`
            })

            localStorage.clear()

            this.router.push({ name: 'login' })

            console.log('logout terpanggil')
            this.mounted()
          })
          this.mounted()
        }
      } catch (err) {
        console.log(err)
      }
    },
    async addFitness(objFitness) {
      console.log('Add Fitness')
      try {
        const access_token = localStorage.getItem('access_token')

        console.log('access_token>>>', access_token)
        const { data } = await axios({
          method: 'put',
          url: `${this.baseUrl}/pub/updateFitness`,
          headers: { access_token: access_token },
          data: {
            height: objFitness.height,
            weight: objFitness.weight,
            neck: objFitness.neck,
            waist: objFitness.waist,
            hip: objFitness.hip,
            goal: objFitness.goal,
            activitylevel: objFitness.activitylevel
          }
        })
        Swal.fire({
          icon: 'success',
          title: `Success!`,
          text: `You're data has been successfully added`
        })
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
    toAddFitnessPage() {
      this.router.push({ name: 'add' })
    },
    toEditFitnessPage() {
      this.router.push({ name: 'edit' })
    },
    toHomePage() {
      this.fetchSports()
      this.fetchFitness()
      this.router.push({ name: 'home' })
      this.fetchFitness()
    },
    toChatPage() {
      this.router.push({ name: 'chat' })
    },
    async fetchFitness() {
      try {
        console.log('fetchFitness')
        const access_token = localStorage.getItem('access_token')

        console.log('access token fetch Fitness>>>>>', access_token)

        const { data } = await axios({
          method: 'get',
          url: `${this.baseUrl}/pub/fitness`,
          headers: {
            access_token: access_token
          }
        })
        console.log('data Fitness>>>>>', data)

        this.fitness = data.data
        console.log('data Fitness>>>>>', data)
      } catch (err) {
        console.log(err)
      }
    },
    async pagination(objQuery) {
      try {
        console.log('HIT PAGINATION')
        if (!objQuery.page) {
          this.page = 0
          objQuery.page = 0
        } else if (objQuery.page) {
          this.page = objQuery.page
        }

        this.page = objQuery.page

        console.log('queries>>>', this.page)

        const response = await axiosInstance.get(
          `${this.baseUrl}/sports?page=${this.page}&size=8`
        )
        console.log('response>>>', response)
        this.sports = response.data.data.sports

        console.log('RESPONSE THIS sports >>>>', this.sports)
      } catch (err) {
        console.log(err)
      }
    },
    async fetchSports() {
      try {
        const access_token = localStorage.getItem('access_token')
        const { data } = await axios({
          method: 'get',
          url: `${this.baseUrl}/sports`,
          headers: {
            access_token: access_token
          }
        })

        this.sports = data.data

        this.sports = this.sports.slice(0, 24)

        console.log('this sports>>', this.sports)
      } catch (err) {
        console.log(err)
      }
    },
    async loginHandler(objCredential) {
      try {
        console.log('loginHandler HITT')
        console.log(objCredential, '<<<<<<<<')
        const returnData = await axios.post(this.baseUrl + '/pub/login', {
          email: objCredential.email,
          password: objCredential.password
        })

        localStorage.setItem('access_token', returnData.data.access_token)
        localStorage.setItem('name', returnData.data.name)
        localStorage.setItem('email', returnData.data.email)

        console.log(returnData, '<<<<<<<returnData LoginHandler')

        this.isLogin = true

        Swal.fire({
          icon: 'success',
          title: `Success!`,
          text: `You are successfully login`
        })

        this.pagination()

        this.router.push({ name: 'home' })

        this.pagination()
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: `Error  ${err.response.status} ${err.response.statusText}!`,
          text: err.response.data.message
        })
      }
    }
  }
})
