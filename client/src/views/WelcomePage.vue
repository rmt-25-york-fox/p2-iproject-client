<script>
import { mapState, mapActions } from 'pinia'
import { useAllState } from '../stores/allState'

  export default {
    name: 'WelcomePage',
    data(){

    },
    methods: {
      ...mapActions(useAllState, [, 'toRegister', 'toLogin']),
    },
}
</script>
<!-- https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png -->
<template>
  <div id="home">
  <div class="aboutImg">
    <img src="http://www.pngmart.com/files/2/Pokeball-PNG-Image.png" class="pokemon-ball" width="300">
  </div>
  <div>
    <h1 class="headerOne">All About Pokemon</h1>
    <p class="headerP">Pokémon (ポケモン Pokemon?, Japanese pronunciation: ['pokemoɴ]; /ˈpoʊkeɪˌmɒn/ or /ˈpoʊkᵻˌmɒn/ - poh-kay-mon or poh-ki-mon)[1][2] is a media franchise managed by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak, and Creatures.[3] The franchise copyright is shared by all three companies, but Nintendo is the sole owner of the trademark.[4] The franchise was created by Satoshi Tajiri in 1995,[5] and is centered on fictional creatures called "Pokémon", which humans, known as Pokémon Trainers, catch and train to battle each other for sport. <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon" target="_blank">Source</a></p>
  </div>
</div>
  <div id="home">
  <div class="aboutImg">
    <img src="https://www.thatawesomeshirt.com/images/get/1943/430x550/" class="pokemon-ball" width="300">
  </div>
  <div>
    <h1 class="headerOne">Let's Play POCKETMON</h1>
    <p class="headerP">You Can Play Rock, Paper, Scissors and get a random pokemon's card. Now Let's Play POCKETMON to see your luck and be the winner of the top score on the Leaderboard. BE AWARE OF PLAYING TIME! On one game you can playing about 15 seconds only. WELL GOOD LUCK AND HAVE FUN GUYS~~ !! </p>
  </div>
</div>



</template>
<style scoped>
.pokemon-ball {
  border: 3px solid white  ;
  border-radius: 50%;
}
#home, #portfolio, #contact { 
  background: #d0e29e;
  width: 100%;
  padding: 40px 0;
}
.aboutImg {
  text-align: center;
}

#home div { 
  display: inline-block;
  vertical-align: top;
  width: 48%;
}
</style>