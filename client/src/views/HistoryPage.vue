<script>
import { mapActions } from 'pinia'
import SideBar from '../components/SideBar.vue'
import TableComponent from '../components/TableComponent.vue'
import TableRow from '../components/TableRow.vue'
import { useSportStore } from '../stores/sport'

export default {
  created() {
    this.getHistories()
  },
  name: 'HistoryPage',
  emits: [
    'toCreateForm',
    'logout',
    'toHistory',
    'toAddMovie',
    'toHomePage',
    'editMovie',
    'changeStatus'
  ],
  props: [
    'name',
    'role',
    'movieList',
    'imageSrc',
    'movies',
    'histories',
    'content',
    'status',
    'availableStatuses',
    'addOrEdit',
    'changeName',
    'changeRole'
  ],
  methods: {
    ...mapActions(useSportStore, ['getHistories']),
    toCreateForm() {
      this.$emit('toCreateForm')
    },
    logout() {
      this.$emit('logout')
    },
    toHistory() {
      this.$emit('toHistory')
    },
    toAddMovie() {
      this.$emit('toAddMovie')
    },
    toHomePage() {
      this.$emit('toHomePage')
    },
    editMovie(id, addOrEdit) {
      this.$emit('editMovie', id, addOrEdit)
    },
    changeStatus(id, status) {
      this.$emit('changeStatus', id, status)
    }
  },
  components: {
    TableComponent,
    TableRow,
    SideBar
  }
}
</script>

<template>
  <div
    style="
      padding: 0 0;
      margin: 0px 0px;
      height: 100vh;
      background-color: #fff;
      flex-wrap: wrap;
      flex-direction: row;
      overflow: hidden;
      overflow-y: scroll;
    "
    class="container-fluid row"
  >
    <div class="col-10">
      <div
        style="margin-left: 400px; margin-top: 0px; margin-right: 15px"
        id="movies-table"
        class="page-heading"
      >
        <div class="page-title">
          <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last mt-3">
              <h3>My Fitness Tracker</h3>
            </div>
          </div>
        </div>

        <TableComponent
          :availableStatuses="availableStatuses"
          :histories="histories"
          :movies="movies"
          :content="content"
          :status="status"
          @changeStatus="changeStatus"
          @toHistory="toHistory"
          @toHomePage="toHomePage"
          @editMovie="editMovie"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

ul li a {
  text-decoration: none;
  color: white;
}

* {
  box-sizing: border-box;
}

input[type='text'],
input[type='text-area'],
input[type='number'],
select,
input[type='password'] {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
}
</style>
