<script>
import axios from "axios";
import Navbar from "../components/Navbar.vue";
import leaflet from "leaflet";
import { onMounted } from "vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  setup() {
    let map;
    onMounted(() => {
      //init map
      map = leaflet
        .map("map")
        .setView([-6.168495573888538, 106.63818936456171], 15);
      //addd ti;e layer
      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution: `Map data &copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors `,
        })
        .addTo(map);
    });
  },
};
</script>

<template>
  <Navbar />
  <div id="map"></div>
</template>

<style>
#map {
  height: 380px;
}
</style>
