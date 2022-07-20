<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { mapActions, mapState } from 'pinia'
import { useAllStatesStore } from './stores/allState'

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapState(useAllStatesStore, ['isLoggedIn'])
  },
  methods: {
    ...mapActions(useAllStatesStore, ['changeIsLoggedInState']),
    localChangeState() {
      this.changeIsLoggedInState()
    }
  },
  created() {
    this.localChangeState()
  }
}
</script>

<template>
  <NavBar v-if="isLoggedIn" />
  <RouterView />
</template>

