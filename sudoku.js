const fs = require('fs');

const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const sudokuParse = require('./runner');

console.log(sudokuParse(sudokuPuzzles, 1));

const parse = sudokuParse(sudokuPuzzles, 1);
const sudokuGridArray = parse.split('');
const sudokuGrid = [];
for (let i = 0; i < 9; i++) {
  const arr = [];
  for (let j = 0; j < 9; j++) {
    arr.push(parse[i * 9 + j]);
  }
  sudokuGrid.push(arr);
}
console.log(sudokuGrid);

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// function solve(boardString) {
//   console.log('first changes');
// }

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// function isSolved(board) {

// }

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// function prettyBoard(board) {

// }

// Exports all the functions to use them in another file.
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
