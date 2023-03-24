const fs = require('fs');
const board = fs.writeFileSync('./puzzles.js', 'utf-8');
const arrayBoard = board.split('\n');
const boardString = arrayBoard[process.argv[2]];

function checkRow(boardString, row, num) {
  // check row
  for (let i = 0; i < boardString.length; i++) {
    if (boardString[row][i] === num) {
      return false;
    }
  }
  return true;
}

function checkCol(boardString, col, num) {
  // check column
  for (let i = 0; i < boardString.length; i++) {
    if (boardString[i][col] === num) {
      return false;
    }
  }
  return true;
}