const getArrayPuzzles = require('./parser');
const solve = require('./solve');

let puzzles = getArrayPuzzles

function solveSudoku(arr, indexArr) {
  let puzzle = arr(indexArr)
  solve(puzzle);
  return puzzle;
};

console.table(puzzles(15));
console.table(solveSudoku(puzzles, 5));
