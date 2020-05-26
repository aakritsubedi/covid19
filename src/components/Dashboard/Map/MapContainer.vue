<template>
  <div class="container">
    <Nepal />
    <NepalSummary :nepalInfo="nepalInfo" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Nepal from "./Map";
import NepalSummary from "../Nepal/NepalSummaryTable";

export default {
  name: "Map",
  components: { Nepal, NepalSummary },
  methods: {
    ...mapActions(["getNepalInfo"])
  },
  created() {
    this.getNepalInfo();
  },
  computed: {
    ...mapGetters(["nepalInfo"])
  }
};
</script>