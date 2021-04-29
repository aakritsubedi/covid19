<template>
  <div class="container">
    <Nepal />
    <div style="text-align:left;">
      <NepalSummary :nepalInfo="nepalInfo" />
      <!-- <ProvinceSummary :provinceInfo="provinceInfo" /> -->
      <hr />
      <h2>Latest Update</h2>
      <div class="row">
        <News v-for="(news, index) in topNews" :news="news" :key="index" />
      </div>
      <div class="other-news">
        <h3>Other News</h3>
        <ul>
          <li v-for="(news, index) in otherNews" :key="index">
            <a :href="news.url" target="_blank">{{news.title}}</a>
          </li>
        </ul>
      </div>
      <button
        class="btn btn-primary"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >District Wise Report</button>
      <div class="collapse" id="collapseExample">
        <DistrictSummary />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Nepal from "./Map";
import NepalSummary from "../Nepal/NepalSummaryTable";
import News from "../../Card/News";
// import ProvinceSummary from "../Nepal/ProvinceSummaryTable";
import DistrictSummary from "../Nepal/DistrictSummaryTable";

export default {
  name: "Map",
  components: { Nepal, NepalSummary, News, DistrictSummary },
  methods: {
    ...mapActions([
      "getNepalInfo",
      "getNepalNews",
      "getProvinceData",
      "getDistrictInfo"
    ])
  },
  created() {
    this.getNepalInfo();
    this.getNepalNews();
    this.getProvinceData();
  },
  computed: {
    ...mapGetters(["nepalInfo", "topNews", "otherNews", "provinceInfo"])
  }
};
</script>