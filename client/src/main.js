import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import VueMapbox from "vue-mapbox";
import Mapbox from "mapbox-gl";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
// Vue.use(VueMapbox, { mapboxgl: Mapbox });
app.use(pinia);

app.mount("#app");
