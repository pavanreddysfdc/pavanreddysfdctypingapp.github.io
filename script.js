let defaulttext = document.querySelector('#textDefined');
let submittedtext = document.querySelector('#textEntered');
let finishButton = document.querySelector('#finish-button');
let congratsText = document.querySelector('#congrats');
let resetButton = document.querySelector('#reset-button');
let pauseButton = document.querySelector('#pause-button');
let resumeButton = document.querySelector('#resume-button');
let speed = document.querySelector('#typing-speed');
let minutes = document.querySelector('#min');
let seconds = document.querySelector('#sec');
let cont1 = document.querySelector('#content-1');
let cont2 = document.querySelector('#content-2');
let cont3 = document.querySelector('#content-3');
let cont4 = document.querySelector('#content-4');
let cont5 = document.querySelector('#content-5');
let cont6 = document.querySelector('#content-6');
let totalWords = document.querySelector('#totalWords');

let  sec;

//validating the text entered in submitted text area, by using event listener with keyup event
submittedtext.addEventListener('keyup',valTyping);
let defTextArray = defaulttext.value;
let length =0;
function valTyping() {
    congratsText.textContent='';
    let subTextArray = submittedtext.value;
    speed.textContent='000';
    totalWords.textContent='000';
    stopTimerRecalling(subTextArray);

    if (subTextArray.length >0) {

        for (let i = 1; i <= subTextArray.length; i++) {
            if (defTextArray.substring(0,i) === subTextArray.substring(0,i)) {
                submittedtext.style.color = 'green';
                }
                else {
               submittedtext.style.color='red';
            }
        }
    }
    else{
        submittedtext.style.background = 'white';
    }
}
//getting congrats message on finish

