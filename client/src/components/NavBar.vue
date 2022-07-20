<script>
import { RouterLink } from 'vue-router'
import { useAllStatesStore } from '../stores/allState'
import { mapActions } from 'pinia'

export default {
  name: "NavBar",
  components: {
    RouterLink
  },
  methods: {
    ...mapActions(useAllStatesStore, ['toCharactersPage']),
    localToCharacterPage() {
      this.toCharactersPage()
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
        <RouterLink @click.prevent="localToCharacterPage" to="/characters" class="nav-link">Characters</RouterLink>
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