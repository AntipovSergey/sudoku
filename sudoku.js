const fs = require('fs');
const data = fs.readFileSync("./sudoku-puzzles.txt", "utf8").split("\n");

function solve(boardString) {

}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board, i) {
    let board = boardString[i] ? boardString[i].replace(/-/g, 0).match(/(\d{9})/g, '$1 ') : "Закончились таблицы, sorry";

    for (let i = 0; i < board.length; i++) {
        board[i] = board[i].split('');
    }

    return board;
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
