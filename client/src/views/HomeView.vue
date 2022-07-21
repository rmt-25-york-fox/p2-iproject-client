<script>
import axios from "axios";

export default {
  data() {
    return {
      images: null,
    };
  },
  methods: {
    changeState(event) {
      //   console.log(event);
      this.images = event.target.files[0];
    },
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
};
</script>

<template>
  <h1>Home Page</h1>
  <form @submit.prevent="uploadFile">
    <div>
      <input type="file" @change="changeState" />
      <!-- event.target.files[0] -->
    </div>
    <button type="submit">Test</button>
  </form>
</template>
