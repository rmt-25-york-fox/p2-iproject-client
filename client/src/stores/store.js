import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({}),
  getters: {},
  actions: {
    async submitFile() {
      try {
        const formData = new FormData();
        formData.append("file", this.images);

        const res = await axios({
          method: "post",
          url: "http://localhost:3000/upload",
          headers: {
            "Content-Type": "multipart/form-data",
            access_token: localStorage.getItem("access_token"),
          },
        });

        console.log(res.data.files);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
