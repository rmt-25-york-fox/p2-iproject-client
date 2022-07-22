<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useMainGas } from "./stores/counter.js";
export default {
  name: "App",
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    ...mapActions(useMainGas, ["saveLoginstate"]),
  },
  created() {
    this.saveLoginstate();
  },
};
</script>

<template>
  <RouterView />
</template>

<style></style>
