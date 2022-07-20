<script>
import { RouterLink } from 'vue-router'
import { useAllStatesStore } from '../stores/allState'
import { mapActions, mapState } from 'pinia'

export default {
  name: "NavBar",
  components: {
    RouterLink
  },
  computed: {
    ...mapState(useAllStatesStore, ['isLoggedIn'])
  },
  methods: {
    ...mapActions(useAllStatesStore, ['logout']),
    localLogout() {
      this.logout()
    }
  }
}
</script>

<template>
  <!-- Navbar -->
  <section class="navbar-color">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/leaderboards" class="nav-link">Leaderboards</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/characters" class="nav-link">Characters</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/mycollections" class="nav-link">My Collections</RouterLink>
      </li>
      <li v-if="isLoggedIn" class="nav-item">
        <RouterLink @click.prevent="localLogout" to="/" class="nav-link">Logout</RouterLink>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.navbar-color {
  background-color: #f0a500;
  font-family: "Space Mono", monospace;
  font-size: 20px;
}

.nav-link {
  color: black !important;
}

.nav-link:hover {
  transition: ease, 0.2s;
  color: white !important;
}
</style>