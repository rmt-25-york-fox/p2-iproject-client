<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style>
/* body {
  background-image: url("https://www.gannett-cdn.com/authoring/2009/11/16/NSHT/ghows-LK-533a7898-c33d-45b5-a4da-16354204068f-429d9db8.jpeg?crop=3299,1865,x0,y167&width=1600&height=800&format=pjpg&auto=webp");
} */
</style>
