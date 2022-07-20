<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import InformationSection from "../components/InformationSection.vue";
import TutorialCard from "../components/TutorialCard.vue";
import { mapActions, mapState } from "pinia";
import { useTutorialStore } from "../stores/tutorial";
export default {
  name: "TutorialPage",
  data() {
    return {
      category: {
        name: "",
        route: "",
        description: "",
        font: "",
      },
      tutorials: [],
    };
  },
  components: { NavBar, Footer, InformationSection, TutorialCard },
  computed: {
    ...mapState(useTutorialStore, ["categories", "golangTutorials", "javaTutorials", "nodeJsTutorials"]),
  },
  methods: {
    ...mapActions(useTutorialStore, ["getNodeJsTutorials", "getGolangTutorials", "getJavaTutorials"]),
  },
  created() {
    if (this.$route.params.category == "nodejs") {
      // this.getNodeJsTutorials();
      this.tutorials = this.nodeJsTutorials;
      this.category.name = this.categories[0].name;
      this.category.route = this.categories[0].route;
      this.category.description = this.categories[0].description;
      this.category.font = this.categories[0].font;
    } else if (this.$route.params.category == "java") {
      // this.getJavaTutorials();
      this.tutorials = this.javaTutorials;
      this.category.name = this.categories[1].name;
      this.category.route = this.categories[1].route;
      this.category.description = this.categories[1].description;
      this.category.font = this.categories[1].font;
    } else if (this.$route.params.category == "golang") {
      // this.getGolangTutorials();
      this.tutorials = this.golangTutorials;
      this.category.name = this.categories[2].name;
      this.category.route = this.categories[2].route;
      this.category.description = this.categories[2].description;
      this.category.font = this.categories[2].font;
    }
  },
};
</script>

<template>
  <div id="tutorialpage" class="container-fluid">
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-8 px-3 py-0">
        <InformationSection :category="category" />
        <div id="cards-wrapper">
          <div class="container">
            <div class="row">
              <TutorialCard />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
