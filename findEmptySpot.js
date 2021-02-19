const nextEmptySpot = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) return [i, j];
    }
    return [-1, -1];
  }
};

module.exports = { nextEmptySpot };
