const { nextEmptySpot } = require("./findEmptySpot");
const { Equality } = require("./Equality");
// const { checkRow, checkColumn, checkSquare } = require("./CheckR-C-S");

function prettyBoard(boardStr) {
  const newStr = boardStr.split("");
  let board = [];
  for (let i = 0; i < 9; i++) {
    board.push(newStr.splice(0, 9).map((el) => (el === "-" ? 0 : Number(el))));
  }
  return board;
}
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  // console.log(boardString);
  const board = prettyBoard(boardString);
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  if (row === -1) {
    // console.log("tut stop");
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (Equality(board, row, col, num)) {
      board[row][col] = num;
      // console.log(board[row][col]);
      solve(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
}

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

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
