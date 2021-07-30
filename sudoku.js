const fs = require('fs')
const RAW_SUDOKU_FILE= fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

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
function prettyBoard(file) {
	const LINE_BREAKER_REGEXP = /\n/gm
	let board = file.slice().replace(LINE_BREAKER_REGEXP, '');

  let boardsContainer = {};
  let inputString = board.split('');
  const ROW_LENGTH = 9;
  let sudokuNumberInContainer = 0;
  while (inputString.length !== 0) {
    const sudokuArray = [];
    for (let index = 0; index < ROW_LENGTH; index += 1) {
      const stringSlice = inputString.slice(0, ROW_LENGTH);
      sudokuArray.push(stringSlice);
      inputString = inputString.slice(ROW_LENGTH, -1);
    }
		boardsContainer[sudokuNumberInContainer] = sudokuArray
		sudokuNumberInContainer += 1;
  }
	return boardsContainer;
}

console.log(prettyBoard(RAW_SUDOKU_FILE))

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
