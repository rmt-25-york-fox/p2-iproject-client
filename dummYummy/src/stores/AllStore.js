import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert2";

const baseUrl = "https://dummyummy.herokuapp.com";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    isLoggedin: false,
    products: [],
    name: "",
    categories: [],
    myOrder: [],
    grossOrder: "",
    resp: [],
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

    async getProduct() {
      try {
        const response = await axios.get(`${baseUrl}/product`, {
          params: {
            name: this.name,
          },
        });
        this.products = response.data;
      } catch (err) {
        console.log(err);
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async getCategory() {
      try {
        const response = await axios.get(`${baseUrl}/category`);
        this.categories = response.data;
      } catch (err) {
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async getMyOrder() {
      try {
        const response = await axios.get(`${baseUrl}/order`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.myOrder = response.data.userOrder;
        this.grossOrder = response.data.totalOrder;
      } catch (err) {
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async addOrder(productId) {
      try {
        const response = await axios.post(
          `${baseUrl}/order/${productId}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.getMyOrder();
        swal.fire({
          icon: "success",
          timer: 1000,
          title: `Successfully registered ${response.data.message}`,
        });
      } catch (err) {
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async getPaymentLink() {
      try {
        const response = await axios.get(`${baseUrl}/payment`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          params: {
            totalOrder: this.grossOrder,
          },
        });
        window.open(response.data.payment.paymentUrl);
      } catch (err) {
        console.log(err);
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async deleteMyOrder(id) {
      try {
        const response = await axios.delete(`${baseUrl}/order/${id}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        this.getMyOrder();
        swal.fire({
          icon: "success",
          timer: 1000,
          title: `Successfully registered ${response.data.message}`,
        });
      } catch (err) {
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    async cekOngkir(destination, courier) {
      try {
        const resp = await axios({
          method: "GET",
          url: `${baseUrl}/cost`,
          data: {
            destination: destination,
            courier: courier,
          },
        });
        console.log(resp);
        // ada error yang tidak jelas :)
        // this.resp = response.data;
      } catch (err) {
        swal.fire({
          icon: "error",
          title: err.response.data.message,
          timer: 1500,
        });
      }
    },
    logoutHandler() {
      localStorage.clear();
      this.isLoggedin = false;
      this.router.push("/");
    },
    changeStateisLoggedin() {
      if (localStorage.getItem("access_token")) {
        this.isLoggedin = true;
      }
    },
    changeStateProduct(objstate) {
      this.name = objstate.name;
      this.getProduct();
    },
  },
});
