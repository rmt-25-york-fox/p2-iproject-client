<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  mounted() {},
  methods: {
    ...mapActions(useCounterStore, ["marsWeather"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["mars"]),
  },
  watch: {},
};
</script>

<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://mars.nasa.gov/system/resources/detail_files/26729_PIA25213-web.jpg" class="img-fluid" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Sol is a solar day on Mars; that is, a Mars-day. A sol is the apparent interval between two successive returns of the Sun to the same meridian as seen by an observer on Mars. It is one of several units for timekeeping on Mars. A
            sol is slightly longer than an Earth day.
          </p>
          <p class="card-text">
            <small class="text-muted">SOL: {{ mars.sol_hours_required }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* .img-fluid {
  max-height: 40rem;
  max-height: 500rem;
} */
</style>
