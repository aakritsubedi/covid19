<template>
  <div style="width:80%; margin:0 auto;">
    <div class="newrow country-select mt-5">
      <div class="col-xs-12">
        <input type="text" class="form-control" placeholder="Hospital Name" v-model="search" />
      </div>
    </div>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>Hospital Info</th>
          <th>Address</th>
          <th>Contact No.</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hospital, index) in filterHospital" :key="index">
          <td>
            <ul class="hospital-list">
              <li>{{ hospital.name }}</li>
              <li>{{ hospital.timing }}</li>
            </ul>
          </td>
          <td>
            <ul class="hospital-list">
              <li>{{ hospital.address }}</li>
              <li>{{ hospital.province }}</li>
            </ul>
          </td>
          <td>{{ hospital.phone_no}}</td>
          <td>
            <ul class="hospital-list">
              <li>
                <b>No. of beds:</b>
                {{ hospital.bed}}
              </li>
              <li>
                <b>Covid Checkup:</b>
                {{hospital.covid19}}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GetTested",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    ...mapActions(["getHospitals"])
  },
  async created() {
    await this.getHospitals();
    console.log(this.hospitals);
    
  },
  computed: {
    ...mapGetters(["hospitals"]),
    filterHospital: function() {
      return this.hospitals.filter(hospital => {
        return hospital.name.match(this.search);
      });
    }
  }
};
</script>

