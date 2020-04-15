<template>
  <div class="container-fluid">
    <div>
      <h4>Report of: {{ selectedCountry }}</h4>
      <span>
        Last Updated:
        <b>{{ lastUpdate | moment("dddd, MMMM Do YYYY") }}</b>
      </span>
    </div>
    <div class="card-group newrow">
      <div class="col-xs-3">
        <div class="newcard">
          <p class="data">1982281</p>
          <div class="label label--warning">confirmed</div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="newcard">
          <p class="data">1982281</p>
          <div class="label label--success">recovered</div>
        </div>
      </div>
      <div class="col-xs-3">
        <div class="newcard">
          <p class="data">1982281</p>
          <div class="label label--danger">deaths</div>
        </div>
      </div>
    </div>
    <!-- <div class="row mb-3" style="width:70%;margin:0 auto;">
      <Card
        v-for="(data, index) in global"
        :key="index"
        :title="index"
        :count="data.value"
        :subtitle="data.subtitle"
      />
    </div>
    <div class="row">
      <div class="col-md-6 offset-3">
        <div class="form-inline">
          <div class="form-group">
            <label for="country mr-3">Select Country:</label>
            <select
              v-model="selectedCountry"
              class="form-control m-3"
              @change="updateData()"
              id="country"
            >
              <option selected>Global</option>
              <option v-for="country in countries" :key="country">{{ country }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-2">
        <Chart :chartData="chartData" height="275" />
      </div>
    </div>-->
  </div>
</template>

// <script>
// import api from "@/api";
// import Chart from "./Chart";
// import Card from "@/components/Card/Card";

// export default {
//   name: "Main",
//   components: { Card, Chart },
//   data() {
//     return {
//       global: {},
//       lastUpdate: "",
//       chartData: [["Corona Report", "Deaths", "Recovered", "Confirmed"]],
//       selectedCountry: "Global",
//       countries: []
//     };
//   },
//   async created() {
//     this.global = await api
//       .fetchAll()
//       .then(data => {
//         data["confirmed"]["subtitle"] = "Number of active cases of COVID-19.";
//         data["recovered"]["subtitle"] = "Number of recoveries from COVID-19.";
//         data["deaths"]["subtitle"] = "Number of deaths caused by COVID-19.";

//         return data;
//       })
//       .catch(error => console.log(error));

//     this.lastUpdate = this.global["lastUpdate"];

//     delete this.global["lastUpdate"];
//     const valueForChart = ["Corona"];
//     valueForChart.push(this.global["deaths"].value);
//     valueForChart.push(this.global["recovered"].value);
//     valueForChart.push(this.global["confirmed"].value);

//     this.chartData.push(valueForChart);

//     this.countries = await api
//       .fetchCountries()
//       .then(data => data)
//       .catch(error => console.log(error));
//   },
//   methods: {
//     updateData: async function() {
//       this.global = await api
//         .fetchByCountry(this.selectedCountry)
//         .then(data => {
//           data["confirmed"]["subtitle"] = "Number of active cases of COVID-19.";
//           data["recovered"]["subtitle"] = "Number of recoveries from COVID-19.";
//           data["deaths"]["subtitle"] = "Number of deaths caused by COVID-19.";

//           return data;
//         })
//         .catch(error => console.log(error));

//       this.lastUpdate = this.global["lastUpdate"];

//       delete this.global["lastUpdate"];
//       const valueForChart = ["Corona"];
//       valueForChart.push(this.global["deaths"].value);
//       valueForChart.push(this.global["recovered"].value);
//       valueForChart.push(this.global["confirmed"].value);
//       this.chartData = [["Corona Report", "Deaths", "Recovered", "Confirmed"]];
//       this.chartData.push(valueForChart);
//     }
//   }
// };
//
</script>
