let userMove = '';

let computerMove = '';

let result = '';
const game = JSON.parse(localStorage.getItem('game')) || {
    win: 0,
    looses: 0,
    ties: 0
};
// let gameHistory = [];
const gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
renderGameHistory();
randomGameSummary();
function captureUserMove(move) {
    userMove = move;
}

function generateComputerMove() {
    const random = Math.random();
    if (random < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (random < 2 / 3) {
        computerMove = 'Paper';
    }
    else {
        computerMove = 'Scissors'
    }
}
function evaluateMoves() {
    if (userMove === computerMove) {
        result = 'Tie';
    }
    else if ((userMove === 'Rock' && computerMove === 'Scissors') ||
        (userMove === 'Paper' && computerMove === 'Rock') ||
        (userMove === 'Scissors' && computerMove === 'Paper')) {
        result = 'Win';
    }
    else {
        result = 'Loose';
    }
}

function randomGameSummary() {
    const gamePlayed = game.win + game.looses + game.ties;
    console.log(`userMove:${userMove} computerMove ${computerMove} result: ${result}`);
    console.log(game);
    document.querySelector('#win').innerHTML = game.win;
    document.querySelector('#looses').innerHTML = game.looses;
    document.querySelector('#ties').innerHTML = game.ties;
    document.querySelector('#gamePlayed').innerHTML = gamePlayed;
}
function updateGameScore() {
    if (result === 'Win') {
        game.win++;
    } else if (result === 'Tie') {
        game.ties++;
    }
    else {
        game.looses++;
    }
    const gameHistoryItem = { userMove: userMove, computerMove: computerMove, result: result };
    gameHistory.push(gameHistoryItem);
    localStorage.setItem('game', JSON.stringify(game));
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
}
function renderGameHistory() {
    let finalGameHistoryHTML = `
    <tr>
    <th>#</th>
    <th>User Move</th>
    <th>Computer Move </th>
    <th> Result </th>
    </tr>`;
    console.log(`userMove:${userMove} computerMove ${computerMove} result: ${result}`);
    console.log(gameHistory);
    for (let i = 0; i < gameHistory.length; i++) {
        finalGameHistoryHTML += `
    <tr>
    <td> ${i + 1} </td>
    <td> ${gameHistory[i].userMove}</td>
    <td> ${gameHistory[i].computerMove}</td>
    <td> ${gameHistory[i].result}</td>
    </tr>
    `;
    }
    document.querySelector('#gameHistory').innerHTML = finalGameHistoryHTML;
}
function reset() {
    game.win = 0,
        game.looses = 0,
        game.ties = 0
}