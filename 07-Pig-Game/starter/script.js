"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
let goalScore, scores, currentScore, activePlayer, isPlaying;

function init() {
    console.log("resetting game...");
    goalScore = 100;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
    diceEl.classList.add("hidden");
    isPlaying = true;
}

init();

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
    if (isPlaying) {
        // gen random dice
        const dice = Math.floor(Math.random() * 6) + 1;

        // display dice
        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        console.log(`Player ${activePlayer} rolled a ${dice}`);

        // check for rolled 1 : if true, switch player
        if (dice != 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        } else {
            //switch player
            switchPlayers();
        }
    }
});

btnHold.addEventListener("click", function () {
    if (isPlaying) {
        if (currentScore == 0) {
            console.log(`can't hold, the current score is ${currentScore}`);
        } else {
            console.log(
                `hold clicked for player ${activePlayer}, adding ${currentScore} to thier score of ${
                    document.getElementById(`score--${activePlayer}`)
                        .textContent
                }`
            );
            //add current score to active players gloval score
            scores[activePlayer] += currentScore;
            console.log(
                `Player ${activePlayer}'s score is now ${scores[activePlayer]}`
            );
            document.getElementById(`score--${activePlayer}`).textContent =
                scores[activePlayer];
            //check if score >= goalScore
            if (scores[activePlayer] >= goalScore) {
                //if so, end game, player wins
                isPlaying = false;
                currentScore = 0;
                diceEl.classList.add("hidden");
                document.getElementById(
                    `current--${activePlayer}`
                ).textContent = 0;
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.add("player--winner");
                document
                    .querySelector(`.player--${activePlayer}`)
                    .classList.remove("player--active");
                console.log(`Player ${activePlayer} wins!`);
            } else {
                diceEl.classList.add("hidden");
                switchPlayers();
            }

            //switch players
        }
    }
});

btnNew.addEventListener("click", init);

function switchPlayers() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer ? 0 : 1;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    console.log(`switched to player ${activePlayer}`);
}
