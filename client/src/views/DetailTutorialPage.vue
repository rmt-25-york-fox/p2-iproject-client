<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "HomePage",
  components: { NavBar, Footer },
};
</script>

<template>
  <div id="detailpage" class="container-fluid">
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-8 px-3 py-0"></div>
    </div>
    <Footer />
  </div>
</template>
