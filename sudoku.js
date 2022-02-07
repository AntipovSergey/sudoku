const {
  isSolvedBlocks,
  isSolvedEmptyCells,
} = require('./is-solved-blocks-empty.js');

const {
  checkRaw,
  checkColumn
} = require('./is-solved-checkRowAndColumn.js')
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {

}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

function isSolved(board) {
  const result = [];
  result.push(isSolvedBlocks(board), isSolvedEmptyCells(board), checkRaw(board), checkColumn(board));
  return !result.includes(false);
}
 
// console.log(isSolved('123456789456789123789123456214365897365897214897214365531642978642978531978531642'))
// console.log(isSolved('122456789456789123789123456214365897365897214897214365531642978642978531978531611'));
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
