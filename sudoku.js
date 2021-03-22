// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const arrayStrSolve = boardString.split('');

  const resultArr = [];
  for (let i = 0; i < arrayStrSolve.length / 9; i++) {
    resultArr[i] = arrayStrSolve.slice((i * 9), (i * 9) + 9);
  }

  return resultArr;
}
const board = solve('-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--');
console.log(board);

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '-') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, i, j, k)) {
            board[i][j] = `${k}`;
            if (isSolved(board)) {
              return true;
            }
            board[i][j] = '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}
function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (Number(board[row][i]) === k || Number(board[i][col]) === k || Number(board[m][n]) === k) {
      return false;
    }
  }
  return true;
}
console.log(isSolved(board));

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
prettyBoard(board);
function prettyBoard(board) {
  const prettyBord = board.map((item) => item.map((el) => {
    console.log(el)
    if (el === '-') {
      return '-';
    }
    return el;
  }).join(' ')).join('\n');
  console.log(board);
  return prettyBord;
}
// console.log(prettyBoard(board));

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
