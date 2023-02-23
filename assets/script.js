let questions = [
    {
    question: "What are people who write computer code?",
    c1: "Professors",
    c2: "Programmers",
    c3: "Manufacturers",
    c4: "Cryptographers",
    correct: "Programmers",
    },

    {
        question: "What does HTML stand for?",
    c1: "Home Tool Markup Language",
    c2: "Hyperlinks and Text Markup Language",
    c3: "HyperText Markup Language",
    c4: "HomeText Markup Language",
    correct: "HyperText Markup Language",
    },

    {
        question: "Choose the correct HTML element for the largest heading:",
    c1: "<head>",
    c2: "<heading>",
    c3: "<h1>",
    c4: "<h6>",
    correct: "<h1>",
    },

    {
        question: "Choose the correct HTML element to define important text",
    c1: "<strong>",
    c2: "<b>",
    c3: "<i>",
    c4: "<important>",
    correct: "<important>",
    },

    {
        question: "What is the correct HTML for creating a hyperlink?",
    c1: "<a url='' </a>",
    c2: "<a></a>",
    c3: "<a name=''> </a>",
    c4: "<a href='' </a>",
    correct: "<a href='' </a>"
}];

let currentQuestion = 0;
let score = 0;
let questionTitle =document.getElementById('quiz-title');
let choiceOne = document.getElementById('choice-1');
let choiceTwo = document.getElementById('choice-2');
let choiceThree = document.getElementById('choice-3');
let choiceFour = document.getElementById('choice-4');
let time = 75;

const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
setQuestion();


const timer = document.getElementById("timer");
const gameTimer = setInterval(function() {
    time --;
    timer.innerText= time;

    if (time <= 0) {
        clearInterval(gameTimer);
        saveScore();
    }
}, 1000);


function setQuestion () {
   
    let currentQuiz = questions[currentQuestion];

    questionTitle.innerText = currentQuiz.question;
    choiceOne.innerText = currentQuiz.c1;
    choiceTwo.innerText = currentQuiz.c2;
    choiceThree.innerText = currentQuiz.c3;
    choiceFour.innerText = currentQuiz.c4;
    
}

const btns = document.querySelectorAll('button[id^=choice]');
btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
});
function checkAnswer(e) {

    let  playerScore = document.getElementById("score");
    let checker = document.getElementById('right-wrong');

    if(e.target.innerText === questions[currentQuestion].correct) {
        score += 10;
        checker.innerHTML= "Correct!";
        currentQuestion++;
        setQuestion();
    }

    else {
        time += - 10;
        score += -5;
        checker.innerHTML= "Wrong!";
        currentQuestion++;
        setQuestion();
    }
    if (currentQuestion === questions.length -1){
        clearInterval(gameTimer);
        saveScore();
    }
    playerScore.innerText = score;


}


function saveScore() {
    document.getElementById('hide').style.display="none";

    let hsContainer = document.createElement("div");
    hsContainer.classList.add("hs-container");

    let titleHead = document.createElement("div");
    titleHead.classList.add("hs-title");
    let h1 = document.createElement('h1');
    h1.innerText = "Highscores";
    titleHead.appendChild(h1);


    let scoreBox = document.createElement('div');
    scoreBox.classList.add("hs");
    let highscore = document.createElement("h1");
    highscore.innerText = "Your score is:" + score;
    scoreBox.appendChild(highscore);

    let inputBox = document.createElement("INPUT");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("placeholder", "Enter your name..");
    inputBox.setAttribute("id", "playerName");
    scoreBox.appendChild(inputBox);

    let saveBtn = document.createElement('button');
    saveBtn.classList.add("save-button");
    saveBtn.setAttribute("id", "saveBtn");
    let saveH1 = document.createElement('h2');
    saveH1.innerText = "Save";
    saveBtn.appendChild(saveH1);

    let playBtn = document.createElement('button');
    playBtn.classList.add("play-button");
    playBtn.setAttribute("id", "playBtn");
    let playH1 = document.createElement('h2');
    playH1.innerText = "Play again";
    playBtn.appendChild(playH1);


    let homeBtn = document.createElement('button');
    homeBtn.classList.add("hme-button");
    homeBtn.setAttribute("id", "homeBtn");
    let homeH1 = document.createElement('h2');
    homeH1.innerText = "Home";
    homeBtn.appendChild(homeH1);



    hsContainer.appendChild(scoreBox);
    hsContainer.appendChild(saveBtn);
    hsContainer.appendChild(playBtn);
    hsContainer.appendChild(homeBtn);
    document.body.appendChild(titleHead);
    document.body.appendChild(hsContainer);

document.getElementById("homeBtn").addEventListener("click", redirectHome);
document.getElementById("saveBtn").addEventListener("click", save);
document.getElementById("playBtn").addEventListener("click", playAgain);

}


function redirectHome() {
    window.location.assign("index.html");
}

function playAgain() {
    window.location.assign("quiz.html");
}
function save() {

    let playerName = document.getElementById("playerName");
    
    const player = {
        score: score,
        player: playerName.value

    };
    
    leaderboard.push(player);

    leaderboard.sort(function(a, b){return b.score - a.score});
    leaderboard.splice(4);
        
    
    localStorage.setItem("leaderboard",JSON.stringify(leaderboard));
    window.location.assign("index.html");
}
