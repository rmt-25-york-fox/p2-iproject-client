<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/AllStore";

export default {
  name: "RegisterVue",
  data() {
    return {
      objRegister: {
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["registerHandler"]),
    localRegisterHandler() {
      this.registerHandler(this.objRegister);
    },
  },
};
</script>

<template>
  <div class="container pt-5">
    <h1 class="text-center">Sign Up</h1>
    <br />
    <form action="" class="w-25 mx-auto" @submit.prevent="localRegisterHandler">
      <div class="mb-3">
        <label for="" class="form-label">Full Name</label>
        <input type="text" class="form-control" v-model="objRegister.name" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          v-model="objRegister.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="objRegister.password"
          required
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Phone Number</label>
        <input
          type="text"
          class="form-control"
          v-model="objRegister.phoneNumber"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Address</label>
        <input type="text" class="form-control" v-model="objRegister.address" />
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-info">Sign Up</button>
      </div>
      <br />
      <div class="text-center">
        <span
          >Already have an account?
          <router-link to="/login">Sign In</router-link>
        </span>
      </div>
      <br />
    </form>
  </div>
</template>
