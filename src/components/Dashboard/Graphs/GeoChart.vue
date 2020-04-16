<template>
  <div>
    <h3 class="text-center">
      <i class="fa fa-globe"></i> 
      Global Record
    </h3>
    <div class="card-group">
      <Card v-for="(data, index) in global" :key="index" :title="index" :count="data" />
    </div>
    <GChart
      :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyDtbLwdEwBQgaBfgSKxR853Yz82FNCfQs4'}"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.GeoChart(el)"
      @ready="onChartReady"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import Card from "@/components/Card/GlobalCard";
import api from "@/api";

export default {
  name: "GeoChart",
  components: { GChart, Card },
  data() {
    return {
      chartData: [["Country", "Confirmed", "Deaths"]],
      global: {}
    };
  },
  computed: {
    chartOptions() {
      if (!this.chartsLib) return null;
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: "Covid-19 Impact",
          subtitle: "Deaths, Recovered and Confirmed"
        },
        bars: "horizontal", // Required for Material Bar Charts.
        hAxis: { format: "decimal" },
        height: this.height
        // colors: ["#d32f2f", "#388e3c", "#fbc02d"]
      });
    }
  },
  methods: {
    onChartReady(chart, google) {
      this.chartsLib = google;
    }
  },
  async created() {
    await api
      .countryData()
      .then(res => {
        this.global = res.countries.data.Global;
        console.log(this.global);
        const data = res.countries.data.Countries;
        for (let info in data) {
          let individual = [];
          individual.push(
            data[info].Country,
            data[info].TotalConfirmed,
            data[info].TotalDeaths
          );
          this.chartData.push(individual);
        }
      })
      .catch(error => console.log(error));
  }
};
</script>