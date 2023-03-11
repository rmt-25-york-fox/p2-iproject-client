<script>
import Card3 from "../components/Card3.vue";
import { mapActions, mapState } from "pinia";
import { useRequestStore } from "../stores/request";
import Navbar from "../components/Navbar.vue";

export default {
  name: "MyTask",
  components: {
    Card3,
    Navbar,
  },
  computed: {
    ...mapState(useRequestStore, ["myTask"]),
  },
  methods: {
    ...mapActions(useRequestStore, ["getMyTask"]),
  },
  created() {
    this.getMyTask();
  },
};
</script>

<template>
  <Navbar />
  <h3 style="margin-left: 20px">My Tasks</h3>
  <Card3 v-for="(task, index) in myTask" :key="index" :task="task" />
</template>
