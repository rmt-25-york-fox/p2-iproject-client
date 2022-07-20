import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import MyTodosPage from "../views/MyTodosPage.vue";
import ChatPage from "../views/ChatPage.vue";

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
      path: "/mytodos",
      name: "mytodos",
      component: MyTodosPage,
    },
    {
      path: "/chat",
      name: "chat",
      component: ChatPage,
    },
  ],
});

export default router;
