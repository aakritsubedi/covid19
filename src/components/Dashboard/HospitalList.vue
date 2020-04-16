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
          <th>Contact No.</th>
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
          <td>{{ hospital.contactNo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GetTested",
  data() {
    return {
      search: "",
      hospitals: [
        {
          name: "Sukraraj Tropical And Infectious Disease Hospital",
          timing: "8 AM - 3 PM(Sunday - Friday)",
          contactNo: "01-4253395 , 01-4253396"
        },
        {
          name: "Patan Hospital",
          timing: "24Hrs",
          contactNo: "01-5522295"
        },
        {
          name: "Nepal APF Hospital",
          timing: "24Hrs",
          contactNo: "01-4315224"
        },
        {
          name: "Bir Hospital",
          timing: "24Hrs",
          contactNo: "01-4221119"
        },
        {
          name: "National Ayurveda Research and Training Center",
          timing: "10 AM - 3 PM(Sunday - Friday)",
          contactNo: "01-4334973"
        },
        {
          name: "Birendra Sainik Hospital",
          timing: "8 AM - 5 PM(Sunday - Friday)",
          contactNo: "01-4271940"
        },
        {
          name: "Mechi Zonal Hospital",
          timing: "24Hrs",
          contactNo: "023-520172"
        },
        {
          name: "Udayapur District Hospital",
          timing: "24Hrs",
          contactNo: "035-420187"
        },
        {
          name: "Janakpur Zonal Hospital",
          timing: "24Hrs",
          contactNo: "041-520133 , 041-520033"
        },
        {
          name: "Bara District Hospital",
          timing: "12:00 AM – 11:59 PM",
          contactNo: "053-550012"
        },
        {
          name: "Bhaktapur Hospital",
          timing: "24Hrs",
          contactNo: "01-6610798"
        },
        {
          name: "Sindhuli Hospital",
          timing: "6 AM – 9 PM",
          contactNo: "047-520973"
        },
        {
          name: "Dhaulagiri Zonal Hospital",
          timing: "24Hrs",
          contactNo: "9851176425 , 068-520188"
        },
        {
          name: "Gorkha District Hospital",
          timing: "24Hrs",
          contactNo: "064-420208"
        },
        {
          name: "Lumbini Zonal Hospital",
          timing: "24Hrs",
          contactNo: "071-541400"
        },
        {
          name: "Tamghas Hospital",
          timing: "10 AM - 4 PM(Sunday - Friday)",
          contactNo: "079-520188"
        },
        {
          name: "Surkhet District Hospital",
          timing: "24Hrs",
          contactNo: "083-525417"
        },
        {
          name: "Dailekh District Hospital",
          timing: "8AM - 8PM",
          contactNo: "089-410185"
        },
        {
          name: "Seti Zonal Hospital",
          timing: "24Hrs",
          contactNo: "9841943586"
        },
        {
          name: "Mahakali Hospital",
          timing: "24Hrs",
          contactNo: "9843247009 , 099-521111"
        },
        {
          name: "",
          timing: "",
          contactNo: ""
        },
        {
          name: "",
          timing: "",
          contactNo: ""
        }
      ]
    };
  },
  computed: {
    filterHospital: function() {
      return this.hospitals.filter(hospital => {
        return hospital.name.match(this.search);
      });
    }
  }
};
</script>
