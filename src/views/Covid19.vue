<template>
  <div class="container-fluid" style="background: #f4f4f4; height:100vh;">
    <img src="@/assets/images/covid.png" alt />
    <div class="test-container">
      <h2>
        COVID-19
        <br />Screening Tool
      </h2>
      <!-- <p>This tool can help you understand what to do next about COVID-19.</p>
      <p>Let’s all look out for each other by knowing our status, trying not to infect others, and reserving care for those in need.</p>

      <button>Start Screening</button>-->

      <div>
        <div>{{question.question}}</div>
        <ul id="qlist">
          <li v-for="(option, key) in question.options" :key="(key+1) * (Math.random() * 10 + 125)">
            {{option.value}}
            <input
              type="checkbox"
              :id="(key+1) * (Math.random() * 10 + 125)"
              v-model="option.selected"
            />
          </li>
        </ul>
      </div>
      <button @click="nextHandler()">next</button>
      <button @click="backHandler()">back</button>
    </div>
  </div>
</template>

<script>
import { questions } from "@/constants/covidQue.js";

export default {
  name: "Covid19",
  data() {
    return {
      questions: [],
      selectedIndex: 0,
      finished: false,
      result:0
    };
  },
  methods: {
    init: function() {
      this.questions = questions;
    },
    backHandler: function() {
      this.finished = false;
      if (this.selectedIndex > 0) {
        this.selectedIndex -= 1;
      }
    },
    computeResult: function(){
      var result=0;
      this.questions.forEach((item) => {
        var total=0
        item.options.forEach(opt => {
          if (opt.selected){
            total += opt.points
          }
        })
        result += total * item.factor
      });
      this.result = result
      console.log(this.result)
    },
    nextHandler: function() {
      if (this.finished == true) {
        this.computeResult()
        return;
      }

      if (this.selectedIndex < questions.length) {
        this.selectedIndex += 1;
        if (this.selectedIndex == questions.length - 1) {
          this.finished = true;
        }
      }
    }
  },
  computed: {
    question: function() {
      return this.questions[this.selectedIndex];
    }
  },
  created() {
    this.init();
  }
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