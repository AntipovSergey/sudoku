function solve(boardString) {
  return boardString.match(/.{9}/gm).map(el => el.split('').map(el => el === '-' ? 0 : +el));
}

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (checkValid(board, i, j, k)) {
            board[i][j] = k;
            if (isSolved(board)) return board; 
            else board[i][j] = 0;
          }
        } return false
      }
    }
  } return true;
}

function checkValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    let m = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    let n = Math.floor(col / 3) * 3 + i % 3;
    if (board[row][i] === num || board[i][col] === num || board[m][n] === num) return false;
  } return true;
}

module.exports = { solve, isSolved }
