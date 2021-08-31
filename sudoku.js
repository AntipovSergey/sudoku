const { checkNum } = require('./checkNum');
const { getSudokuPuzzle } = require('./parsing');

function solve(arrayOfStrings) {
  for (let row = 0; row < arrayOfStrings.length; row += 1) {
    for (let col = 0; col < arrayOfStrings.length; col += 1) {
      const cell = arrayOfStrings[row][col];

      if (cell === '-') {
        for (let numb = 1; numb <= 9; numb += 1) {
          if (checkNum(arrayOfStrings, [row, col], numb)) {
            arrayOfStrings[row][col] = numb;
            if (solve(arrayOfStrings)) {
              return arrayOfStrings;
            }
            arrayOfStrings[row][col] = '-';
          }
        }
        return false;
      }
    }
  } return arrayOfStrings;
}
const resultOfSolve = solve(getSudokuPuzzle(8));

function isSolved(resultOfSolve) {
  if (resultOfSolve === false) {
    return false;
  }
  return true;
}
const resultisSolved = isSolved(resultOfSolve);

function prettyResult(resultisSolved) {
  if (resultisSolved === false) console.log('Решения нет');
  console.table(resultOfSolve);
}
prettyResult();

module.exports = {
  solve,
  isSolved,
  prettyResult,
};
