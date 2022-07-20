<script>
import { mapActions } from 'pinia'
import { useAllStatesStore } from '../stores/allState'
export default {
  name: "BeforePlayPage",
  data() {
    return {
      inputName: ''
    }
  },
  methods: {
    ...mapActions(useAllStatesStore, ['createUserToPlay']),
    localCreateUser() {
      this.createUserToPlay(this.inputName)
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center mt-5" style="width: 100%; text-align:center">
    <form @submit.prevent="localCreateUser">
      <!-- Name input -->
      <div class="form-outline mb-4">
        <input v-model="inputName" type="text" id="form5Example1" class="form-control" />
        <label class="form-label" for="form5Example1">Username</label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-danger btn-block mb-4 mx-3">Create</button>
    </form>
  </div>

</template>