import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import CharactersPage from "../views/CharactersPage.vue";
import LeaderboardsPage from "../views/LeaderboardsPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import BeforePlayPage from "../views/BeforePlayPage.vue";
import PlayingPage from "../views/PlayingPage.vue";
import MyCollectionPage from "../views/MyCollectionPage.vue";

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
    {
      path: "/create-user",
      name: "BeforePlayPage",
      component: BeforePlayPage,
    },
    {
      path: "/gameplay",
      name: "PlayingPage",
      component: PlayingPage,
    },
    {
      path: "/mycollections",
      name: "MyCollectionPage",
      component: MyCollectionPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("access_token");
  if (
    !isLogin &&
    to.name !== "LoginPage" &&
    to.name !== "LandingPage" &&
    to.name !== "RegisterPage" 
  ) {
    next("/login");
  } else if (
    isLogin &&
    (to.name === "LoginPage" || to.name === "RegisterPage")
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
