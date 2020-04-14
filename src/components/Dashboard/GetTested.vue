<template>
  <div style="height:85%;overflow-y:scroll;" class="text-left">
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Hospital Info</th>
          <th>Contact No.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hospital in hospitals" :key="hospital">
          <td>
            <ul class="hospital-list">
            <li>{{ hospital.name }}</li>
            <li>{{ hospital.timing }}</li>
          </ul>
          </td>
          <td>
            {{ hospital.contactNo}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GetTested',
  data() {
    return {
      hospitals: [
        {name: 'Sukraraj Tropical And Infectious Disease Hospital', timing: '8 AM - 3 PM(Sunday - Friday)', contactNo: '01-4253395 , 01-4253396' },
        {name: 'Patan Hospital', timing: '24Hrs (Everyday)', contactNo: '01-5522295'}
      ]
    }
  }
}
</script>