<script>
import Navbar from "../components/Navbar.vue";
import { mapActions } from "pinia";
import { useRequestStore } from "../stores/request";

export default {
  name: "AddPage",
  components: { Navbar },
  data() {
    return {
      temp: {
        title: "",
        description: "",
        points: "",
      },
    };
  },
  methods: {
    ...mapActions(useRequestStore, ["addRequest"]),
    newRequest() {
      this.addRequest(this.temp);
    },
  },
};
</script>

<template>
  <Navbar />
  <h3 class="text-center" style="margin-right: 20px">Add Request</h3>
  <form method="post" v-on:submit.prevent="newRequest" class="w-25 mx-auto">
    <div class="mb-3">
      <label class="form-label">Title:</label>
      <input
        class="form-control"
        type="text"
        v-model="temp.title"
        placeholder="Masukkan Judul"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Description:</label>
      <input
        class="form-control"
        type="textarea"
        v-model="temp.description"
        placeholder="Masukkan Deskripsi"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Point:</label>
      <input
        class="form-control"
        type="number"
        v-model="temp.points"
        placeholder="Masukkan point"
      />
    </div>
    <button id="" class="btn btn-primary d-grid mx-auto">Submit</button><br />
  </form>
</template>
