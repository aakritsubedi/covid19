<template>
  <div>
    <h2 class="text-cente" style="margin-top:60px">
      <i class="fa fa-globe"></i>
      Global Record
    </h2>
    <Card :allData="global" />
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
        let newData = res.countries.data.Global;

        this.global = {
          recovered: { total: newData.TotalRecovered, new: newData.NewRecovered },
          confirmed: { total: newData.TotalConfirmed, new: newData.NewConfirmed },
          deaths: { total: newData.TotalDeaths, new: newData.NewDeaths }
        };

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
