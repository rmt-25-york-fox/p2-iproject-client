<script>

import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {


  // REGISTER COMPONENTS
  components: {
    Navbar, Footer
  }

  
} //

</script>

<template>
  
  <header class="sticky top-0 z-10">
      <Navbar />
  </header>


  <main class="container p-3 m-auto z-55">

    <RouterView />

  </main>


  <footer>
    <Footer />
  </footer>

</template>