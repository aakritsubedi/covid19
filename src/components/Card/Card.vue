<template>
  <div class="newcard">
    <p class="title">{{ title }}</p>
    <div class="body" :class="extraClass">
      <p class="data">{{ count | formatNum }}</p>
      <p class="sublabel">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "count", "subtitle"],
  data() {
    return {
      extraClass: ''
    };
  },
  methods: {
    getClass() {
      switch(this.title) {
        case 'confirmed':
          this.extraClass = 'bg-warning';
          break;
        case 'recovered':
          this.extraClass = 'bg-success';
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
  filters: {
    formatNum: function(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  }
};
</script>
