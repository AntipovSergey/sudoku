const {
  eugenFunc: checkNum,
} = require('check-numbers');

function solveSudokuLinear(sudoku) {
  let isSolveChanged = true;
  let numbersCount = 0;

  while (isSolveChanged) {
    loop: for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku.length; i++) {
        if (sudoku[i][j] === 0) {
          let allowedNumbers = eugenFunc(i, j, sudoku);
          if (allowedNumbers.length === 1) {
            sudoku[i][j] = allowedNumbers[0];
            isSolveChanged = (i == sudoku.length - 1 && j == sudoku.length - 1) ? false : true;
          }
          break loop;
        }
        if (i == sudoku.length - 1 && j == sudoku.length - 1) {
          isSolveChanged = false;
        }
      }
    }
  }

  return sudoku;
}

module.exports = {
  solveSudokuLinear,
}
