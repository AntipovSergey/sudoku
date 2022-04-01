// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let boardString = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function solve(boardString) {
  //get sizes of Sudoku
  const size = 9;
  const boxSize = 3;

  /* finding empty cell in our board
findEmptyCell is required function
 variable 'r' is row
 variable 'c' is column
*/

  /* checking whether number is valid in current cell
  function isNumAcceptableInCell (num, pos, board)*/

  // in validate we check row, column and boxes

  // check row
  // index 'i' is for row
  for (let i = 0; i < size; i += 1) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  //check columns
  // index 'i' is for columns


    //check boxes
  // index 'i' is for columns



// recursive method for sudoku
// variable 'x' is for rows
// variable 'y' is for columns



}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  initial;
}

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
