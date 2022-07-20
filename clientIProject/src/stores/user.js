import {defineStore} from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useUserStore = defineStore({
    id:'user',
    state:()=>({
        isLogin:false,
        baseUrl:'http://localhost:3000'
    })
})