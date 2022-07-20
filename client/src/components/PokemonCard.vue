<script>
import { mapActions } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'PokemonCard',
    props: ['pokemon', 'details'],
        methods: {
      ...mapActions(useAllState, ['getPokemonDetail', 'toMain', 'toDetail','addWishlist']),
      localDetailProduct(id){
        this.toDetail(id)
      },
    }
}
</script>

<template>
  <section>
    <div class="card" style="width: 26rem;">
      <img :src="pokemon.sprites.other['official-artwork']['front_default']" class="card-img-top" alt="Chicago Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">{{pokemon.name}}</h5>
      </div>
      <div class="card-body">
        <a href="" class="card-link btn" @click.prevent="localDetailProduct(pokemon.name)">See Detail</a>
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