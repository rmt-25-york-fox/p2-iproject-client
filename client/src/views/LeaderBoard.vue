<script>
import { mapActions, mapState } from 'pinia'
import { useAllState } from '../stores/allState'
import LeaderBoardTable from '../components/LeaderBoardTable.vue'

  export default {
    name: 'LeaderBoard',
    components: {
    LeaderBoardTable
},
    data(){
      return {}
    },
    computed: {
      ...mapState(useAllState, ['leaderboards', 'page'])
    },
    methods: {
      ...mapActions(useAllState, ['getLeaderBoard'])
    },
    created(){
      this.getLeaderBoard()
    }
}
</script>

<template>
<table class="table"></table>
<thead>
    <tr>
      <th>Name</th>
      <th>Rank</th>
      <th>Score</th>
    </tr>
</thead>
    <LeaderBoardTable v-for="(leaderboard, index) in leaderboards" :key="index+1" :leaderboard="leaderboard"/>
<table/>
</template>

<style scoped>
</style>