<template>
  <div class="covid-container ">
    <div class="covid__header">
      <h1>Check your risk for COVID‑19</h1>
    </div>

    <div class="d-flex f-j-center">
      <div class="col-lg-5">
        <div class="covid__body">
          <div class="first-scene" v-if="!tempStatus">
            <p class="label">
              Based on best clinical practices, CDC guidelines, illness severity
              and risk factors like age and pre-existing conditions.
            </p>
            <div class="covid-btn" @click="changeScene()">Get Started</div>
          </div>
          <div class="covid-question" v-if="tempStatus">
            <div class="title">
              Have you recently started experiencing any of these symptoms?
            </div>
            <div class="options">
              <li class="options__item">Fever or chills</li>
              <li class="options__item options__item--active">
                Mild or Moderate difficulty breathing
              </li>
              <li class="options__item options__item--active">
                ew or worsening cough
              </li>
              <li class="options__item options__item--active">sore throat</li>
              <li class="options__item">None of the above</li>
              <li class="options__item">None of the above</li>
              <li class="options__item">None of the above</li>

              <li class="options__item">
                In the last 14 days, what is your exposure to others who are
                known to have COVID‑19
              </li>
            </div>
            <div class="footer">
              <div class="footer-btn inactive">Back</div>
              <div class="footer-btn active">Next</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { questions } from '@/constants/covidQue.js'

export default {
  name: 'Covid19',
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
      console.log('chagnes')
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
      console.log(this.result)
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
