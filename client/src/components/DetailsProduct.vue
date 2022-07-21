<script>
import { mapState, mapActions } from "pinia";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "DetailsProduct",
  data() {
    return {
      status: {
        isBuy: false,
      },
    };
  },
  computed: {
    ...mapState(useAllStateStore, ["detailProduct"]),
  },
  methods: {
    ...mapActions(useAllStateStore, ["selectDetailsProduct"]),
  },
};
</script>

<template>
  <section class="about" id="about">
    <h3 class="sub-heading">Details Product</h3>
    <h1 class="heading">Nike Store</h1>

    <div class="row">
      <div class="image">
        <img v-bind:src="detailProduct.imgUrl" alt="" />
      </div>

      <div class="content">
        <h3>{{ detailProduct.name }}</h3>
        <p>
          {{ detailProduct.description }}
        </p>
        <p>Original guarantee from nike official store</p>
        <div class="icons-container">
          <!-- <i class="fa-solid fa-clapperboard-play"></i> -->
          <div class="icons">
            <span><a href="#" @click.prevent="buyHandler">Buy Now</a></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import url("../assets/detailsProduct.css");
</style>
