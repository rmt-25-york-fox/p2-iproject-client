<script>
import { mapActions, mapState } from 'pinia'
import { useAllState } from '../stores/allState'
import PocketCard from '../components/PocketCard.vue'

  export default {
    name: 'PocketPage',
    components: {
    PocketCard
},
    data(){
      return {}
    },
    computed: {
      ...mapState(useAllState, ['pockets', 'page'])
    },
    methods: {
      ...mapActions(useAllState, ['allPocket'])
    },
    created(){
      this.allPocket()
    }
}
</script>

<template>
  <div class="content-container">
    <PocketCard v-for="pocket in pockets" :key="pocket.id" :pocket="pocket"/>
</div>
</template>

<style scoped>
</style>