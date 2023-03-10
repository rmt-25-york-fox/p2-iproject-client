<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState, mapWritableState } from "pinia";
import { useJoblezzStore } from '../stores/joblezz';

import Hero from '../components/Hero.vue'
import Card from '../components/Card.vue'
import Preloader from '../components/Preloader.vue'

export default {

  // REGISTER COMPONENTS
  components : {
    Hero, Card, Preloader
  },

  // COMPUTED
  computed: {
    ...mapState(useJoblezzStore, ['isLogin', 'isPremium', 'dataJobs', 'oneJob', 'isLoading']),

  },

  // METHODS
  methods: {
    ...mapActions(useJoblezzStore, ['logout', 'fetchJobs', 'getOneJob']),

  },
  
  // LIFECYCLE - CREATED
  created() {

    // CHECK ACCESS_TOKEN
    if (localStorage.getItem('access_token')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }

    // FETCH JOBS DATA
    this.fetchJobs()

  },

//   beforeMount() {

//     // CHECK ACCESS_TOKEN
//     if (localStorage.getItem('access_token')) {
//       this.isLogin = true
//     } else {
//       this.isLogin = false
//     }

//     // FETCH JOBS DATA
//     this.fetchJobs()

// }

}

</script>

<template>
  <Hero />
  <Preloader v-if="isLoading" />
  <div class="overflow-hidden bg-white shadow sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
        <Card v-for="job in dataJobs.results" :key="job.id" :job="job" />
    </ul>
  </div>
</template>