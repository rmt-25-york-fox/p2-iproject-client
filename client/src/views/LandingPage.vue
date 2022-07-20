<script>
import { RouterLink } from 'vue-router'
import { useAllStatesStore } from '../stores/allState'
import { mapActions, mapState } from 'pinia'

export default {
  name: "LandingPage",
  components: {
    RouterLink
  },
  computed: {
    ...mapState(useAllStatesStore, ['isLoggedIn'])
  },
  methods: {

  }
}
</script>

<template>
  <!-- Landing Page -->
  <section class="landing-page">
    <div class="p-5 text-center bg-image">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.5);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3 mt-3">Welcome to DigiDice Battle</h1>
            <h4>This is a game, for those who likes to challenge us at dice battle</h4>
            <h4>Be a digimon tamers, win the game, and get your digimons!</h4>
            <h4 class="mb-3 mt-5">Are you ready to become the next champion?</h4>
            <RouterLink v-if="isLoggedIn" to="/create-user" class="btn btn-outline-light btn-lg mb-2 mt-2"
              role="button">Play Now
            </RouterLink>
            <RouterLink v-else to="/login" class="btn btn-outline-light btn-lg mb-2 mt-2" role="button">Sign In
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-image {
  background-image: url("../assets/bg-image.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  font-family: "Space Mono", monospace;
}

.mask {
  height: 645px;
}

.inquiries button {
  margin-top: 50px;
}

.inquiries button:hover {
  background-color: black;
  color: white;
  transition: ease 0.1s;
}
</style>