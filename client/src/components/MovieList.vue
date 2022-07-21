<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useSportStore } from "../stores/sport";

import Card from "./Card.vue";
import PageButton from "./PageButton.vue";

export default {
  computed: {
    ...mapState(useSportStore, ["movies"]),
  },
  name: "MovieList",
  components: { Card, PageButton },
  methods: {
    ...mapActions(useSportStore, ["fetchMovies"]),
  },
};
</script>
<template>
  <div class="col-10 row">
    <div
      v-if="this.movies.length === 0"
      style="
        width: 700px;
        height: 700px;
        justify-content: center;
        align-items: center;
      "
      class="container"
    >
      <h1 style="margin-top: 300px" class="mt-10">Sorry, movie not found</h1>
      <h3>We can not find the movie you want</h3>
      <h6>Please search by different keywords or Genre or Rating...</h6>
    </div>

    <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    <br />
    <div style="margin-left: 1030px; align-items: flex-end">
      <PageButton />
    </div>
  </div>
</template>
<style></style>
