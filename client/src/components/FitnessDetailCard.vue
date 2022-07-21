<script>
export default {
  name: "FitnessDetailCard",
  data() {
    return { isLogin: false, page: "login" };
  },
  emits: [""],
  props: ["movie", "fitness"],
  methods: {
    loginHandler() {
      this.isLogin = true;
      this.page = "home";
    },
  },
};
</script>
<template>
  <!-- Tutorial Card -->
  <div
    style="margin-left:0px;margin-bottom: 10px width:1200px;"
    class="col-12 col-md-12 mt-3"
  >
    <div class="card">
      <div style="justify-content: center; align-items: center" class="col-6">
        <iframe
          width="1068"
          height="315"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="card-body">
        <h5 class="card-title">
          Your Body Mass Index (BMI) is: {{ fitness.bmi.bmi }}
        </h5>
        <p class="card-text">
          Your Health Category is: {{ fitness.bmi.health }}
        </p>
        <p class="card-text">
          Your Ideal Weight is: {{ fitness.idealWeight.Hamwi }} Kg
        </p>

        <span
          >Your Body Fat Percentage is:
          {{ fitness.bodyFatPercentage["Body Fat (BMI method)"] }} %</span
        >
      </div>
    </div>
  </div>
</template>
<style></style>
