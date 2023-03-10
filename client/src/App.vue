<script>
import { RouterLink, RouterView } from 'vue-router'
import { useBackStore } from './stores/counter'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      url: ''
    }
  },
  computed: {
    ...mapState(useBackStore, ['shortUrl', 'realUrl'])
  }
  ,
  methods: {
    ...mapActions(useBackStore, ['shorten']),
    shortHandler() {
      this.shorten(this.url);
    }
  }
}
</script>

<template>
  <form @submit.prevent="shortHandler">
    <input type="text" v-model="url">
    <input type="submit">
  </form>

  <h3> <a :href="realUrl">{{ shortUrl }}</a></h3>
  <RouterView />
</template>

<style scoped></style>
