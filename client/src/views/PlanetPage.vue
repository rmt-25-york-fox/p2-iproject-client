<script>
import Card from "../components/Card.vue";
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    Card,
  },
  methods: {
    ...mapActions(useCounterStore, ["getApod"]),
  },
  created() {
    this.getApod();
  },
};
</script>

<template>
  <div class="container-card">
    <h1 class="txt">Astronomy Picture Of the Day</h1>
    <Card />
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
