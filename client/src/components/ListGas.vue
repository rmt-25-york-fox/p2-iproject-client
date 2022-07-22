<script>
import { mapActions } from "pinia";
import { useMainGas } from "../stores/counter";
export default {
  name: "ListGas",
  props: ["petrol"],

  methods: {
    ...mapActions(useMainGas, ["buyPetrol"]),
    toBuyPetrol() {
      this.buyPetrol({
        id: this.petrol.id,
      });
      this.$router.push(`/transaksi/${this.petrol.id}`);
    },
  },
};
</script>

<template>
  <div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
    <div class="team-item position-relative rounded overflow-hidden">
      <div class="team-text bg-light text-center p-4">
        <h5>{{ petrol.nama }}</h5>
        <div class="team-social text-center">
          <a
            class="btn btn-square"
            href=""
            @click.prevent="toBuyPetrol(petrol.id)"
            ><i class="fa-solid fa-dollar-sign"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
