const solve = require('sudoku.js')

function squareCheck(num, pos, board) {
  const [r, c] = pos;

  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i += 1) {
    for (let j = boxCol; j < boxCol + 3; j += 1) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false
      }
    }
  }
  return true;
}
console.log(squareCheck(4, [0, 1], solve()))