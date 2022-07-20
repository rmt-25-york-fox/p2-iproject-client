<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import InformationSection from "../components/InformationSection.vue";
import TutorialCard from "../components/TutorialCard.vue";
export default {
  name: "HomePage",
  components: { NavBar, Footer, InformationSection, TutorialCard },
  created() {
    console.log(this.$route.params.category);
  }
};
</script>

<template>
  <div id="tutorialpage" class="container-fluid">
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-8 px-3 py-0">
        <InformationSection />
        <div id="cards-wrapper">
          <div class="container">
            <div class="row">
              <TutorialCard />
              <TutorialCard />
              <TutorialCard />
              <TutorialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
