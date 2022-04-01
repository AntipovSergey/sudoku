for (let i = 0; i < size; i += 1) {
  if (board[i][c] === num && i !== r) {
    return false;
  }
}
