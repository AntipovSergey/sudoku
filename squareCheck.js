<<<<<<< HEAD
const solve = require('sudoku.js');
=======
const solve = require('sudoku.js')
>>>>>>> 4dfcdbb567cfbb8c08d8c915942c7e1af0c3501a

function squareCheck(num, pos, board) {
  const [r, c] = pos;

  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i += 1) {
    for (let j = boxCol; j < boxCol + 3; j += 1) {
      if (board[i][j] === num && i !== r && j !== c) {
<<<<<<< HEAD
        return false;
=======
        return false
>>>>>>> 4dfcdbb567cfbb8c08d8c915942c7e1af0c3501a
      }
    }
  }
  return true;
}
<<<<<<< HEAD
console.log(squareCheck(4, [0, 1], solve()));
=======
console.log(squareCheck(4, [0, 1], solve()))
>>>>>>> 4dfcdbb567cfbb8c08d8c915942c7e1af0c3501a
