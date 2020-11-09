const stringToArr = require('./Egor');
const comparisonSquare = require('./alexander')

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
  for (let i = 0; i < board.length; i += 1) {
    let def = board[i].indexOf('-');
    if (def === -1) { return true; };
    let isSolved = false;
    for (let k = 1; k <= 9; k += 1) {
      let arrayNumber = [];
      if (comparisonSquare(board, i, j, k)) {
        arrayNumber.push(k);
      }
    }
    if (arrayNumber.length === 1) {
      board[i][def] = k;
      isSolved = true;
    }
  }
  if (!isSolved) { return false;}
  return isSolved(board);
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
