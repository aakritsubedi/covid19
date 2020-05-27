<template>
  <div>
    <h2>District wise report</h2>
    <table class="table">
      <tr>
        <th width="20%">District</th>
        <th width="80%">Info</th>
      </tr>
      <tr v-for="(item, index) in districtData" :key="index">
        <td>
          {{item.title}}
          <br>
          Province {{item.province}}
        </td>
        <td>
          <div v-if="item.covid_cases.length > 0">
          <ul class="Summary">
            <li >Age: {{  item.summary.minAge}} - {{item.summary.maxAge}}</li>
            <li>Active: {{item.summary.active}}</li>
            <li>Recovered: {{item.summary.inactive}}</li>
            <li>Male,Female: {{item.summary.male}}, {{item.summary.female}}</li>
          </ul>
          </div>
          <div v-else>
            No info Available.
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  name: "ProvinceTable",
  props: ["districtInfo"],
  computed:{
    ...mapGetters(['districtData'])
  }
};
</script>