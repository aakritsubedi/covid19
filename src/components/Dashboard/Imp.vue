<template>
  <div class="container text-left" style="overflow:hidden">
    <h3 class="heading">Important Contact Point</h3>
    <div class="row">
      <div class="col-md-12">
        <ul class="imp-contact">
          <li>LP Gas</li>
          <table class="table">
            <tbody>
              <tr><td>Hotline</td> <td>1146</td></tr>
              <tr><td>Toll Free</td> <td>16600110028</td></tr>
              <tr><td>Distribution List</td> <td><a
                  href="@/assets/files/LPG Gas Distribution list for 3rd April 2020.pdf"
                  target="_blank"
                >Click here</a></td></tr>
            </tbody>
          </table>
          <li>Drinking Water</li>
          <table class="table">
            <tbody>
              <tr v-for="(info, key) in drinkingWater" :key="key">
                <td>{{ info.name }}</td>
                <td>{{ info.contactNo }}</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Online shopping platforms offering deliveries of essential goods during the lockdown</h3>
        <ul class="imp-contact">
          <li>Groceries</li>
          <table class="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Minimum Order Value</th>
                <th>Link</th>
                <th width="25%">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(info, key) in groceries" :key="key">
                <td>{{ info.name }}</td>
                <td>{{ info.minimumOrder | formatRs }}</td>
                <td>
                  <a :href="info.link" target="_blank">website</a>
                </td>
                <td>{{ info.contactNo || '-' }}</td>
              </tr>
            </tbody>
          </table>
          <li>Fruits and Vegetables</li>
          <table class="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Minimum Order Value</th>
                <th>Link</th>
                <th width="25%">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(info, key) in foodAndVeg" :key="key">
                <td>{{ info.name }}</td>
                <td>{{ info.minimumOrder | formatRs }}</td>
                <td>
                  <a :href="info.link" target="_blank">website</a>
                </td>
                <td>{{ info.contactNo || '-' }}</td>
              </tr>
            </tbody>
          </table>
          <li>Medicinal supplies</li>
          <table class="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Link</th>
                <th width="25%">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(info, key) in medical" :key="key">
                <td>{{ info.name }}</td>
                <td>
                  <a :href="info.link" target="_blank">website</a>
                </td>
                <td>{{ info.contactNo || '-' }}</td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  drinkingWater,
  groceries,
  foodAndVeg,
  medical
} from "@/constants/impContact.js";

export default {
  name: "Imp",
  data() {
    return {
      drinkingWater: drinkingWater,
      groceries: groceries,
      foodAndVeg: foodAndVeg,
      medical: medical
    };
  },
  filters: {
    formatRs: function(value) {
      return value
        ? "Rs. " + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
        : "N/A";
    }
  }
};
</script>
