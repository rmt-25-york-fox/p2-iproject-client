<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import HomePageCard from "../components/HomePageCard.vue";
import { useTutorialStore } from "../stores/tutorial";
import { mapState } from "pinia";

export default {
  name: "HomePage",
  components: { NavBar, Footer, HeroSection, HomePageCard },
  computed: {
    ...mapState(useTutorialStore, ["categories"]),
  },
};
</script>

<template>
  <div id="homepage" class="container-fluid">
    <!-- <NavBar /> -->
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-8 px-3 py-0">
        <HeroSection />
        <div id="cards-wrapper">
          <div class="container">
            <div class="row justify-content-center">
              <h1 class="brand-name" style="font-size: 50px">What do you want to learn?</h1>
              <HomePageCard v-for="(category, index) in categories" :key="index" :category="category" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
