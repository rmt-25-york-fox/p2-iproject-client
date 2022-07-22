<script>
import Avatar from './Avatar.vue'
import { useAuth } from '@/firebase'
import { mapActions } from 'pinia'
import { useSportStore } from '../stores/sport'

export default {
  components: { Avatar },
  methods: {
    ...mapActions(useSportStore, ['toHomePage']),
    tohome() {
      this.toHomePage()
    }
  },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth()
    return { user, isLogin, signOut, signIn }
  }
}
</script>

<template>
  <nav>
    <div>
      <!-- <h1><strong>Vue</strong> Chat App</h1> -->

      <a
        style="color: white; margin: 20px; cursor: pointer"
        @click.prevent="tohome"
        class="nav-link active"
        aria-current="page"
        >Home</a
      >

      <div v-if="isLogin" class="login">
        <Avatar :src="user.photoURL" />
        <button class="text-gray-400 hover:text-white" @click="signOut">
          Sign Out
        </button>
      </div>

      <button
        style="margin-left: 120px"
        v-else
        class="bg-green-500 hover:bg-green-600"
        @click="signIn"
      >
        Sign in
      </button>
    </div>
  </nav>
</template>
