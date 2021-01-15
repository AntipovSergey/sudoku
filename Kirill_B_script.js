function isSolved(board, row, col, prob) {
  for (let i = 0; i < 9; i++) {
    const check = 3 * Math.floor(row / 3) + Math.floor(i / 3)
    const check2 = 3 * Math.floor(col / 3) + Math.floor(i / 3)
    if ((board[row][i] === prob) || (board[i][col] === prob) || (board[check][check2] === prob)) {
      return false
    }
  }
  return true
}



