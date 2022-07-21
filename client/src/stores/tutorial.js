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
    tutorial: {},
    categories: [
      {
        name: "Node.js",
        route: "/tutorial/nodejs",
        description: "Node.js is an open-source, cross-platform JavaScript runtimes environment.",
        font: "fa-brands fa-node mb-3",
      },
      {
        name: "Java",
        route: "/tutorial/java",
        description:
          "Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.",
        font: "fa-brands fa-java mb-3",
      },
      {
        name: "Go",
        route: "/tutorial/golang",
        description:
          "Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software.",
        font: "fa-brands fa-golang mb-3",
      },
    ],
  }),
  getters: {},
  actions: {
    async getNodeJsTutorials() {
      try {
        if (this.nodeJsTutorials.length == 0) {
          const { data } = await axios.get(`${baseUrl}/tutorials/nodejs`);
          this.nodeJsTutorials = data;
        }
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    async getJavaTutorials() {
      try {
        if (this.nodeJsTutorials.length == 0) {
          const { data } = await axios.get(`${baseUrl}/tutorials/java`);
          this.javaTutorials = data;
        }
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    async getGolangTutorials() {
      try {
        if (this.nodeJsTutorials.length == 0) {
          const { data } = await axios.get(`${baseUrl}/tutorials/golang`);
          this.golangTutorials = data;
        }
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
      }
    },
    clickCategoryHandler(route) {
      this.router.push(route);
    },
    detailTutorialHandler(objTutorial, category) {
      this.tutorial = objTutorial;
      this.router.push(`${category}/${objTutorial.id}`);
    },
  },
});
