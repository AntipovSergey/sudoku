const map = require('./map.js');
const emtyCheck = require('./emptyCheck.js');
const xYCheck = require('./xYCheck.js')
const squareCheck = require('./3by3Check.js')


const allMaps = map.sudokuMapShifter(9)
function solveSudoku(arr) {
   if (emtyCheck.findEmpty(arr) === false) { return true;}
    for (let i = 1; i <= 9; i++) {  
      const emtyIndex = emtyCheck.findEmpty(arr)
      if (xYCheck.xYCheck(arr, i, emtyIndex[0], emtyIndex[1]) && squareCheck.squareCheck(arr, i, emtyIndex[0], emtyIndex[1])) { 
        arr[emtyIndex[1]][emtyIndex[0]] = i; 
        if (solveSudoku(arr)) {
          return arr; 
        } arr[emtyIndex[1]][emtyIndex[0]] = '-';
      } 
    }
    return false;
  }
  
function solveAll(maps) {
  for (let i = 0; i < maps.length; i++) {
    console.table(solveSudoku(maps[i]));
  }
}

solveAll(allMaps)
