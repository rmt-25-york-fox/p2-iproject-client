import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import LoginPage from "../views/LoginPage.vue";
import BuildPage from "../views/BuildPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "loginpage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "registerpage",
      component: RegisterPage,
    },
    {
      path: "/build",
      name: "buildpage",
      component: BuildPage,
    },
  ],
});

export default router;
