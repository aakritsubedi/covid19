<template>
  <div>
    <h2 class="text-cente" style="margin-top:60px">
      <i class="fa fa-globe"></i>
      Global Record
    </h2>
    <Card :allData="global" />
    <GChart
      :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyDtbLwdEwBQgaBfgSKxR853Yz82FNCfQs4'}"
      :data="chartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.GeoChart(el)"
      @ready="onChartReady"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import Card from "@/components/Card/GlobalCard";
import  {mapActions, mapGetters} from "vuex";

export default{
   name: "GeoChart",
   components: { GChart, Card },
   methods: {
     ...mapActions(["getGlobalData"])
   },
   computed: {
     ...mapGetters(["global", "chartData"])
   },
   created() {
     this.getGlobalData();
   },
}
</script>
