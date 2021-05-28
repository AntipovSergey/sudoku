
let arr = [
  [0, 0, 3, 0, 0, 8, 2, 0, 4],
  [0, 2, 0, 0, 6, 4, 0, 1, 0],
  [9, 0, 0, 0, 0, 0, 0, 0, 8],
  [0, 8, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 9, 8, 0],
  [0, 0, 0, 0, 0, 0, 5, 0, 0],
  [0, 0, 4, 9, 0, 7, 0, 3, 0],
  [8, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 7, 0, 0, 5, 0, 4, 0, 0]
];
function checkHorizontalElements(sudoku, i, j, arrayPossible) {
  if (sudoku[i][j] === 0) {
    for (let k = 0; k < sudoku[i].length; k++) {
      if (sudoku[i][k] !== 0) {
        const index = arrayPossible.findIndex(val => val === sudoku[i][k]);
        if (index != -1) {
          arrayPossible.splice(index, 1);
        }
      }
    }
    return arrayPossible;
  }
}
function checkVerticalElements(sudoku, i, j, arrayPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  if (sudoku[i][j] === 0) {
    for (let k = 0; k < sudoku[j].length; k++) {
      if (sudoku[k][j] !== 0) {
        const index = arrayPossible.findIndex(val => val === sudoku[k][j]);
        if (index != -1) {
          arrayPossible.splice(index, 1);
        }
      }
    }
    return arrayPossible;
  }
}

module.exports = { checkHorizontalElements, checkVerticalElements }


