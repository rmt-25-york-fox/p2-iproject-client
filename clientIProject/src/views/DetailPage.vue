<script>
import { mapState } from "pinia";
import { useRequestStore } from "../stores/request";
import Navbar from "../components/Navbar.vue";

export default {
  name: "DetailPage",
  computed: {
    ...mapState(useRequestStore, ["request", "tetees"]),
  },
  components: { Navbar },
};
</script>
<template>
  <Navbar />
  <h1 style="margin-left: 20px">Detail Request</h1>
  <h3 style="margin-left: 20px">Title :{{ request.title }}</h3>
  <h3 style="margin-left: 20px">Description :{{ request.description }}</h3>
  <h3 style="margin-left: 20px">Points :{{ request.points }}</h3>
  <h3 style="margin-left: 20px">Status :{{ request.status }}</h3>
  <h3 style="margin-left: 20px">City :{{ request.location }}</h3>
  <h3 style="margin-left: 20px">Timezone :{{ request.timezone }}</h3>
  <h3 style="margin-left: 20px">Address :{{ request.User.address }}</h3>
  <h3 style="margin-left: 20px">
    Contact info :{{ request.User.phoneNumber }}
  </h3>
  <audio controls>
    <source :src="tetees.response" type="audio/mpeg;base64," />
    Your browser does not support the audio element.
  </audio>
</template>
