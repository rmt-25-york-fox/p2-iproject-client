<script>
import { mapActions, mapState } from "pinia";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "Register",
  data() {
    return {
      objRegister: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useAllStateStore, ["backupData"]),
    formRegister() {
      this.backupData(this.objRegister);
    },
  },
};
</script>

<template>
  <div class="text-center mt-5">
    <img class="w-25 p-3" src="" />
    <form style="max-width: 400px; margin: auto">
      <h1 class="font-weight-normal mt-4">Register</h1>
      <label class="sr-only">Username</label>
      <input
        type="text"
        name="Username"
        id="Username"
        class="form-control"
        placeholder="username"
        autofocus
        v-model="objRegister.username"
      />
      <label class="sr-only">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        placeholder="Email"
        v-model="objRegister.email"
      />
      <label class="sr-only">Password</label>
      <input
        type="password"
        name="Password"
        id="Password"
        class="form-control"
        placeholder="Password"
        v-model="objRegister.password"
      />
      <label class="sr-only">PhoneNumber</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        class="form-control"
        placeholder="PhoneNumber"
        v-model="objRegister.phoneNumber"
      />
      <label class="sr-only">Address</label>
      <input
        type="text"
        name="Address"
        id="Address"
        class="form-control"
        placeholder="Address"
        v-model="objRegister.address"
      />
      have account?
      <!-- <RouterLink :to="{ path: '/login' }" class="text-success"
        >Sign in</RouterLink
      > -->
      <button
        class="mt-3 btn btn-lg btn-success btn-block"
        @click.prevent="formRegister"
      >
        Register
      </button>
    </form>
  </div>
</template>
