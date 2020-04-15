<template>
  <div class="main-container">
    <div>
      <h2>{{ selectedCountry }}'s Report</h2>
      <span>
        Last Updated:
        <b>{{ lastUpdate | moment("dddd, MMMM Do YYYY") }}</b>
      </span>
    </div>
    <p class="heading">Report of {{selectedCountry}}</p>
    <div class="card-group">
      <Card
        v-for="(data, index) in global"
        :key="data.value"
        :title="index"
        :count="data.value"
        :subtitle="data.subtitle"
      />
    </div>
    <div class="newrow">
      <div class="col-md-10 offset-1">
        <Chart :chartData="chartData" height="300" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import Chart from "./Chart";
import Card from "@/components/Card/Card";

export default {
  name: "Main",
  components: { Card, Chart },
  data() {
    return {
      global: {},
      lastUpdate: "",
      chartData: [["Corona Report", "Deaths", "Recovered", "Confirmed"]],
      selectedCountry: "Nepal",
      countries: []
    };
  },
  async created() {
    this.global = await api
      .fetchByCountry(this.selectedCountry)
      .then(data => {
        data["confirmed"]["subtitle"] = "Number of active cases of COVID-19.";
        data["recovered"]["subtitle"] = "Number of recoveries from COVID-19.";
        data["deaths"]["subtitle"] = "Number of deaths caused by COVID-19.";

        return data;
      })
      .catch(error => console.log(error));

    this.lastUpdate = this.global["lastUpdate"];

    delete this.global["lastUpdate"];
    const valueForChart = ["Corona"];
    valueForChart.push(this.global["deaths"].value);
    valueForChart.push(this.global["recovered"].value);
    valueForChart.push(this.global["confirmed"].value);

    this.chartData.push(valueForChart);
  }
};
</script>