<template>
  <div class="newcard">
    <p class="title">{{ title }}</p>
    <div class="body" :class="extraClass">
      <p class="data">{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "count"],
  data() {
    return {
      extraClass: ''
    };
  },
  methods: {
    getClass() {
      console.log(this.count);
      
      if(this.title.includes('Recover')){
        this.extraClass = 'bg-success'
      }
      else if(this.title.includes('Death')){
        this.extraClass = 'bg-danger'
      }
      else if(this.title.includes('Confirm')){
        this.extraClass = 'bg-warning';
      }
    }
  },
  created() {
    this.getClass();
  }
};
</script>
