import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import MyOrder from "../views/MyOrder.vue";
import DeliveryView from "../views/DeliveryView.vue";
import CekOngkir from "../views/CekOngkir.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/myorder",
      name: "myorder",
      component: MyOrder,
    },
    {
      path: "/delivery",
      name: "delivery",
      component: DeliveryView,
    },
    {
      path: "/cekongkir",
      name: "cekongkir",
      component: CekOngkir,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");
  if (to.name === "login" && token) {
    next("/");
  } else if (to.name === "register" && token) {
    next("/");
  } else if (to.name === "myorder" && !token) {
    next("/login");
  } else if (to.name === "delivery" && !token) {
    next("/login");
  } else {
    next();
  }
});
export default router;
