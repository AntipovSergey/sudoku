// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function arraytoString(sudoku) {
  let result = [];
  let arrNew = sudoku.split('');
  let arr = [];
  for (let i = 0; i < arrNew.length; i++) {
    arr.push(arrNew[i]);
    if ((i + 1) % 9 === 0) {
      result.push(arr);
      arr = [];
    }
  }
  return result;
}

let array = arraytoString(
  '-96-4---11---6---45-481-39---795--43-3--8----4-5-23-18-1-63--59-59-7-83---359---7'
);

function isValid(board, y, x, num) {
  for (let i = 0; i < 9; i++) {
    // координаты бокса
    const m = 3 * parseInt(y / 3) + parseInt(i / 3);
    const n = 3 * parseInt(x / 3) + (i % 3);
    if (board[y][i] == num || board[i][x] == num || board[m][n] == num) {
      return false;
    }
  }
  return true;
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '-') {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, i, j, num)) {
            board[i][j] = num.toString();
            if (solve(board)) {
              return board;
            } else {
              board[i][j] = '-';
            }
          }
        }
        return false;
      }
    }
  }
  return board;
}

let boardSolved = solve(array);

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let y = 0; y < board[i].length; y++) {
      if (board[i][y] === '-') return false;
    }
  }
  return true;
}

console.log(solve(array));
console.log(isSolved(boardSolved));

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
