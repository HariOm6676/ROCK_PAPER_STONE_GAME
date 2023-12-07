let userMove = '';
let computerMove = '';
let result = '';
const game = {
    wins: 0,
    looses: 0,
    ties: 0
};
function captureUserMove(move) {
    userMove = move;
}
function generateComputerMove() {
    const readNum = Math.random();
    if (readNum < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (readNum < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors';
    }
}
function evaluateMoves() {
    if (userMove == computerMove) {
        result = 'Tie';
    }
    else if ((userMove === 'Rock' && computerMove === 'Scissors') || (userMove === 'Paper' && computerMove === 'Rock') || (userMove === 'Scissors' && computerMove === 'Paper')) {
        result = 'Win';
    }
    else {
        result = 'Loose';
    }
}
function renderGameSummary() {
    const gamesPlayed = game.wins + game.looses + game.ties;
    console.log(`userMove ${userMove} computerMove ${computerMove} result: ${result} gamesPlayed: ${gamesPlayed}`);


    document.querySelector('#wins').innerHTML = game.wins;
    document.querySelector('#looses').innerHTML = game.looses;
    document.querySelector('#ties').innerHTML = game.ties;
    document.querySelector('#gamesplayed').innerHTML = gamesPlayed;
    console.log(game);

}
function updateGameScore() {
    if (result == 'Win') {
        game.wins++;
    }
    else if (result == 'Tie') {
        game.ties++;
    }
    else {
        game.looses++;
    }
}
function renderGameHistory() {
    console.log(`userMove ${userMove} computerMove ${computerMove} result: ${result} gamesPlayed: ${gamesPlayed}`);
}