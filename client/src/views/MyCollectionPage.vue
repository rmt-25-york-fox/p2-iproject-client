<script>
import { mapActions, mapState } from 'pinia'
import { useAllStatesStore } from '../stores/allState'
import DigimonCollection from '../components/DigimonCollection.vue'
export default {
  name: "MyCollectionPage",
  components: {
    DigimonCollection
  },
  computed: {
    ...mapState(useAllStatesStore, ['myCollections'])
  },
  methods: {
    ...mapActions(useAllStatesStore, ['fetchMyCollection']),
    localFetchMyCollection() {
      this.fetchMyCollection()
    }
  },
  created() {
    this.localFetchMyCollection()
  }
}
</script>

<template>
  <div class="d-flex flex-row flex-wrap justify-content-evenly border-4">
    <DigimonCollection v-for="digimon in myCollections" :key="digimon.id" :digimon="digimon" />
  </div>
</template>