function checkHorizontalElements(sudoku, i, j, arrayPossible) {
  if (sudoku[i][j] === 0) {
    for (let k = 0; k < sudoku[i].length; k++) {
      if (sudoku[i][k] !== 0) {
        const index = arrayPossible.findIndex((val) => val === sudoku[i][k]);
        if (index != -1) {
          arrayPossible.splice(index, 1);
        }
      }
    }
    return arrayPossible;
  }
  return arrayPossible;
}
function checkVerticalElements(sudoku, i, j, arrayPossible) {
  if (sudoku[i][j] === 0) {
    for (let k = 0; k < sudoku[j].length; k++) {
      if (sudoku[k][j] !== 0) {
        const index = arrayPossible.findIndex((val) => val === sudoku[k][j]);
        if (index != -1) {
          arrayPossible.splice(index, 1);
        }
      }
    }
    return arrayPossible;
  }
  return arrayPossible;
}

module.exports = { checkHorizontalElements, checkVerticalElements };
