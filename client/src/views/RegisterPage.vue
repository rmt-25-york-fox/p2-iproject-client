<script>
import GoogleLoginButton from '../components/GoogleLoginButton.vue'
import ButtonApp from '../components/ButtonApp.vue'
import { mapActions } from 'pinia'
import { useSportStore } from '../stores/sport'

export default {
  name: 'registerPage',
  emits: [
    'toSignUp',
    'loginHandler',
    'handleCredentialResponse',
    'mounted',
    'modifiedProps',
    'signUpHandler'
  ],
  props: ['isLogin', 'email', 'password', 'baseUrl', 'page'],
  components: { ButtonApp, GoogleLoginButton },
  methods: {
    ...mapActions(useSportStore, ['toLoginPage']),
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
    signUpHandler() {
      this.$emit('signUpHandler', {
        email: this.email,
        password: this.password
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

    <form class="w-25 mx-auto" action="">
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
      <ButtonApp @click.prevent="signUpHandler" buttonText="Sign up" />
    </form>
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
