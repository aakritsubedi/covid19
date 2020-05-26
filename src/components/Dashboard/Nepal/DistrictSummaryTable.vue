<template>
  <div>
    <h2>District wise data</h2>
    <table class="table">
      <tr>
        <th width="20%">District</th>
        <th width="80%">Info</th>
      </tr>
      <tr>
        <td>
          Morang
          Province 2
        </td>
        <td>
          <ul class="hospital-list">
            <li>Age: [20-28]</li>
            <li>Active: 2</li>
            <li>Recovered: 1</li>
            <li>Male,Female: 5,6</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>
          Morang
          Province 2
        </td>
        <td>
          <ul class="hospital-list">
            <li>Age: [20-28]</li>
            <li>Active: 2</li>
            <li>Recovered: 1</li>
            <li>Male,Female: 5,6</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProvinceTable",
  props: ["districtInfo"]
};
</script>