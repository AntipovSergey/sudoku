function checkMatchInBlock(sudoku, i, j, arrayPossible) {
  let startSquareCoordX = Math.floor(i / 3) * 3;
  let startSquareCoordY = Math.floor(j / 3) * 3;

  for (let i = startSquareCoordX; i < 3 + startSquareCoordX; i += 1) {
    for (let j = startSquareCoordY; j < 3 + startSquareCoordY; j += 1) {
      if (sudoku[i][j] !== 0) {
        const index = arrayPossible.findIndex((val) => val === sudoku[i][j]);
        if (index != -1) {
          arrayPossible.splice(index, 1);
        }
      }
    }
  }
  return arrayPossible;
}

module.exports = checkMatchInBlock;
