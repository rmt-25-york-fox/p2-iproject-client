<script>
// import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
import Navbar from "../components/Navbar.vue";
// import { mapOptions } from "../assets/data";
export default {
  name: "Home",
  components: {
    Navbar,
  },
  methods: {},
};
// let map = null;

// onMounted(() => {
//   mapboxgl.accessToken =
//     "pk.eyJ1Ijoicml2YWxkaTEyIiwiYSI6ImNsNXMwbzRpczJkaTgzY3JvMDd3YnJidGQifQ.XD3HwgaRxr5f4JV0U2SwMw";
//   map = new mapboxgl.Map(mapOptions);
//   map.on("load", () => {
//     map.addLayer({
//       id: "terrain-data",
//       type: "line",
//       source: {
//         type: "vector",
//         url: "mapbox://mapbox.mapbox-terrain-v2",
//       },
//       "source-layer": "contour",
//     });
//   });
// });
// function flyTo(coords) {
//   map.flyTo({
//     center: [coords[0], coords[1]],
//     zoom: 17,
//     speed: 1,
//     curve: 1.2,
//     easing(t) {
//       return t;
//     },
//   });
</script>

<template>
  <Navbar />
  <div class="container-xxl py-5">
    <div class="container">
      <div id="map" class="absolute h-screen"></div>
    </div>
  </div>
</template>

<style></style>
