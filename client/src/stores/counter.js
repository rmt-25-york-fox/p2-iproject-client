import axios from "axios";
import { defineStore } from "pinia";
import instanceAxios from "../axiosInstance/axios";
import Swal from "sweetalert2";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    apod: "",
    mars: "",
    twt: "",
    apiKey: "bMMYPqCAMs4fyql1uteiYhSqBfNjKfTSYMm0JsZ1",
    twitKey: "nJSDvcgwtEu7je5aaPUL6cWV1",
    twitKeySecret: "f8AiZTCeXkEG5fO7a2uWb7dWzjfGXNTSfqQ6sNO1TmcUNCzPUf",
    bearerToken: "AAAAAAAAAAAAAAAAAAAAAFVXfAEAAAAAZNSCltt1xyeiTkZ7G%2BWJR9iw%2FQs%3DnZ3QyxsjjAsACbLdgzqK3DBIXnSFBappNnlzRQz081Uq30etAl",
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

    async twitNasa() {
      try {
        const data = await axios.get("https://api.twitter.com/2/tweets/search/recent?query=from:nasa", {
          headers: {
            Authorization: `Bearer ${this.bearerToken}`,
          },
        });
        console.log(data);
        this.twt = data.data;
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
        // console.log(data);
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/");
        this.login = true;
        Swal.fire("Welkome to space 8");
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data.message}`,
        });
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
        Swal.fire("NAISEEE");
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data.message}`,
        });
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

    async addNewInfo(value) {
      try {
        const newData = await instanceAxios.post(
          "/spaceshuttle",
          {
            name: value.name,
            information: value.information,
            imgUrl: value.imgUrl,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.router.push("/shuttle");
      } catch (err) {
        console.log(err);
      }
    },
    async marsWeather() {
      try {
        const { data } = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=${this.apiKey}&feedtype=json&ver=1.0`);
        // console.log(data);
        this.mars = data.validity_checks;
        console.log(this.mars);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
