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
    myOrderList: [],
    myOrderSingle: [],
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
        swal("Good job!", "You successfully add order!", "success");
        this.router.push("/myorder");
        this.myOrder();
      } catch (error) {
        console.log(error);
      }
    },

    async myOrder() {
      try {
        const id = localStorage.getItem("id");
        const response = await axios.get(this.baseUrl + "/myorder", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        // console.log(response);
        this.myOrderList = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async myOrderById(id) {
      try {
        const response = await axios.get(this.baseUrl + `/myorder/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myOrderSingle = response.data;
        this.router.push("/checkout");
        this.fetchProduct();
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
        this.myOrder();
        this.myOrderById();
      }
    },
  },
});
