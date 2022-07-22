<script>
import { mapActions } from "pinia";
import { useSportStore } from "../stores/sport";
export default {
  name: "ButtonApp",
  emits: ["handleClick"],
  props: {
    buttonText: {
      type: String,
      default: () => "label",
    },
    dark: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<template>
  <button class="btn btn-primary btn-block w-100">
    {{ buttonText }}
  </button>
</template>

<style scoped>
.baseButton {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.light {
  background: white;
  color: black;
  border: 1px solid gray;
}

.dark {
  background: black;
  color: white;
}
</style>
