<template>
  <div class="main-container">
    <div class="date-info">
      <p>last Updated</p>
      <p>Wednesday April 15th 2020</p>
    </div>

    <div class="newrow country-select mt-10">
      <div class="col-xs-12">
        <select v-model="selectedCountry" class="custom-select" @change="updateData()" id="country">
          <option selected>Global</option>
          <option v-for="country in countries" :key="country">{{ country }}</option>
        </select>
      </div>
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
      <div class="col-xs-12">
        <Chart :chartData="chartData" height="300" width="100%" />
      </div>
    </div>
  </div>
</template>

// <script>
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
      selectedCountry: "Global",
      countries: []
    };
  },
  async created() {
    let myCountry = await api.getInfoFromIp();
    this.selectedCountry = myCountry.countryName;
    this.updateData();

    this.countries = await api
      .fetchCountries()
      .then(data => data)
      .catch(error => console.log(error));
  },
  methods: {
    updateData: async function() {
      this.global = await api
        .fetchByCountry(this.selectedCountry)
        .then(data => {
          data["confirmed"]["subtitle"] = "Number of active cases";
          data["recovered"]["subtitle"] = "Number of recoveries";
          data["deaths"]["subtitle"] = "Number of deaths caused";

          return data;
        })
        .catch(error => console.log(error));

      this.lastUpdate = this.global["lastUpdate"];

      delete this.global["lastUpdate"];
      const valueForChart = ["Corona"];
      valueForChart.push(this.global["deaths"].value);
      valueForChart.push(this.global["recovered"].value);
      valueForChart.push(this.global["confirmed"].value);
      this.chartData = [["Corona Report", "Deaths", "Recovered", "Confirmed"]];
      this.chartData.push(valueForChart);
    }
  }
};
</script>
