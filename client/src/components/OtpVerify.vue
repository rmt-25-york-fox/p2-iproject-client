<script>
import { mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "OtpVerify",
  data() {
    return {
      otp: "",
    };
  },
  methods: {
    ...mapActions(useAllStateStore, ["registerhandle"]),
    checkOtp() {
      this.registerhandle(this.otp);
    },
  },
};
</script>

<template>
  <div class="text-center mt-5">
    <img class="w-25 p-3" src="" />
    <form style="max-width: 400px; margin: auto" class="boxForm">
      <label class="sr-only">Email address</label>
      <input
        type="text"
        name="otp"
        id="otp"
        class="form-control"
        placeholder="OTP"
        autofocus
        v-model="otp"
      />
      <!-- <RouterLink :to="{ path: '/register' }" class="text-success"
        >Sign up</RouterLink
      > -->
      <button
        class="mt-3 btn btn-lg btn-success btn-block"
        @click.prevent="checkOtp"
      >
        Verify
      </button>
    </form>
  </div>
</template>
