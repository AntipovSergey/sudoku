function checkSquare(board, coords, value) {
  const squareRow = parseInt(coords[0] / 3) * 3;
  const squareCol = parseInt(coords[1] / 3) * 3;
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (board[i + squareRow][j + squareCol] === value.toString()) {
        return false;
      }
    }
  }
  return true;
}

module.exports = checkSquare;
