function findEmpty(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let k = 0; k < board[i].length; k += 1) {
      if (board[i][k] === 0) {
        return [i, k];
      }
    }
  }
  return null;
}
module.exports = findEmpty;
