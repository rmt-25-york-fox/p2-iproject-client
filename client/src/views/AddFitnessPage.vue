<script>
import Sidebar from '../components/Sidebar.vue'
import FormFitness from '../components/FormFitness.vue'

export default {
  name: 'AddMoviePage',
  emits: [
    'logout',
    'submitMovie',
    'updateMovie',
    'toHistory',
    'editMovie',
    'toAddMovie',
    'changeStatus',
    'toHomePage'
  ],
  components: { Sidebar, FormFitness },

  props: [
    'name',
    'role',
    'id',
    'imageSrc',
    'title',
    'synopsis',
    'trailerUrl',
    'imgUrl',
    'rating',
    'genreId',
    'addOrEdit',
    'changeName',
    'changeRole'
  ],
  methods: {
    toAddMovie() {
      this.$emit('toAddMovie')
    },
    logout() {
      this.$emit('logout')
    },
    toHistory() {
      this.$emit('toHistory')
    },
    toHomePage() {
      this.$emit('toHomePage')
    },
    editMovie(id) {
      this.$emit('editMovie', id)
    },
    submitMovie(objMovie) {
      this.$emit('submitMovie', objMovie)
    },
    updateMovie(id, objMovie) {
      console.log('objMovie AddMoviePage updateMovie() >>>', objMovie)
      this.$emit('updateMovie', id, objMovie)
    },
    changeStatus(id, objMovie) {
      this.$emit('changeStatus', id, objMovie)
    }
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
    "
    class="container-fluid row"
  >
    <Sidebar
      @logout="logout"
      @toHistory="toHistory"
      @toAddMovie="toAddMovie"
      @toHomePage="toHomePage"
      :changeName="changeName"
      :changeRole="changeRole"
      :addOrEdit="addOrEdit"
      :name="name"
      :role="role"
    />

    <div class="col-10" style="padding-left: 400px; padding-right: 30px">
      <h3 class="mt-3">Add New Fitness Data</h3>
      <FormFitness
        :id="id"
        :title="title"
        :synopsis="synopsis"
        :trailerUrl="trailerUrl"
        :imgUrl="imgUrl"
        :rating="rating"
        :genreId="genreId"
        :addOrEdit="addOrEdit"
        @submitMovie="submitMovie"
        @updateMovie="updateMovie"
        @toHomePage="toHomePage"
      />
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
