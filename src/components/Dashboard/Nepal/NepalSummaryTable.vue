<template>
  <div class="nepal-summary-container">
    <h3>Nepal Summary</h3>
    <table class="table table-summary">
      <tr>
        <th v-for="(info, index) in nepalInfo" :key="index">
          <p class="label">
            {{index}}
            </p>
            <p class="data">
            {{info}}
            </p>
             
          
          </th>
      </tr>
    </table>

 

  </div>
  
</template>


<script>
export default {
  name: 'NepalSummary',
  props: ['nepalInfo'],
  
 created() {
    console.log(this.nepalInfo);
  }
}

</script>
