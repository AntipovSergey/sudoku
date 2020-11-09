// Функция по уточнению вариантов в квадрате

// let board = [
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
//   ['5', '6', '-', '8', '9', '-', '-', '-', '7'],
// ];
// let i = 0;
// let j = 2;
// let num = 1;

function comparisonSquare(board, i, j, num) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      if (board[i][col] == num) {
        return false;
      }
      if (board[row][j] == num) {
        return false;
      }
      // console.log(Math.floor(i / 3) + row % 3);
      // console.log(Math.floor(j / 3) + col % 3);
      
      if (board[Math.floor(i / 3) + row % 3][Math.floor(j / 3) + col % 3] == num) {
        return false;
      }
    }
  }
  return true
}


function isSolved(board) {
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      if (board[row][col] == '-') {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  comparisonSquare,
  isSolved
}
