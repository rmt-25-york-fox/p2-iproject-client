<script>
import { mapActions } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'LeaderBoardTable',
    props: ['leaderboard'],
        methods: {
      ...mapActions(useAllState, ['toMain']),
    //   localAddWishlist(id){
    //     this.addWishlist(id)
    //   }
    }
}
</script>

<template>
    <tr>
      <td>{{leaderboard.name}}</td>
      <td>{{leaderboard.rank}}</td>
      <td>{{leaderboard.value}}</td>
    </tr>
</template>

<style scoped>

.card img {
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
}
</style>