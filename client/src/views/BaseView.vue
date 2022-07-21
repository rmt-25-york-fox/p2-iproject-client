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
    <nav class="flex items-center justify-center mt-4">
      <div class="auth flex items-center">
        <RouterLink to="/" class="bg-transparent text-gray-200  py-2 px-3 rounded mr-4 hover:bg-gray-800 hover:text-gray-100">Home</RouterLink>
                  <RouterLink to="/about" class="bg-transparent text-gray-200  py-2 px-3 rounded mr-4 hover:bg-gray-800 hover:text-gray-100">About</RouterLink>
                  <h2 class="text-gray-200 font-bold text-2xl px-3">Pray</h2>
                    <RouterLink to="/login" class="bg-transparent text-gray-200  p-2 rounded  mr-4 hover:bg-gray-800 hover:text-gray-100">Sign in</RouterLink>
                    <RouterLink to ="/register" class="bg-transparent text-gray-200  py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">Sign up for free</RouterLink>
                </div>
            </nav>
      <!-- <nav>
      </nav> -->

  </header>
</template>



