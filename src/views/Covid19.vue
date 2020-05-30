<template>
  <div class="container-fluid" style="background: #f4f4f4; height:100vh;">
    <img src="@/assets/images/covid.png" alt="">
    <div class="test-container">
      <h2>
        COVID-19
        <br />Screening Tool
      </h2>
      <p>This tool can help you understand what to do next about COVID-19.</p>
      <p>Let’s all look out for each other by knowing our status, trying not to infect others, and reserving care for those in need.</p>

      <button>Start Screening</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Covid19"
};
</script>

<style>
.test-container {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/images/covidTest.png");
  background-position: right;
  height: 500px;
  width: 80%;
  background-repeat: no-repeat;
  border: 1px solid #000;
  margin: 0px auto;
  padding: 5px 10px;
}
</style>