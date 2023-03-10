<script>

import { RouterLink, RouterView } from 'vue-router'
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useJoblezzStore } from '../stores/joblezz'

export default {
  props: [''],
  emits: [''],
  data() {
    return {
      userData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useJoblezzStore, ['register']),

    // Submit Form
    submitForm() {
      this.register(this.userData)
    }

  }
}

</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <header>
      <div class="mx-auto flex max-w-7xl items-center justify-center py-6 px-6">
          <div class="flex">
            <RouterLink to="/">
                  <span class="sr-only">Joblezz</span>
                  <img class="h-8 w-auto sm:h-10" src="https://svelte.id/h8/p2/img/avatar.png" alt="Joblezz">
            </RouterLink>
          </div>
      </div>
      <h4 class="mt-2 text-center text-gray-500">Register to get an account</h4>
      </header>
  
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input v-model="userData.email" id="email" name="email" type="email" autocomplete="off" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
            </div>
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input v-model="userData.password" id="password" name="password" type="password" autocomplete="current-password" required class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
            </div>
          </div>
  
          <div class="flex items-center justify-between">
            <div class="text-sm">
              <RouterLink to="/login">
                <span class="font-medium text-blue-600 hover:text-blue-500">Have an account? Login</span>
              </RouterLink>
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign up</button>
          </div>
        </form>
  
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
            </div>
          </div>
  
          <div class="mt-6 flex justify-center">
            <div>
              <a href="#" class="inline-flex w-full justify-center rounded-md bg-white py-2 px-20 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>