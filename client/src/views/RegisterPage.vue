<script>
import { mapActions } from 'pinia'
import { useAllState } from '../stores/allState'
  export default {
    name: 'RegisterPage',
    data(){
      return {
        objRegister: {
          username: "",
          email: "",
          password: "",
        }
      }
    },
    methods: {
      ...mapActions(useAllState, ['toLogin', 'registerHandler']),
      localRegisterHandler (){
        this.registerHandler({
          username: this.username,
          email: this.email,
          password: this.password,

        })
      }
    }
}
</script>
<template>
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://images7.alphacoders.com/592/592678.jpg"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form v-on:submit.prevent="localRegisterHandler">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign Up with Google</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <div id="g_id_onload"></div>
            </button>
          </div>
          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <!-- Username input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="">Username</label>
            <input v-model="username" type="text" class="form-control form-control-lg"
              placeholder="Enter your name" />
          </div>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="">Email address</label>
            <input v-model="email" type="email" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <label class="form-label" for="">Password</label>
            <input v-model="password" type="password" autocomplete="on" class="form-control form-control-lg"
              placeholder="Enter your password" />
          </div>
          <!-- Phone Number -->

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Register</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href=""
                class="link-danger" @click="toLogin">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

</template>
<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
  }
  .h-custom {
  height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
  .h-custom {
  height: 100%;
  }
}
</style>