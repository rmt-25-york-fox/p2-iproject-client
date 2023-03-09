<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState, mapWritableState } from "pinia";
import { useJoblezzStore } from '../stores/joblezz';

import Hero from '../components/Hero.vue'
import Card from '../components/Card.vue'

export default {

  // REGISTER COMPONENTS
  components : {
    Hero, Card
  },

  // COMPUTED
  computed: {
    ...mapState(useJoblezzStore, ['isLogin', 'dataJobs', 'oneJob']),

  },

  // METHODS
  methods: {
    ...mapActions(useJoblezzStore, ['logout', 'fetchJobs', 'getOneJob']),

  },
  
  // LIFECYCLE - CREATED
  created() {

    // FETCH JOBS DATA
    this.fetchJobs()

  }

}

</script>

<template>

  <!-- {{ dataJobs.results }} -->

  <Hero />
  <!-- <h1>There are {{ dataJobs.count }} remote jobs!</h1> -->

  <div class="overflow-hidden bg-white shadow sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <!-- <Card /> -->

      <Card v-for="job in dataJobs.results" :key="job.id" :job="job" />

    </ul>
  </div>

</template>