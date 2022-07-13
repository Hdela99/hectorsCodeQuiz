// TODO: add game logic
var questionIndex = 0;
var time = questions.length *8;
var timerId; 

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("stopwatch");
var defaultEl = document.getElementById("default");
var choicesEl = document.getElementById("choices");
var subBtn = document.getElementById("submit");
var startBtn = document.getElementById("start-btn");
var initialsEl = document.getElementById("initials");
var responseEl = document.getElementById("response");
var titleEl = document.getElementById("question-title");


function startQuiz(){
    //Step 1: Hide default screen
    defaultEl.setAttribute("class","Hide");

    //setp 2: Show Question
    questionsEl.removeAttribute("class");
    //removeAttribute removes the class of the 
    //questions line 28 in HTML. 

    //Step 3:Now we see question start timer
    timerId = setInterval(clockUpdate, 1000);
    //update timer. declared/init in line 3 JS
    timerEl.textContent = time;
    //Step 4: populate the question. Calls fx
    getQuestion();
}

//now lets make a function for iterating Array

function getQuestion(){
    var currentQ = questions[questionIndex];
//This pulls the title key:pair from questions.js
    titleEl.textContent = currentQ.title;

    choicesEl.innerHTML = "";

    currentQ.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = clicked;

        choicesEl.appendChild(choiceNode);
    
    })
}

function clicked(){
    if( this.value != questions[questionIndex].answer){

    time -= 10;

    if(time < 0) {
        time = 0;
    }

    responseEl.textContent = "WRONG!"; 

} else {
    responseEl.textContent = "Correct!";

}
responseEl.setAttribute("class", "feedback");

setTimeout(function(){
    responseEl.setAttribute("class", "hidingResponse");
}, 1000);

questionIndex++;

if(questionIndex === questions.length){
    done();
    } else {
    getQuestion();
    }  
}
function done(){
    clearInterval(timerId);

    var finishedEL = document.getElementById("Done");
    finishedEL.removeAttribute("class");

    var endScoreEl = document.getElementById("final-score");
    endScoreEl.textContent = time;

    questionsEl.setAttribute("class", "hide");

}

function clockUpdate() {
    time--;
    timerEl.textContent = time;

    if(time <= 0) {
        done();
    }
}

function savedScores(){

    var scoresRecord = initialsEl.value.trim();

    if(scoresRecord !== ""){
        var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
        
        var newScores = {
            score: time,
            scoresRecord: scoresRecord
        };

        highscores.push(newScores);
        window.localStorage.setItem("highscores",JSON.stringify(highscores))
  
        window.location.href = "highscores.html";
    }
}

function checkForEnter(event) {
    if (event.ket === "Enter"){
        savedScores();
    }
}

subBtn.onclick = savedScores;

startBtn.onclick = startQuiz;


initialsEl.onkeyup = checkForEnter;