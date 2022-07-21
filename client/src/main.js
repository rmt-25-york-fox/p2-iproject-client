import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(createVuestic());
app.use(pinia);
app.use(router);

app.mount("#app");
