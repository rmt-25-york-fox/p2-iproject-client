<script>
import { mapActions, mapState } from "pinia";
import { useAllStateStore } from "../stores/allState";
export default {
  name: "Navbar",
  computed: {
    ...mapState(useAllStateStore, ["isLoggedin"]),
  },
  methods: {
    ...mapActions(useAllStateStore, [
      "checkLogin",
      "logOutHandler",
      "homePage",
    ]),
    logOutClickHandler() {
      this.logOutHandler();
    },
    clikHome() {
      this.homePage();
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>

<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="height: 50px"
  >
    <a class="navbar-brand" href="#" @click.prevent="clikHome">Sport Store</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink :to="{ path: '/' }" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://sport-store-722c0.web.app/"
            >Customer service</a
          >
        </li>
        <li class="nav-item" v-if="!isLoggedin">
          <RouterLink :to="{ path: '/login' }" class="nav-link"
            >Login</RouterLink
          >
        </li>
        <li class="nav-item" v-else>
          <a class="nav-link" href="#" @click.prevent="logOutClickHandler"
            >Log out</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
