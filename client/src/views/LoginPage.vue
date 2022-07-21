<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["loginHandler"]),
    login() {
      this.loginHandler({
        email: this.email,
        password: this.password,
      });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<template>
  <div class="form">
    <div class="row text-center">
      <div class="col">
        <h2 class="form-label">Login</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-3">
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <hr class="form-label" />
          <div class="text-center">
            <span class="txt1"> Create an account ?</span>
            <router-link to="/register" id="btnRegis" href="#" class="txt2 hov1"> Register </router-link>
          </div>
          <hr class="form-label" />
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.form-label {
  color: white;
}
.txt1 {
  color: white;
}
.form {
  margin-top: 10rem;
}
</style>
