<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useAllStateStore } from '../stores/allState'


export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(useAllStateStore, ['isLoggedIn']),
  },
  methods: {
    ...mapActions(useAllStateStore, ['logoutHandler', 'getMerchants']),
    onClickLogoutHandler() {
      this.logoutHandler();
    },
    onClickGetMerchants() {
      this.getMerchants();
    }
  },
}
</script>

<template>
  <header class="flex">
    <div class="logo flex">
      <img src="../assets/ukm-icon.jpg"
           alt="" />
      <h1>
        <RouterLink to="/">Dunia<span>UKM</span>
        </RouterLink>
      </h1>
    </div>
    <ul class="flex">
      <li>
        <RouterLink to="/">Beranda</RouterLink>
      </li>
      <li>
        <RouterLink to="/gmaps">Google Maps</RouterLink>
      </li>
      <li>
        <RouterLink to="/merchants">Daftar Pedagang</RouterLink>
      </li>
      <li>
        <a></a>
      </li>
    </ul>
    <div>
    </div>
    <input v-if="!isLoggedIn"
           type="button"
           name="login"
           id=""
           href="#myModalLogin"
           data-toggle="modal"
           class="trigger-btn"
           value="Login" />
    <input v-if="!isLoggedIn"
           type="button"
           name="register"
           id=""
           href="#myModalRegister"
           data-toggle="modal"
           class="trigger-btn"
           value="Register" />
    <input v-if="isLoggedIn"
           @click.prevent="onClickLogoutHandler"
           type="button"
           class="trigger-btn"
           value="Logout" />
  </header>
</template>

<style>
</style>