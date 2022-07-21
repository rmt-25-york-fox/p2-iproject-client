<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';

export default{
    methods:{
        ...mapActions(useMainStore, ["changePage", "checkLogin"])
    }, 
    computed:{
        ...mapState(useMainStore, ["isLogIn"])
    },

    updated(){
        this.checkLogin()
    }

     
}
</script>

<template>
<div class="flex py-4 px-3 bg-gray-50 h-100 dark:bg-gray-800">
            <ul class="space-y-8">
                <li>
                    <img class="rounded-full w-10" src="./assets/logo.png" alt="">
                </li>
                <li class="mt-5">
                    <a href="#" @click.prevent="changePage('/')" class="flex items-center p-2 pl-3 text-3xl text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i class="fa-solid fa-house"></i>
                    </a>
                </li>
                <li>
                    <a href="#" @click.prevent="changePage('/flashcard')" class="flex items-center p-2 pl-3 text-3xl text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i class="fa-solid fa-book-open"></i> 
                        </a>
                </li>
                <li>
                    <a href="#" @click.prevent="changePage('/login')" class="flex items-center p-2 pl-3 text-3xl text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        </a>
                </li>
                
                </ul>
          </div>
</template>