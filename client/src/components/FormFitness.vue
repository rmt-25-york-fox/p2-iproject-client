<script>
import { mapActions } from 'pinia'
import { useSportStore } from '../stores/sport'
import sideBar from './sidebar.vue'

export default {
  data() {
    return {
      height: '',
      weight: '',
      neck: '',
      waist: '',
      hip: '',
      goal: '',
      activitylevel: ''
    }
  },

  name: 'FormFitness',
  emits: ['logout', 'toCreateForm', 'submitMovie', 'updateMovie', 'toHomePage'],
  components: { sideBar },

  props: [
    'id',
    'title',
    'synopsis',
    'trailerUrl',
    'imgUrl',
    'rating',
    'genreId',
    'addOrEdit'
  ],
  methods: {
    ...mapActions(useSportStore, ['addFitness']),
    toCreateForm() {
      this.$emit('toCreateForm')
    },
    toHomePage() {
      this.$emit('toHomePage')
    },
    logout() {
      this.$emit('logout')
    },
    submitMovie() {
      this.$emit('submitMovie', {
        title: this.title,
        synopsis: this.synopsis,
        trailerUrl: this.trailerUrl,
        imgUrl: this.imgUrl,
        rating: this.rating,
        genreId: this.genreId
      })
    },
    updateMovie() {
      const id = this.id
      this.$emit('updateMovie', id, {
        title: this.title,
        synopsis: this.synopsis,
        trailerUrl: this.trailerUrl,
        imgUrl: this.imgUrl,
        rating: this.rating,
        genreId: this.genreId
      })
    },
    addfitnessuser() {
      this.addFitness({
        height: this.height,
        weight: this.weight,
        neck: this.neck,
        waist: this.waist,
        hip: this.hip,
        goal: this.goal,
        activitylevel: this.activitylevel
      })
    }
  }
}
</script>

<template>
  <form action="">
    Height:
    <br />
    <input
      v-model="height"
      type="number"
      name="synopsis-create"
      id="synopsis-create"
      style="padding-left: 15px"
      placeholder="Masukkan Height"
    />
    <br />

    Weight:
    <br />
    <input
      v-model="weight"
      type="number"
      name="trailer-url-create"
      id="trailer-url-create"
      style="padding-left: 15px"
      placeholder="Masukkan Weight"
    />
    <br />

    Neck:
    <br />
    <input
      v-model="neck"
      type="number"
      name="img-url-create"
      id="img-url-create"
      style="padding-left: 15px"
      placeholder="Masukkan Neck"
    />
    <br />

    Waist:
    <br />
    <input
      v-model="waist"
      type="number"
      name="rating-create"
      id="rating-create"
      style="padding-left: 15px"
      placeholder="Masukkan Waist"
    />
    <br />

    Hip:
    <br />
    <input
      v-model="hip"
      type="number"
      name="rating-create"
      id="rating-create"
      style="padding-left: 15px"
      placeholder="Masukkan Hip"
    />
    <br />

    Activity level:
    <br />
    <select
      v-model="activitylevel"
      style="padding-left: 15px"
      class="col-12"
      name="genre-id-create"
      id="genre-id-create"
    >
      <option selected disabled value="">-- SELECT ONE --</option>

      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </select>

    Goal:
    <br />
    <select
      v-model="goal"
      style="padding-left: 15px"
      class="col-12"
      name="genre-id-create"
      id="genre-id-create"
    >
      <option selected disabled value="">-- SELECT ONE --</option>
      <option value="maintain">maintain</option>
      <option value="mild-lose">mild-lose</option>
      <option value="normal-lose">normal-lose</option>
      <option value="extreme loss">extreme loss</option>
      <option value="mild-gain">mild-gain</option>
      <option value="normal-gain">normal-gain</option>
      <option value="extreme gain weight">extreme gain weight</option>
    </select>
    <br />
    <div class="row" style="flex-direction: row; justify-content: space-evenly">
      <div class="col-6">
        <button
          @click.prevent="toHomePage"
          class="btn btn-secondary col-12"
          id="btn-cancel"
          style="margin-top: 10px"
        >
          Cancel
        </button>
      </div>
      <div class="col-6">
        <button
          v-on:click.prevent="addfitnessuser"
          class="btn btn-primary col-12"
          id="btn-create"
          style="margin-top: 10px"
        >
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

ul li a {
  number-decoration: none;
  color: white;
}

* {
  box-sizing: border-box;
}

input[type='text'],
input[type='number'],
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
