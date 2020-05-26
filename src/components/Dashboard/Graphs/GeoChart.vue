<template>
  <div>
    
    <GChart
      :settings="{packages: ['geochart'], mapsApiKey: 'AIzaSyDtbLwdEwBQgaBfgSKxR853Yz82FNCfQs4'}"
      :data="globalChartData"
      :options="chartOptions"
      :createChart="(el, google) => new google.visualization.GeoChart(el)"
      @ready="onChartReady"
    />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

import  {mapActions, mapGetters} from "vuex";

export default{
   name: "GeoChart",
   components: { GChart, Card },
   methods: {
     ...mapActions(["getTheGlobalData"])
   },
   computed: {
     ...mapGetters(["theGlobal", "globalChartData"])
   },
   created() {
     this.getTheGlobalData();
   },
}
</script>
