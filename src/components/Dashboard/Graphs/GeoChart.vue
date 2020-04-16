<template>
  <div>
    <h2 class="text-cente" style="margin-top:60px">
      <i class="fa fa-globe"></i>
      Global Record
    </h2>
    <div class="card-group">
      <div class="global-card">
        <div class="global-card__top bg-warning">
          <div class="label">Total Confirmed</div>
          <div class="data">112551</div>
        </div>
        <!-- <div class="hr-line"></div> -->
        <div class="global-card__bottom">
          <div class="label">New Confirmed</div>
          <div class="data">85202</div>
        </div>
      </div>
      <div class="global-card">
        <div class="global-card__top bg-danger">
          <div class="label">Total Death</div>
          <div class="data">112551</div>
        </div>
        <!-- <div class="hr-line"></div> -->
        <div class="global-card__bottom">
          <div class="label">New Deaths</div>
          <div class="data">85202</div>
        </div>
      </div>
      <div class="global-card">
        <div class="global-card__top bg-success">
          <div class="label">Total Recovered</div>
          <div class="data">112551</div>
        </div>
        <!-- <div class="hr-line"></div> -->
        <div class="global-card__bottom">
          <div class="label">New Recovered</div>
          <div class="data">85202</div>
        </div>
      </div>
    </div>
    <!-- <div class="card-group">
      <Card v-for="(data, index) in global" :key="index" :title="index" :count="data" />
    </div>-->
    <!-- <GChart
      :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyDtbLwdEwBQgaBfgSKxR853Yz82FNCfQs4'}"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.GeoChart(el)"
      @ready="onChartReady"
    />-->
  </div>
</template>

// <script>
// import { GChart } from "vue-google-charts";
// import Card from "@/components/Card/GlobalCard";
// import api from "@/api";

// export default {
//   name: "GeoChart",
//   components: { GChart, Card },
//   data() {
//     return {
//       chartData: [["Country", "Confirmed", "Deaths"]],
//       global: {}
//     };
//   },
//   computed: {
//     chartOptions() {
//       if (!this.chartsLib) return null;
//       return this.chartsLib.charts.Bar.convertOptions({
//         chart: {
//           title: "Covid-19 Impact",
//           subtitle: "Deaths, Recovered and Confirmed"
//         },
//         bars: "horizontal", // Required for Material Bar Charts.
//         hAxis: { format: "decimal" },
//         height: this.height
//         // colors: ["#d32f2f", "#388e3c", "#fbc02d"]
//       });
//     }
//   },
//   methods: {
//     onChartReady(chart, google) {
//       this.chartsLib = google;
//     }
//   },
//   async created() {
//     await api
//       .countryData()
//       .then(res => {
//         this.global = res.countries.data.Global;
//         console.log(this.global);
//         const data = res.countries.data.Countries;
//         for (let info in data) {
//           let individual = [];
//           individual.push(
//             data[info].Country,
//             data[info].TotalConfirmed,
//             data[info].TotalDeaths
//           );
//           this.chartData.push(individual);
//         }
//       })
//       .catch(error => console.log(error));
//   }
// };
//
</script>
