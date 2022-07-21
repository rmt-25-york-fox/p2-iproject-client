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
      <img src="../assets/logo.svg"
           alt="" />
      <h1><span>UKM</span>World</h1>
    </div>
    <ul class="flex">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <RouterLink to="/gmaps">Google Maps</RouterLink>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
      <li>
        <a href="#">Blogs</a>
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
  </header>
</template>