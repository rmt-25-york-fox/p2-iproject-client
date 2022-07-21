<script>
import Navbar from "../components/Navbar.vue";
import ListGas from "../components/ListGas.vue";
import { mapActions, mapState } from "pinia";
import { useMainGas } from "../stores/counter.js";

export default {
  name: "Listgas",
  components: {
    Navbar,
    ListGas,
  },
  methods: {
    ...mapActions(useMainGas, ["getPetrol"]),
  },
  computed: {
    ...mapState(useMainGas, ["petrols"]),
  },
  created() {
    this.getPetrol();
  },
};
</script>

<template>
  <Navbar />
  <!-- Gas apa aja -->
  <div class="container-xxl py-8">
    <div class="container">
      <div
        class="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style="max-width: 600px"
      >
        <h1 class="text-center">Fuel</h1>
      </div>
      <div class="row g-3">
        <ListGas
          v-for="petrol in petrols"
          :key="petrol.id"
          :petrol="petrol"
          class="column"
        />
      </div>
    </div>
  </div>
  <!-- Gas apa aja End -->
</template>

<style></style>
