import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import PokemonDetail from "../views/PokemonDetail.vue";
import GamePage from "../views/GamePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
      path: "/pokemons/:name",
      name: "PokemonDetail",
      component: PokemonDetail,
    },
  ],
});

export default router;
