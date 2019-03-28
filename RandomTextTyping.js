let submittedtext = document.querySelector('#textEntered');
let finishButton = document.querySelector('#finish-button');
let congratsText = document.querySelector('#congrats');
let resetButton = document.querySelector('#reset-button');
let pauseButton = document.querySelector('#pause-button');
let resumeButton = document.querySelector('#resume-button');
let speed = document.querySelector('#typing-speed');
let totalWords = document.querySelector('#wordsTyped');
let minutes = document.querySelector('#min');
let seconds = document.querySelector('#sec');
let  sec;

//Making the timer to start by using keyup event.
submittedtext.addEventListener('keyup',valTyping);
function valTyping(){
    congratsText.textContent='';
    subTextArray = submittedtext.value;
    stopTimerRecalling(subTextArray);
}
//getting congrats message on finish

finishButton.addEventListener('click',congo);
let finalTextArray;
let wordCount;
function congo() {
    wordCount=1;
    finalTextArray = submittedtext.value;
    if(subTextArray.length>0)
    {
        subTextArray = subTextArray.replace(/\s\s+/g, ' ');
        for(let i=0;i<subTextArray.length;i++)
        {
            if(subTextArray[i]===' ')
            {
                wordCount++;
            }
        }
        resetFunction();
        clearInterval(sec);
        congratsText.textContent='Congrats! You have successfully completed the task';
        totalWords.textContent = `${wordCount}`;

    }

    findSpeed(wordCount);

}

//reset all elements to default

resetButton.addEventListener('click',resetFunction);
function resetFunction() {
    clearInterval(sec);
    count=0;
    calling=0;
    submittedtext.value='';
    submittedtext.style.background = 'white';
    congratsText.textContent='';
    minutes.textContent='00';
    seconds.textContent='00';
    speed.textContent = '000';
    totalSeconds=0;
    totalSpeed=0;
    min=0;
    totalWords.textContent='000';
}
// disable copy , cut , paste options in the textarea box

submittedtext.oncut = submittedtext.oncopy = submittedtext.onpaste = function(event) {
    return false;
};


//Timer creation
let calling=0;
function stopTimerRecalling(arraylength) {
    if(arraylength.length>=1&&calling===0){
        calling++;
        sec= setInterval(timer,1000);
    }
}


let min=0;
let count=0;
let wordCountMin=0;
let wordCountSec=0;
function timer(){
    count++;
    wordCountSec=count;
    seconds.textContent=count;
    if(count%60==0){
        count=0;
        min= min+1;
        minutes.textContent=min;
        wordCountMin=min;
    }
}


// timer pause functionality
pauseButton.addEventListener('click',pauseTimer);
function pauseTimer() {

    clearInterval(sec);
    pauseButton.style.display="none";
    resumeButton.style.display="block";

}
//resume the timer
resumeButton.addEventListener('click',resumeTimer);
function resumeTimer() {
    sec=setInterval(timer,1000);
    resumeButton.style.display="none";
    pauseButton.style.display="block";

}

// evaluating the typing speed => make every task with 100 words
let totalSeconds;
let totalSpeed;
function findSpeed(wordCount) {
    totalSeconds = wordCountMin*60 + wordCountSec;
    totalSpeed = Math.round((wordCount/totalSeconds)*60);
    speed.textContent=totalSpeed;

}
