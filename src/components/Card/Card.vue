<template>
  <div class="card" style="width: 16rem;">
    <div class="card-body">
      <h5 class="card-title text-capitalize">{{ title }}</h5>
      <h3>{{ animatedNumber }}</h3>
      <span class="font-weight-lighter">{{ subtitle }}</span>
      <!-- <a href="#" class="card-link"> 
        <i class="fa fa-eye"></i>
      </a>-->
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Card",
  props: ["title", "count", "subtitle"],
  data() {
    return {
      tweenedNumber: this.count
    };
  },
  computed: {
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    count: function(newValue) {
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
    }
  }
};
</script>
