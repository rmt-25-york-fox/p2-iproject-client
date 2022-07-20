<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import HeroSection from "../components/HeroSection.vue";
import HomePageCard from "../components/HomePageCard.vue";
export default {
  name: "HomePage",
  components: { NavBar, Footer, HeroSection, HomePageCard },
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
              <HomePageCard />
              <HomePageCard />
              <HomePageCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
