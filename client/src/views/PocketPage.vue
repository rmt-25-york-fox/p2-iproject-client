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
<div class="container-fluid">
      <div class="row">
        <div class="col py-3">
          <h3>MY POCKETMON</h3>
          <div class="content-container">
          <PocketCard v-for="pocket in pockets" :key="pocket.id" :pocket="pocket"/>
          </div>
          </div>
    </div>
</div>

</template>

<style scoped>
a {
  text-decoration: none;
  padding: 10px;
  color: white;
  font-size: 22px;
  
}
a:hover {
  color: rgb(6, 36, 92);
}
span {
  color: rgba(255, 255, 255, 0.938);
}
span:hover {
  color: rgb(6, 36, 92);
}
.content-container {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  gap: 35px;
  justify-content: space-evenly;
  /* background-color: rgb(200, 243, 253); */
}

.dashBg {
  background-color: rgba(63, 105, 219, 0.863);
  font-weight: bold;
}

h3{
  color: rgb(6, 36, 92);
  padding: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}


</style>