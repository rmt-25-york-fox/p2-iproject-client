<script>
import { mapActions, mapState } from "pinia";
import { useSportStore } from "../stores/sport";

export default {
  name: "PageButton",
  computed: {
    ...mapState(useSportStore, ["title", "rating", "genreId"]),
  },
  methods: {
    ...mapActions(useSportStore, ["pagination"]),
  },
};
</script>

<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li class="page-item">
        <a
          @click.prevent="
            pagination({
              page: 0,
              title: this.title,
              rating: this.rating,
              genreId: this.genreId,
            })
          "
          class="page-link"
          href="#"
          >1</a
        >
      </li>
      <li class="page-item" aria-current="page">
        <a
          @click.prevent="
            pagination({
              page: 1,
              title: this.title,
              rating: this.rating,
              genreId: this.genreId,
            })
          "
          class="page-link"
          href="#"
          >2</a
        >
      </li>
      <li class="page-item">
        <a
          @click.prevent="
            pagination({
              page: 2,
              title: this.title,
              rating: this.rating,
              genreId: this.genreId,
            })
          "
          class="page-link"
          href="#"
          >3</a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.baseButton {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.light {
  background: white;
  color: black;
  border: 1px solid gray;
}

.dark {
  background: black;
  color: white;
}
</style>
