<script>
import { mapActions } from 'pinia'
import { usePlayingState } from '../stores/playingState'

export default {
  name: "PlayingPage",
  methods: {
    ...mapActions(usePlayingState, ['compareWinner']),
    localCompareWinner() {
      this.compareWinner()
    },
  }
}
</script>

<template>
  <section class="landing-page">
    <div class="p-5 text-center bg-image">
      <p>Please do not exit this page, otherwise you must create a new Username</p>
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.5);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3 mt-3">Roll Your Dice</h1>
            <img @click.prevent="localCompareWinner" class="dice btn btn-outline-light" src="../assets/dice-roll.gif"
              alt="">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.bg-image {
  border: 0.5px solid black;
  background-image: url("../assets/bg-image2.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  width: auto;
  font-family: "Space Mono", monospace;
}

.mask {
  height: 635px;
}

.dice {
  border-radius: 120px;
  width: 120px;
  padding: 10px;
}
</style>