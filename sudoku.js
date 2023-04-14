
function findSymbol(board) {
  for (let r = 0; r < size; r += 1) {
    for (let c = 0; c < size; c += 1) {
      if (board[r][c] === '-') {
        return [r, c];
      }
    }
  }
  return null;
}
