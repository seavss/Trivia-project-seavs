var totalScore = 0;

// Grab the html elements
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");
var q10a3 = document.getElementById("q10a3");

// Listening for clicks on the right answers
q1a1.addEventListener("click", score);
q2a2.addEventListener("click", score);
q3a2.addEventListener("click", score);
q4a1.addEventListener("click", score);
q5a1.addEventListener("click", score);
q6a2.addEventListener("click", score);
q7a3.addEventListener("click", score);
q8a1.addEventListener("click", score);
q9a2.addEventListener("click", score);
q10a2.addEventListener("click", score);

restart.addEventListener("click", restartQuiz);

function score() { 
  if (totalScore < 10) {
    totalScore += 1; //add one to totalScore
  }
  console.log("Correct!");
  updateResult();
}

function updateResult() {
  console.log("Your score is " + totalScore + " out of 10");
  result.innerHTML = "Your score is " + totalScore
}

function restartQuiz() {
  result.innerHTML = "Your score is 0"
  totalScore = 0;
}

//showing results
function switch01(objId) {
  var current = document.getElementById(objId).style.display;
  document.getElementById(objId).style.display=(current!="block")?"block":"none";
  return false
}