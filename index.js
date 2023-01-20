const checkRow = (num, pos, board) => {
  const [r, c] = pos;

  // Check rows
  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  // Check cols
  for (let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }

  // Check box
  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;

  for (let i = boxRow; i < boxRow + boxSize; i++) {
    for (let j = boxCol; j < boxCol + boxSize; j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }

  return true;
};
module.exports = checkRow;
