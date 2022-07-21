import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import RegisterPage from "../components/Register.vue";
import LoginForm from "../components/Login.vue";
import OtpVerify from "../components/OtpVerify.vue";
import Payment from "../components/Payment.vue";
import Success from "../components/Success.vue";
import ErrorPage from "../components/ErrorPage.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
    {
      path: "/payment",
      name: "payment",
      component: Payment,
    },
    {
      path: "/success",
      name: "success",
      component: Success,
    },
    {
      path: "/error",
      name: "error",
      component: ErrorPage,
    },
  ],
});

export default router;
