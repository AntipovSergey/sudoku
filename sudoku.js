// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Custom function: delete item from array
function removeItem(arr, value) {
  return arr.filter((ele) => ele != value);
}

function solve(boardString) {
  console.log('first changes');

  // Convert string into array[array of numbers]
  const board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(boardString.replaceAll('-', 0).slice(i, i + 9).split('').map(Number));
  }
  console.table(board);
  //   console.log(board);

  return board;
}

function checkString(board, x, y) {
  let options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < 9; i++) {
    for (let rowI = 0; rowI < 9; rowI++) {
      if (options.includes(board[x][rowI])) {
        options = removeItem(options, board[x][rowI]);
      }
    }
  }
  if (options.length === 1) board[x][y] = [...options];

  return checkColumn(board, x, y, options);
}

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
};
