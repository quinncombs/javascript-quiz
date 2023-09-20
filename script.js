const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const questionBox = document.getElementById("questionBox");
var answerBtnEl = document.getElementById("answerBtn");
var quizContainer = document.getElementById('quiz');
var timeEl = document.querySelector("#timeEl");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var questionEl = document.querySelector("#question")
var submitBtn = document.querySelector("#submit-score");
let shuffledQuestions, currentQuestionIndex;

var ans1Btn = document.querySelector("#answer1");
var ans2Btn = document.querySelector("#answer2");
var ans3Btn = document.querySelector("#answer3");
var ans4Btn = document.querySelector("#answer4");


let secondsLeft = 60;
currentScore = 0;

//startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", test);
var testEl = document.getElementById("test")
function test() {
    console.log("test")
    testEl.classList.remove("hide");
}

    //make an array out of user's answers
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: "strings", 
            b: "booleans", 
            c: "alerts", 
            d: "numbers" },
        correctAnswer: "b"
    },
    {
        question: " The condition in an if/else statement is enclosed within ...",
        answers: {
            a: "quotes",
            b: "curly brackets", 
            c: "parentheses", 
            d: "all of the above" },
        correct: "a"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            a: "numbers and strings", 
            b: "other arrays", 
            c: "booleans", 
            d: "all of the above"},
        correct: "c"
    },
    {
        question: "String values must be enclosed within this when being assigned to variables.",
        answers: {
            a: "commas", 
            b: "curly brackets", 
            c: "quotes", 
            d: "parentheses"},
        correct: "b"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "Javascript", 
            b: "terminal/BASH", 
            c: "for loops", 
            d: "console.log"},
        correct: "c"
    },

]

   var opener = document.querySelector(".opener");

function startQuiz() {
    console.log("Started quiz");
    opener.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    questionBox.classList.remove("hide");
    currentQuestionIndex = 0;
    nextQuestion();

     let timerInterval = setInterval(function () {
         secondsLeft--;
         timeEl.textContent = secondsLeft
         if (secondsLeft === 0) {
             clearInterval(timerInterval);
             alert("Time is up!");
         }
     }, 1000);
}

function nextQuestion() {
    console.log("Next question")
    defaultState()
    showQuestion(shuffledQuestions(currentQuestionIndex))
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
            if (answer === correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            answerBtnEl.appendChild(button);
    })
}

function defaultState() {
    nextBtn.classList.add("hide");
    while (answerBtnEl.firstChild){
        answerBtnEl.removeChild;
        (answerBtnEl.firstChild);
    }

}

function chooseAnswer(){
    const chosenBtn = e.target;
    const correct = chosenBtn.dataset.correct
    selectStatusClass(document.body, correct)
}

function checkAnswer(element, correct) {
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("incorrect");
    }
}

//add locally
function addScore() {
    currentScore.innerHTML = "Your score is " + userScore;
    submitBtn.hidden = true;

    submitBtn.addEventListener("click", () => {
        localStorage.setItem("userScore", JSON.stringify(userScore));
    })
}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

