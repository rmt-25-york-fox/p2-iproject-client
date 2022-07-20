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
    <div class="row justify-content-center text-center">
      <div class="main-content col-8 px-3 py-0">
        <div class="information-section container mt-5 mb-2">
          <div class="row pb-0 pe-lg-0  align-items-center bg-white rounded-3 border shadow">
            <div class="col-lg-12 p-3 p-lg-5 pt-lg-3">
              <iframe width="100%" height="700px" src="https://www.youtube.com/embed/qfn67VjdgZE?autoplay=1" frameborder="0">
              </iframe>
              <h1 class="mt-5" >Desc</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
