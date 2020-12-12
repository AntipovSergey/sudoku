// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const result = [];
  const boardArr = boardString.split('');
  while (boardArr.length > 0) {
    result.push(boardArr.splice(0, 9));
  }
  return result;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  function isValid(boardV, row, col, k) {
    for (let i = 0; i < 9; i += 1) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (boardV[row][i] == k || boardV[i][col] == k || boardV[m][n] == k) {
        return false;
      }
    }
    return true;
  }
  function sodokoSolver(boardR) {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        if (boardR[i][j] == '-') {
          for (let k = 1; k <= 9; k += 1) {
            if (isValid(boardR, i, j, k)) {
              boardR[i][j] = `${k}`;
              if (sodokoSolver(boardR)) {
                return boardR;
              }
              boardR[i][j] = '-';
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

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.join('\n');
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
