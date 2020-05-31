<template>
  <div class="covid-container ">
    <div class="covid__header">
      <router-link to="/" style="color:white;" class="covid__back">
        <i class="fa fa-chevron-left" aria-hidden="true"></i> Back</router-link
      >
      <h1>Check your risk for COVID‑19</h1>
    </div>

    <div class="d-flex f-j-center">
      <div class="col-lg-5" :class="result != 0 ? 'col-lg-9' : ''">
        <div class="covid__body">
          <div class="first-scene" v-if="!tempStatus">
            <p class="label">
              Based on best clinical practices, CDC guidelines, illness severity
              and risk factors like age and pre-existing conditions.
            </p>
            <div class="covid-btn" @click="changeScene()">Get Started</div>
          </div>
          <div class="covid-question" v-if="tempStatus && result === 0">
            <div class="title">
              {{ question.question }}
            </div>
            <div class="options">
              <li
                class="options__item"
                :class="opt.selected ? `options__item--active` : ``"
                v-for="(opt, key) in question.options"
                :key="key"
                @click="() => selectHandler(key)"
              >
                {{ opt.value }}
              </li>
            </div>
            <div class="footer">
              <div class="footer-btn active" @click="backHandler()">Back</div>
              <div class="footer-btn active" @click="nextHandler()">Next</div>
            </div>
          </div>
          <div class="covid-result" v-if="result !== 0">
            <TestResult :questions="questions" :result="result" />
          </div>
        </div>
      </div>
    </div>
    <div class="covid__footer" v-if="result !== 0 || !tempStatus">
      <p><b>1115</b>(बिहान ६ देखि राती १० सम्म) <b>1133</b>(चौबीसै घण्टा)</p>
      <p>
        <b>9851-255-834</b>, <b>9851-255-837 </b>, <b>9851-255-839 </b>(बिहान ८
        - बेलुका ८)
      </p>
    </div>
  </div>
</template>

<script>
import { questions } from '@/constants/covidQue.js'
import TestResult from '@/components/TestResult'

export default {
  name: 'Covid19',
  components: {
    TestResult,
  },
  data() {
    return {
      questions: [],
      selectedIndex: 0,
      finished: false,
      result: 0,
      tempStatus: false,
    }
  },
  methods: {
    changeScene: function() {
      this.tempStatus = true
    },
    init: function() {
      this.questions = questions
    },
    backHandler: function() {
      this.finished = false
      if (this.selectedIndex > 0) {
        this.selectedIndex -= 1
      }
    },
    computeResult: function() {
      var result = 0
      this.questions.forEach((item) => {
        var total = 0
        item.options.forEach((opt) => {
          if (opt.selected) {
            total += opt.points
          }
        })
        result += total * item.factor
      })
      this.result = result
    },
    selectHandler: function(id) {
      this.question.options[id].selected = !this.question.options[id].selected
    },
    nextHandler: function() {
      if (this.finished == true) {
        this.computeResult()
        return
      }

      if (this.selectedIndex < questions.length) {
        this.selectedIndex += 1
        if (this.selectedIndex == questions.length - 1) {
          this.finished = true
        }
      }
    },
  },
  computed: {
    question: function() {
      return this.questions[this.selectedIndex]
    },
  },
  created() {
    this.init()
  },
  beforeDestroy() {
    this.questions.forEach(que => {
      que.options.forEach(opt => {
        opt.selected = false
      })
    })
  }
}
</script>

<style>
.test-container {
  display: flex;
  flex-direction: column;
  background-image: url('../assets/images/covidTest.png');
  background-position: right;
  height: 500px;
  width: 80%;
  background-repeat: no-repeat;
  border: 1px solid #000;
  margin: 0px auto;
  padding: 5px 10px;
}
</style>
