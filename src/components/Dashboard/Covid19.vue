<template>
  <div class="container-fluid"> 
    <div class="row">
      <div class="col-md-12">
        <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.</p>
      <p>The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
      <a
        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
        target="_blank"
      >Learn More</a>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6">
        <DailyTable :informations="dailyData" />
      </div>
      <div class="col-md-6">
        <Chart :chartData="chartData" height="500"/>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import Chart from "./Chart";
import DailyTable from "@/components/CovidTable/DailyTable";

export default {
  name: "Covid19",
  components: { DailyTable, Chart },
  data() {
    return {
      dailyData: {},
      chartData: [["Daily Report", "Deaths", "Confirmed"]]
    };
  },
  async created() {
    this.dailyData = await api
      .fetchDaily()
      .then(data => data)
      .catch(error => console.log(error));

    this.dailyData = this.dailyData.slice(
      Math.max(this.dailyData.length - 5, 1)
    );

    // const chartDatas = [];
    this.dailyData.forEach(info => {
      let data = [];
      data.push(info.date);
      data.push(info.deaths);
      data.push(info.confirmed);
      this.chartData.push(data);
    });
  }
};
</script>