import { createApp, markRaw } from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store}) => {
    store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.mount('#app')