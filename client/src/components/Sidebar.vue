<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useSportStore } from "../stores/sport";

export default {
  data() {
    return {
      title: "",
      rating: "",
      genreId: "",
      list: [7, 8, 9],
      rating: 7,
      previousRating: 7,
    };
  },
  computed: {
    ...mapWritableState(useSportStore, ["movie", "movies", "page"]),
  },

  methods: {
    ...mapActions(useSportStore, [
      "pagination",
      "fetchMovies",
      "addFavorite",
      "pagination",
      "clearSearchField",
    ]),
    uncheck: function (val) {
      if (val === this.previousRating) {
        this.rating = "";
      }
      this.previousRating = this.rating;
    },

    changeRating(event) {
      this.rating = event.target.value;
    },

    async clearSearchField() {
      try {
        this.page = 0;
        this.title = "";
        this.rating = "";
        this.genreId = "";
      } catch (err) {
        console.log(err);
      }
    },

    logout() {
      this.$emit("logout");
    },
    toHistory() {
      this.$emit("toHistory");
    },
    toAddMovie() {
      this.$emit("toAddMovie", "add");
    },
    toHomePage() {
      this.$emit("toHomePage");
    },
    // updateMovie() {
    //   this.$emit("pagination", {
    //     title: this.title,
    //     synopsis: this.synopsis,
    //     trailerUrl: this.trailerUrl,
    //     imgUrl: this.imgUrl,
    //     rating: this.rating,
    //     genreId: this.genreId,
    //   });
    // },
  },
};
</script>

<template>
  <div
    class="side-nav text-left col-2"
    style="
      margin-left: 10px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: #001a33;
      height: 100vh;
      margin-bottom: -805px;
      padding-bottom: 805px;
    "
  >
    <br />
    <form
      @submit.prevent="
        pagination({
          title: this.title,
          genreId: this.genreId,
          rating: this.rating,
        })
      "
      action=""
    >
      <ul style="text-align: left">
        <br />
        <br />
        <h6 class="font-weight-bold" style="color: white">Exercise name</h6>
        <br />
        <input
          v-model="title"
          name="name"
          placeholder="Search by exercise name..."
          type="text"
        />

        <h6 class="font-weight-bold" style="color: white">Body part</h6>

        <select v-model="genreId" name="" id="">
          <option selected disabled value="">-- SELECT ONE --</option>
          <option value="">(None)</option>
          <option value="1">Waist</option>
        </select>

        <!-- <h6 class="font-weight-bold" style="color: white">Movie rating</h6> -->

        <!-- <div v-for="(val, key) in list">
          <label style="color: white" :for="val">Above {{ val }}</label>
          <input
            style="margin-left: 15px"
            type="radio"
            name="radio"
            :value="val"
            v-model="rating"
            :id="val"
            @click="uncheck(val)"
          />
        </div> -->
      </ul>
      <button style="width: 200px" class="btn btn-primary" type="submit">
        Search
      </button>
    </form>
    <br />
    <button
      @click="clearSearchField"
      style="width: 200px; background-color: #dddddd"
      class="mt-1 btn"
      type="submit"
    >
      Clear
    </button>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  cursor: pointer;
}
li {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

ul li a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

input[type="text"],
input[type="text-area"],
input[type="number"],
select,
input[type="password"] {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
}
</style>
