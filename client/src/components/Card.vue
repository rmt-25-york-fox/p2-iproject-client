<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  mounted() {},
  methods: {
    ...mapActions(useCounterStore, ["getApod"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["apod"]),
  },
  watch: {},
};
</script>

<template>
  <div class="card mb-3">
    <img :src="apod.hdurl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ apod.title }}</h5>
      <p class="card-text">{{ apod.explanation }}</p>
      <p class="card-text">
        <small class="text-muted">date: {{ apod.date }}</small>
      </p>
    </div>
  </div>
</template>

<style>
/* .card {
  margin-top: 5rem;
  margin-left: 25rem;
  margin-right: 35rem;
  margin-bottom: 40rem;
} */
</style>
