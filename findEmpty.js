function findEmpty(board) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === '-') {
        return [y, x];
      }
    }
  }
  return 'finish';
}

module.exports = findEmpty;