finishButton.addEventListener('click',congo);
let wordCount;
function congo() {
    wordCount=1;
    let subTextArray = submittedtext.value;
    if(defaulttext.value===submittedtext.value) {
        subTextArray = subTextArray.replace(/\s\s+/g, ' ');
        for (let i = 0; i < subTextArray.length; i++) {
            if (subTextArray[i] === ' ') {
                wordCount++;
            }
        }
        resetFunction();
        clearInterval(sec);
        congratsText.textContent = 'Congrats! You have successfully completed the task';
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
    defaulttext.textContent='Select a Content';
    speed.textContent = '000';
    totalSeconds=0;
    totalSpeed=0;
    totalWords.textContent='000';
    min=0;
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

//Assigning Contents
cont1.addEventListener('click',content1);
function content1() {
    resetFunction();
    defaulttext.textContent = 'content 1 dolor sit amet, consectetur adipisicing elit. Aperiam cum eius eveniet fugiat id illo magni nemo nisi nulla officia perspiciatis praesentium quasi quibusdam, quo repellat sapiente sunt suscipit tempora totam velit. Ab, aliquam aperiam, consequuntur dolorum ea, eaque eligendi eum ipsam maiores nobis non omnis optio voluptatum! Asperiores assumenda blanditiis corporis cum cupiditate dicta distinctio doloremque dolores ducimus eveniet expedita, facilis harum illo illum ipsa magni maiores mollitia nostrum perferendis placeat quis quo repellat sapiente sint suscipit tempora tempore totam ullam vero voluptatem. Cumque dolor, ea eius ipsa labore nemo obcaecati sint tempora. Cum dolores labore optio pariatur voluptatibus?';
    defTextArray = defaulttext.value;
    valTyping();
}
cont2.addEventListener('click',content2);
function content2() {
    resetFunction();
    defaulttext.textContent='content 2 dolor sit amet, consectetur adipisicing elit. Aperiam cum eius eveniet fugiat id illo magni nemo nisi nulla officia perspiciatis praesentium quasi quibusdam, quo repellat sapiente sunt suscipit tempora totam velit. Ab, aliquam aperiam, consequuntur dolorum ea, eaque eligendi eum ipsam maiores nobis non omnis optio voluptatum! Asperiores assumenda blanditiis corporis cum cupiditate dicta distinctio doloremque dolores ducimus eveniet expedita, facilis harum illo illum ipsa magni maiores mollitia nostrum perferendis placeat quis quo repellat sapiente sint suscipit tempora tempore totam ullam vero voluptatem. Cumque dolor, ea eius ipsa labore nemo obcaecati sint tempora. Cum dolores labore optio pariatur voluptatibus?';
    defTextArray = defaulttext.value;
    valTyping();
}


cont3.addEventListener('click',content3);
function content3() {
    resetFunction();
    defaulttext.textContent='content 3 dolor sit amet, consectetur adipisicing elit. Aperiam cum eius eveniet fugiat id illo magni nemo nisi nulla officia perspiciatis praesentium quasi quibusdam, quo repellat sapiente sunt suscipit tempora totam velit. Ab, aliquam aperiam, consequuntur dolorum ea, eaque eligendi eum ipsam maiores nobis non omnis optio voluptatum! Asperiores assumenda blanditiis corporis cum cupiditate dicta distinctio doloremque dolores ducimus eveniet expedita, facilis harum illo illum ipsa magni maiores mollitia nostrum perferendis placeat quis quo repellat sapiente sint suscipit tempora tempore totam ullam vero voluptatem. Cumque dolor, ea eius ipsa labore nemo obcaecati sint tempora. Cum dolores labore optio pariatur voluptatibus?';
    defTextArray = defaulttext.value;
    valTyping();
}


cont4.addEventListener('click',content4);
function content4() {
    resetFunction();
    defaulttext.textContent='content 4 dolor sit amet, consectetur adipisicing elit. Aperiam cum eius eveniet fugiat id illo magni nemo nisi nulla officia perspiciatis praesentium quasi quibusdam, quo repellat sapiente sunt suscipit tempora totam velit. Ab, aliquam aperiam, consequuntur dolorum ea, eaque eligendi eum ipsam maiores nobis non omnis optio voluptatum! Asperiores assumenda blanditiis corporis cum cupiditate dicta distinctio doloremque dolores ducimus eveniet expedita, facilis harum illo illum ipsa magni maiores mollitia nostrum perferendis placeat quis quo repellat sapiente sint suscipit tempora tempore totam ullam vero voluptatem. Cumque dolor, ea eius ipsa labore nemo obcaecati sint tempora. Cum dolores labore optio pariatur voluptatibus?';
    defTextArray = defaulttext.value;
    valTyping();
}

cont5.addEventListener('click',content5);
function content5() {
    resetFunction();
    defaulttext.textContent = 'content 5 dolor sit amet, consectetur adipisicing elit. Aperiam cum eius eveniet fugiat id illo magni nemo nisi nulla officia perspiciatis praesentium quasi quibusdam, quo repellat sapiente sunt suscipit tempora totam velit. Ab, aliquam aperiam, consequuntur dolorum ea, eaque eligendi eum ipsam maiores nobis non omnis optio voluptatum! Asperiores assumenda blanditiis corporis cum cupiditate dicta distinctio doloremque dolores ducimus eveniet expedita, facilis harum illo illum ipsa magni maiores mollitia nostrum perferendis placeat quis quo repellat sapiente sint suscipit tempora tempore totam ullam vero voluptatem. Cumque dolor, ea eius ipsa labore nemo obcaecati sint tempora. Cum dolores labore optio pariatur voluptatibus?';
    defTextArray = defaulttext.value;
    valTyping();
}

cont6.addEventListener('click',content6);
function content6() {
    resetFunction();
    defaulttext.textContent='content 6 dolor sit amet, consectetur adipisicing elit. Aperiam cum eius eveniet fugiat id illo magni nemo nisi nulla officia perspiciatis praesentium quasi quibusdam, quo repellat sapiente sunt suscipit tempora totam velit. Ab, aliquam aperiam, consequuntur dolorum ea, eaque eligendi eum ipsam maiores nobis non omnis optio voluptatum! Asperiores assumenda blanditiis corporis cum cupiditate dicta distinctio doloremque dolores ducimus eveniet expedita, facilis harum illo illum ipsa magni maiores mollitia nostrum perferendis placeat quis quo repellat sapiente sint suscipit tempora tempore totam ullam vero voluptatem. Cumque dolor, ea eius ipsa labore nemo obcaecati sint tempora. Cum dolores labore optio pariatur voluptatibus?';
    defTextArray = defaulttext.value;
    valTyping();
}

