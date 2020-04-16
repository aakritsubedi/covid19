<template>
  <div>
    <div v-show="name" id="map-hover-info" class="popup-menu">
      <div style="margin-bottom:10px">
        <p class="label">Province</p>
        <p class="data text-capitalize">{{ name }}</p>
      </div>
      <div>
        <p class="label">Total No. of Hospitals</p>
        <p class="data">{{ count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProvinceInfo',
  props: ['name', 'position'],
  data() {
    return {
      count: 0,
      hospitalData: [
        {
          province1: {
            total: 52,
          },
          province2: {
            total: 20,
          },
          bagmati: {
            total: 242,
          },
          gandaki: {
            total: 46,
          },
          province5: {
            total: 33,
          },
          karnali: {
            total: 7,
          },
          sudurpashchim: {
            total: 24,
          },
        },
      ],
    }
  },
  mounted() {
    const map = document.querySelector('#map-hover-info')
    map.style.display = 'none'
  },
  updated() {
    this.count = this.name ? this.hospitalData[0][this.name].total : 0
    const map = document.querySelector('#map-hover-info')
    if (this.name !== null) {
      map.style.display = 'block'
    }

    map.style.top = this.position.y - 150 + 'px'
    map.style.left = this.position.x - 50 + 'px'
  },
}
</script>

<style scoped>
#map-hover-info {
  position: absolute;
  border-radius: 6px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.popup-menu {
  background-color: white;
  -webkit-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 15px 20px;
  color: #3a3a3a;
  text-align: left;
}

.popup-menu p {
  margin: 0px;
}

.popup-menu .label {
  font-size: 13px;
  color: #7c7c7c;
}

.popup-menu .data {
  font-size: 19px;
  font-weight: 500;
}
.hospital-info {
  padding: 10px;
  width: 25%;
  margin-top: -200px;
}
/*# sourceMappingURL=style.css.map */
</style>
