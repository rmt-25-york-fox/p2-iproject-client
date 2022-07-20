import { defineStore } from "pinia";
import Swal from "sweetalert2";
import axios from "axios";

const baseUrl = "http://localhost:3000";

export const useAllStatesStore = defineStore({
  id: "allState",
  state: () => ({
    isLoggedIn: false,
    digimons: "",
    leaderboards: "",
  }),
  getters: {},
  actions: {
    changeIsLoggedInState() {
      if (localStorage.getItem('access_token')) {
        this.isLoggedIn = true
      }
    },
    async loginToPlay(account) {
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email: account.email,
          password: account.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("tkn-gtd", response.data.data.access_token);
        this.isLoggedIn = true
        this.router.push("/");
        Swal.fire("Login Success");
      } catch (err) {
        Swal.fire(err.response.data.message);
      }
    },
    async fetchAllDigimons() {
      try {
        const response = await axios.get(`${baseUrl}/digimon`);
        this.digimons = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async searchDigimon(name) {
      try {
        const response = await axios.get(`${baseUrl}/digimon/${name}`);
        this.digimons = response.data;
      } catch (err) {
        console.log(err);
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
        console.log(JSON.stringify(this.leaderboards, null, 2));
      } catch (err) {
        console.log(err);
      }
    },
  },
});
