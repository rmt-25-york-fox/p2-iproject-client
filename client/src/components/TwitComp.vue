<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  mounted() {},
  methods: {
    ...mapActions(useCounterStore, ["twitNasa"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["twt"]),
  },
};
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ twt.text }}</h5>
    </div>
  </div>
</template>
