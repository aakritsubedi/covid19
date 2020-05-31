<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        
        <h3>Your Next Steps, based on your answers</h3>
        <div v-for="(detail, key) in docResponse.detailResponse" :key="key">
          <h4><span class="badge badge-dark">{{key+1}}</span> {{detail.title}}</h4>
          <p>{{detail.description}}</p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="well">
          <h4>{{docResponse.title}}</h4>
          <p>{{docResponse.description}}</p>
        </div>
        <h4>Your response: </h4>
        <ul>
          <li v-for="(opt, key) in selectedOptions" :key="key">{{opt}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { detailResponse } from "@/constants/detailResponse.js";

export default {
  name: "TestResult",
  props: ["questions", "result"],
  computed: {
    selectedOptions: function() {
      let myResponses = [];
      this.questions.forEach(que => {
        que.options.forEach(opt => {
          if (opt.selected) {
            myResponses.push(opt.value);
          }
        });
      });
      return myResponses.slice(0,6);
    },
    docResponse: function() {
      switch (this.result) {
        case this.result < 100:
          return {
            title: "No Test Needed At This Time",
            description:
              "As of now, your answers suggest you do not need to get tested for COVID‑19. If anything changes, take the questionnaire again.",
            detailResponse: detailResponse.level0
          };
        case this.result > 100 || this.result < 150:
          return {
            title: "You Should Self-Quarantine",
            description:
              "Based on your answers, you should stay at your facility and limit your contact with others outside the facility.",
            detailResponse: detailResponse.level1
          };
        case this.result > 150:
          return {
            title: "Contact your health service provider",
            description:
              "Based on your answers, you should get tested as soon as possible. Call emergency contact no.",
            detailResponse: detailResponse.level2
          };
        default:
          return {
            title: "You Should Practice Physical Distancing",
            description:
              "Help stop the spread of COVID‑19. When outside the home, stay at least six feet away from other people and avoid groups.",
            detailResponse: detailResponse.level0
          };
      }
    }
  }
};
</script>