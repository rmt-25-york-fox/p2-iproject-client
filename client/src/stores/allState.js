import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = "https://digidice.herokuapp.com";

export const useAllStatesStore = defineStore({
  id: "allState",
  state: () => ({
    isLoggedIn: false,
    digimons: "",
    leaderboards: "",
    myCollections: "",
  }),
  getters: {},
  actions: {
    changeIsLoggedInState() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedIn = true;
      }
    },
    logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.router.push("/login");
    },
    async loginToPlay(account) {
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email: account.email,
          password: account.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("tkn-gtd", response.data.data.access_token);
        this.isLoggedIn = true;
        this.router.push("/");
        Swal.fire("Login Success");
      } catch (err) {
        Swal.fire(err.response.data.message);
      }
    },
    async register(account) {
      try {
        const response = await axios.post(`${baseUrl}/register`, {
          email: account.email,
          password: account.password,
        });
        Swal.fire("Register Success");
        this.router.push("/login");
      } catch (err) {
        Swal.fire(err.response.data.message);
      }
    },
    async fetchAllDigimons() {
      try {
        const response = await axios.get(`${baseUrl}/digimon`);
        this.digimons = response.data;
      } catch (err) {
        Swal.fire("Failed to load digimons");
      }
    },
    async searchDigimon(name) {
      try {
        const response = await axios.get(`${baseUrl}/digimon/${name}`);
        this.digimons = response.data;
      } catch (err) {
        Swal.fire("Error");
      }
    },
    async fetchLeaderboard() {
      try {
        const response = await axios.post(`${baseUrl}/leaderboards`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tkn-gtd")}`,
          },
        });
        this.leaderboards = response.data.data;
      } catch (err) {
        Swal.fire("Error!");
      }
    },
    async createUserToPlay(name) {
      try {
        const response = await axios.post(
          `${baseUrl}/create-user`,
          {
            name,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("tkn-gtd")}`,
            },
          }
        );
        localStorage.setItem("_id", response.data._id);
        this.router.push("/gameplay");
      } catch (err) {
        Swal.fire("Failed to create user");
      }
    },
    async addDigimon(id) {
      try {
        const response = await axios.post(
          `${baseUrl}/digimon/${id}`,
          {
            DigiId: id,
          },
          {
            headers: { access_token: localStorage.getItem("access_token") },
          }
        );
        Swal.fire(`Yay! you've just collected a new Digimon`);
        this.router.push("/gameplay");
      } catch (err) {
        Swal.fire(err.response.data.message);
      }
    },
    async fetchMyCollection() {
      try {
        const response = await axios.get(`${baseUrl}/mydigimons`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        this.myCollections = response.data;
        if (!this.myCollections.length) {
          Swal.fire("Awww... no digimons available at the moment");
          this.router.push("/");
        }
      } catch (err) {
        Swal.fire("Error!");
      }
    },
  },
});
