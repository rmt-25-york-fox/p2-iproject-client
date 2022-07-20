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
      <span><a href="" @click.prevent="toPocket">Pokcket</a></span>
      <span><a href="" @click.prevent="toLogout">Logout</a></span>
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