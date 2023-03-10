import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useBackStore = defineStore("backStore", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    news: [],
    urls: [],
    shortUrl: "",
    realUrl: "",
  }),

  actions: {
    async fetchNews() {
      try {
        const data = await axios({
          url: this.baseUrl + "/news",
          method: "get",
        });

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async shorten(inputUrl) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/shorten",
          method: "post",
          data: {
            inputUrl: inputUrl,
          },
        });

        console.log(data);
        this.shortUrl = data.shorted;
        this.realUrl = inputUrl
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});
