const findEmpty = require('./findEmpty');

const validate = (num, pos, board) => {
  const size = 9;
  const boxSize = 3;
  const [r, c] = pos;

  // check rows
  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  // check columns
  for (let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }

  // check boxes
  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;

  for (let i = boxRow; i < boxRow + boxSize; i++) {
    for (let j = boxCol; j < boxCol + boxSize, j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }
  return true;
};

module.exports = validate;
