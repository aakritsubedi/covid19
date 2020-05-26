<template>
  <div class="container">
    <Nepal />
    <NepalSummary :nepalInfo="nepalInfo" />
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

export default {
  name: "Map",
  components: { Nepal, NepalSummary, News },
  methods: {
    ...mapActions(["getNepalInfo", "getNepalNews"])
  },
  created() {
    this.getNepalInfo();
    this.getNepalNews();  
  },
  computed: {
    ...mapGetters(["nepalInfo", "nepalNews"])
  }
};
</script>