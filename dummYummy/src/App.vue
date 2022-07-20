<script >
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    RouterView,
    NavBar
  }
}
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style >
</style>
