<script>
import DetailCard from "../components/DetailCard.vue";
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  components: {
    DetailCard,
  },
  methods: {
    ...mapActions(useCounterStore, ["getDetail"]),
  },
  created() {
    this.getDetail();
  },
};
</script>

<template>
  <div class="container">
    <h1>Detail</h1>
    <DetailCard />
  </div>
</template>
