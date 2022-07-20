<script>
import { useAllStatesStore } from '../stores/allState'
import { mapActions, mapState } from 'pinia'
import TableLeaderboardItem from '../components/TableLeaderboardItem.vue'
export default {
  name: "LeaderboardsPage",
  components: {
    TableLeaderboardItem
  },
  computed: {
    ...mapState(useAllStatesStore, ['leaderboards'])
  },
  methods: {
    ...mapActions(useAllStatesStore, ['fetchLeaderboard']),
    localFetchLeaderboards() {
      this.fetchLeaderboard()
    }
  },
  created() {
    this.localFetchLeaderboards()
  }
}
</script>

<template>
  <table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
      <tr>
        <th>Name</th>
        <th>Score</th>
        <th class="text-center">Position</th>
      </tr>
    </thead>
    <tbody>
      <TableLeaderboardItem v-for="leaderboard,index in leaderboards" :key="index+1" :leaderboard="leaderboard" />
    </tbody>
  </table>
</template>