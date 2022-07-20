import { defineStore } from "pinia";
import instanceAxios from "../api/server";
import swal from "sweetalert";
import axios from "axios";

export const useMainGas = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
