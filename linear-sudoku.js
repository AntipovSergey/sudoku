const {
  checkNum,
} = require('./check-numbers');
function solveSudokuLinear(sudoku) {
  let start = 0;
  let count = 0;
  const go = () => {
    console.log(count);
    for (let i = start; i < 81; i++) {
      count++;
      let x = Math.floor(i / 9);
      let y = i % 9;
      if (sudoku[x][y] === 0) {
        let allowedNumbers = checkNum(x, y, sudoku);
        if (allowedNumbers.length === 1) {
          sudoku[x][y] = allowedNumbers[0];
          return true;
        } else {
          start = i + 1;
          return false;
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
  return sudoku;}module.exports = {  solveSudokuLinear,}
