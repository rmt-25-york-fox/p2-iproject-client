<script>
import { useStore } from "../stores/store";
import { mapActions, mapWritableState } from "pinia";

export default {
  computed: {
    ...mapWritableState(useStore, ["images"]),
  },
  methods: {
    ...mapActions(useStore, ["submitFile", "changeState"]),
  },
};
</script>

<template>
  <h1>Home Page</h1>
  <form @submit.prevent="submitFile">
    <div>
      <input type="file" @change="changeState" />
    </div>
    <button type="submit">Test</button>
  </form>
</template>
