const map = require('./simBoard.js');
const emtyCheck = require('./findcell.js');
// const xYCheck = require('./xYCheck.js')
const row = require('./row.js')
const column = require('./column.js')
const squareCheck = require('')


// const allMaps = map.sudokuMapShifter(9)
function solveSudoku(arr) {
   if (emtyCheck.findEmpty(arr) === false) { return true;}
    for (let i = 1; i <= 9; i++) {  
      const emtyIndex = emtyCheck.findEmpty(arr)
      if (row(arr, i, emtyIndex[0], emtyIndex[1]) && column(arr, i, emtyIndex[0], emtyIndex[1]) && 
      squareCheck(arr, i, emtyIndex[0], emtyIndex[1])) { 
        arr[emtyIndex[1]][emtyIndex[0]] = i; 
        if (solveSudoku(arr)) {
          return arr; 
        } arr[emtyIndex[1]][emtyIndex[0]] = '-';
      } 
    }
    return false;
  }

solveSudoku() 
// function solveAll(maps) {
//   for (let i = 0; i < maps.length; i++) {
//     console.table(solveSudoku(maps[i]));
//   }
// }

// solveAll(allMaps)
