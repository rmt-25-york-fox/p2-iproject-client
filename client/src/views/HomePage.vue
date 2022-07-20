<script>
import { useBankStore } from "../stores/bankStore";
import { mapActions, mapState } from "pinia";
import VgaCard from "../components/VgaCard.vue";
import PsuCard from "../components/PsuCard.vue";
import ProcessorCard from "../components/ProcessorCard.vue";
import RamCard from "../components/RamCard.vue";
import SsdCard from "../components/SsdCard.vue";
export default {
  name: "HomePage",
  components: {
    VgaCard,
    PsuCard,
    SsdCard,
    RamCard,
    ProcessorCard,
  },
  computed: {
    ...mapState(useBankStore, ["vga", "psu", "ram", "ssd", "processor"]),
  },
  methods: {
    ...mapActions(useBankStore, ["fetchProduct"]),
  },
  created() {
    this.fetchProduct();
  },
};
</script>

<template>
  <!-- DASHBOARD -->
  <div class="flex flex-col bg-gray-50">
    <!-- <div class="bg-slate-100 h-44 flex flex-row">
      <div>MARKETPLACE</div>
      <div>GAMBAR GAMBAR PC</div>
      <div>ORDER YOUR PC</div>
    </div> -->
    <div class="flex flex-row mt-8 bg-gray-50">
      <div class="basis-1/4 border-r h-60 bg-gray-50">
        INI FILTER
        <div>
          <RouterLink to="/build">Start build PC</RouterLink>
        </div>
      </div>
      <div
        class="basis-3/4 px-4 py-4 flex flex-wrap flex-row gap-4 justify-center bg-gray-50"
      >
        <VgaCard v-for="vga in vga" :vga="vga" />
        <PsuCard v-for="psu in psu" :psu="psu" />
        <ProcessorCard v-for="processor in processor" :processor="processor" />
        <SsdCard v-for="ssd in ssd" :ssd="ssd" />
        <RamCard v-for="ram in ram" :ram="ram" />
      </div>
    </div>
  </div>
</template>

<style></style>
