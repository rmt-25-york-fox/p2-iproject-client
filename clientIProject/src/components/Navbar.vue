<script>
import Swal from "sweetalert2";

export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.isLogin = false;
      Swal.fire("Success Logout");
    },
  },
};
</script>

<template>
  <nav id="main-nav" class="main-nav fixed">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="nav-header d-flex justify-content-between align-items-center"
          >
            <a href="#" class="logo" title="LOGO">
              <img class="logo-img" src="../img/help.gif" alt="LOGO" />
            </a>
          </div>
          <div class="nav-wrap">
            <ul id="nav" class="nav-wrap__list menu">
              <li>
                <a href="#" title="Главная"
                  ><router-link to="/">Home</router-link></a
                >
              </li>
              <li>
                <a href="#" title="Проекте"
                  ><router-link to="/myRequest">My Request</router-link></a
                >
              </li>
              <li>
                <a href="#" title="Контакты"
                  ><router-link to="/myTask">My Task</router-link></a
                >
              </li>
            </ul>
            <div class="riglt-floats-xs">
              <a href="#" v-on:click="logout" class="btn-startgames">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
