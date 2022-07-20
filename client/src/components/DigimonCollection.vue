<script>
export default {
  name: 'DigimonCollection',
  props: ['digimon']
}
</script>

<template>
  <div class="card border border-warning mx-5 mt-5" style="width: 8rem;">
    <img :src="digimon.Digimon.img" class="card-img-top p-3" alt="digimon picture">
    <div class="card-body">
      <h5 class="card-title fs-6">{{ digimon.Digimon.name }}</h5>
      <p class="card-text fs-6">{{ digimon.Digimon.level }}</p>
    </div>
  </div>
</template>

<style scoped> 
.card {
  box-shadow: 5px 10px;
}
</style>