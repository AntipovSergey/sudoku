function getEmpty(board) {
  let row = 0;
  while (row < size) {
    row++;
    for (let column = 0; column < size; column++) {
      if (board[row][column] === '-') {
        return [row, column];
      }
    }
  }
  return null;
}
