<script>
import { mapState, mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "LoginForm",
};
</script>

<template>
  <div class="text-center mt-5">
    <img class="w-25 p-3" src="" />
    <form style="max-width: 400px; margin: auto" class="boxForm">
      <h1 class="font-weight-normal mt-4">Sign in</h1>
      <label class="sr-only">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        placeholder="Email"
        autofocus
      />
      <label class="sr-only">Password</label>
      <input
        type="password"
        name="email"
        id="email"
        class="form-control"
        placeholder="Password"
      />
      not have account?
      <RouterLink :to="{ path: '/register' }" class="text-success"
        >Sign up</RouterLink
      >
      -->
      <button class="mt-3 btn btn-lg btn-success btn-block">Sign in</button>
      <div id="buttonDiv"></div>
    </form>
  </div>
</template>
