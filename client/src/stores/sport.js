import { defineStore } from "pinia";
import axios from "axios";
import axiosInstance from "../axiosInstance";
import Swal from "sweetalert2";

export const useSportStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000/pub",
    isLogin: "",
    isError: "",
    page: 0,
    title: "",
    rating: "",
    genreId: "",
    movies: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async pagination(objQuery) {
      try {
        console.log("HIT PAGINATION");
        if (!objQuery.page) {
          this.page = 0;
          objQuery.page = 0;
        } else if (objQuery.page) {
          this.page = objQuery.page;
        } else if (!objQuery.title) {
          this.title = "";
        } else if (objQuery.title) {
          this.title = objQuery.title;
        } else if (!objQuery.rating) {
          this.rating = "";
        } else if (objQuery.rating) {
          this.rating = objQuery.rating;
        } else if (!objQuery.genreId) {
          this.genreId = "";
        } else if (objQuery.genreId) {
          this.genreId = objQuery.genreId;
        }

        this.page = objQuery.page;
        this.title = objQuery.title;
        this.rating = objQuery.rating;
        this.genreId = objQuery.genreId;
        console.log(
          "queries>>>",
          this.page,
          this.title,
          this.rating,
          this.genreId
        );

        const response = await axiosInstance.get(
          `${this.baseUrl}/sports?page=${this.page}&size=8&title=${this.title}&rating=${this.rating}&genreId=${this.genreId}`
        );
        console.log("response>>>", response);
        this.movies = response.data.data.sports;

        console.log("RESPONSE THIS MOVIES >>>>", this.movies);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSports() {
      try {
        const axios = require("axios");

        const options = {
          method: "GET",
          url: "https://exercisedb.p.rapidapi.com/exercises",
          headers: {
            "X-RapidAPI-Key":
              "e271177b1dmsh75da436e4a78356p10452ejsnd733e94bc616",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        };

        axios
          .request(options)
          .then(function (response) {
            this.movies = response.data;
            console.log(response.data);
            console.log("this movies>>>", this.movies);
          })
          .catch(function (error) {
            console.error(error);
          });
      } catch (err) {
        console.log(err);
      }
    },
    async loginHandler(objCredential) {
      try {
        console.log("loginHandler HITT");
        console.log(objCredential, "<<<<<<<<");
        const returnData = await axios.post(this.baseUrl + "/login", {
          email: objCredential.email,
          password: objCredential.password,
        });

        localStorage.setItem("access_token", returnData.data.access_token);
        localStorage.setItem("name", returnData.data.name);
        localStorage.setItem("role", returnData.data.role);

        console.log(returnData, "<<<<<<<returnData LoginHandler");

        this.isLogin = true;

        Swal.fire({
          icon: "success",
          title: `Success!`,
          text: `You are successfully login`,
        });

        this.pagination();

        this.router.push({ name: "home" });

        this.pagination();
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `Error  ${err.response.status} ${err.response.statusText}!`,
          text: err.response.data.message,
        });
      }
    },
  },
});
