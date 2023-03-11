import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    isLogin: false,
    baseUrl: "https://iprojectdarien.herokuapp.com"
    // https://iprojectdarien.herokuapp.com
  }),
  actions: {
    async login(temp) {
      try {
        const resp = await axios.post(this.baseUrl + "/login", {
          email: temp.email,
          password: temp.password,
        });
        this.isLogin = true;
        localStorage.setItem("access_token", resp.data.access_token);
        this.router.push("/");
        Swal.fire("Success Login");
      } catch (err) {
        console.log(err);
        Swal.fire("Invalid Email/Password");
      }
    },
    async regis(temp) {
      try {
        const resp = await axios.post(this.baseUrl + "/register", {
          name: temp.username,
          email: temp.email,
          password: temp.password,
          phoneNumber: temp.phoneNumber,
          address: temp.address,
        });
        this.router.push("/login");
        Swal.fire("Registration Success!");
      } catch (err) {
        Swal.fire(err.response.data);
      }
    },
    loginStatus() {
      if (localStorage.access_token) this.isLogin = true;
    },
  },
});
