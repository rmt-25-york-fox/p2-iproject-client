<script>
import { mapActions } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'PocketCard',
    props: ['pocket', 'details'],
        methods: {
      ...mapActions(useAllState, ['getPokemonDetail', 'toMain', 'toDetail','addPokemonToPocket']),
      localDetailProduct(id){
        this.toDetail(id)
      },
      localAddPokemonToPocket(name){
        this.addPokemonToPocket(name)
      }
    }
}
</script>

<template>
  <section>
    <div class="card" style="width: 26rem;">
      <img :src="pocket.imgUrl" class="card-img-top" alt="Chicago Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">{{pocket.name}}</h5>
      </div>
      <div class="card-body">
        <a href="" class="card-link btn" @click.prevent="localDetailProduct(pocket.name)">See Detail</a>
      </div>
    </div>
  </section>
</template>

<style scoped>

.card img {
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
}
</style>