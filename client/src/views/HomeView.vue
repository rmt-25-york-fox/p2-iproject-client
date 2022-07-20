<script>
import { mapActions, mapState } from 'pinia'
import { useAllState } from '../stores/allState'
import PokemonCard from '../components/PokemonCard.vue'
import PokemonList from './PokemonList.vue'
import NavBar from '../components/NavBar.vue'

  export default {
    name: 'HomeView',
    components: {
    PokemonCard,
    PokemonList,
    NavBar
},
    computed: {
      ...mapState(useAllState, ['pokemons', 'page'])
    },
    methods: {
      ...mapActions(useAllState, ["allPokemon"]),
    },
    created(){
      this.allPokemon()
      this.page = 'main'
    }
}
</script>

<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col py-3">
          <h3>ALL POKEMON</h3>
            <PokemonList/>
          </div>

    </div>
</div>
</section>
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