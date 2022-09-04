function findEmptyCell(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let y = 0; y < board.length; y += 1) {
      if (board[i][y] === '-') {
        return [i, y];
      }
    }
  }
  return null;
}

module.exports = {
  findEmptyCell,
}