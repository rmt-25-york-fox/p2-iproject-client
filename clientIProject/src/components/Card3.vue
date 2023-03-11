<script>
import { mapActions } from "pinia";
import { useRequestStore } from "../stores/request";
export default {
  name: "Card3",
  props: ["task"],
  methods: {
    ...mapActions(useRequestStore, ["detailRequest"]),
    viewDetail() {
      this.detailRequest(this.task.id);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-9">
        <div class="news-link">
          <span v-if="task.status === 'Taken'" class="hot-news"
            >NOT FINISHED</span
          >
          <span v-if="task.status === 'Done'" class="new-news">FINISHED</span>
          <h3 class="news-log">{{ task.title }}</h3>
          <p class="description">
            {{ task.description }}
            <a href="#" v-on:click="viewDetail" class="btn-view"
              ><span class="ic-sx24"></span> View Detail</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
