const map = require('./simBoard.js');
const emtyCheck = require('./findcell.js');
const square = require('./small_cube.js');
const row = require('./row.js');
const column = require('./column.js');

// const firstBoard = map();

function solveSudoku(arr) {
  if (emtyCheck(arr) === false) {
    return true;
  }
  for (let i = 1; i <= 9; i++) {
    const emtyIndex = emtyCheck(arr);
    if (
      row(arr, i, emtyIndex[0], emtyIndex[1]) &&
      column(arr, i, emtyIndex[0], emtyIndex[1]) &&
      square(arr, i, emtyIndex[0], emtyIndex[1])
    ) {
      arr[emtyIndex[0]][emtyIndex[1]] = i;
      if (solveSudoku(arr)) {
        return arr;
      }
      arr[emtyIndex[0]][emtyIndex[1]] = '-';
    }
  }
  return false;
}

// console.log(firstBoard);

function solveAll(maps) {
  for (let i = 0; i < maps.length; i++) {
    console.table(solveSudoku(maps[i]));
  }
}

solveAll(map())

// console.table(solveSudoku(map()[3]));
// console.table(solveSudoku(firstBoard[1]));
