<template>
  <div class="card-group">
    <div class="global-card">
      <div class="global-card__top bg-warning">
        <div class="label">Total Confirmed</div>
        <div class="data">{{ theGlobal.confirmed.total | formatNum}}</div>
      </div>
      <!-- <div class="hr-line"></div> -->
      <div class="global-card__bottom">
        <div class="label">New Confirmed</div>
        <div class="data">{{ theGlobal.confirmed.new | formatNum }}</div>
      </div>
    </div>
    <div class="global-card">
      <div class="global-card__top bg-danger">
        <div class="label">Total Death</div>
        <div class="data">{{ theGlobal.deaths.total | formatNum }}</div>
      </div>
      <div class="global-card__bottom">
        <div class="label">New Deaths</div>
        <div class="data">{{ theGlobal.deaths.new | formatNum }}</div>
      </div>
    </div>
    <div class="global-card">
      <div class="global-card__top bg-success">
        <div class="label">Total Recovered</div>
        <div class="data">{{ theGlobal.recovered.total | formatNum }}</div>
      </div>
      <div class="global-card__bottom">
        <div class="label">New Recovered</div>
        <div class="data">{{ theGlobal.recovered.new | formatNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "GlobalCard",
  methods: {
    ...mapActions(['getTheGlobalData'])
  },
  created() {
    this.getTheGlobalData();
    console.log(this.theGlobal);
  },
  computed:{
    ...mapGetters(['theGlobal'])
  },  
  filters: {
    formatNum: function(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
};
</script>
