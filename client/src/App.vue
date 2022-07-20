<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BaseView from './views/BaseView.vue';
</script>

<template>
 <BaseView v-if="$route.path !== '/login' && $route.path !== '/register'"/>

  <RouterView />
</template>

