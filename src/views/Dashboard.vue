<template>
  <div class="dashboard-wrapper">
    <div class="side-menu">
      <div class="list-group">
        <div
          class="list-group__item list-group__item"
          @click="(event) => setComponent(event, 'Covid19')"
          title="Daily Statistics"
        >
          <div class="list-group__icon">
            <i class="fa fa-medkit"></i>
          </div>
          <p class="list-group__label">Update</p>
        </div>
        <div
          class="list-group__item list-group__item"
          @click="(event) => setComponent(event, 'Nepal')"
          title="Nepal Statistics"
        >
          <div class="list-group__icon">
            <img src="@/assets/images/nepal.gif" class="sidebar-img" />
          </div>
          <p class="list-group__label">Nepal</p>
        </div>
        <div
          class="list-group__item"
          @click="(event) => setComponent(event, 'Main')"
          title="World Statistics"
        >
          <div class="list-group__icon">
            <i class="fa fa-globe"></i>
          </div>
          <p class="list-group__label">Global</p>
        </div>
        <div
          class="list-group__item"
          @click="(event) => setComponent(event, 'Imp')"
          title="List of Imp Contact No."
        >
          <div class="list-group__icon">
            <i class="fa fa-sticky-note-o"></i>
          </div>
          <p class="list-group__label">Contact</p>
        </div>
        <div
          class="list-group__item"
          @click="(event) => setComponent(event, 'GetTested')"
          title="Hospital Info"
        >
          <div class="list-group__icon">
            <i class="fa fa-eyedropper"></i>
          </div>
          <p class="list-group__label">Hospital</p>
        </div>

        <div class="list-group__item" @click="(event) => setComponent(event, 'About')" title="About Covid19">
          <div class="list-group__icon">
            <i class="fa fa-share-alt"></i>
          </div>
          <p class="list-group__label">About</p>
        </div>
      </div>
    </div>
    <div class="display-area">
      <img class="header-image" src="@/assets/images/covid.png" alt="Covid 19" />
      <transition name="component-fade" mode="out-in">
        <component :is="component"></component>
      </transition>
    </div>
  </div>
</template>

// <script>
import Covid19 from "@/components/Dashboard/Covid19";
import Main from "@/components/Dashboard/Main";
import Nepal from "@/components/Dashboard/Nepal";
import Imp from "@/components/Dashboard/Imp";
import GetTested from "@/components/Dashboard/GetTested";
import About from "@/components/Dashboard/About";

export default {
  name: "Dashboard",
  components: {
    Main,
    Nepal,
    Imp,
    GetTested,
    Covid19,
    About
  },
  data() {
    return {
      component: "Main"
    };
  },
  methods: {
    setComponent: function(event, component) {
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
