export const questions = [
    {
        question: "Have you recently started experiencing any of these symptoms?",
        factor: 20,
        options: [
            {
                value: "Fever or chills",
                points: 1,
                selected: false
            },
            {
                value: "Mild or Moderate difficulty breathing",
                points: 1,
                selected: false

            },
            {
                value: "New or worsening cough",
                points: 1,
                selected: false
            },
            {
                value: "sore throat",
                points: 0.5,
                selected: false
            },
            {
                value: "None of the above",
                points: 0,
                selected: false
            }
        ]
    },
    {
        question: "Do any of these apply to you ?",
        factor: 50,
        options: [
            {
                value: "Moderate to severe asthma or chronic lung disease",
                points: 1,
                selected: false
            },
            {
                value: "Cancer treatment or medicines causing immune suppression",
                points: 1,
                selected: false
            },
            {
                value: "Inherited immune system deficiencies or HIV",
                points: 1,
                selected: false
            },
            {
                value: "Diabetes with complications",
                points: 1,
                selected: false
            },
            {
                value: "Kidney failure that needs dialysis",
                points: 1,
                selected: false
            },
            {
                value: "Pregnancy",
                points: 1,
                selected: false
            },
            {
                value: "Diabetes with complications",
                points: 1,
                selected: false
            },
            {
                value: "None of the above",
                points: 0,
                selected: false
            }
        ]
    },
    {
        question: "In the last 14 days, have you traveled internationally?",
        factor: 20,
        options: [
            {
                value: "I have travelled Internationally",
                points: 1,
                selected: false
            },
            {
                value: "I have not travelled Internationally",
                points: 0.5,
                selected: false
            },

        ]
    },
    {
        question: "Do you work in a medical facility?",
        factor: 30,
        options: [
            {
                value: "I have worked in a hospital or other facility in the past 14 days",
                points: 1,
                selected: false
            },
            {
                value: "I plan to work in a hospital or other facility in the next 14 days",
                points: 0.2,
                selected: false
            },
            {
                value: "I don't work or plan to work in medical facility",
                points: 0,
                selected: false
            },

        ]
    },
    {
        question: "In the last 14 days, have you been in an area where COVID‑19 is widespread?",
        factor: 30,
        options: [
          { 
            value: "I live in area where COVID is wide spreaded",
            points: 1,
            selected: false
          },
          { 
            value: "I have visited area where COVID is wide spreaded",
            points: 0.5,
            selected: false
          },
          { 
            value: "I don't know",
            points: 0,
            selected: false
          },
          { 
            value: "None of the above",
            points: 0,
            selected: false
          }
        ]
      },
      {
        question: "In the last 14 days, what is your exposure to others who are known to have COVID‑19?",
        factor: 50,
        options: [
          { 
            value: "I live with someone who has covid",
            points: 1,
            selected: false
          },
          { 
            value: "I have close contact who has covid",
            points: 1,
            selected: false
          },
          {
            value: "I have been near to someone who has covid",
            points: 1,
            selected: false
          },
          {
            value: "I have no exposure",
            points: 0,
            selected: false
          }
        ]
      },
      {
        question: "Do you live in a long-term care facility?",
        factor: 20,
        options: [
          { 
            value: "I live in a long-term facility",
            points: 1,
            selected: false
          },
          {
            value: "I don't live in a long-term facility",
            points: 0,
            selected: false
          }
        ]
      }

]