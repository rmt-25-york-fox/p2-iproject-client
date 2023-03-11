<script>
import { mapActions, mapWritableState } from 'pinia'
import { useMainStore } from "../stores/main";

export default{
    data(){
        return{
            username: localStorage.getItem('name')
        }
    },

    methods:{
       ...mapActions(useMainStore, ["newStatus"]) 
    },

    computed:{
        ...mapWritableState(useMainStore, ["statusForm"])
    }
}
</script>

<template>
<!-- Upload Cards -->
            <div class="rounded  overflow-hidden shadow-lg bg-white mb-2">
                <div class="px-6 py-4">
                    <div class="flex flex-row">
                        <div class="basis-1/12 ">
                            <img class="rounded-full w-10 my-auto" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="">
                        </div>
                        <div class="basis-8/12">
                            <div class="font-bold text-l px-2">{{username}}</div>
                        </div>

                      </div>

                      <!-- Form  -->
                    <div class="flex flex-row">
                        <form class="w-100 mt-2" action="">
                            <textarea v-model="statusForm.content" class="px-5 py-2 bg-stone-200" name="" id="" cols="103" rows="3" placeholder="Ask something..."></textarea> <br>
                            <!-- <input v-model="statusForm.imageUrl type="file" name="imageUrl" id=""> -->
                            <button @click.prevent="newStatus()" class="inline-block right-0 px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 bg-sky-900 rounded" type="submit">Upload</button>
                        </form>
                    </div>
                </div>
            </div>
</template>