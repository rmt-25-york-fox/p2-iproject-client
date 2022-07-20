<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
a {
  text-decoration: none;
  color: black;
  outline: none;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Nunito", sans-serif;
  background-color: #f8f9fc;
}

.navbar {
  background-color: #f8f9fc;
}

.top-nav {
  font-family: "Dancing Script", cursive;
}

.sidebar {
  margin-top: 48px;
  min-height: 100vh;
  z-index: -1;
}

#footer {
  padding-left: 0px;
  padding-right: 0px;
  width: 100%;
}

#img-avatar-sidebar {
  width: 50px;
}

.brand-name {
  font-family: "Dancing Script", cursive;
}

footer .brand-name {
  font-family: "Dancing Script", cursive;
}

#cards-wrapper {
  text-align: center;
}

#cards-wrapper .container {
  padding-top: 0px;
  padding-bottom: 100px;
}

#cards-wrapper .card-flyer {
  border-radius: 5px;
}

#cards-wrapper .card-flyer .image-box {
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}

#cards-wrapper .card-flyer .image-box img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

#cards-wrapper .card-flyer .text-box {
  text-align: center;
}

#cards-wrapper .card-flyer .text-box .text-container {
  padding: 30px 18px;
}

#cards-wrapper .card-flyer {
  margin-top: 50px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

#cards-wrapper .card-flyer:hover {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}

#cards-wrapper .card-flyer .text-box p {
  margin-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: black;
}

#cards-wrapper .card-flyer .text-box h6 {
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: black;
}
</style>
