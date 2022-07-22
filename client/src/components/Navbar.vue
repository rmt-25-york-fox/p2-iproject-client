<script>
import { mapActions, mapState } from 'pinia'
import { useSportStore } from '../stores/sport'

export default {
  name: 'Navbar',

  data() {
    return { page: 'login' }
  },
  emits: [''],
  props: [''],
  computed: {
    ...mapState(useSportStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useSportStore, [
      'toHomePage',
      'toLoginPage',
      'toRegisterPage',
      'toFavoritePage',
      'toDetailPage',
      'logoutHandler',
      'toChatPage',
      'toAddFitnessPage',

      'toHistory',
      'toSubscribePage'
    ])
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div style="margin-left: 50px" class="container-fluid">
      <a @click.prevent="toHomePage" class="navbar-brand">GetShaped</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="auto">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                @click.prevent="toHomePage"
                class="nav-link active"
                aria-current="page"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a @click.prevent="toChatPage" class="nav-link"
                >Chat with coach</a
              >
            </li>
            <li class="nav-item">
              <a @click.prevent="toAddFitnessPage" class="nav-link"
                >Add New Fitness Data</a
              >
            </li>
            <li class="nav-item">
              <a @click.prevent="toHistory" class="nav-link"
                >My Fitness Tracker</a
              >
            </li>
            <li class="nav-item">
              <a @click.prevent="toSubscribePage" class="nav-link">Subscribe</a>
            </li>

            <li class="nav-item">
              <a @click.prevent="toLoginPage" class="nav-link">Sign In</a>
            </li>
            <li class="nav-item">
              <a @click.prevent="toRegisterPage" class="nav-link">Sign Up</a>
            </li>
            <li class="nav-item">
              <a @click.prevent="logoutHandler" class="nav-link">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  cursor: pointer;
}
li {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

ul li a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

input[type='text'],
input[type='text-area'],
input[type='number'],
select,
input[type='password'] {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
}
</style>
