<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import TwitComp from "../components/TwitComp.vue";

export default {
  components: {
    TwitComp,
  },
  methods: {
    ...mapActions(useCounterStore, ["twitNasa"]),
  },
  created() {
    this.twitNasa();
  },
};
</script>

<template>
  <div class="container-card">
    <h1 class="txt">Nasa News</h1>
    <TwitComp />
  </div>
</template>
