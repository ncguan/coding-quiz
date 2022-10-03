var startQuiz = document.getElementById('start');
var startSwitch = document.querySelector('.start-page');
var quizSwitch = document.querySelector('.quiz-page');
var timeEl = document.getElementById('countdown');
var question = document.getElementById('question');
var choice1 = document.getElementById('ans1');
var choice2 = document.getElementById('ans2');
var choice3 = document.getElementById('ans3');
var choice4 = document.getElementById('ans4');

var q1 = {
    question: "Arrays in JavaScript can be used to store __________.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correct: "all of the above"
}
var q2 = {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correct: "alerts"
}
var q3 = {
    question: "The condition in an if/else statement is enclosed with __________.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correct: "parenthesis"
}

var arrQuestions = [q1, q2, q3];

quizSwitch.style.display = 'none';

startQuiz.addEventListener("click", function(){
    countdown();
    startSwitch.style.display = 'none';
    quizSwitch.style.display = 'initial';
    displayQuestion();
});

function countdown(){
    var secondsLeft = 76;
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;
        if(secondsLeft===0){
            clearInterval(timerInterval);
        }
    },1000);
}

function displayQuestion(){
    var randIndex = Math.floor(Math.random() * arrQuestions.length);
    question.textContent = arrQuestions[randIndex].question;
    choice1.textContent = arrQuestions[randIndex].choices[0];
    choice2.textContent = arrQuestions[randIndex].choices[1];
    choice3.textContent = arrQuestions[randIndex].choices[2];
    choice4.textContent = arrQuestions[randIndex].choices[3];
}