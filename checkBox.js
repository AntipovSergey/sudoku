function checkBox(indexI, indexK, arr, row, column, boxSize, board, num) {
  const boxRow = Math.floor(row / boxSize) * boxSize;
  const boxColumn = Math.floor(column / boxSize) * boxSize;

  for (let i = boxRow; i <= boxRow + boxSize; i++) {
    for (let k = 0; k < boxColumn + boxSize; k++) {
      if(board[i][k] === num && i !== row && k !== column) {
        return false;
      }
    }
  }
  return true;
}

module.exports = { checkBox };
