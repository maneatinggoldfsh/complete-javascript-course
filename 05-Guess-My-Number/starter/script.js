"use strict";

let secretNumber = "";
const MAX_RANDOM = 100;
let score = 20;
let highscore = sessionStorage.getItem("highscore") ?? 0;
let state = "PLAY"; //0=PLAY, 1=WIN, 2=LOSE

document.querySelector(".again").addEventListener("click", () => {
  resetGame();
});

document.querySelector(".check").addEventListener("click", () => {
  if (score > 0 && state === "PLAY") {
    const guess = document.querySelector(".guess").value;

    if (!guess) {
      setMessageText("🚫 No number!");
    } else if (guess == secretNumber) {
      state = "WIN";
      setMessageText("🎉 Correct!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
        sessionStorage.setItem("highscore", highscore);
      }
    } else if (guess != secretNumber) {
      setMessageText(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      updateScore();
    }
  }
});

function updateScore() {
  score > 0 ? score-- : (score = 0);
  document.querySelector(".score").textContent = score;
  if (score <= 0) {
    setMessageText("😨 You Lose!");
    state = "LOSE";
  }
}

function setMessageText(message) {
  document.querySelector(".message").textContent = message;
}

function setRandomNumber() {
  secretNumber = Math.floor(Math.random() * MAX_RANDOM + 1);
  document.querySelector(".number").textContent = "?";
  console.log(secretNumber);
}

function resetGame() {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(
    ".between"
  ).textContent = `(between 1 and ${MAX_RANDOM})`;
  setRandomNumber();
  score = 20;
  document.querySelector(".score").textContent = score;
  state = "PLAY";
  setMessageText("Start guessing...");
}

resetGame();
