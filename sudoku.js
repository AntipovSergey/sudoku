// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const fs = require('fs');

//const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'utf8')
//console.log(sudoku);
function solve(boardString) {
  console.log('first changes');

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
function prettyBoard(board) {
  const rows = new Array(9).fill('')
  const table = rows.map(row => row = new Array(9).fill(''))
  console.table(table);


}

prettyBoard()
// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
