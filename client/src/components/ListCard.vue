<script>
export default {
  props: ["info"],
};
</script>

<template>
  <div class="col-12 col-md-4">
    <div class="card-list mb-3 bg-dark" style="width: 18rem">
      <img :src="info.imgUrl" class="card-img-top-list" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Name: {{ info.name }}</h5>
        <router-link :to="`/spaceshuttle/detail/${info.id}`" class="btn btn-primary">Detail</router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* .card-list {
  max-width: 20rem;
  max-height: 20rem;
} */

.card-img-top-list {
  max-width: 18rem;
  max-height: 15rem;
}

.card-title {
  color: white;
}
</style>
