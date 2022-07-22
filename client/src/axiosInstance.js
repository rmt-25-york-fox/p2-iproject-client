import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/pub',
  headers: { access_token: localStorage.access_token }
})

export default instance
