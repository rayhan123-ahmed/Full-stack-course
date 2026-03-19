// Get all required DOM elements for quiz functionality
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const qustionContainer = document.getElementById("qustion-container");
const qustionText = document.getElementById("qustion-text");
const choicesList = document.getElementById("choices-list");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");

// Store all quiz questions, choices, and correct answers
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
];

// Create a empty veriable
let currentQuestionIndex = 0
let score = 0

// add EventListener to the start button
startBtn.addEventListener("click", startQuiz);
// next button
nextBtn.addEventListener('click',()=>{
   currentQuestionIndex++
   if (currentQuestionIndex < questions.length) {
      showQuestion()
   }else{
      showResult()
   }
})
// restart button
restartBtn.addEventListener('click',()=>{
    currentQuestionIndex = 0;
    score = 0;
    startQuiz()
})

// start quiz funtion
function startQuiz() {
  startBtn.classList.add("hidden");
  resultContainer.classList.add('hidden');
  qustionContainer.classList.remove('hidden');
  showQuestion()
}
// create a function for Showing question on display 

function showQuestion() {
    nextBtn.classList.add('hidden');
    qustionText.innerText = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ''; //clear previous choices
    questions[currentQuestionIndex].choices.forEach(choice =>{
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click',() => selectAnswer(choice,li));
        choicesList.appendChild(li)
    })
}

// create a funtion for selecting the correct answer
function selectAnswer(choice,element) {
  const correctAnswer = questions[currentQuestionIndex].answer;

  // remove previous selection
  document.querySelectorAll("#choices-list li").forEach((li) => {
    li.classList.remove("selected");
  });

  // add selected style
  element.classList.add("selected");

  if (choice === correctAnswer) {
    score++;
  }
  nextBtn.classList.remove("hidden");
}

// create a funtion for shwoing result
function showResult() {
   qustionContainer.classList.add('hidden');
   resultContainer.classList.remove('hidden');
   scoreDisplay.innerHTML = `${score} out of ${questions.length}`
}