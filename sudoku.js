// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.

// const { strict } = require("assert/strict");

// How you represent your board is up to you!
function solve(boardString) {
  const boardSudoko = [];

  let str;

  for (let i = 0; i < boardString.length; i += 9) {
  str = boardString.slice(i , i+9).split('');
  boardSudoko.push(str);
  }
  isSolved(boardSudoko);
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
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
