const { start } = require("node:repl");
const shamilCheck = require("./shamil");
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(board) {
  start:
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let arrayPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      arrayPossible = shamilCheck.checkHorizontalElements(board,i,j, arrayPossible);
      console.log(arrayPossible);
      arrayPossible = shamilCheck.checkVerticalElements(board,i,j, arrayPossible);
      if (arrayPossible.length === 1){
        board[i][j] == arrayPossible[0];
        continue start;
      }
    }
  }
  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return board.every((el) => el !== 0);
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  console.table(board);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
