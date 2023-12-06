let userMove = '';
let computerMove = '';
let result = '';
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
    else if ((userMove === 'Rock' && computerMove === 'Scissors') || (userMove === 'Paper' && computerMove === 'Rock')) {
        result = 'Win';
    }
    else {
        result = 'Loose';
    }
}