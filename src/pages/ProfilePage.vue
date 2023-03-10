<script>
import { RouterLink, RouterView } from 'vue-router'

import { mapActions, mapState, mapWritableState } from "pinia";
import { useJoblezzStore } from '../stores/joblezz';

export default {
    props: ['job'],

    // COMPUTED
    computed: {
        ...mapState(useJoblezzStore, ['isLogin', 'isPremium', 'dataJobs', 'oneJob', 'dataHistory']),

    },


    // METHODS
    methods: {
        ...mapActions(useJoblezzStore, ['logout', 'fetchJobs', 'getOneJob', 'getHistory']),


        handleOneJob(job) {
            // console.log(this.testData, 'MASUK handleOneJob CARD');
            this.getOneJob(job)
        },

    },


    // LIFECYCLE
    created() {

      this.getHistory()


    } //

}

</script>

<template>




<h1>HISTORY</h1>
  <div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
  </div>
  <div class="mt-8 flow-root">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">ID</th>
              <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Job</th>
              <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="history in dataHistory" :key="history.id">
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">{{ history.id }}</td>
              <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ history.job }}</td>
              <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{{ history.createdAt }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<div class="flex mx-auto my-3 text-center justify-center">
        <RouterLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>BACK
        </RouterLink>

        <!-- <a href="#" class="mx-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>BACK
        </a> -->
    </div>




</template>