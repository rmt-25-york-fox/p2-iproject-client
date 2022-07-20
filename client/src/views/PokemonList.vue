<script>
import { mapActions, mapState } from 'pinia'
import { useAllState } from '../stores/allState'
import PokemonCard from '../components/PokemonCard.vue'

  export default {
    name: 'PokemonList',
    components: {
    PokemonCard
},
    data(){
      return {}
    },
    computed: {
      ...mapState(useAllState, ['pokemons', 'page'])
    },
    methods: {
      ...mapActions(useAllState, ['allPokemon'])
    },
    created(){
      this.allPokemon()
    }
}
</script>

<template>
  <div class="content-container">
    <PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :pokemon="pokemon"/>
</div>
</template>

<style scoped>
</style>