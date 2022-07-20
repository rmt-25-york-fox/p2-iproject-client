import { defineStore } from "pinia";
import axios from "axios";
import swal from "sweetalert2";
const baseUrl = "http://localhost:3000";
export const useAllStateStore = defineStore({
  id: "counter",
  state: () => ({
    isLoggedin: false,
    registerData: {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    },
    isOtp: "",
  }),
  actions: {
    async loginHandler(objLogin) {
      try {
        const response = await axios.post(`${baseUrl}/pub/login`, {
          email: objLogin.email,
          password: objLogin.password,
        });
        localStorage.setItem("access_token", response.data.access_token);
        this.isLoggedin = true;
        this.router.push("/");
      } catch (error) {
        swal.fire(error.response.data.message);
      }
    },
    async backupData(obj) {
      try {
        this.registerData.username = obj.username;
        this.registerData.email = obj.email;
        this.registerData.password = obj.password;
        this.registerData.phoneNumber = obj.phoneNumber;
        this.registerData.address = obj.address;
        this.generateOtp(obj.email);
        this.router.push("/otpverify");
      } catch (error) {
        console.log(error);
      }
    },
    async generateOtp(email) {
      try {
        const response = await axios.post(`${baseUrl}/getOtp`, {
          email: email,
        });
        this.isOtp = response.data;
      } catch (error) {
        console.log(error, "<<<<<<");
      }
    },
    async registerhandle(otp) {
      try {
        if (otp !== this.isOtp) {
          swal.fire("Invalid OTP");
        }
        const response = await axios.post(`${baseUrl}/register`, {
          username: this.registerData.username,
          email: this.registerData.email,
          password: this.registerData.password,
          phoneNumber: this.registerData.phoneNumber,
          address: this.registerData.address,
        });
        this.router.push("/login");
        swal.fire("success register");
      } catch (error) {
        console.log(error);
        swal.fire(error.response.data.message);
      }
    },
  },
});
