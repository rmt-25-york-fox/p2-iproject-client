<script>
import { RouterLink, RouterView } from 'vue-router'
import { useAllState } from './stores/allState'
import {mapActions} from 'pinia'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'


export default {
  components: {
    RouterLink,
    RouterView,
    NavBar,
    Footer
},
methods: {
    ...mapActions(useAllState, ['handleCredentialResponse']),
  },
    mounted() {
      const cb = this.handleCredentialResponse;
      window.onload = function () {
        google.accounts.id.initialize({
          client_id:
            "10141675082-p97s63dl0mifblrok2afo8b1iht9dftg.apps.googleusercontent.com",
          callback: cb,
        });
        google.accounts.id.renderButton(
          document.getElementById("g_id_onload"),
          { theme: "outline", size: "large", width: "200" } // customization attributes
        );
        // google.accounts.id.prompt(); // also display the One Tap dialog
      };
    },
}

</script>

<template>
  <NavBar/>
  <RouterView />
  <Footer/>
</template>

<style>
</style>
