<script>
import { useStore } from "../stores/store";
import { mapActions, mapWritableState } from "pinia";

export default {};
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="row">
        <div class="col-6">
          <h2>Create New Account</h2>
          <p>Submit this form and then you're set</p>
          <form class="form">
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="name@test.com"
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="password"
              />
              <label for="password">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="text"
                id="first-name"
                name="firstname"
                placeholder="first-name"
              />
              <label for="firstname">First Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                class="form-control"
                type="text"
                id="last-name"
                name="lastname"
                placeholder="last-name"
              />
              <label for="lastname">Last Name</label>
            </div>
            <div class="mt-4">
              <button class="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
        <div class="col-6">
          <img
            class="cat w-100 h-100"
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cat-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cat {
  object-fit: cover;
}
.form-floating {
  width: 300px;
}
</style>
