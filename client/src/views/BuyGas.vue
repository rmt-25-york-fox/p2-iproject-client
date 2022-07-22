<script>
import { mapActions } from "pinia";
import { RouterLink } from "vue-router";
import { useMainGas } from "../stores/counter.js";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Buygas",
  components: {
    Navbar,
  },
  data() {
    return {
      liter: 0,
    };
  },
  methods: {
    ...mapActions(useMainGas, ["buyPetrol"]),
    localBuy() {
      this.buyPetrol({
        userId: localStorage.getItem("userId"),
        liter: this.liter,
        gas: this.$route.params.id,
      });
      // this.emailInput = "";
      this.liter = 0;
    },
  },
};
</script>

<template>
  <Navbar />
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
          <div class="bg-light rounded h-100 d-flex align-items-center p-5">
            <form @submit.prevent="localBuy">
              <h2>
                you can buy gas and enter it here so you can see how much you
                buy fuel for your vehicle
              </h2>
              <div class="w-100 col-8 mb-4">
                <label class="form-label" for="liter">Liter</label>
                <input
                  type="integer"
                  id="liter"
                  class="form-control form-control-lg"
                  v-model="liter"
                />
              </div>

              <div class="col-12">
                <button class="btn btn-primary w-100 py-3" type="submit">
                  Buy Gas
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
