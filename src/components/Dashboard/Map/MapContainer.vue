<template>
  <div class="container">
    <Nepal />
    <NepalSummary :nepalInfo="nepalInfo" />
    <hr>
    <ProvinceSummary :provinceInfo="provinceInfo" />
    <hr>
    <DistrictSummary />
    <h2>Latest Update</h2>
    <div class="row">
      <News v-for="(news, index) in nepalNews" :news="news" :key="index"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Nepal from "./Map";
import NepalSummary from "../Nepal/NepalSummaryTable";
import News from "../../Card/News";
import ProvinceSummary from "../Nepal/ProvinceSummaryTable";
import DistrictSummary from "../Nepal/DistrictSummaryTable";

export default {
  name: "Map",
  components: { Nepal, NepalSummary, News, ProvinceSummary, DistrictSummary },
  methods: {
    ...mapActions(["getNepalInfo", "getNepalNews", "getProvinceData"])
  },
  created() {
    this.getNepalInfo();
    this.getNepalNews(); 
    this.getProvinceData(); 
  },
  computed: {
    ...mapGetters(["nepalInfo", "nepalNews", "provinceInfo"])
  }
};
</script>