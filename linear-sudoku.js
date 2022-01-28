<<<<<<< HEAD
//const sudoku = ;

function solveSudokuLinear(sudoku) {
  let isSolveChanged = true;
  let numbersCount = 0;
  let startI = 0;
  let startj = 0;

  while (isSolveChanged) {
    loop: for (let i = startI; i < sudoku.length; i++) {
      for (let j = startJ; j < sudoku.length; i++) {
        if (sudoku[i][j] === 0) {
          let allowedNumbers = eugenFunc(i, j);
          if (allowedNumbers.length === 1) {
            sudoku[i][j] = allowedNumbers[0];
            startI = (j < 9) ? i : i + 1;
            startJ = (j < 9) ? j + 1 : 0;
            isSolveChanged = (startI == sudoku.length) ? false : true;
            numbersCount++;
          }
          break loop;
        }
        numbersCount++;
        if (i == sudoku.length - 1 && j == sudoku.length - 1) {
          isSolveChanged = false;
        }
      }
    }
  } 

  while (count !== 81) {
    if (go()) {
      start = 0;
      count = 0;
    }
  }

  return [sudoku, numbersCount === 81];
}

// module.exports = {
//   eugenFunc,
// }
