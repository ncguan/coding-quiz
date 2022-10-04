var startQuiz = document.getElementById('start');
var startSwitch = document.querySelector('.start-page');
var quizSwitch = document.querySelector('.quiz-page');
var timeEl = document.getElementById('countdown');
var question = document.getElementById('question');
var choice1 = document.getElementById('ans1');
var choice2 = document.getElementById('ans2');
var choice3 = document.getElementById('ans3');
var choice4 = document.getElementById('ans4');
var result = document.getElementById('result');
var doneSwitch = document.querySelector('.done-page');
var displayScore = document.getElementById('score');
var submit = document.getElementById('submit');
var scoreSwitch = document.querySelector('.score-page');
var scoreList = document.getElementById('scoreList');
var goBack = document.getElementById('back');
var clearScores = document.getElementById('clear');

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
var highscoreArr = [];
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("highscore");

quizSwitch.style.display = 'none';
doneSwitch.style.display = 'none';
scoreSwitch.style.display = 'none';

startQuiz.addEventListener("click", function(){
    var storedScores = JSON.parse(localStorage.getItem("storedValue"));
    if(storedScores !== null){
        highscoreArr = storedScores;
    }
    countdown();
    startSwitch.style.display = 'none';
    quizSwitch.style.display = 'initial';
    displayQuestion();
    quiz();
});

function renderList(){
    var storedScores = JSON.parse(localStorage.getItem("storedValue"));
    if(storedScores !== null){
        highscoreArr = storedScores;
    }

    for (var i = 0; i < highscoreArr.length; i++) {
        var init = highscoreArr[i];

        var li = document.createElement("li");
        li.textContent = init;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}

var secondsLeft = 76;

function countdown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = 'Time: ' + secondsLeft;
        if(secondsLeft <= 0){
            clearInterval(timerInterval);
            done();
        }
    },1000);
}

var choiceOne;
var choiceTwo;
var choiceThree;
var choiceFour;
var randIndex;
var useArr = arrQuestions.slice(0);

function displayQuestion(){
    randIndex = Math.floor(Math.random() * useArr.length);
    question.textContent = useArr[randIndex].question;
    choiceOne = choice1.textContent = useArr[randIndex].choices[0];
    choiceTwo = choice2.textContent = useArr[randIndex].choices[1];
    choiceThree = choice3.textContent = useArr[randIndex].choices[2];
    choiceFour = choice4.textContent = useArr[randIndex].choices[3];
    console.log(useArr);
}

function quiz(){
    choice1.addEventListener("click", function(){
        if (choiceOne == useArr[randIndex].correct){
            result.textContent = 'Correct!';
            useArr.splice(randIndex,1);
            displayQuestion();
        }
        else {
            result.textContent = 'Wrong!';
            secondsLeft = secondsLeft-10;
            useArr.splice(randIndex,1);
            displayQuestion();
        }
    });
    choice2.addEventListener("click", function(){
        if (choiceTwo == useArr[randIndex].correct){
            result.textContent = 'Correct!';
            useArr.splice(randIndex,1);
            if (useArr.length>0){
                displayQuestion();
            }
            else {
                done();
            }
        }
        else {
            result.textContent = 'Wrong!';
            secondsLeft = secondsLeft-10;
            useArr.splice(randIndex,1);
            if (useArr.length>0){
                displayQuestion();
            }
            else {
                done();
            }
        }

    });
    choice3.addEventListener("click", function(){
        if (choiceThree == useArr[randIndex].correct){
            result.textContent = 'Correct!';
            useArr.splice(randIndex,1);
            if (useArr.length>0){
                displayQuestion();
            }
            else {
                done();
            }
        }
        else {
            result.textContent = 'Wrong!';
            secondsLeft = secondsLeft-10;
            useArr.splice(randIndex,1);
            if (useArr.length>0){
                displayQuestion();
            }
            else {
                done();
            }
        }

    });
    choice4.addEventListener("click", function(){
        if (choiceFour == useArr[randIndex].correct){
            result.textContent = 'Correct!';
            useArr.splice(randIndex,1);
            if (useArr.length>0){
                displayQuestion();
            }
            else {
                done();
            }
        }
        else {
            result.textContent = 'Wrong!';
            secondsLeft = secondsLeft-10;
            useArr.splice(randIndex,1);
            if (useArr.length>0){
                displayQuestion();
            }
            else {
                done();
            }
        }
    });
}

var finalScore;
var input = "";

function done(){
    doneSwitch.style.display = 'initial';
    quizSwitch.style.display = 'none';
    finalScore = secondsLeft;
    displayScore.textContent = 'Your final score is '+ finalScore + '.';
    submit.addEventListener("click", function(){
        input = document.getElementById('initials').value;
        highscoreArr.push(input + ' - ' + finalScore);
        console.log(highscoreArr);
        storeScores();
        renderList();
        viewScores();
    });
}

function viewScores(){
    startSwitch.style.display = 'none';
    doneSwitch.style.display = 'none';
    scoreSwitch.style.display = 'initial';
}

function storeScores(){
    localStorage.setItem("storedValue", JSON.stringify(highscoreArr));
}

goBack.addEventListener("click", function(){
    startSwitch.style.display = 'block';
    scoreSwitch.style.display = 'none';
    location.reload();
});

clearScores.addEventListener("click",function(){
    localStorage.clear();
    scoreList.textContent = '';
});