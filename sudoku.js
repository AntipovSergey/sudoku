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
console.table(solve(getSudokuPuzzle(11)));

function isSolved() {
}

function prettyResult() {

}

module.exports = {
  solve,
  isSolved,
  prettyResult,
};
