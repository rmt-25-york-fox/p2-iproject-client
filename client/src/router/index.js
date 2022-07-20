import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import CharactersPage from "../views/CharactersPage.vue";
import LeaderboardsPage from "../views/LeaderboardsPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/characters",
      name: "CharactersPage",
      component: CharactersPage,
    },
    {
      path: "/leaderboards",
      name: "LeaderboardsPage",
      component: LeaderboardsPage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
  ],
});

export default router;
