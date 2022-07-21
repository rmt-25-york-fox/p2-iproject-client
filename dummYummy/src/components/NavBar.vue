<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/AllStore";
export default {
  name: "NavBar",
  computed: {
    ...mapState(useCounterStore, ["isLoggedin"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["logoutHandler"]),
    localLogoutHanlder() {
      this.logoutHandler();
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <a class="navbar-brand text-white" href="#">DummYummy</a>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link text-white"
            tabindex="-1"
            aria-disabled="true"
          >
            Home
          </router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedin">
          <router-link
            to="/login"
            class="nav-link text-white"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Login
          </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedin">
          <router-link
            to="/myorder"
            class="nav-link text-white"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            My Order
          </router-link>
        </li>
        <li class="nav-item" v-if="isLoggedin">
          <a
            @click.prevent="localLogoutHanlder"
            class="nav-link text-white"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Sign Out</a
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/cekongkir"
            class="nav-link text-white"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Cek Ongkir
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
