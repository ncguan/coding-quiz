var timeEl = document.getElementById('countdown');

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