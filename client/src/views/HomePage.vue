<script>
import { mapActions, mapState } from 'pinia'
import { useSportStore } from '../stores/sport'
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import Sidebar from '../components/Sidebar.vue'
import PageButton from '../components/PageButton.vue'
import SportList from '../components/SportList.vue'
import FitnessDetailCard from '../components/FitnessDetailCard.vue'

export default {
  created() {
    this.fetchFitness()
    this.fetchSports()
    // this.pagination({
    //   page: this.page
    // })

    if (localStorage.access_token) {
      this.page = 'home'
      this.isLogin = true
      this.fetchSports()
    }
  },
  name: 'HomePage',
  computed: {
    ...mapState(useSportStore, [
      'page',
      'title',
      'rating',
      'genreId',
      'fitness',
      'histories'
    ])
  },

  methods: {
    ...mapActions(useSportStore, [
      'fetchMovies',
      'pagination',
      'fetchFavorites',
      'fetchFitness',
      'fetchSports'
    ]),
    loginHandler() {
      this.isLogin = true
      this.page = 'home'
    }
  },
  components: {
    Navbar,
    Card,
    Sidebar,
    PageButton,
    SportList,
    FitnessDetailCard
  }
}
</script>
<template>
  <div
    style="
      margin: 0px 0px;
      height: 100vh;
      background-color: #fff;
      flex-wrap: wrap;
      flex-direction: row;
      overflow: hidden;
      overflow-y: scroll;
    "
    class="container-fluid row"
  >
    <div
      style="
        padding-left: 100px;
        padding-right: 100px;
        display: flex;
        flex-direction: row;
      "
      class="headers container-fluid row"
    >
      <FitnessDetailCard :fitness="fitness" />

      <div class="ads1 col-4">
        <img
          style="margin-left: 100px; margin: 10px; width: auto; height: 200px"
          src=""
          alt=""
        />
      </div>
      <div style="padding: 0px" class="ads2 col-4">
        <img style="margin: 10px; width: auto; height: 200px" src="" alt="" />
      </div>
      <div style="padding: 0px" class="ads2 col-4">
        <img style="margin: 10px; width: auto; height: 200px" src="" alt="" />
      </div>
    </div>

    <Sidebar />
    <SportList />
  </div>
</template>
<style></style>
