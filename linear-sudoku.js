const {
  eugenFunc: checkNum,
} = require('check-numbers');

const sudoku = [
  [0, 9, 4, 0, 0, 0, 8, 3, 0],
  [0, 0, 2, 3, 0, 6, 7, 4, 0],
  [0, 5, 7, 2, 8, 0, 1, 0, 0],
  [2, 0, 0, 4, 0, 0, 0, 0, 0],
  [5, 0, 1, 7, 6, 0, 4, 2, 9],
  [0, 0, 0, 9, 2, 8, 0, 6, 0],
  [1, 3, 0, 0, 0, 0, 9, 8, 0],
  [0, 4, 6, 8, 3, 1, 0, 5, 0],
  [0, 0, 8, 0, 0, 0, 0, 0, 0]
];

function solveSudokuLinear(sudoku) {
  let isSolveChanged = true;

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

console.log(solveSudokuLinear(sudoku));

module.exports = {
  solveSudokuLinear,
}
