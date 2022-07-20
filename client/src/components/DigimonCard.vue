<script>
export default {
  name: "DigimonCard",
  props: ['digimon']
}
</script>

<template>
  <div class="card border border-warning mx-5 mt-5" style="width: 8rem;">
    <img :src="digimon.img" class="card-img-top p-3" alt="digimon picture">
    <div class="card-body">
      <h5 class="card-title fs-6">{{digimon.name}}</h5>
      <p class="card-text fs-6">{{digimon.level}}</p>
      <a href="#" class="btn btn-danger">Choose</a>
    </div>
  </div>
</template>