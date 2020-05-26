<template>
  <div>
    <h3>Nepal Summary</h3>
    <table class="table">
      <tr>
        <th v-for="(info, index) in nepalInfo" :key="index">{{index}} {{info}}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NepalSummary',
  props: ['nepalInfo']
}
</script>