<script>
import { mapState, mapActions } from 'pinia'
import { useAllState } from '../stores/allState'

  export default {
    name: 'LoginPage',
    data(){
      return {
        objLogin: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      ...mapActions(useAllState, ["loginHandler", 'toRegister']),
      localLoginHandler(){
        this.loginHandler(this.objLogin)
      }
    },
}
</script>
<!-- https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png -->
<template>
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://wallpaper.dog/large/744419.jpg"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form v-on:submit.prevent="localLoginHandler">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign In with Google</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <div id="g_id_onload"></div>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
            <input v-model="objLogin.email" type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <label class="form-label" for="form3Example4">Password</label>
            <input v-model="objLogin.password" type="password" autocomplete="on" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="submit" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href=""
                class="link-danger" @click.prevent="toRegister">Register</a></p>
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