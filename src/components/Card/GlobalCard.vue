<template>
  <div class="card-group">
    <div class="global-card">
      <div class="global-card__top bg-warning">
        <div class="label">Total Confirmed</div>
        <div class="data">{{ allData.confirmed.total | formatNum}}</div>
      </div>
      <!-- <div class="hr-line"></div> -->
      <div class="global-card__bottom">
        <div class="label">New Confirmed</div>
        <div class="data">{{ allData.confirmed.new | formatNum }}</div>
      </div>
    </div>
    <div class="global-card">
      <div class="global-card__top bg-danger">
        <div class="label">Total Death</div>
        <div class="data">{{ allData.deaths.total | formatNum }}</div>
      </div>
      <div class="global-card__bottom">
        <div class="label">New Deaths</div>
        <div class="data">{{ allData.deaths.total | formatNum }}</div>
      </div>
    </div>
    <div class="global-card">
      <div class="global-card__top bg-success">
        <div class="label">Total Recovered</div>
        <div class="data">{{ allData.recovered.total | formatNum  }}</div>
      </div>
      <div class="global-card__bottom">
        <div class="label">New Recovered</div>
        <div class="data">{{ allData.recovered.new | formatNum}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["allData"],
  filters: {
    formatNum: function(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
};
</script>
