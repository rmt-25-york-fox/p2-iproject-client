<script>
import { mapActions } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'NavBar',

        methods: {
      ...mapActions(useAllState, ['toMain', 'toDetail','toPocket', 'toLogout']),
    }
}
</script>

<template>
  <section>
    
    <div class="navi">
      <span><a href="#home">Home</a></span>
      <span><a href="#portfolio">Pokcket</a></span>
      <span><a href="" @click.prevent="toLogout">Logout</a></span>
    </div>
  </section>
</template>

<style scoped>
.navi{ 
  background: #029A81;
  padding: 20px 40px;
  font-size: 28px;
  text-align: right;
}

.navi span {
  margin: 5px 10px 5px 10px;
}

.navi span a {
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
}

#home, #portfolio, #contact { 
  background: #32AC97;
  width: 100%;
  padding: 40px 0;
}
</style>