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
      ...mapState(useAllState, ['pokemons', 'page', 'next', 'prev'])
    },
    methods: {
      ...mapActions(useAllState, ["allPokemon"]),
      localPoke(url){
        this.allPokemon(url)
      }
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
          <a href="" @click.prevent="this.localPoke(this.prev)" class="previous round">&#8249;</a>
          <a href="" @click.prevent="this.localPoke(this.next)"  class="next round">&#8250;</a>
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

a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

a:hover {
  background-color: #ddd;
  color: black;
}

.previous {
  background-color: #f1f1f1;
  color: black;
}

.next {
  background-color: #04AA6D;
  color: white;
}

.round {
  border-radius: 50%;
}
</style>