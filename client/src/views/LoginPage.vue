<script>
import { RouterLink } from 'vue-router'
import { mapActions } from 'pinia'
import { useAllStatesStore } from '../stores/allState'
export default {
  name: "LoginPage",
  data() {
    return {
      inputEmailLogin: '',
      inputPasswordLogin: ''
    }
  },
  components: {
    RouterLink
  },
  methods: {
    ...mapActions(useAllStatesStore, ['loginToPlay']),
    localLoginToPlay() {
      this.loginToPlay({
        email: this.inputEmailLogin,
        password: this.inputPasswordLogin
      })
    }
  }
}
</script>

<template>
  <section class="vh-100" style="background-color: lightcoral;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="../assets/loginwallpaper.jpeg" alt="login form" class="img-fluid"
                  style="border-radius: 1rem 0 0 1rem;" />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">

                  <form @submit.prevent="localLoginToPlay">
                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                    <div class="form-outline mb-4">
                      <input v-model="inputEmailLogin" type="email" id="form2Example17"
                        class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example17">Email address</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="inputPasswordLogin" type="password" id="form2Example27"
                        class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example27">Password</label>
                    </div>

                    <div class="pt-1 mb-4">
                      <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                    </div>
                  </form>
                  <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account?
                    <RouterLink to="/register" style="color: #393f81;">Register here</RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>