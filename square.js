function squareSolution(board, row, column, num) {
  for (let i = 0; i < 9; i++) {
    const squareRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const squareColumn = 3 * Math.floor(column / 3) + (i % 3);
    if (board[squareRow][squareColumn] === num) return false;
  }
  return true;
}

module.exports = { squareSolution };
