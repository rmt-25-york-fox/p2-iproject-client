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
  </div>



</template>
<style scoped>
.pokemon-ball {
  border: 3px solid white  ;
  border-radius: 50%;
}
#home, #portfolio, #contact { 
  background: #32AC97;
  width: 100%;
  padding: 40px 0;
}

#home div { 
  display: inline-block;
  vertical-align: top;
  width: 48%;
}
</style>