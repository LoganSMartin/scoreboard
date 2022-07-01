const scoreDisplay = document.querySelector('h1');
const maxScoreInput = document.querySelector('input');
const playerOneButton = document.querySelector('#playerOne');
const playerTwoButton = document.querySelector('#playerTwo');
const resetButton = document.querySelector('#reset');

let playerOneScore = 0;
let playerTwoScore = 0;
let maxScore = parseInt(maxScoreInput.value);

function isGameOver(maxScore, playerOneScore, playerTwoScore) {
    if (playerOneScore === maxScore || playerTwoScore === maxScore) {
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
    }
}

playerOneButton.addEventListener('click', function(e) {
    playerOneScore++;
    scoreDisplay.innerText = `${playerOneScore} To ${playerTwoScore}`;
    isGameOver(maxScore, playerOneScore, playerTwoScore);
})

playerTwoButton.addEventListener('click', function(e) {
    playerTwoScore++;
    scoreDisplay.innerText = `${playerOneScore} To ${playerTwoScore}`;
    isGameOver(maxScore, playerOneScore, playerTwoScore);
})

resetButton.addEventListener('click', function(e) {
    playerOneScore = 0;
    playerTwoScore = 0;
    scoreDisplay.innerText = '0 To 0';
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
})

maxScoreInput.addEventListener('change', function(e) {
    maxScore = parseInt(maxScoreInput.value);
})