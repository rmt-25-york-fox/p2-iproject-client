<script>
import Card from "../components/Card.vue";
import { mapActions, mapState } from "pinia";
import { useRequestStore } from "../stores/request";
import Navbar from "../components/Navbar.vue";

export default {
  name: "HomePage",
  components: {
    Card,
    Navbar,
  },
  computed: {
    ...mapState(useRequestStore, ["requests"]),
  },
  methods: {
    ...mapActions(useRequestStore, ["getRequest"]),
  },
  created() {
    this.getRequest();
  },
};
</script>

<template>
  <Navbar />
  <div class="page-content">
    <section id="home-sec" class="main-banner parallax">
      <div class="bg-lefts"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <!-- Swiper -->
            <div class="swiper-container">
              <div class="swiper-slide" data-hash="slide1">
                <div class="col-md-6">
                  <h3 class="name-intro">Need Help?</h3>
                  <span class="hr-intro"></span>
                  <p class="docopation-intro">
                    Just list your problem and someone will help :)
                  </p>
                  <router-link to="/addRequest">
                    <a href="#" class="btn-drop">Request Help</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Card
      v-for="(request, index) in requests"
      :key="index"
      :request="request"
    />
  </div>
</template>
