import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useSportStore = defineStore({
  id: "counter",
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: "",
    isError: "",
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

        const response = await axiosInstance.get(
          `${this.baseUrl}/movies?page=${this.page}&size=8&title=${this.title}&rating=${this.rating}&genreId=${this.genreId}`
        );

        this.movies = response.data.data.movies;
        console.log("RESPONSE DATA ROWS >>>>", this.movies);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSports() {},
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
