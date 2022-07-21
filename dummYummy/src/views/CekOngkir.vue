<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "../stores/AllStore";
export default {
  name: "CekOngkir",
  data() {
    return {
      destination: "",
      courier: "",
    };
  },
  computed: {
    ...mapState(useCounterStore, ["resp"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["cekOngkir"]),
    localHandlerCekOngkir() {
      this.cekOngkir(this.destination, this.courier);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="container">
      <form action="" class="col-12" @submit.prevent="localHandlerCekOngkir">
        <div class="form-group">
          <label for="">Destination</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="destination"
          >
            <option value="" selected>Open this select menu</option>
            <option value="1">Bali</option>
            <option value="2">Bangka Belitung</option>
            <option value="3">Banten</option>
            <option value="4">Bengkulu</option>
            <option value="5">DI Yogyakarta</option>
            <option value="6">DKI Jakarta</option>
            <option value="7">Gorontalo</option>
            <option value="8">Jambi</option>
            <option value="9">Jawa Barat</option>
            <option value="10">Jawa Tengah</option>
          </select>
        </div>
        <div class="form-group">
          <label for="">Courier</label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="courier"
          >
            <option value="" selected>Open this select menu</option>
            <option value="jne">JNE</option>
            <option value="pos">POS</option>
            <option value="tiki">TIKI</option>
          </select>
        </div>
        <br />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" class="btn btn-primary">Cek</button>
        </div>
      </form>
      <br />
      <!-- <div v-if="data">
                {{ data }}
            </div> -->
    </div>
  </div>
</template>
