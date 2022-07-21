<script>
import { mapActions, mapState } from 'pinia'
import { useSportStore } from '../stores/sport'
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import Card from '../components/Card.vue'
import Sidebar from '../components/Sidebar.vue'
import PageButton from '../components/PageButton.vue'
import SportList from '../components/SportList.vue'

export default {
  created() {
    this.pagination({
      page: this.page,
      title: this.title,
      rating: this.rating,
      genreId: this.genreId
    })

    if (localStorage.access_token) {
      this.page = 'home'
      this.isLogin = true
      this.pagination({
        page: this.page,
        title: this.title,
        rating: this.rating,
        genreId: this.genreId
      })
    }
  },
  name: 'HomePage',
  computed: {
    ...mapState(useSportStore, ['page', 'title', 'rating', 'genreId'])
  },

  methods: {
    ...mapActions(useSportStore, [
      'fetchMovies',
      'pagination',
      'fetchFavorites'
    ]),
    loginHandler() {
      this.isLogin = true
      this.page = 'home'
    }
  },
  components: { Navbar, Card, Sidebar, PageButton, SportList }
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
    <Navbar />
    <div
      style="
        padding-left: 100px;
        padding-right: 100px;
        display: flex;
        flex-direction: row;
      "
      class="headers container-fluid row"
    >
      <div class="ads1 col-4">
        <img
          style="margin-left: 100px; margin: 10px; width: auto; height: 200px"
          alt=""
        />
      </div>
      <div style="padding: 0px" class="ads2 col-4">
        <img style="margin: 10px; width: auto; height: 200px" alt="" />
      </div>
      <div style="padding: 0px" class="ads2 col-4">
        <img style="margin: 10px; width: auto; height: 200px" alt="" />
      </div>
    </div>

    <Sidebar />
    <SportList />
  </div>
</template>
<style></style>
