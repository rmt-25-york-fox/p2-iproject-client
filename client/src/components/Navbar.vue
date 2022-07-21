<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container px-4 px-lg-5">
      <router-link to="/" class="navbar-brand" href="#!"> <i class="fa-solid fa-shuttle-space"></i> </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/login" class="nav-link" href="#!"> Login </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shuttle" class="nav-link" href="#!"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/planet" class="nav-link" href="#!"> APOD </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
