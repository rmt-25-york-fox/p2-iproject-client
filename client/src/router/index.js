import { createRouter, createWebHistory } from "vue-router";
import AddPage from "../views/AddPage.vue";
import DetailPage from "../views/DetailPage.vue";
import HomePage from "../views/HomePage.vue";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import PlanetPage from "../views/PlanetPage.vue";
import RegisterPage from "../views/Register.vue";
import ChatPage from "../views/ChatPage.vue";
import TwitPage from "../views/TwitPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/shuttle",
      name: "landing",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailPage,
    },
    {
      path: "/planet",
      name: "planet",
      component: PlanetPage,
    },
    {
      path: "/add",
      name: "add",
      component: AddPage,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatPage,
    },
    {
      path: "/news",
      name: "news",
      component: TwitPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authen = localStorage.getItem("access_token");
  if (to.name === "login" && authen) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
