<script>
export default {
  name: "HeroSection",
  data() {
    return {
      value: 0,
      items: [
        "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1502465771179-51f3535da42c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      ],
    };
  },
};
</script>

<template>
  <div class="hero-section container mt-5 mb-2">
    <va-carousel
      class="mb-5"
      :arrows="false"
      :indicators="false"
      :items="items"
      stateful
      autoscroll
      :autoscrollInterval="3000"
      height="500px"
    >
    </va-carousel>
  </div>
</template>
