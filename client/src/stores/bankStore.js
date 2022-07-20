import { defineStore } from "pinia";
import axios from "axios";

export const useBankStore = defineStore({
  id: "bankState",
  state: () => ({
    isLogin: false,
    baseUrl: "http://localhost:3000",
    product: [],
    vga: [],
    psu: [],
    ssd: [],
    ram: [],
    processor: [],
  }),
  getters: {},
  actions: {
    async fetchProduct() {
      try {
        const response = await axios.get(this.baseUrl + "/product");
        this.product = response.data;
        this.vga = response.data.VGA;
        this.psu = response.data.PSU;
        this.ram = response.data.RAM;
        this.ssd = response.data.SSD;
        this.processor = response.data.Processors;
      } catch (error) {
        console.log(error);
      }
    },

    async registerHandler(credential) {
      try {
        const response = await axios.post(this.baseUrl + "/register", {
          email: credential.email,
          password: credential.password,
        });

        swal("Good job!", "You clicked the button!", "success");
        this.fetchProduct();
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },

    async loginHandler(credential) {
      try {
        const response = await axios.post(this.baseUrl + "/login", {
          email: credential.email,
          password: credential.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("id", response.data.id);
        this.isLogin = true;
        this.fetchProduct();
        swal("Good job!", "You successfully login!", "success");
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },

    async addOrder(specification) {
      try {
        const response = await axios.post(
          this.baseUrl + "/myorder",
          {
            UserId: localStorage.getItem("id"),
            VgaId: specification.VgaId,
            PsuId: specification.PsuId,
            ProcessorId: specification.ProcessorId,
            SsdId: specification.SsdId,
            RamId: specification.RamId,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        console.log(response, "INI RESPONSE");
      } catch (error) {
        console.log(error);
      }
    },

    logoutHandler() {
      this.isLogin = false;
      localStorage.clear();
      this.router.push("/login");
    },

    saveLoginState() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true;
        this.fetchProduct();
      }
    },
  },
});
