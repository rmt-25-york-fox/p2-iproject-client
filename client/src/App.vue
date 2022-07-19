<script>
import { mapActions, mapState } from "pinia";
import { useSportStore } from "./stores/sport";
import { RouterLink, RouterView } from "vue-router";

import LoginPage from "./views/LoginPage.vue";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapActions(useSportStore, ["loginHandler"]),
  },
  methods: {
    ...mapState(useSportStore, ["loginHandler"]),
  },
  components: { LoginPage },
};
</script>

<template><LoginPage /></template>

<style scoped></style>
