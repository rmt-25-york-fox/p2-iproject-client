<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useSportStore } from '../stores/sport'

import Card from './Card.vue'
import PageButton from './PageButton.vue'

export default {
  computed: {
    ...mapState(useSportStore, ['sports'])
  },
  name: 'SportList',
  components: { Card, PageButton },
  methods: {
    ...mapActions(useSportStore, ['fetchSports'])
  }
}
</script>
<template>
  <div class="col-10 row">
    <div
      v-if="this.sports.length === 0"
      style="
        width: 700px;
        height: 700px;
        justify-content: center;
        align-items: center;
      "
      class="container"
    >
      <h1 style="margin-top: 300px" class="mt-10">Sorry, exercise not found</h1>

      <h6>Please wait or refresh...</h6>
    </div>

    <Card v-for="sport in sports" :key="sport.id" :sport="sport" />
    <br />
    <div style="margin-left: 1030px; align-items: flex-end">
      <PageButton />
    </div>
  </div>
</template>
<style></style>
