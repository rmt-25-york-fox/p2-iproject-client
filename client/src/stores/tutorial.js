import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:3000";

export const useTutorialStore = defineStore({
  id: "tutorial",
  state: () => ({
    nodeJsTutorials: [],
    javaTutorials: [],
    golangTutorials: [],
  }),
  getters: {},
  actions: {
    async getNodeJsTutorials() {
      try {
        const { data } = await axios.get(`${baseUrl}/tutorials/nodejs`);
        this.nodeJsTutorials = data;
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    async getJavaTutorials() {
      try {
        const { data } = await axios.get(`${baseUrl}/tutorials/java`);
        this.javaTutorials = data;
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    async getGolangTutorials() {
      try {
        const { data } = await axios.get(`${baseUrl}/tutorials/golang`);
        this.golangTutorials = data;
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
  },
});
