<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: {
        RouterLink,
        HelloWorld
    }
}
</script>

<template>
 <header>
    <nav class="flex items-center justify-between">
                <h2 class="text-gray-200 font-bold text-2xl ">Home</h2>
                <div class="auth flex items-center">
                    <button class="bg-transparent text-gray-200  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">Sign in</button>
                    <button class="bg-gray-900 text-gray-200  py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">Sign up for free</button>
        <!-- <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/">Home</RouterLink> -->
                </div>
            </nav>
      <!-- <nav>
      </nav> -->

  </header>
</template>



