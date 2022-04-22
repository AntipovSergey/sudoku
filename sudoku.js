// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
}
// const board = solve(boardString);

const board = [
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
];

function groupCheck(board, indexRow, indexColumn, options) {
  const row = Math.floor(indexRow / 3) * 3; // старт строки
  console.log(row);
  const colomn = Math.floor(indexColumn / 3) * 3; // старт столбца
  console.log(colomn);
  const endRow = row + 3; // старт строки
  console.log(endRow);
  const endColomn = colomn + 3; // старт столбца
  console.log(endColomn);
  for (let yy = colomn; yy < endColomn; yy += 1) { // цикл проверки первого ряда в группе
    for (let xx = row; xx < endRow; xx += 1) {
      if (options.indexOf(board[xx][yy]) !== -1) options.splice(options.indexOf(board[xx][yy]), 1);
      console.log(options)
    }
  }
}
console.log(groupCheck(board, 2, 7, [1, 3]));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  groupCheck,
};
