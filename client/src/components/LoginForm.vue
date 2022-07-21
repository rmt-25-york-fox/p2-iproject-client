<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useMainGas } from "../stores/counter.js";

export default {
  name: "LoginForm",
  components: {
    RouterLink,
  },
  data() {
    return {
      emailInput: "",
      passwordInput: "",
    };
  },
  methods: {
    ...mapActions(useMainGas, ["login"]),
    loginmethod() {
      this.login({
        email: this.emailInput,
        password: this.passwordInput,
      });

      this.emailInput = "";
      this.passwordInput = "";
    },
  },
};
</script>

<template>
  <div class="mb-md-5 mt-md-4 pb-5">
    <h2 class="fw-bold mb-2 text-uppercase text-white">Login</h2>
    <p class="text-white-50 mb-5">Please enter your login and password!</p>
    <form @submit.prevent="loginmethod">
      <div class="form-outline form-white mb-4">
        <input
          type="email"
          id="typeEmailX"
          class="form-control form-control-lg"
          v-model="emailInput"
        />
        <label class="form-label" for="typeEmailX">Email</label>
      </div>

      <div class="form-outline form-white mb-4">
        <input
          type="password"
          id="typePasswordX"
          class="form-control form-control-lg"
          v-model="passwordInput"
        />
        <label class="form-label" for="typePasswordX">Password</label>
      </div>
      <button class="btn btn-outline-light btn-lg px-5" type="submit">
        Login
      </button>
    </form>
    <div>
      <p class="mb-0 mt-1">
        Don't have an account?
        <RouterLink to="/register" class="text-white-50 fw-bold muted"
          >Sign Up</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<style></style>
