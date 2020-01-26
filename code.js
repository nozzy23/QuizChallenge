var questions = [
    {
      title: "The Efile Tower is Located in which country?",
      choices: [
          {text: "France", correct: true},
          {text: "Germany", correct: false},
          {text: "Spain",correct: false},
          {text: "Italy", correct:false}
        ]
    },
    {
      title: "Which Countries flag has red and yellow in it?",
      choices: [
          {text: "Italy", correct: false},
          {text: "Netherlands", correct: false},
          {text: "Spain", correct: true}, 
          {text: "England", correct:false}
        ]
    },
    {
        title: "In which Country can you find the Colosseum?",
        choices: [
            {text: "Ireland", correct:false},
            {text: "Netherlands", correct:false},
            {text: "Italy", correct:true},
            {text: "Greece", correct:false}
        ]
      },
      {
        title: "What Is the Captial of Germany?",
        choices: [
            {text: "Berlin", correct:true},
            {text: "Munich", correct:false},
            {text: "Hamburg", correct:false},
            {text: "Frankfurt", correct:false}
        ]

      },
      {
        title: "Which Countries flag has blue and red in it?",
        choices: [
            {text: "Italy", correct:false},
            {text: "Greece", correct:false},
            {text: "Spain", correct:false},
            {text: "England", correct:true}
        ]
      }
    
  ];

  var shuffeledQuestion, currentQuestionIndex

  var StartButton = document.getElementById('start-btn')
  var questionContainerElement = document.getElementById('question-Container')
  var questionElement = document.getElementById('question')
  var answerButtons = document.getElementById('answer-buttons')

  StartButton.addEventListener("click", startGame)

function startGame(){
 console.log("start")
 StartButton.classList.add('hide')
 shuffeledQuestion = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffeledQuestion[currentQuestionIndex])
}

function showQuestion(questions) {
    questionElement.innerText = questions.title
    questions.choices.forEach(choices => {
        var button = document.createElement('button')
        button.innerText = choices.text
        button.classList.add('btn')
        if (choices.correct) {
            button.dataset.correct = choices.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })
}

function selectAnswer(){

}
