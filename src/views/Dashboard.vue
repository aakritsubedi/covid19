<template>
  <div class="dashboard-wrapper">
    <div class="side-menu">
      <div class="list-group">
        <div
          v-if="country === 'Nepal'"
          class="list-group__item"
          :class="component == 'Map' ? 'list-group__item--active':''"
          @click="(event) => setComponent(event, 'Map')"
          title="Nepal Statistics"
        >
          <div class="list-group__icon">
            <img src="@/assets/images/nepal.png" class="sidebar-img" />
          </div>
          <p class="list-group__label">Nepal</p>
        </div>
        <div
          class="list-group__item"
          @click="(event) => setComponent(event, 'Main')"
          title="World Statistics"
          :class="component == 'Main' ? 'list-group__item--active':''"
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
          :class="component == 'Imp' ? 'list-group__item--active':''"
        >
          <div class="list-group__icon">
            <i class="fa fa-sticky-note-o"></i>
          </div>
          <p class="list-group__label">Contact</p>
        </div>
        <div
          class="list-group__item"
          @click="(event) => setComponent(event, 'Hospital')"
          title="Hospital Info"
          :class="component == 'Hospital' ? 'list-group__item--active':''"
        >
          <div class="list-group__icon">
            <i class="fa fa-hospital-o"></i>
          </div>
          <p class="list-group__label">Hospital</p>
        </div>

        <div
          class="list-group__item"
          @click="(event) => setComponent(event, 'About')"
          title="About Covid19"
          :class="component == 'About' ? 'list-group__item--active':''"
        >
          <div class="list-group__icon">
            <i class="fa fa-info"></i>
          </div>
          <p class="list-group__label">Info</p>
        </div>
      </div>
    </div>
    <div class="display-area">
      <img class="header-image" src="@/assets/images/covid.png" alt="Covid 19" />
      <transition name="component-fade" mode="out-in">
        <component :is="component"></component>
      </transition>
    </div>
    <div class="covid__test">
      <router-link to="/covid19" class="nurse__avatar">
        <i class="fa fa-user-md" aria-hidden="true"></i>
        <span>Get Tested</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Covid19 from "@/components/Dashboard/Covid19";
import Main from "@/components/Dashboard/Main";
import Imp from "@/components/Dashboard/Imp";
import Hospital from "@/components/Dashboard/HospitalInfo";
import About from "@/components/Dashboard/About";
import Map from "@/components/Dashboard/Map/MapContainer";

export default {
  name: "Dashboard",
  components: {
    Main,
    Imp,
    Hospital,
    Covid19,
    About,
    Map
  },
  data() {
    return {
      component: "Main",
      country: ""
    };
  },
  methods: {
    setComponent: function(event, component) {
      this.component = component;
    }
  },
  created() {
    this.country = localStorage.getItem("countryName");
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
