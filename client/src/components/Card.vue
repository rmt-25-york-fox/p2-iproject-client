<script>
// card
import { mapActions, mapState, mapWritableState } from "pinia";
import { useSportStore } from "../stores/sport";

export default {
  name: "Card",
  props: ["movie"],

  data() {
    return { isLogin: false, page: "login" };
  },
  computed: {
    ...mapState(useSportStore, ["title", "rating", "genreId"]),
  },

  methods: {
    ...mapActions(useSportStore, [
      "toDetailPage",
      "fetchMovies",
      "addFavorite",
      "pagination",
      "sliceString",
    ]),
  },
};
</script>
<template>
  <div style="margin-bottom: 10px" class="col-3 col-md-3">
    <div class="card h-100">
      <img
        style="height: 150px; object-fit: cover"
        :src="movie.gifUrl"
        class="card-img-top"
      />
      <div class="card-body">
        <div style="flex-direction: row" class="row">
          <div class="col-10">
            <h5 class="card-title">{{ movie.name }}</h5>
            <!-- <span style="color: orange" class="fa fa-star checked"></span> -->
            <!-- <span style="margin-left: 5px" class="card-text">{{
              movie.rating
            }}</span
            > -->
            <button
              style="
                margin-left: 10px;
                justify-content: flex-end;
                padding: 0px 2px;
                border-round: 50px;
              "
              class="btn btn-primary"
              @click.prevent="toDetailPage(movie.id)"
            >
              See details
            </button>
          </div>
          <div
            style="
              cursor: pointer;
              padding-left: 0;
              background-color: white;
              outline-color: white;
            "
            @click.prevent="addFavorite(movie.id)"
            class="col-2"
          >
            <!-- <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="blue"
              class="bi bi-bookmark-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
              />
            </svg> -->
          </div>
        </div>

        <span>Body part: {{ movie.bodyPart }}</span> <br />
        <span>Equipment: {{ movie.equipment }}</span>
      </div>
    </div>
  </div>
</template>
<style></style>
