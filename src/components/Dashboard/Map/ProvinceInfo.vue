<template>
  <div>
    <div v-show="name" id="map-hover-info" class="popup-menu">
      <div class="data-group">
        <p class="label">Province</p>
        <p class="data text-capitalize">{{ name }}</p>
      </div>
      <div class="body">
        <div class="data-group">
          <p class="label">Total No. of Hospitals</p>
          <p class="data">{{ count }}</p>
        </div>
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
      count: 0,
      hospitalData: [
        {
          province1: {
            total: 52,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          },
          province2: {
            total: 20,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          },
          bagmati: {
            total: 242,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          },
          gandaki: {
            total: 46,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          },
          province5: {
            total: 33,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          },
          karnali: {
            total: 7,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          },
          sudurpashchim: {
            total: 24,
            hospital: [
              { name: "Mechi Zone Hospital", contact: "023-520172" },
              { name: "Koshi Zone Hospital", contact: "	021-570103" },
              { name: "Birat Medical College", contact: "021-421063" },
              { name: "Biratnagar Hospital", contact: "021-571042" }
            ]
          }
        }
      ]
    };
  },
  mounted() {
    const map = document.querySelector("#map-hover-info");
    map.style.display = "none";
  },
  beforeUpdate() {
    this.hospitals = [];
    this.count = 0;
  },
  updated() {
    this.count = this.name ? this.hospitalData[0][this.name].total : 0;
    const map = document.querySelector("#map-hover-info");
    if (this.name !== null) {
      map.style.display = "block";
    }

    map.style.top = this.position.y - 150 + "px";
    map.style.left = this.position.x - 50 + "px";
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
.hospital-info {
  padding: 10px;
  width: 25%;
  margin-top: -200px;
}
/*# sourceMappingURL=style.css.map */
</style>