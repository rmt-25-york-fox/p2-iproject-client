import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";

// import './assets/main.css'

const app = createApp(App);
// app.component("Pagination", Pagination);
const pinia = createPinia();
// Vue.use(BootstrapVue);
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount("#app");
