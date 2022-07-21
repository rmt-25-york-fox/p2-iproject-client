<script>
import Mapbox from "mapbox-gl";
// import { MglMap } from "vue-mapbox";
import Navbar from "../components/Navbar.vue";
// import { mapOptions } from "../assets/data";

export default {
  name: "Home",
  components: {
    Navbar,
    Mapbox,
  },

  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoicml2YWxkaTEyIiwiYSI6ImNsNXMwbzRpczJkaTgzY3JvMDd3YnJidGQifQ.XD3HwgaRxr5f4JV0U2SwMw", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/kpfui/ckn9c157p02a618rzglws1mum", // your map style
    };
  },

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
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
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
  <Mapbox :accessToken="accessToken" :mapStyle="mapStyle" />
</template>

<style></style>
