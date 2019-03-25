let defaulttext = document.querySelector('#textDefined');
let submittedtext = document.querySelector('#textEntered');
let finishButton = document.querySelector('#finish-button');
let congratsText = document.querySelector('#congrats');
let resetButton = document.querySelector('#reset-button');
let pauseButton = document.querySelector('#pause-button');
let speed = document.querySelector('#typingSpeed');
let minutes = document.querySelector('#min');
let seconds = document.querySelector('#sec');
let typingSpeed;
let  sec= setInterval(timer,1000);

//validating the text entered in submitted text area, by using event listener with keyup event
submittedtext.addEventListener('keyup',valTyping);
let defTextArray = defaulttext.value;
function valTyping() {
    let subTextArray = submittedtext.value;
    if (subTextArray.length >0) {
        for (let i = 0; i < subTextArray.length; i++) {
            if (defTextArray[i] === subTextArray[i]) {
                submittedtext.style.background = 'green';
                congratsText.textContent='';
            }
            else {
                submittedtext.style.background = 'red';
            }
        }
    }
    else{
        submittedtext.style.background = 'white';
    }
}
//getting congrats message on finish

finishButton.addEventListener('click',congo);

function congo() {
    if(defaulttext.value===submittedtext.value){
        clearInterval(sec);
        resetFunction();
        congratsText.textContent='Congrats! You have successfully completed the task';
    }
}


//reset all elements to default

resetButton.addEventListener('click',resetFunction);
function resetFunction() {
    submittedtext.value='';
    submittedtext.style.background = 'white';
    congratsText.textContent='';
    minutes.textContent='00';
    seconds.textContent='00';
    count=0;
}
// disable copy , cut , paste options in the textarea box

submittedtext.oncut = submittedtext.oncopy = submittedtext.onpaste = function(event) {
    return false;
};


//Timer creation

let min=0;
let count=0;
function timer(){
    count++;
    console.log(typeof(count));
    seconds.textContent=count;
    if(count%60==0){
        count=0;
        min= min+1;
        minutes.textContent=min;
    }
}

// evaluating the typing speed => make every task with 200

function findSpeed() {
    speed.textContent = (100/((min*60)+sec))+' wpm';

}


