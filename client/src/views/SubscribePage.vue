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
  <SubscribeCard v-for="(plan, index) in plans" :key="index" :plan="plan" />
</template>

<style scoped></style>
