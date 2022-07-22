<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  data() {
    return {
      name: "",
      information: "",
      imgUrl: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["addNewInfo"]),
    add() {
      this.addNewInfo({
        name: this.name,
        information: this.information,
        imgUrl: this.imgUrl,
      });
    },
  },
};
</script>

<template>
  <div class="form">
    <div class="row text-center">
      <div class="col">
        <h2></h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form @submit.prevent="add">
          <div class="mb-3">
            <label for="title" class="form-label">Name</label>
            <input type="text" class="form-control" id="titleNew" v-model="name" />
          </div>
          <div class="mb-3">
            <label for="synopsis" class="form-label">Information</label>
            <textarea class="form-control" name="" id="synopsisNew" cols="30" rows="10" v-model="information"></textarea>
          </div>
          <div class="mb-3">
            <label for="imgUrl" class="form-label">Image</label>
            <input type="text" class="form-control" id="posterNew" v-model="imgUrl" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
