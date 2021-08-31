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

function isSolved(indexArr) {
const resultOfSolve = solve(getSudokuPuzzle(indexArr));
  if (resultOfSolve === false) {
    return false;
  }
  return resultOfSolve;
}

function prettyResult(indexArr) {
  const resultisSolved = isSolved(indexArr);
  if (resultisSolved === false) console.log('Решения нет');
  console.table(resultisSolved);
}
prettyResult(process.argv[2]);

module.exports = {
  solve,
  isSolved,
  prettyResult,
};
