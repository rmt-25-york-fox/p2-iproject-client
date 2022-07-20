<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
export default {
  name: "HomePage",
  components: { NavBar, Footer, HeroSection },
};
</script>

<template>
  <div id="homepage" class="container-fluid">
    <!-- <NavBar /> -->
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-8 px-3 py-0">
        <HeroSection />
      </div>
    </div>
    <Footer />
  </div>
</template>
