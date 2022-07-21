import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import PokemonDetail from "../views/PokemonDetail.vue";
import GamePage from "../views/GamePage.vue";
import WelcomePage from "../views/WelcomePage.vue";
import LeaderBoard from "../views/LeaderBoard.vue";
import PocketPage from "../views/PocketPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "WelcomePage",
      component: WelcomePage,
    },
    {
      path: "/play",
      name: "GamePage",
      component: GamePage,
    },
    {
      path: "/pokemons",
      name: "HomeView",
      component: HomeView,
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
      path: "/pocket",
      name: "PocketPage",
      component: PocketPage,
    },
    {
      path: "/leaderBoard",
      name: "LeaderBoard",
      component: LeaderBoard,
    },
    {
      path: "/pokemons/:name",
      name: "PokemonDetail",
      component: PokemonDetail,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token");
  if (!access_token && to.name === "GamePage") {
    next({ name: "LoginPage" });
  } else if (
    access_token &&
    (to.name === "LoginPage" || to.name === "RegisterPage")
  ) {
    next({ name: "GamePage" });
  } else next();
});
export default router;
