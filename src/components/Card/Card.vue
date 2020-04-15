<template>
  <div class="newcard">
    <p class="title">{{ title }}</p>
    <div class="body" :class="extraClass">
      <p class="data">{{ animatedNumber }}</p>
      <p class="sublabel">{{ subtitle }}</p>
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
      tweenedNumber: this.count,
      extraClass: ''
    };
  },
  methods: {
    getClass() {
      switch(this.title) {
        case 'confirmed':
          this.extraClass = 'bg-success';
          break;
        case 'recovered':
          this.extraClass = 'bg-warning';
          break;
        case 'deaths':
          this.extraClass = 'bg-danger';
          break;
      }
    }
  },
  created() {
    this.getClass();
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
