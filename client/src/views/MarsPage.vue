<script>
import Mars from "../components/Mars.vue";
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    Mars,
  },
  methods: {
    ...mapActions(useCounterStore, ["marsWeather"]),
  },
  created() {
    this.marsWeather();
  },
};
</script>

<template>
  <div class="container-card">
    <h1 class="txt">Mars Weather</h1>
    <Mars />
  </div>
</template>

<style>
.txt {
  color: white;
}
.container-card {
  margin-top: 5rem;
  margin-left: 25rem;
  margin-right: 25rem;
  margin-bottom: 40rem;
}
</style>
