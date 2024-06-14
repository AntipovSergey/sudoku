const checkEmpty = (board) => {
  for (let x = 0; x < board.length; x += 1) {
    for (let y = 0; y < board[x].length; y += 1) {
      if (board[x][y] === '-') {
        return [x, y];
      }
    }
  }
  return false;
};
