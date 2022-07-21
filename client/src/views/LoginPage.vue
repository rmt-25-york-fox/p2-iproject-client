<script>
import { mapActions } from "pinia";
import { useSportStore } from "../stores/sport";

import GoogleLoginButton from "../components/GoogleLoginButton.vue";
import ButtonApp from "../components/ButtonApp.vue";
export default {
  data() {
    return {};
  },
  name: "LoginPage",

  props: ["isLogin", "email", "password", "baseUrl", "page"],
  components: { ButtonApp, GoogleLoginButton },
  methods: {
    ...mapActions(useSportStore, [
      "toHomePage",
      "toRegisterPage",
      "loginHandler",
    ]),
    login() {
      this.loginHandler({ email: this.email, password: this.password });
    },
  },
};
</script>

<template>
  <div
    style="
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      flex-wrap: wrap;
    "
    class="container-fluid text-center box-content"
  >
    <h1>Sign in</h1>
    <h5>Sign in to access your account</h5>
    <br />

    <form @submit.prevent="login" class="w-25 mx-auto" action="">
      <h6 style="text-align: left">Email</h6>

      <input
        v-model="email"
        class="form-control mb-3"
        type="text"
        placeholder="you@company.com"
      />

      <h6 style="text-align: left">Password</h6>

      <input
        v-model="password"
        class="form-control mb-3"
        type="text"
        placeholder="Your Password"
      />
      <br />
      <ButtonApp type="submit" buttonText="Sign in" />
    </form>

    <br />
    <h6>
      Don't have an account yet?
      <span>
        <a v-on:click.prevent="toRegisterPage" href=""> Sign up </a>
      </span>
      <br />
      Or Sign in with google
    </h6>

    <!-- <GoogleLoginButton
      @modifiedProps="modifiedProps"
      @handleCredentialResponse="handleCredentialResponse"
      :isLogin="isLogin"
      :page="page"
      :baseUrl="baseUrl"
    /> -->
  </div>
</template>

<style scoped></style>
