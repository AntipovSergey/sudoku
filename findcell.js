const board = require('./simBoard');

function findCell(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return false;
}

// console.log(findCell(board()));
module.exports = findCell;
