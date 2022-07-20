import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = `http://localhost:3000`;
export const useAllState = defineStore({
  id: "allState",
  state: () => ({
    pokemons: [],
    details: [],
    pokemonDetail: {},
    page: "home",
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  actions: {
    toLogin() {
      this.router.push({ name: "LoginPage" });
    },
    toRegister() {
      this.router.push({ name: "RegisterPage" });
    },
    toMain() {
      this.router.push({ name: "HomeView" });
    },
    toWishlist() {
      this.router.push({ name: "WishlistPage" });
    },
    toDetail(name) {
      console.log(name);
      this.router.push(`/pokemons/${name}`);
    },
    toLogout() {
      localStorage.clear();
      this.router.push({ name: "LoginPage" });
      this.page = "home";
    },
    toChangePage(page) {
      // console.log(typeof page);
      this.pagination.currentPage = page;
      this.allProduct();
    },
    async handleCredentialResponse(response) {
      try {
        const { data } = await axios.post(
          `${baseUrl}/public/googleSignIn`,
          {},
          {
            headers: {
              google_token: response.credential,
            },
          }
        );
        localStorage.setItem("access_token", data.access_token);
        this.router.push({ name: "HomeView" });
        this.allProduct();
        this.page = "main";
        Swal.fire({
          title: "Google Login Success!",
          icon: "success",
          button: "Aww yiss!",
        });
      } catch (error) {
        // console.log(error);
        Swal.fire(
          String(error.response.data.message).split(",").join(", "),
          "",
          "error"
        );
      }
    },
    async loginHandler(objLogin) {
      try {
        let { data } = await axios.post(`${baseUrl}/login`, {
          email: objLogin.email,
          password: objLogin.password,
        });
        this.email = "";
        this.password = "";
        localStorage.setItem("access_token", data.access_token);
        this.page = "main";
        this.router.push({ name: "HomeView" });
        Swal.fire({
          title: "Login Success!",
          icon: "success",
          button: "Aww yiss!",
        });
      } catch (error) {
        Swal.fire(
          String(error.response.data.message).split(",").join(", "),
          "",
          "error"
        );
      }
    },
    async registerHandler(objRegister) {
      try {
        const response = await axios.post(`${baseUrl}/register`, {
          username: objRegister.username,
          email: objRegister.email,
          password: objRegister.password,
          phoneNumber: objRegister.phoneNumber,
        });
        // console.log(objRegister);
        this.page = "main";
        this.username = "";
        this.email = "";
        this.password = "";
        this.phoneNumber = "";
        this.router.push("/login");
        Swal.fire({
          title: "Yeay! You are registered!",
          text: "Now you have to login",
          icon: "success",
          button: "Aww yiss!",
        });
      } catch (error) {
        // console.log(error);
        Swal.fire(String(error.response.data.message).split(",").join(", "));
      }
    },
    async allPokemon() {
      try {
        const { data } = await axios.get(`${baseUrl}/pokemons`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        console.log(data);
        if (localStorage.getItem("access_token")) {
          this.page = "main";
        } else {
          this.page = "home";
        }
        this.pokemons = data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPokemonDetail(name) {
      try {
        const { data } = await axios.get(`${baseUrl}/pokemons/${name}`, {
          headers: { access_token: localStorage.getItem("access_token") },
        });
        if (localStorage.getItem("access_token")) {
          this.page = "main";
        } else {
          this.page = "home";
        }
        // console.log(data.name);
        this.pokemonDetail = data;

        return data;
      } catch (error) {
        Swal.fire(
          String(error.response.data.message).split(",").join(", "),
          "",
          "error"
        );
      }
    },
  },
});
