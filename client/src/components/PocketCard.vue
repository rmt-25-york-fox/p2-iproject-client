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
    <div class="card" style="width: 26rem;">
      <img :src="pocket.imgUrl" class="card-img-top" alt="Chicago Skyscrapers"/>
      <div class="card-body">
        <h5 class="card-title">{{pocket.name}}</h5>
      </div>
      <div class="card-body" >
        <a href="" class="card-link btn" @click.prevent="localDetailProduct(pocket.name)">See Detail</a>
      </div>
    </div>
</template>

<style scoped>

.card img {
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
}
.item{
  padding-left:5px;
  padding-right:5px;
}
.item-card{
  transition:0.5s;
  cursor:pointer;
}
.item-card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.item-card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>