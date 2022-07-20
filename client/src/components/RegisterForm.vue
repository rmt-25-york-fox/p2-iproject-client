<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useMainGas } from "../stores/counter.js";

export default {
  name: "RegisterForm",
  components: {
    RouterLink,
  },
  data() {
    return {
      emailInput: "",
      passwordInput: "",
      kendaraanInput: "",
    };
  },
  methods: {
    ...mapActions(useMainGas, ["register"]),
    localRegister() {
      this.register({
        email: this.emailInput,
        password: this.passwordInput,
        kendaraan: this.kendaraanInput,
      });
      this.emailInput = "";
      this.passwordInput = "";
      this.kendaraanInput = "";
    },
  },
};
</script>

<template>
  <form class="mb-md-5 mt-md-4 pb-5" @submit.prevent="localRegister">
    <h2 class="fw-bold mb-2 text-uppercase text-white">Regsiter Your Acount</h2>
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

    <div class="form-outline form-white mb-4">
      <input
        type="text"
        id="typePasswordX"
        class="form-control form-control-lg"
        v-model="kendaraanInput"
      />
      <label class="form-label" for="typePasswordX">Your Vehicle</label>
    </div>
    <button class="btn btn-outline-light btn-lg px-5" type="submit">
      Register
    </button>
  </form>
  <div>
    <p class="mb-0 mt-1">
      If you already have Acount
      <RouterLink to="/login" class="text-white-50 fw-bold muted">
        Sign In
      </RouterLink>
    </p>
  </div>
</template>

<style></style>
