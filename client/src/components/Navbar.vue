<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  mounted() {
    this.checkLogin();
  },
  methods: {
    ...mapActions(useCounterStore, ["checkLogin", "logoutHandler"]),
  },
  computed: {
    ...mapWritableState(useCounterStore, ["login"]),
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#"><i class="fa-solid fa-shuttle-space"></i></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="login" class="nav-item">
            <router-link to="/shuttle" class="nav-link active" aria-current="page" href="#">Space Shuttles</router-link>
          </li>
          <li v-if="!login" class="nav-item">
            <router-link to="/login" class="nav-link active" aria-current="page" href="#">Log In</router-link>
          </li>
          <li v-if="login" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> List Content </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/planet" class="dropdown-item" href="#">APOD</router-link></li>
              <li><router-link to="/news" class="dropdown-item" href="#">Nasa News</router-link></li>
              <li><router-link to="/add" class="dropdown-item" href="#">Add new Info</router-link></li>
              <li><hr class="dropdown-divider" /></li>
              <li @click.prevent="logoutHandler"><router-link to="" class="dropdown-item" href="#">Sign Out</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
