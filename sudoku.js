function render(boardString) {
  const result = [];
  const boardArr = boardString.split('');
  while (boardArr.length > 0) {
    result.push(boardArr.splice(0, 9));
  }
  return result;
}

function isSolved(board) {
  function isValid(boardValid, row, col, k) {
    for (let i = 0; i < 9; i += 1) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (boardValid[row][i] == k || boardValid[i][col] == k || boardValid[m][n] == k) {
        return false;
      }
    }
    return true;
  }
  function sodokoSolver(boardRecursive) {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        if (boardRecursive[i][j] == '-') {
          for (let k = 1; k <= 9; k += 1) {
            if (isValid(boardRecursive, i, j, k)) {
              boardRecursive[i][j] = `${k}`;
              if (sodokoSolver(boardRecursive)) {
                return boardRecursive;
              }
              boardRecursive[i][j] = '-';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  return sodokoSolver(board);
}

function prettyBoard(board) {
  return board.join('\n');
}

module.exports = {
  render,
  isSolved,
  prettyBoard,
};
