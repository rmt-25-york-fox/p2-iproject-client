<script>
import { mapActions } from "pinia";
import { useTutorialStore } from "../stores/tutorial";

export default {
  name: "TutorialCard",
  props: ["tutorial"],
  methods: {
    ...mapActions(useTutorialStore, ["detailTutorialHandler"]),
    localDetailTutorialHandler() {
      this.detailTutorialHandler(this.tutorial, this.$route.params.category);
    },
  },
};
</script>

<template>
  <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
    <div class="card-flyer bg-white">
      <div class="text-box">
        <div class="image-box">
          <img @click.prevent="localDetailTutorialHandler" :src="tutorial.thumbnail" alt="" role="button" />
        </div>
        <div class="text-container">
          <h6>{{ tutorial.title }}</h6>
          <p class="fw-bold">{{ tutorial.channelTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
