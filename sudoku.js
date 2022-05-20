const fs = require('fs');
let boardString = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').slice(0, 81);

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let str2 = boardString.match(/(.........)/g);
  let str3 = str2.map((el) => el.split(''));
  return str3;
  // console.log('first changes');
}
console.log(solve(boardString));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
