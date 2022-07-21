import { defineStore } from "pinia";
import axios from "axios";

export const useBankStore = defineStore({
  id: "bankState",
  state: () => ({
    isLogin: false,
    baseUrl: "https://rakitin.herokuapp.com",
    product: [],
    vga: [],
    psu: [],
    ssd: [],
    ram: [],
    processor: [],
    myOrderList: [],
    showcase: [],
    myOrderSingle: [],
    provinc: [],
    city: [],
    shippingCost: [],
    shippingDay: [],
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

    async getShowcase() {
      try {
        const response = await axios.get(this.baseUrl + "/showcase");

        this.showcase = response.data.showcase;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteMyOrder(id) {
      try {
        await axios.delete(this.baseUrl + `/myorder/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.router.push("/build");
        console.log("sss");
        // this.myOrder();
        swal("Good job!", "You successfully delete unused order!", "success");
        // this.router.push("/myorder");
        console.log("berhasil delete", id);
      } catch (error) {
        console.log(error);
      }
    },

    async getCity() {
      try {
        const response = await axios.get(this.baseUrl + "/shipping/city", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.city = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getProvince() {
      try {
        const response = await axios.get(this.baseUrl + "/shipping/province", {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.province = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },

    async getCost(shipping) {
      try {
        const response = await axios.post(
          this.baseUrl + "/shipping/cost",
          {
            origin: 151,
            destination: Number(shipping.destination),
            weight: shipping.weight,
            courier: shipping.courier,
          },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.shippingCost = response.data.data.shipping[0].cost[0].value;
        this.shippingDay = response.data.data.shipping[0].cost[0].etd;
        swal(
          "Total Shipping Cost",
          `${
            this.shippingCost
              .toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })
              .split(",")[0]
          }`,
          "success"
        );
      } catch (error) {
        console.log(error);
      }
    },

    async paymentHandler(price) {
      try {
        const response = await axios.post(
          this.baseUrl + "/payment",
          { price },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        window.snap.pay(response.data.token, {
          onPending(result) {
            this.router.push("/myorder");
          },
          onError(result) {
            this.router.push("/myorder");
          },
          onClose(result) {
            this.router.push("/myorder");
          },
        });
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
        this.getShowcase();
        // this.myOrderById();
        // this.getCity();
        // this.getCost();
        // this.getProvince();
      }
    },
  },
});
