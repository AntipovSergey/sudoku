const shamilCheck = require("./shamil");
const checkMatchInBlock = require("./blockCheck");

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(board) {
  start:
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if(board[i][j] === 0){
        let check1 = [];
        let check2 = [];
        let check3 = [];
        let arrayPossible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        check1 = shamilCheck.checkHorizontalElements(board,i,j, arrayPossible);
        if (check1.length !== 0){
          check2 = shamilCheck.checkVerticalElements(board,i,j, check1);
        }
        if (check2.length !== 0){
          check3 = checkMatchInBlock(board,i,j, check2);
        }
        if (check3.length === 1){
          board[i][j] = check3[0];
          solve(board);
          continue start;
        }
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
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) {
        return false        
      }        
    }   
  }
  return true;
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
