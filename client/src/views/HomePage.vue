<script>
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
import Navbar from "../components/Navbar.vue";
// import { mapOptions } from "../assets/data";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  name: "App",

  methods: {
    async onMapLoad(event) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions;

      const newParams = await asyncActions.flyTo({
        center: [-6.168495573888538, 106.63818936456171],
        zoom: 16,
        speed: 1,
      });
    },
  },
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
  <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
</template>

<style></style>
