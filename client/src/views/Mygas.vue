<script>
import { mapActions, mapState } from "pinia";
import { useMainGas } from "../stores/counter.js";
import Navbar from "../components/Navbar.vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "MyTransaksi",

  components: {
    Navbar,
    Bar,
  },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 200,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{ data: [] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  methods: {
    ...mapActions(useMainGas, ["chart"]),
    // function sum(obj){

    // }
  },
  computed: {
    ...mapState(useMainGas, ["charts"]),
  },
  created() {
    this.chart();

    this.chartData.labels = Object.keys(this.charts);
    this.chartData.datasets[0].data = Object.values(this.charts);

    console.log(this.chartData.datasets[0].data[0]);
    let nilai = this.chartData.datasets[0].data[0];
  },
};
</script>

<template>
  <!-- MyGAS  -->
  <Navbar />
  <div class="container-xxl py-5">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
  <!-- mY Gas End -->
</template>

<style></style>
