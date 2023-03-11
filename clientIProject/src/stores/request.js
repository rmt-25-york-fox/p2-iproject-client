import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    baseUrl: "https://iprojectdarien.herokuapp.com",
    requests: [],
    request: [],
    myRequest: [],
    myTask: [],
    user: [],
    tetees: "",
  }),
  actions: {
    async getRequest() {
      try {
        const resp = await axios.get(this.baseUrl + "/request", {
          headers: { access_token: localStorage.access_token },
        });
        this.requests = resp.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getMyRequest() {
      try {
        const resp = await axios.get(this.baseUrl + "/myRequests", {
          headers: { access_token: localStorage.access_token },
        });
        this.myRequest = resp.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getMyTask() {
      try {
        const resp = await axios.get(this.baseUrl + "/myTask", {
          headers: { access_token: localStorage.access_token },
        });
        this.myTask = resp.data;
      } catch (err) {
        console.log(err);
      }
    },
    async addRequest(temp) {
      try {
        const resp = await axios.post(
          this.baseUrl + "/request",
          {
            title: temp.title,
            description: temp.description,
            points: temp.points,
          },
          { headers: { access_token: localStorage.access_token } }
        );
        this.router.push("/");
        Swal.fire("Add successfull");
      } catch (err) {
        Swal.fire(err.response.data);
      }
    },
    async detailRequest(id) {
      try {
        const response = await axios.get(this.baseUrl + `/requestTTS/${id}`, {
          headers: { access_token: localStorage.access_token },
        });
        this.tetees = response.data;
        const resp = await axios.get(this.baseUrl + `/request/${id}`, {
          headers: { access_token: localStorage.access_token },
        });
        this.request = resp.data;
        this.router.push({ path: `/request/${id}` });
      } catch (err) {
        console.log(err);
      }
    },
    async assignPic(id) {
      try {
        const resp = await axios.patch(
          this.baseUrl + `/request/${id}`,
          {},
          { headers: { access_token: localStorage.access_token } }
        );
        this.getRequest();
        Swal.fire("Task added");
      } catch (err) {
        Swal.fire(err.response.data.name);
      }
    },
    async finishRequest(id) {
      try {
        const resp = await axios.patch(
          this.baseUrl + `/requests/${id}`,
          {},
          { headers: { access_token: localStorage.access_token } }
        );
        this.getMyRequest();
        Swal.fire("Success");
      } catch (err) {
        console.log(err);
      }
    },
    async userInfo() {
      try {
        const resp = await axios.get(this.baseUrl + "/userInfo", {
          headers: { access_token: localStorage.access_token },
        });
        this.user = resp.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteRequest(id){
      try {
        const resp = await axios.delete(this.baseUrl + `/request/${id}`,
          {headers: { access_token: localStorage.access_token }}
        )
        Swal.fire("Request deleted");
        this.getRequest();
      } catch (err) {
        Swal.fire(err.response.data)
      }
    }
  },
});
