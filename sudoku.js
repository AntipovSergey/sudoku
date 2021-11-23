// const fs = require('fs');
const sudokuParse = require('./runner');

// const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const empty = require('./empty');
const check = require('./checkXY');
const checkSector = require('./checkSector');

function fc(content, number_) {
  const board = sudokuParse(content, number_);
  console.log('Input >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', number_);
  console.table(board);

  function numbers(board2, arrNew2) {
    if (empty(board2) === null) {
      return true;
    }
    const x = arrNew2[0];
    const y = arrNew2[1];
    for (let i = 1; i < 10; i++) {
      if (check(board2, arrNew2, i) && checkSector(board2, i, arrNew2)) {
        board[x][y] = i;
        if (numbers(board, empty(board))) {
          return board;
        }
        board[x][y] = 0;
      }
    }
    return false;
  }

  numbers(board, empty(board));
  console.log('Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', number_);
  console.table(board);
  return board;
}
// console.table(fc(content, 2));
module.exports = fc;
