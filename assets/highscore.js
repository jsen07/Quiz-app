

const highscores = JSON.parse(localStorage.getItem("leaderboard")) || [];

let currentHS = 0;
const highscoreList = document.getElementById("highscore-list");
const board = document.getElementById("leaderboard");


if (highscores.length === 0) {
    let play = document.createElement('h2');
    play.innerText = "Currently no scores have been saved.";
    board.appendChild(play);
    
}

for(var i = 0; i < highscores.length; i++) {

let currentHighscore = highscores[i];
let play = document.createElement('li');
play.innerText = currentHighscore.player + " - " + currentHighscore.score;
highscoreList.appendChild(play);
}

document.getElementById('home').addEventListener("click", redirectHome);

function redirectHome() {
    window.location.assign("index.html");
}