<script>
export default {
  name: "TableLeaderboardItem",
  props: ['leaderboard']
}
</script>

<template>
  <tr>
    <td>
      <p class="fw-bold mb-1">{{ leaderboard.name }}</p>
    </td>
    <td>
      {{ leaderboard.value }}
    </td>
    <td class="text-center">{{ leaderboard.rank }}</td>
  </tr>
</template>