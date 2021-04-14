
const boardSize = 9;
const boardBoxSize = 3;

function validate(num, position, board) {
  [row, col] = position;
  //String validator
  for (let i = 0; i < boardSize; i += 1) {
    if (board[i][col] === num && i !== row) {
      return false;
    }
  }
  //Column validator
  for (let i = 0; i < boardSize; i += 1) {
    if (board[row][i] === num && i !== col) {
      return false;
    }
  }
  // Box validator
  const boxRow = Math.floor(row / boardBoxSize) * boardBoxSize;
  const boxColumn = Math.floor(col / boardBoxSize) * boardBoxSize;
  for (let i = boxRow; i < boxRow + boardBoxSize; i += 1) {
    for (let j = boxColumn; j < boxColumn + boardBoxSize; j += 1) {
      if (board[i][j] === num && i !== row && j !== col) {
        return false;
      }
    }
  }
  return true;
}
module.exports = validate;
