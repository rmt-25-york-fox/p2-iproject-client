<script setup>
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- Navigation -->
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
    <div class="container px-4 px-lg-5">
      <a class="navbar-brand" href="#!"><i class="fa-solid fa-shuttle-space"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav> -->

  <!-- Page Content-->
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="mt-5" style="color: white">Welcome To Space 8</h1>
          <h4 style="color: aliceblue">The space shuttle has been a fantastic vehicle. It is unlike any other thing that we've ever built. Its capabilities have carried several hundred people into space</h4>
        </div>
      </div>
    </div>
  </section>
  <!-- login -->
  <!-- 
    <div class="form">
      <div class="row text-center">
        <div class="col">
          <h2>Login</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-3">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <hr />
            <div class="text-center">
              <span class="txt1"> Create an account ?</span>
              <router-link to="/register" id="btnRegis" href="#" class="txt2 hov1"> Register </router-link>
            </div>
            <hr />
            <div @click.prevent="signGoogle" id="google-login-button"></div>
          </form>
        </div>
      </div>
    </div> -->
</template>

<style>
body {
  background-image: url("https://www.gannett-cdn.com/authoring/2009/11/16/NSHT/ghows-LK-533a7898-c33d-45b5-a4da-16354204068f-429d9db8.jpeg?crop=3299,1865,x0,y167&width=1600&height=800&format=pjpg&auto=webp");
}
</style>
