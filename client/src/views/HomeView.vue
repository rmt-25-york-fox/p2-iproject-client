<script >
import preaches from '@/components/preaches.vue'
import today from '@/components/today.vue'
import { RouterLink, RouterView } from 'vue-router'
export default {
  components:{
    RouterLink,
    preaches,
    today
  }
}
</script>

<template>
<h1 class="text-3xl font-bold text-center mt-5">Today's Preaches</h1>
<today/>
<h1 class="text-3xl font-bold text-center">All Preaches</h1>
 <preaches/>


</template>

