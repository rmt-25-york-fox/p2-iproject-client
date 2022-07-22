<script>
import { mapActions, mapState } from 'pinia'
import SubscribeCard from '../components/SubscribeCard.vue'
import { useSportStore } from '../stores/sport'
export default {
  name: 'SubscribePage',
  components: { SubscribeCard },
  computed: {
    ...mapState(useSportStore, ['plans'])
  },
  methods: {
    ...mapActions(useSportStore, [''])
  }
}
</script>

<template>
  <div style="display: flex; flex-direction: row" class="row">
    <SubscribeCard v-for="(plan, index) in plans" :key="index" :plan="plan" />
  </div>
</template>

<style scoped></style>
