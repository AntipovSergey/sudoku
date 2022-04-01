const findEmpty = (board) => {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c <size; c++) {
      if(board[r][c] === '-') {
        return [r, c];
      }
    }
  }
};
module.exports = findEmpty;
