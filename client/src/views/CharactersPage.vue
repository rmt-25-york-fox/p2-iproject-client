<script>
import { useAllStatesStore } from '../stores/allState'
import { mapState, mapActions } from 'pinia'
import DigimonCard from '../components/DigimonCard.vue'
export default {
  name: "CharactersPage",
  data() {
    return {
      name: ""
    }
  },
  components: {
    DigimonCard
  },
  computed: {
    ...mapState(useAllStatesStore, ['digimons'])
  },
  methods: {
    ...mapActions(useAllStatesStore, ['fetchAllDigimons', 'searchDigimon']),
    localFetchDigimon() {
      this.fetchAllDigimons()
    },
    localSearchDigimon() {
      if (this.name) {
        this.searchDigimon(this.name)
      } else {
        this.localFetchDigimon()
      }
    }
  },
  created() {
    this.localFetchDigimon()
  }
}
</script>

<template>
  <div class="input-group mt-3 rounded container" style="max-width: 500px;">
    <input type="search" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
      v-model="name" />
    <button @click.prevent="localSearchDigimon" type="submit" class="btn btn-outline-danger">search</button>
  </div>
  <div class="d-flex flex-row flex-wrap justify-content-evenly border-4">

    <DigimonCard v-for="digimon, index in digimons" :key="index + 1" :digimon="digimon" />
  </div>


</template>