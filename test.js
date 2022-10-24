const solve = require('./sudoku').solve;

const input = [
  [1, null, 5, 8, null, 2, null, null, null],
  [null, 9, null, null, 7, 6, 4, null, 5],
  [2, null, null, 4, null, null, 8, 1, 9],
  [null, 1, 9, null, null, 7, 3, null, 6],
  [7, 6, 2, null, 8, 3, null, 9, null],
  [null, null, null, null, 6, 1, null, 5, null],
  [null, null, 7, 6, null, null, null, 3, null],
  [4, 3, null, null, 2, null, 5, null, 1],
  [6, null, null, 3, null, 8, 9, null, null],
];

console.log(solve())
