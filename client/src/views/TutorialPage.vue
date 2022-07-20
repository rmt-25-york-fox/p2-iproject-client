<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import InformationSection from "../components/InformationSection.vue";
export default {
  name: "HomePage",
  components: { NavBar, Footer, InformationSection },
};
</script>

<template>
  <div id="tutorialpage" class="container-fluid">
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-8 px-3 py-0">
        <InformationSection />
      </div>
    </div>
    <Footer />
  </div>
</template>
