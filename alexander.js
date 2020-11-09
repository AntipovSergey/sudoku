function comparisonSquare(board, i, j, num) {
  const array = [];
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      if (board[i][col] === num) {
        return false;
      }
      if (board[row][j] === num) {
        return false;
      }
      if (board[row][j] === num) {
        return false;
      }
    }
  }
}
