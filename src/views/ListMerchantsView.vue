<script>
import { mapActions, mapState } from "pinia";
import { useAllStateStore } from "../stores/allState";
import HeaderVue from '../components/HeaderComponent.vue';
import MerchantCard from '../components/MerchantCard.vue';

export default {
  components: {
    HeaderVue,
    MerchantCard
  },
  computed: {
    ...mapState(useAllStateStore, ['merchants']),
  },
  methods: {
    ...mapActions(useAllStateStore, ['getMerchants']),
  },
  created() {
    this.getMerchants();
  }
}
</script>

<template>
  <div class="container">
    <HeaderVue />
    <h1>Daftar seluruh pedagang</h1>
    <div class="cards">
      <MerchantCard v-for="merchant in merchants"
                    :key="merchant.id"
                    :merchant="merchant" />
    </div>
  </div>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>