<script>
export default {
  name: "NotFound",
};
</script>

<template>
  <div class="container text-center">
    <img src="../assets/6342464.jpg" id="img" /><br />
    <RouterLink :to="{ path: '/' }" class="btn mr-4">Back to home</RouterLink>
  </div>
</template>

<style>
#img {
  margin: 0 auto;
  width: 80%;
}
</style>
