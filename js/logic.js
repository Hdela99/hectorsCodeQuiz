// TODO: add game logic
var questionIndex = 0;
var time = questions.length *8;
var timerId; 

var questionsEl = document.getElementById("questions");
var timerEl = documents.getElementById("stopwatch");
var defaultEl = documents.getElementById("default");
var choicesEl = documents.getElementById("choices");
var subBtn = documents.getElementById("submit");
var startBtn = documents.getElementById("start-button");
var initialsEl = documents.getElementById("initials");
var responseEl = documents.getElementById("response");