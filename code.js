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

  var shuffledQuestion, currentQuestionIndex

  var StartButton = document.getElementById('start-btn')
  var nextButton = document.getElementById('next-btn')
  var questionContainerElement = document.getElementById('question-Container')
  var questionElement = document.getElementById('question')
  var answerButtonsElement = document.getElementById('answer-buttons')

  StartButton.addEventListener("click", startGame)
  nextButton.addEventListener("click", () => {
      currentQuestionIndex++
      setNextQuestion()
  })

function startGame(){
 console.log("start")
 StartButton.classList.add('hide')
 shuffledQuestion = questions.sort(() => Math.random() - .5)
 currentQuestionIndex = 0
 questionContainerElement.classList.remove('hide')
 setNextQuestion()
}



function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])
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
        answerButtonsElement.appendChild(button)
    })
}
// cant make buttons reset
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children). forEach(button=> {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestion.length > currentQuestionIndex +1 ) {
        nextButton.classList.remove('hide')
    } else {
        startGame.innerText = "Restart"
        StartButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}
