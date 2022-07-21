<script>
import { ref, onMounted } from "vue";
import Pusher from "pusher-js";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

const baseUrl = "http://localhost:3000";

export default {
  name: "LivechatPage",
  setup() {
    const username = ref("");
    const messages = ref([]);
    const message = ref("");
    onMounted(() => {
      Pusher.logToConsole = true;
      const pusher = new Pusher("ad8518072393fd6314a8", {
        cluster: "ap1",
      });
      const channel = pusher.subscribe("chat");
      channel.bind("message", (data) => {
        messages.value.push(data);
      });
    });
    const submit = async () => {
      try {
        await axios.post(`${baseUrl}/livechats`, {
          username: username.value,
          message: message.value,
        });
        message.value = "";
        username.value = "";
      } catch (err) {
        Swal.fire(`${err.response.data.message}`, "", "error");
        message.value = "";
        username.value = "";
      }
    };
    return {
      username,
      messages,
      message,
      submit,
    };
  },
  components: { NavBar, Footer },
};
</script>
<template>
  <div id="homepage" class="container-fluid">
    <NavBar />
    <div class="row justify-content-center">
      <div class="main-content col-5 px-3 py-0">
        <div class="container mt-4 mb-4">
          <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white shadow">
            <div class="list-group list-group-flush border-bottom scrollarea">
              <div
                class="list-group-item list-group-item-action py-3 lh-tight"
                v-for="message in messages"
                :key="message"
              >
                <div class="d-flex w-100 align-items-center justify-content-between">
                  <strong class="mb-1">{{ message.username }}</strong>
                </div>
                <div class="col-10 mb-1 small">{{ message.message }}</div>
              </div>
            </div>
          </div>
          <form @submit.prevent="submit">
            <input class="form-control" placeholder="type username" v-model="username" />
            <input class="form-control" placeholder="type a message" v-model="message" />
            <button class="btn btn-outline-dark w-100">Send message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
.scrollarea {
  min-height: 500px;
}
</style>
