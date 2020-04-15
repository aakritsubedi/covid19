<template>
  <div>
    <Nepal />
    <Info name="One" />
  </div>
</template>

<script>
import Nepal from "./Map";
import Info from "./ProvinceInfo";

export default {
  name: "Map",
  components: { Nepal, Info }
};
</script>