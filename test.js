
const fs = require('fs');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const sudokuParse = require('./runner');
const board = sudokuParse(content, 1);

const empty = require('./empty');
const arrNew = empty(board);


function checkGV(arr, x, y, num) {
  const arrDop = [];
  for (let i = 0; i < arr.length; i++) {
    arrDop.push(arr[i][y]);
  }
  if (!arr[x].includes(num) && !arrDop.includes(num)) {
    return true;
  } return false;
}
// console.log(checkGV(board, arrNew[0], arrNew[1]));




module.exports = checkGV;
