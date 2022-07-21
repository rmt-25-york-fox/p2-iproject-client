<script>
import { mapActions } from 'pinia';
import { useAllStateStore } from '../stores/allState';

export default {
  props: ['merchant'],
  methods: {
    ...mapActions(useAllStateStore, []),
  }
}
</script>

<template>
  <a class="card">
    <img src="../assets/abang-baso.jpeg"
         alt=""
         class="image">
    <p class="text">{{ merchant.Merchant.product }} {{ merchant.User.nickname }}</p>
  </a>
</template>

<style>
.card {
  height: 300px;
  width: 300px;
  border-radius: 4px;

  display: grid;
  place-items: center;
  grid-template-areas: "main";

  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
}

.card>* {
  grid-area: main;
}

.card>.image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;

  transition: transform 400ms, filter 400ms;
}

.card>.text {
  opacity: 0;
  color: whitesmoke;
  font-size: 1.8em;

  transition: opacity 400ms, transform 400ms;
}

.card:is(:hover, :focus)>.image {
  transform: scale(1.1);
  filter: brightness(0.4);
}

.card:is(:hover, :focus)>.text {
  transform: scale(1.2);
  opacity: 1;
}
</style>