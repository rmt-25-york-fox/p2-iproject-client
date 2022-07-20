<script>
import { mapActions, mapState } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'PokemonDetail',
    computed:{
      ...mapState(useAllState, ['pokemonDetail'])
    },
    methods: {
      ...mapActions(useAllState,['getPokemonDetail', 'toMain'])
    },
    created(){
      this.getPokemonDetail(this.$route.params.name)
      // this.getQrCode(this.$route.params.id)
    }
}
</script>
<template>
<h3>POKEMON DETAIL</h3>
<div class="card mb-3">
  <!-- <img :src="qrCode" class="card-img-top imgSize" alt=""/> -->
  <img :src="pokemonDetail.sprites.other['official-artwork']['front_default']" class="card-img-top cardImg" alt="Wild Landscape"/>
  <div class="card-body">
    <h5 class="card-title">{{pokemonDetail.name}}</h5>
  </div>
</div>
</template>
<style scoped>
.card{
  margin-left: 300px;
  margin-right: 300px
}
h3{
  padding: 25px;
  color: rgb(11, 11, 165);
  display: flex;
  font-weight: bold;
  justify-content: center;
}
.cardImg {
  margin: 0 auto;
  width: 450px;
  display: flex;
}
.size{
  font-size: 24px;
}

.imgSize {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>