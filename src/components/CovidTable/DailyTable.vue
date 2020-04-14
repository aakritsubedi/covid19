<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in informations" :key="info.deaths">
          <td>{{ info.date }}</td>
          <td>{{ info.confirmed }}</td>
          <td>{{ info.deaths }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: ["informations"]
};
</script>