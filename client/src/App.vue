<script>
import { RouterLink, RouterView } from 'vue-router'
import {mapActions} from 'pinia'
import NavBar from 'client/src/components/NavBar.vue'


export default {
  components: {
    RouterLink,
    RouterView,
    NavBar
},

}

</script>

<template>
  <NavBar/>
  <RouterView />
</template>

<style>
</style>
