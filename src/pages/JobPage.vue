<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState, mapWritableState } from "pinia";
import { useJoblezzStore } from '../stores/joblezz';

export default {
    props: ['job'],



    // COMPUTED
    computed: {
        ...mapState(useJoblezzStore, ['isLogin', 'isPremium', 'dataJobs', 'oneJob']),

    },

    // METHODS
    methods: {
        ...mapActions(useJoblezzStore, ['logout', 'fetchJobs', 'getOneJob', 'getPremium', 'applyJob']),

        handleOneJob(id) {
            this.getOneJob(id)
        },

        handleGetPremium() {
            this.getPremium()
        },

        handleapplyJob(role) {
            console.log(role, '<<<<<< MASUK handleapplyJob');
            this.applyJob(role)
        }

    },

}

</script>

<template>

    <!-- <h1>JOBS PAGE</h1> -->

    <!-- {{ oneJob }} -->

    <p><h1 class="text-xl font-bold tracking-tight text-gray-900">{{ oneJob.role }}</h1></p>
    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                                    </svg> <span>{{ oneJob.company_name }}</span></p>

                                    <hr class="my-3">

    <p><h2 v-html="oneJob.text"></h2></p>

    <!-- <a @click.prevent="handleGetPremium()" href="#">BUY PRIEMUM</a> -->

    <!-- APPLY BUTTON -->
    <div class="flex justify-center">
        <a @click.prevent="handleapplyJob(oneJob.role)" v-if="isLogin" href="#" class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">APPLY THIS JOB</a>
        <a v-else href="#" class="rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-not-allowed">LOGIN TO APPLY</a>
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