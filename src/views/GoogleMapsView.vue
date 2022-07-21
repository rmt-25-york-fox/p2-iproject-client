<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted } from 'vue';
import { useGeolocation } from '../useGeolocation';
import { Loader } from '@googlemaps/js-api-loader';
import HeaderVue from '../components/HeaderComponent.vue';

const GOOGLE_MAPS_API_KEY = "AIzaSyAQh8RF0wqYhA0PDDthRuMmAEDHoLSJnQs";

export default {
  components: { HeaderVue },
  setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => (
      {
        lat: coords.value.latitude,
        lng: coords.value.longitude
      }
    ));

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);

    onMounted(async () => {
      await loader.load();
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 18
      });
    });
    return { currPos, mapDiv }
  },
  created() {
    const clearCookies = document.cookie
      .split(';')
      .forEach(
        (cookie) =>
        (document.cookie = cookie.replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date(0)
            .toUTCString()};path=/`))
      );
  },
}
</script>

<template>
  <div class="container">
    <HeaderVue />
    <h1>GMAPS</h1>
    <h2>Lokasi pedagang terdekat</h2>
    <div class="d-flex text-center"
         style="height: 20vh">
      <div class="m-auto">
        <h4>Lokasi Anda</h4> latitude: {{ currPos.lat.toFixed(2) }}, longitude: {{ currPos.lng.toFixed(2) }}
        <br>
      </div>
    </div>
    <div ref="mapDiv"
         style="width: 100%; height:80vh; margin-bottom: 30px;"></div>
  </div>
</template>

