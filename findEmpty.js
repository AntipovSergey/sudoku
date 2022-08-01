function findEmpty(board) {
  const size = 9;
  const boxSize = 3;
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (board[row][col] === '-') {
        return [row, col];
      }
    }
  }
  return null;
}

module.exports = findEmpty;
