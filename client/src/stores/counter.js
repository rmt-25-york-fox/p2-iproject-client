import { defineStore } from "pinia";
import instanceAxios from "../api/server";
import swal from "sweetalert";
import axios from "axios";

export const useMainGas = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    transaksi: [],
    petrol: [],
  }),
  getters: {},
  actions: {
    checkLogin() {
      const accestoken = localStorage.getItem("accesstoken");
      if (accestoken) {
        this.isLogin = true;
      }
    },

    async login(data) {
      try {
        const response = await instanceAxios.post(`/login`, {
          email: data.email,
          password: data.password,
        });

        let accessToken = response.data.data.accestoken;
        let userId = response.data.data.userId;
        let email = response.data.data.email;

        localStorage.setItem("accesstoken", accessToken);
        localStorage.setItem("authorId", userId);
        localStorage.setItem("email", email);

        this.isLogin = true;
        this.router.push("/");
        swal("Berhasil login");
      } catch (err) {
        console.log(err);
      }
    },

    async register(data) {
      try {
        const response = await instanceAxios.post(`/register`, {
          email: data.email,
          password: data.password,
          kendaraan: data.kendaraan,
        });
        this.router.push("/login");
        swal(`berhasil mendaftar`);
      } catch (err) {
        console.log(err);
        swal(`tidak berhasil`);
      }
    },

    logouthendler() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
    },
  },
});
