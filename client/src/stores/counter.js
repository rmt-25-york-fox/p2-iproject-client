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
    charts: [],
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
        this.chart();
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
        console.log(data);
        let response = await instanceAxios.post(
          `/transaksi/${data.gas}`,
          {
            userId: data.userId,
            liter: data.liter,
            PetrolId: data.gas,
          },
          {
            headers: {
              access_token: localStorage.getItem("accesstoken"),
            },
          }
        );
        swal("Berhasil Menambahkan Data pembelian");
        this.router.push("/petrol");
      } catch (err) {
        console.log(err);
      }
    },

    async chart() {
      try {
        const response = await instanceAxios.get("/chart", {
          headers: {
            access_token: localStorage.getItem("accesstoken"),
          },
        });

        console.log();
        this.charts = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    logouthendler() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/login");
    },

    saveLoginstate() {
      if (localStorage.getItem("accesstoken")) {
        this.isLogin = true;
        this.chart();
      }
    },
  },
});
