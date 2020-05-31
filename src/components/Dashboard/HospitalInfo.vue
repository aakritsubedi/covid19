<template>
  <div style="width:90%; margin:0 auto;">
    <div class="newrow country-select mt-5">
      <div class="col-xs-12">
        <input
          type="text"
          class="form-control"
          placeholder="Hospital Name"
          v-model="search"
        />
      </div>
    </div>
      <div style="overflow-x:auto;">
      <table class="table mt-3">
        <thead>
          <tr>
            <th width="40%">Hospital Info</th>
            <th width="20%">Contact Info.</th>
            <th width="40%">Info</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hospital, index) in filterHospital" :key="index">
            <td>
              <div class="hospital-list">
                <li>{{ hospital.name }}</li>
                <li>
                  <b>{{ hospital.address }}</b> Province-{{ hospital.state }}
                </li>
              </div>
            </td>
            <td>
              <div class="hospital-list">
                <li>{{ hospital.phone || '-' }}</li>
                <li v-if="hospital.contact_person">
                  {{ hospital.contact_person }},
                  {{ hospital.contact_person_number }}
                </li>
              </div>
            </td>
            <td>
              <div class="hospital-list">
                <li>No. of beds: {{ hospital.capacity.beds || 0 }}</li>
                <li class="text-capitalize">
                  Vantilator: {{ hospital.capacity.ventilators || 'no' }}
                </li>
                <li>
                  Isolation Beds: {{ hospital.capacity.isolation_beds || '-' }}
                </li>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NepalHospital',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    ...mapActions(['getNepalHospital']),
  },
  created() {
    this.getNepalHospital()
  },
  computed: {
    ...mapGetters(['nepalHospital']),
    filterHospital: function() {
      return this.nepalHospital.filter((hospital) => {
        let keyword = this.search.toUpperCase()
        return hospital.name.match(keyword)
      })
    },
  },
}
</script>
