<script>
import { mapActions } from 'pinia'
import { useMainStore } from '../stores/main'

export default{
    props: ["status"],
    methods:{
        ...mapActions(useMainStore, ["postDetails"]),

        getDate(date){
            return String(date).substring(0,10)
        },

        imageUrl(url){
            console.log('http://localhost:3000/'+ url)
            return 'http://localhost:3000/'+ url
        },

    }
}
</script>

<template>
<!-- Status Cards -->
            <div class="rounded  overflow-hidden shadow-lg bg-white mb-2">
                <div class="px-6 py-4">
                    <div class="flex flex-row">
                        <div class="basis-1/12 ">
                            <img class="rounded-full w-10 my-auto" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        </div>
                        <div class="basis-9/12">
                            <div class="font-bold text-l px-2">{{status.User.username}}</div>
                            <div class="mb-2 px-2">{{getDate(status.createdAt)}}</div>
                        </div>

                        <div class="flex flex-row mt-2">
                            <span class="inline-block px-3 py-1 text-sm text-center font-bold text-orange-700 mr-2 mb-2"><button @click="postDetails(status.id)">Read More</button></span>
                        </div>

                      </div>

                      <!-- Status  -->
                    <div class="flex flex-row">
                        <p class="text-gray-700 text-base" style="white-space: pre-wrap;">
                            {{status.content}}
                        </p>
                    </div>

                    <div class="flex flex-row">
                        <img  v-if=" status.imageUrl " class="mx-auto my-3 w-1/3" :src="imageUrl(status.imageUrl)" alt="???">
                    </div>

                </div>
            </div>
</template>