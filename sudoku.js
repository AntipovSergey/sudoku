/* // Takes a board as a string in the format
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
  return true;
}

function findEmpty (board){
  for (let i of board){
    for (le j = 0; j < board.length; j += 1){
      if (board[i][j] === 0)
      return (i,j)
    }
  }
  return false;
}


function isValid(board, number, position) {
  // Check row
  for (let i of board[0].length)
  if ((board[position][0][i]) === num && position[1] != i)
  return false
  // Check column
  for (let i of board.length){
    if (board[i][position[1]] == number && position[0] != i)
    return false;
  }
// Check box 

let box_x = postiion[1] / 3;
let box_y = position[0] / 3;

for (let i of (box_y * 3, box * 3 + 3){
  for (let j of (box_x * 3, box_x * 3 + 3){
    if (board[i][j] === num && (i,j) != poistion) return false;
  }
}
retrun 
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
 */


function sudokuSolver(board) {
  for (let vertical = 0; vart < board.length; vertical += 1) {
    for (let horizontal = 0; horizontal < board.length; horizontal += 1) {
      console.log
    }
  }
}

let board = [
  [

  ]
]
