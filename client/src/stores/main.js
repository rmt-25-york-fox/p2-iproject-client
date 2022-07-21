import { defineStore } from "pinia";
import axios from 'axios';

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    news: [],
    isLogIn: false,
    user:{
      name: '',
      img: ''
    },
    statusForm: {
      content: '',
      img:''
    },
    allStatus:[]

  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    checkLogin(){
      if(localStorage.getItem('access_token')){
        this.isLogIn = true
      }
    },

    changePage(page){
      if(page=='/login' && this.isLogIn){
        localStorage.clear()
        this.isLogIn=false
      }
      console.log('page')
      this.router.push(page)
    },

    async getNews(){
      const options = {
        method: 'GET',
        url: 'https://east-china-news.p.rapidapi.com/japan',
        headers: {
          'X-RapidAPI-Key': 'd1a4221978msh5fbc3b65fc94825p195a8ajsna694357f70a6',
          'X-RapidAPI-Host': 'east-china-news.p.rapidapi.com'
        }
      };

      let data = await axios.request(options)
      data = data.data

      this.news = []
      
      for(let i=0; i<5; i++){
        this.news.push(data[i])
      }

      console.log(this.news)

    },

    async googleSignIn(){
      try { 
        const gtoken = localStorage.getItem('google_token')

        const customer = await axios.post('https://learngo-en-jp.herokuapp.com/login', {}, {headers: {
          google_token: gtoken
        }})

        console.log(customer.data, "<<<<")

        localStorage.setItem('access_token', customer.data.access_token)
        localStorage.setItem('name', customer.data.username)
        localStorage.removeItem('google_token')

        this.isLogin = true
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    async newStatus(){
      try {
        await axios.post('https://learngo-en-jp.herokuapp.com/newStatus', {
          content: this.statusForm.content,
          imageUrl: this.statusForm.imageUrl
        }, {headers: {
          access_token: localStorage.getItem('access_token')
        }})

        this.statusForm.content = ''
        this.statusForm.imageUrl = ''

        this.getAll()
      } catch (error) {
        console.log(error)
      }
    },

    async getAll(){
      try {
        const all = await axios.get('https://learngo-en-jp.herokuapp.com/all')
        this.allStatus = all.data.data
        console.log(this.allStatus)
      } catch (error) {
        console.log(error)
      }
    }
    
  },
});
