<template>
  <GChart
    :settings="{packages: ['bar']}"
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "Chart",
  components: { GChart },
  props: ["chartData", ],
  data() {
    return {
      chartsLib: null
    };
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "Corona Impact",
          subtitle: "Deaths, Recovered and Confirmed"
        },
        bars: "horizontal", // Required for Material Bar Charts.
        hAxis: { format: "decimal" },
        height: this.height,
        colors: ["#B83227", "#6ab04c", "#2C3335"]
      });
    }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    }
  }
};
</script>