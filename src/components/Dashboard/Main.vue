<template>
  <div class="main-container">
    <div class="date-info">
      <p>last Updated: <span> Wednesday April 15th 2020</span></p>

      <span :title="myCountry.isp" class="mt-2">
        <i class="mr-1 fa fa-map-marker"></i>
        <span class>{{ myCountry.city }},</span>
        <span class>{{ myCountry.countryName }}</span>
        <span class="ml-2">({{ myCountry.regionName }})</span>
      </span>
    </div>

    <div class="newrow country-select mt-10 f-j-center">
      <div class="col-lg-12 col-xs-12">
        <select
          v-model="selectedCountry"
          class="custom-select"
          @change="getDataFor()"
          id="country"
        >
          <option v-for="country in countries" :key="country">{{
            country
          }}</option>
        </select>
      </div>
      <!-- <div class="col-lg-2 col-xs-4">
        <a @click.prevent="getGlobalData()">
          <div class="custom-btn">
            <p><i class="fa fa-globe"></i> World Data</p>
          </div>
        </a>
      </div> -->
    </div>

    <p class="heading">Report of {{ selectedCountry }}</p>

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
    <hr>
    <div class="newrow">
      <div class="col-xs-12">
        <GeoChart :chartData="chartData" height="300" width="100%" />
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import Chart from './Chart'
import Card from '@/components/Card/Card'
import GeoChart from './Graphs/GeoChart'

export default {
  name: 'Main',
  components: { Card, Chart, GeoChart },
  data() {
    return {
      global: {},
      lastUpdate: '',
      chartData: [['Corona Report', 'Deaths', 'Recovered', 'Confirmed']],
      selectedCountry: 'Global',
      countries: [],
      myCountry: {},
    }
  },
  async created() {
    this.myCountry = await api.getInfoFromIp()
    this.selectedCountry = this.myCountry.countryName
    this.updateData()

    this.countries = await api
      .fetchCountries()
      .then((data) => data)
      .catch((error) => console.log(error))

    this.countries.unshift('Global')
  },
  methods: {
    getDataFor: function() {
      if (this.selectedCountry === 'Global') {
        this.getGlobalData()
      } else {
        this.updateData()
      }
    },
    updateData: async function() {
      console.log(this.selectedCountry)
      this.global = await api
        .fetchByCountry(this.selectedCountry)
        .then((data) => {
          data['confirmed']['subtitle'] = 'Number of active cases'
          data['recovered']['subtitle'] = 'Number of recoveries'
          data['deaths']['subtitle'] = 'Number of deaths caused'

          return data
        })
        .catch((error) => console.log(error))

      this.lastUpdate = this.global['lastUpdate']

      this.makeChartData()
    },
    getGlobalData: async function() {
      this.selectedCountry = 'Global'
      this.global = await api
        .fetchAll()
        .then((data) => {
          data['confirmed']['subtitle'] = 'Number of active cases'
          data['recovered']['subtitle'] = 'Number of recoveries'
          data['deaths']['subtitle'] = 'Number of deaths caused'

          return data
        })
        .catch((error) => console.log(error))

      this.lastUpdate = this.global['lastUpdate']

      this.makeChartData()
    },
    makeChartData: function() {
      delete this.global['lastUpdate']
      const valueForChart = ['Corona']
      valueForChart.push(this.global['deaths'].value)
      valueForChart.push(this.global['recovered'].value)
      valueForChart.push(this.global['confirmed'].value)
      this.chartData = [['Corona Report', 'Deaths', 'Recovered', 'Confirmed']]
      this.chartData.push(valueForChart)
    },
  },
}
</script>

<style scoped>
#learn-more {
  border: 1px solid #3a3a3a;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
}
</style>
