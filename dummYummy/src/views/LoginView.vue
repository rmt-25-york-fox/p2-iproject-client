<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/AllStore";

export default {
  name: "LoginView",
  data: () => ({
    objLogin: {
      email: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions(useCounterStore, ["loginHandler"]),
    localLoginHandler() {
      this.loginHandler(this.objLogin);
    },
  },
};
</script>

<template>
  <div class="container pt-5">
    <div class="text-center">
      <h1>Sign In</h1>
    </div>
    <form class="w-25 mx-auto" @submit.prevent="localLoginHandler">
      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          placeholder="email@mail.com"
          v-model="objLogin.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="objLogin.password"
          required
        />
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-info">Sign In</button>
      </div>
      <br />
      <div class="text-center">
        <span
          >Don't have an account yet?<router-link to="/register"
            >Sign Up</router-link
          >
        </span>
      </div>
      <br />
    </form>
  </div>
</template>
