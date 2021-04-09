// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!


let boardString = [
  ["1", "-", "5", "8", "-", "2", "-", "-", "-"],
  ["-", "9", "-", "-", "7", "6", "4", "-", "5"],
  ["2", "-", "-", "4", "-", "-", "8", "1", "9"],
  ["-", "1", "9", "-", "-", "7", "3", "-", "6"],
  ["7", "6", "2", "-", "8", "3", "-", "9", "-"],
  ["-", "-", "-", "-", "6", "1", "-", "5", "-"],
  ["-", "-", "7", "6", "-", "-", "-", "3", "-"],
  ["4", "3", "-", "-", "2", "-", "5", "-", "1"],
  ["6", "-", "-", "3", "-", "8", "9", "-", "-"],
];

function solve(numberB, boardString) {
  
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
