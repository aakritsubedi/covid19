<template>
  <div v-show="name" id="map-hover-info" class="popup-menu">
    <div  class="data-group">
      <p class="label">Province</p>
      <p class="data text-capitalize">{{ name }}</p>
    </div>
    <div class="body">
      <div class="data-group">
        <p class="label">Total No. of Hospitals</p>
        <p class="data">{{ hospitalData[0][name].total }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProvinceInfo",
  props: ["name", "position"],
  data() {
    return {
      hospitalData: [
        {
          province1: { total: 52 },
          province2: { total: 20 },
          bagmati: { total: 242 },
          gandaki: { total: 46 },
          province5: { total: 33 },
          karnali: { total: 7 },
          sudurpashchim: { total: 24 }
        }
      ]
    };
  },
  mounted() {
    const map = document.querySelector("#map-hover-info");
    map.style.display = "none";
  },
  updated() {
    const map = document.querySelector("#map-hover-info");
    if(this.map !== null) {
      map.style.display = "block";
    }

    map.style.top = this.position.y-150 +"px";
    map.style.left = this.position.x -50  + "px";
  }
};
</script>

<style scoped>
#map-hover-info {
  position: absolute;
  border-radius: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}

.popup-menu {
  background-color: #2c3335;
  -webkit-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 10px 15px;
}

.popup-menu p {
  margin: 0px;
}

.popup-menu .body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.popup-menu .body .data-group {
  margin-right: 15px;
  margin-bottom: 0px;
}

.popup-menu .data-group {
  margin-bottom: 20px;
}

.popup-menu .label {
  color: #fff;
  font-size: 13px;
}

.popup-menu .data {
  color: #fff;
  font-size: 17px;
}
/*# sourceMappingURL=style.css.map */
</style>