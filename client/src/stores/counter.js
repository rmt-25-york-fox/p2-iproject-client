import { defineStore } from "pinia";
import instanceAxios from "../api/server";
import swal from "sweetalert";
import axios from "axios";

export const useMainGas = defineStore({
  id: "counter",
  state: () => ({
    isLogin: false,
    transaksi: [],
    petrols: [],
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

        console.log(response);
        let accessToken = response.data.data.access_token;
        let userId = response.data.data.userId;
        let email = response.data.data.email;

        localStorage.setItem("accesstoken", accessToken);
        localStorage.setItem("userId", userId);
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

    async getPetrol() {
      try {
        const response = await instanceAxios.get("/petrol", {
          headers: {
            access_token: localStorage.getItem("accesstoken"),
          },
        });

        this.petrols = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async buyPetrol(data) {
      try {
      } catch (err) {}
    },

    logouthendler() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
    },
  },
});
