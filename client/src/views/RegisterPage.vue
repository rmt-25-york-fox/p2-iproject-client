<script>
import GoogleLoginButton from '../components/GoogleLoginButton.vue'
import ButtonApp from '../components/ButtonApp.vue'
import { mapActions } from 'pinia'
import { useSportStore } from '../stores/sport'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      gender: '',
      age: '',
      height: '',
      weight: '',
      neck: '',
      waist: '',
      hip: '',
      goal: '',
      activitylevel: ''
    }
  },
  name: 'registerPage',

  props: ['isLogin', 'baseUrl', 'page'],
  components: { ButtonApp, GoogleLoginButton },
  methods: {
    ...mapActions(useSportStore, ['toLoginPage', 'signUpHandler']),
    modifiedProps() {
      this.$emit('modifiedProps')
    },
    handleCredentialResponse() {
      this.$emit('handleCredentialResponse')
    },
    mounted() {
      this.$emit('mounted')
    },
    toSignIn() {
      this.$emit('toSignIn')
    },
    signup() {
      this.signUpHandler({
        name: this.name,
        email: this.email,
        password: this.password,
        gender: this.gender,
        age: this.age,
        height: this.height,
        weight: this.weight,
        neck: this.neck,
        waist: this.waist,
        hip: this.hip,
        goal: this.goal,
        activitylevel: this.activitylevel
      })
    },
    toSignUp() {
      this.$emit('toSignUp')
    },
    loginHandler() {
      this.$emit('loginHandler', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<template>
  <div
    style="
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      flex-wrap: wrap;
    "
    class="container-fluid text-center box-content"
  >
    <h1>Sign up</h1>
    <h5>Sign up to access your account</h5>
    <br />
    <div>
      <form class="w-15 mx-auto" action="">
        <div style="display: flex; flex-direction: row; class: row">
          <div>
            <h6 style="text-align: left">Name</h6>

            <input
              v-model="name"
              class="form-control mb-3"
              type="text"
              placeholder="you@company.com"
            />

            <h6 style="text-align: left">Email</h6>

            <input
              v-model="email"
              class="form-control mb-3"
              type="text"
              placeholder="you@company.com"
            />

            <h6 style="text-align: left">Password</h6>

            <input
              v-model="password"
              class="form-control mb-3"
              type="text"
              placeholder="Your Password"
            />
            <br />
          </div>
          <div>
            Age:
            <br />
            <input
              v-model="age"
              type="number"
              name="synopsis-create"
              id="synopsis-create"
              style="padding-left: 15px"
              placeholder="Masukkan Height"
            />
            <br />
            Gender:
            <br />
            <select
              v-model="gender"
              style="padding-left: 15px"
              class="col-12"
              name="genre-id-create"
              id="genre-id-create"
            >
              <option selected disabled value="">-- SELECT ONE --</option>

              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <br />

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
          </div>
        </div>
        <br />

        <ButtonApp @click.prevent="signup" buttonText="Sign up" />
      </form>
    </div>
    <br />
    <h6>
      Already have an account yet?
      <span>
        <a href="" v-on:click.prevent="toLoginPage"> Sign in </a>
      </span>
      <br />
      Or Sign in with google
    </h6>

    <GoogleLoginButton
      @modifiedProps="modifiedProps"
      @handleCredentialResponse="handleCredentialResponse"
      @mounted="mounted"
      :isLogin="isLogin"
      :page="page"
      :baseUrl="baseUrl"
    />
  </div>
</template>

<style></style>
