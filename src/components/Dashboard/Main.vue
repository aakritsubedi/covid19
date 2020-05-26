<template>
  <div class="main-container">
    <div class="date-info">
      <p>
        last Updated:
        <span>{{lastUpdate}}</span>
      </p>

      <span :title="myCountry.isp" class="mt-2">
        <i class="mr-1 fa fa-map-marker"></i>
        <span class>{{ myCountry.city }},</span>
        <span class>{{ myCountry.countryName }}</span>
        <span class="ml-2">({{ myCountry.regionName }})</span>
      </span>
    </div>

    <div class="newrow country-select mt-10 f-j-center">
      <div class="col-lg-12 col-xs-12">
        <select v-model="country" class="custom-select" @change="getDataFor()" id="country">
          <option v-for="country in countries" :key="country">
            {{
            country
            }}
          </option>
        </select>
      </div>
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
    <hr />
    <GlobalCard />
    <!-- <div class="newrow">
      <div class="col-xs-12">
        <GeoChart height="300" width="100%" />
      </div>
    </div> -->
  </div>
</template>

<script>
import Chart from "./Chart";
import Card from "@/components/Card/Card";
import GlobalCard from "@/components/Card/GlobalCard";
// import GeoChart from './Graphs/GeoChart'

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Main",
  components: { Card, Chart, GlobalCard },
  async created() {
    this.init();
  },
  methods: {
    ...mapActions(["init", "updateData", "getDataFor"]),
  },
  computed: {
    country: {
      get() {
        return this.selectedCountry;
      },
      set(value) {
        this.$store.commit("setSelectedCountry", value);
      }
    },
    ...mapGetters([
      "global",
      "lastUpdate",
      "selectedCountry",
      "countries",
      "myCountry",
      "chartData"
    ])
  },
  filters: {
    formatDate: value => {
      const option = {year: 'numeric', month: 'short', day: '2-digit' };
      const newDate = new Intl.DateTimeFormat("en", option).format(new Date(value))
      return newDate;
    }
  }
};
</script>

<style scoped>
#learn-more {
  border: 1px solid #3a3a3a;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
}
</style>
