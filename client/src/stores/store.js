import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    images: null,
    baseURL: "http://localhost:3000",
    email: "",
    password: "",
  }),
  getters: {},
  actions: {
    changeState(event) {
      console.log(event);
      this.images = event.target.files[0];
    },

    async submitFile() {
      try {
        console.log(this.images);
        const formData = new FormData();
        formData.append("file", this.images);

        const res = await axios.post(
          `${this.baseURL}/profile/upload`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            access_token: localStorage.getItem("access_token"),
          }
        );

        console.log(res.data.files);
      } catch (error) {
        console.log(error);
      }
    },
    async login() {
      try {
        const { data } = await axios({
          method: "post",
          url: `${this.baseURL}/login`,
          data: {
            email: this.email,
            password: this.password,
          },
        });

        localStorage.setItem("access_token", data.access_token);

        // swal({
        //   title: "Login Success",
        //   icon: "success",
        // });

        this.router.push({ name: "home" });
      } catch (error) {
        console.log(error);
      }
    },

    async registerHandler(objUser) {
      try {
        await axios({
          method: "post",
          url: `${this.baseURL}/pub/register`,
          data: {
            email: objUser.email,
            password: objUser.password,
            firstName: objUser.firstName,
            lastName: objUser.lastName,
            age: objUser.age,
          },
        });

        // swal({
        //   title: "New Account Created",
        //   icon: "success",
        // });

        // this.router.push({ name: "login" });
      } catch (error) {
        console.log(error);
        // swal({
        //   title: "Oh no! Something goes wrong",
        //   icon: "error",
        // });
      }
    },
  },
});
