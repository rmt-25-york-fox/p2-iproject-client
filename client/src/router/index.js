import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"
import FlashCardPage from "../views/FlashCardPage.vue"
import LoginPage from "../views/LoginPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/flashcard",
      name: "flashcard",
      component: FlashCardPage,
    },

  ],
});

export default router;
