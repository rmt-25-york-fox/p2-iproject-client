<script>
import { mapState, mapActions } from 'pinia'
import { useSportStore } from '../stores/sport'
import TableRow from './TableRow.vue'

export default {
  created() {
    this.getHistories()
  },
  name: 'tableComponent',

  computed: { ...mapState(useSportStore, ['histories']) },
  methods: {
    ...mapActions(useSportStore, ['getHistories']),
    editMovie(id, addOrEdit) {
      this.$emit('editMovie', id, addOrEdit)
    },
    toAddMovie() {
      this.$emit('toAddMovie')
    },
    changeStatus(id, status) {
      this.$emit('changeStatus', id, status)
    }
  },
  components: {
    TableRow
  }
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-striped" id="movie-table-head">
        <thead>
          <tr>
            <th>No</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Neck</th>
            <th>Waist</th>
            <th>Hip</th>
            <th>Activity Level</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="(history, index) in histories"
            :key="index"
            :history="history"
            :index="index"
            :content="content"
            :status="status"
            :availableStatuses="availableStatuses"
            @editMovie="editMovie"
            @changeStatus="changeStatus"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<style></style>
