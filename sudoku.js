// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

function solve(board) {
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  find = findEmpty(board);
  if (find) {
    let find = board[row][col];
    for (item of digits) {
      if valid(board, i, (row, col))
     board[row][col] = i;
      if (solve(board))
        return true;
    }
  }
}

function isValid(board, number, position) {
  // Check row
  for (let i of board[i])
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
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
