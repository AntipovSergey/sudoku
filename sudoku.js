// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

let puzzle = [
  [1,null,5,8,null,2,null,null,null],
  [null,9,null,null,7,6,4,null,5],
  [2,null,null,4,null,null,8,1,9],
  [null,1,9,null,null,7,3,null,6],
  [7,6,2,null,8,3,null,9,null],
  [null,null,null,null,6,1,null,5,null],
  [null,null,7,6,null,null,null,3,null],
  [4,3,null,null,2,null,5,null,1],
  [6,null,null,3,null,8,9,null,null]
]

function checkColumn(data, number, j){
  for(let i = 0; i < data.length; i++) {
    if (data[i][j] === number) return false;
  }
  return true;
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
