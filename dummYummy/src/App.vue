<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import { mapActions } from "pinia";
import { useCounterStore } from "./stores/AllStore";
export default {
  components: {
    RouterView,
    NavBar,
  },
  methods: {
    ...mapActions(useCounterStore, [
      "changeStateisLoggedin",
      "getProduct",
      "getCategory",
    ]),
  },
  created() {
    this.changeStateisLoggedin();
    this.getProduct();
    this.getCategory();
  },
};
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style></style>
