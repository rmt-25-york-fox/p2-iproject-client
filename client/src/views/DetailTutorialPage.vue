<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import { mapState } from "pinia";
import { useTutorialStore } from "../stores/tutorial";
export default {
  name: "HomePage",
  components: { NavBar, Footer },
  computed: {
    ...mapState(useTutorialStore, ["tutorial"]),
  },
};
</script>

<template>
  <div id="detailpage" class="container-fluid">
    <NavBar />
    <div class="row justify-content-center text-center">
      <div class="main-content col-8 px-3 py-0">
        <div class="information-section container mt-5 mb-2">
          <div class="row pb-0 pe-lg-0 align-items-center bg-white rounded-3 border shadow">
            <div class="col-lg-12 p-3 p-lg-5 pt-lg-3 mt-4">
              <iframe width="100%" height="500px" :src="tutorial.videoUrl" frameborder="0"> </iframe>
              <h1 class="mt-5 mb-2">{{ tutorial.title }}</h1>
              <h2 class="mb-3">{{ tutorial.channelTitle }}</h2>
              <p class="mb-3">{{ tutorial.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
