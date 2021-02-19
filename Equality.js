const { checkRow, checkColumn, checkSquare } = require("./CheckR-C-S");
const { nextEmptySpot } = require("./findEmptySpot");

function Equality(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }

  return false;
}

function solve(board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  if (row === -1) {
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (Equality(board, row, col, num)) {
      board[row][col] = num;
      solve(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
}
module.exports = { solve, Equality };
