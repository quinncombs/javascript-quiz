var startBtnEl = document.getElementById("startBtn");
var answerBtn = document.getElementById("answerBtn");
var quizContainer = document.getElementById('quiz');
var timeEl = document.querySelector("time");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var questionsEl = document.querySelector("#questions")
var submitBtn = document.querySelector("submit-score");

var ans1Btn = document.querySelector("#answer1");
var ans2Btn = document.querySelector("#answer2");
var ans3Btn = document.querySelector("#answer3");
var ans4Btn = document.querySelector("#answer4");


let secondsLeft = 60;
currentScore = 0;


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
        correctAnswer: "a"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: {
            a: "numbers and strings", 
            b: "other arrays", 
            c: "booleans", 
            d: "all of the above"},
        correctAnswer: "c"
    },
    {
        question: "String values must be enclosed within this when being assigned to variables.",
        answers: {
            a: "commas", 
            b: "curly brackets", 
            c: "quotes", 
            d: "parentheses"},
        correctAnswer: "b"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            a: "Javascript", 
            b: "terminal/BASH", 
            c: "for loops", 
            d: "console.log"},
        correctAnswer: "c"
    },

    addClickListener(document.querySelector("#nextQuestion"), handleNext)
]

function startTimer() {
    let timerInterval = setInterval(function () {
         secondsLeft--;
         secondsLeft.textContent = "Time:${secondsLeft}s";
         if (secondsLeft === 0) {
             clearInterval(timerInterval);
             alert("Time is up!");
         }
     }, 1000);
}

function startQuiz() {
    console.log("Started quiz");
    questionCount = 0;

    startTimer();
    setQuestion(questionCount)
}

function setQuestion(id) {
    if (id < questions.length) {
        questionsEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

function checkAnswers(event) {
    event.preventDefault();
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        textContent = "Wrong!";
    }
    if (questionCount , questions.length) {
        questionCount++
    }

    setQuestion(questionCount)
}

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

startBtnEl.addEventListener("click", startQuiz);