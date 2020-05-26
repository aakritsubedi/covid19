<template>
  <div>
      <h2>Province wise data</h2>
      <table class="table">
        <tr>
          <th>Province</th>
          <th>Total</th>
          <th>Cases</th>
          <th>Recovered</th>
          <th>Deaths</th>
        </tr>
        <tr v-for="(info, key) in provinceInfo" :key="key">
          <td>Province-{{ info.province }}</td>
          <td>{{ info.total }}</td>
          <td>{{ info.active }}</td>
          <td>{{ info.recovered }}</td>
          <td>{{ info.deaths }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
export default {
  name: "ProvinceTable",
  props: ['provinceInfo'],
  created() {
    console.log(this.provinceInfo);
  }
}
</script>