const isValid = require('./validations');
const findEmpty = require('./FindEmpty');
const sudokuParse = require('./SudocuParse');
const sudokuSolver = require('./solver');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const puzzle = sudokuParse.sudokuParse(boardString);
  sudokuSolver.sudokuSolver(puzzle);
  console.log(puzzle);
  return puzzle;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return isValid.isValidBoard(board);
}

function FindEmpty(puzzle) {
  const position = [];
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      if (puzzle[i][j] == '-') {
        position[0] = i;
        position[1] = j;
        return position;
      }
    }
  }
  return false;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  console.table(board);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
