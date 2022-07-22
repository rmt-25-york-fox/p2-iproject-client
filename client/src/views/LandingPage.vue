<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import ListCard from "../components/ListCard.vue";

export default {
  components: {
    ListCard,
  },
  methods: {
    ...mapActions(useCounterStore, ["getInfo"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["infos"]),
  },
  created() {
    // trigger action
    this.getInfo();
  },
};
</script>

<template>
  <div class="container-list">
    <h1 class="txt2">List Info SpaceShuttles</h1>
    <div class="row justify-content-start">
      <ListCard v-for="info in infos" :key="info.id" :info="info" />
    </div>
  </div>
</template>

<style>
.txt2 {
  color: white;
}

.container-list {
  margin-top: 5rem;
  margin-left: 5rem;
}
</style>
