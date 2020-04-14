<template>
  <div class="dashboard-wrapper clearfix">
    <div class="side-menu">
      <div class="company-title mt-2">
        <span class="sidebar-title" @click="() => setComponent('AboutUs')">Covid 19</span>
      </div>
      <ul id="menu">
        <li @click="() => setComponent('Nepal')" title="Nepal Statistics">
          <img src="@/assets/images/nepal.gif" class="sidebar-img" />
        </li>
        <li class="icon fa fa-globe" @click="() => setComponent('Main')" title="World Statistics"></li>
        <li class="icon fa fa-credit-card"></li>
        <li class="icon fa fa-desktop"></li>
        <li class="icon fa fa-share-alt"></li>
      </ul>
    </div>
    <div class="display-area container-fluid">
      <img src="@/assets/images/covid.png" alt="Covid 19" />
      <transition name="component-fade" mode="out-in">
        <component :is="component"></component>
      </transition>
    </div>
  </div>
</template>

<script>
import Main from "@/components/Dashboard/Main";
import Nepal from "@/components/Dashboard/Nepal";

export default {
  name: "Dashboard",
  components: {
    Main,
    Nepal
  },
  data() {
    return {
      component: "Main"
    };
  },
  methods: {
    setComponent: function(component) {
      this.component = component;
    }
  }
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>