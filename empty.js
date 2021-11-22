function empty(board) {
  for (let i = 0; i < board[0].length; i++) {
    for (let k = 0; k < board[0].length; k++) {
      if (board[i][k] === 0) {
        return [i, k];
      }
    }
  }
  return "done";
}
