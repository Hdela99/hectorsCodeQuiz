/* TODO: 
  - add a function to print the high score
  - add a function to clear the high score
  - on page load, print the high score
*/
//high score printer

function Printer() {
  var scores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  scores.sort(function(a, b) {
    return b.score - a.score;

  });

  scores.forEach(function(score) {

    var li = document.createElement("li");
    li.textContent = score.scoresRecord + " - " + score.score;

    var ol = document.getElementById("highscores");
    ol.appendChild(li);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

Printer();
