<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  mounted() {
    // console.log(this.$route.params);
    this.getDetail(this.$route.params.id);
  },
  methods: {
    ...mapActions(useCounterStore, ["getDetail"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["infoDetail"]),
  },
  watch: {},
};
</script>

<template>
  <div class="card mb-3">
    <div class="row">
      <div class="column">
        <img :src="infoDetail.imgUrl" alt="imgUrl" class="card-img-top" />
      </div>
      <div class="card-body">
        <h1 class="card-title">SpaceShuttle: {{ infoDetail.name }}</h1>
        <h5 class="card-text">{{ infoDetail.information }}</h5>
      </div>
    </div>
  </div>
</template>

<style>
.row {
  display: flex;
}

.column {
  flex: 33.33%;
  /* padding: 5px; */
}
</style>
