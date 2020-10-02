const {
  getRow,
  getColumn,
  getSquare,
}
 = require('./get.js');

const {
  tableIsFinished,
  isValidArray,
  isValidTable
} = require('./validate.js');

const {
  transform,
  prettyBoard
} = require('./transform.js');

//
// 
// 
// 
//

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board as an array and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Takes a board as an array in the format
// you see in the puzzle file. Returns
// an array representing a board after
// your solver has tried to solve it.
function solve(board) {

}



// Exports all the functions to use them in another file.
module.exports = {
  transform,
	solve,
	isSolved,
	prettyBoard,
}
