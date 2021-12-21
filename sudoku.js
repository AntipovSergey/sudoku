/* eslint-disable no-plusplus */
// const fs = require('fs');
const sudokuParse = require('./runner');

// const content2 = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const empty = require('./findEmpty');
const check = require('./index');
const checkSector = require('./elenaSolve3x3');
// let qwer = 0;
function fc(content, number_) {
  const board = sudokuParse(content, number_);
  console.log('Input >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', number_);
  console.table(board);

  function numbers(board2, arrNew2) {
    if (empty(board2) === null) {
      return true;
    }
    const [x, y] = arrNew2;
    // const x = arrNew2[0];
    // const y = arrNew2[1]; 8 │ 4 │ 6 │ 9 │ 5 │ 2 │ 3 │ 7 │ 1
    for (let i = 1; i < 10; i++) { // 1-9 / ->31
      if (check(board2, arrNew2, i) && checkSector(board2, i, arrNew2)) {
        board[x][y] = i;
        // console.log(x,y, '>>>>>>>>>', i);
        // console.table(board)
        // qwer += 1;
        if (numbers(board, empty(board))) {
          return board;
        }
        board[x][y] = 0;
        // console.table(board);
      }
    }
    return false;
  }

  numbers(board, empty(board));
  console.log('Output >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', number_);
  console.table(board);
  return board;
}
// console.table(fc(content2, 14));

module.exports = fc;
