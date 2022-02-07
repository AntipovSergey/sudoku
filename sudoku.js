const {
  isSolvedBlocks,
  isSolvedEmptyCells,
} = require('./is-solved-blocks-empty.js');

const {
  checkRaw,
  checkColumn,
} = require('./is-solved-checkRowAndColumn.js');

const paintPrettyBoard = require('./pretty-board.js');

const solveEasy = require('./solve-easy.js');
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
  return solveEasy(boardString);
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

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return paintPrettyBoard(board);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
