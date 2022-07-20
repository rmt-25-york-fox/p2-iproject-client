import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginPage.vue";
import Register from "../views/RegisterPage.vue";
import MyTransaksi from "../views/Mygas.vue";
import Home from "../views/HomePage.vue";
import Buygas from "../views/BuyGas.vue";
import Listgas from "../views/ListGas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/petrol",
      name: "Listgas",
      component: Listgas,
    },
    {
      path: "/transaksi",
      name: "MyTransaksi",
      component: MyTransaksi,
    },
    {
      path: "/transaksi/:id",
      name: "Buygas",
      component: Buygas,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("accesstoken");
  if (
    (to.name === "Home" ||
      to.name === "Listgas" ||
      to.name === "MyTransaksi" ||
      to.name === "Buygas") &&
    !isAuthenticated
  ) {
    next({ name: "Login" });
  } else if (
    (to.name === "Login" || to.name === "Register") &&
    isAuthenticated
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
