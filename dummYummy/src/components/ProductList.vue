<script>
import { mapState } from "pinia";
import { useCounterStore } from "../stores/AllStore";

import ProductCard from "../components/ProductCard.vue";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(useCounterStore, ["products"]),
  },
};
</script>

<template>
  <div id="cards_landscape_wrap-2">
    <div class="container">
      <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
