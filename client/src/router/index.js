import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import RegisterPage from "../components/Register.vue";
import LoginForm from "../components/Login.vue";
import OtpVerify from "../components/OtpVerify.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginForm,
    },
    {
      path: "/otpverify",
      name: "otpverify",
      component: OtpVerify,
    },
  ],
});

export default router;
