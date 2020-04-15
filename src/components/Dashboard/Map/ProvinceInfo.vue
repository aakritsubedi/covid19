<template>
  <div id="map-hover-info" class="popup-menu">
    <div class="data-group">
      <p class="label">Province</p>
      <p class="data">{{ name }}</p>
    </div>
    <div class="body">
      <div class="data-group">
        <p class="label">Confirmed</p>
        <p class="data">00000</p>
      </div>
      <div class="data-group">
        <p class="label">Recovered</p>
        <p class="data">00000</p>
      </div>
      <div class="data-group">
        <p class="label">Deaths</p>
        <p class="data">00000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProvinceInfo",
  props: ['name']
};
</script>

<style scoped>
path.active {
  fill: green;
}

path {
  cursor: pointer;
}

#map-hover-info {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.popup-menu {
  background-color: white;
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
  color: #8a8a8a;
  font-size: 13px;
}

.popup-menu .data {
  color: #424242;
  font-size: 17px;
}
/*# sourceMappingURL=style.css.map */
</style>