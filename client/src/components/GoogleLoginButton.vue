<script>
import { mapActions, mapState } from "pinia";
import { useSportStore } from "../stores/sport";

export default {
  props: ["isLogin", "page", "baseUrl"],
  emits: ["handleCredentialResponse", "mounted"],
};
</script>

<template>
  <h6>(Please refresh the page if google button below doesn't show up)</h6>
  <div
    id="google-button-login"
    data-client_id="983408498980-8si4t9mtg6i4daaknelku7adsc7cr4n9.apps.googleusercontent.com"
    data-login_uri="https://hacktiv-movies-customer-web.herokuapp.com/pub/google-sign-in"
    data-auto_prompt="false"
  ></div>
</template>

<style></style>
