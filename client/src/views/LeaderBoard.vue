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
<h3>LEADERBOARD TOP 10</h3>
<table class="table table-hover">
<thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Rank</th>
      <th>Score</th>
    </tr>
</thead>
<tbody>
    <LeaderBoardTable v-for="(leaderboard, index) in leaderboards" :key="index+1" :leaderboard="leaderboard"/>
</tbody>
</table>
</template>

<style scoped>
table{
  font-size: 25px;
  align-items: center
}

h3{
  color: rgb(6, 36, 92);
  padding: 35px;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
</style>