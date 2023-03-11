<script>
import Card2 from "../components/Card2.vue";
import { mapActions, mapState } from "pinia";
import { useRequestStore } from "../stores/request";
import Navbar from "../components/Navbar.vue";

export default {
  name: "MyRequest",
  components: {
    Card2,
    Navbar,
  },
  computed: {
    ...mapState(useRequestStore, ["myRequest", "user"]),
  },
  methods: {
    ...mapActions(useRequestStore, ["getMyRequest", "userInfo"]),
  },
  created() {
    this.getMyRequest();
    this.userInfo();
  },
};
</script>

<template>
  <Navbar />
  <h3 style="margin-left: 20px">My Requests</h3>
  <h3 style="margin-left: 20px">My Points : {{ user.points }}</h3>
  <Card2
    v-for="(request, index) in myRequest"
    :key="index"
    :request="request"
  />
</template>
