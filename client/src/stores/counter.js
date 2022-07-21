import axios from "axios";
import { defineStore } from "pinia";
import instanceAxios from "../axiosInstance/axios";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    apod: "",
    apiKey: "bMMYPqCAMs4fyql1uteiYhSqBfNjKfTSYMm0JsZ1",
    email: "",
    password: "",
    login: false,
    infos: [],
    infoDetail: {},
  }),
  getters: {},
  actions: {
    async getApod() {
      try {
        const data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`);
        console.log(data);
        this.apod = data.data;
        console.log(this.apod);
      } catch (err) {
        console.log(err);
      }
    },

    async loginHandler(value) {
      try {
        const { data } = await instanceAxios.post("/login", {
          email: value.email,
          password: value.password,
        });
        console.log(data);
        localStorage.setItem("access_token", data.access_token);
        // this.getMovie();
        this.router.push("/");
        this.login = true;
      } catch (err) {
        console.log(err);
      }
    },

    checkLogin() {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        this.login = true;
      }
    },

    logoutHandler() {
      localStorage.clear();
      this.login = false;
      this.router.push("/login");
    },

    async newUser(value) {
      try {
        const newCus = await instanceAxios.post("/register", {
          username: value.username,
          email: value.email,
          password: value.password,
        });
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },

    async getInfo() {
      try {
        const { data } = await instanceAxios.get("/spaceshuttle", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(data);
        this.infos = data;
        // console.log(this.infos);
      } catch (err) {
        console.log(err);
      }
    },

    async getDetail(payload) {
      console.log(payload);
      try {
        const { data } = await instanceAxios.get(`/spaceshuttle/${payload}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.infoDetail = data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
