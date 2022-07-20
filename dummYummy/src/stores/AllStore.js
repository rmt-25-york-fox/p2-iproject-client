import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert2";

const baseUrl = "https://dummyummy.herokuapp.com";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLoggedin: false,
    products: [],
    title: null,
    category: "",
    categories: [],
    detail: {},
    barcode: "",
    myWish: [],
  }),
  getters: {},
  actions: {
    async loginHandler(objLogin) {
      try {
        const response = await axios.post(`${baseUrl}/login`, {
          email: objLogin.email,
          password: objLogin.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("email", response.data.email);
        this.router.push("/");
        this.isLoggedin = true;
      } catch (err) {
        console.log(err);
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async registerHandler(objRegister) {
      try {
        const response = await axios.post(`${baseUrl}/register`, {
          name: objRegister.name,
          email: objRegister.email,
          password: objRegister.password,
          phoneNumber: objRegister.phoneNumber,
          address: objRegister.phoneNumber,
        });
        swal.fire({
          icon: "success",
          timer: 1000,
          title: `Successfully registered ${response.data.email}`,
        });
        this.router.push("/login");
      } catch (err) {
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    logoutHandler() {
      google.accounts.id.disableAutoSelect();
      google.accounts.id.revoke(localStorage.getItem("email"), () => {});
      localStorage.clear();
      this.isLoggedin = false;
      this.router.push("/");
    },
    changeStateisLoggedin() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedin = true;
      }
    },
  },
});
