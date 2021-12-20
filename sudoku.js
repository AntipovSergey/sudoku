const _board = [
  ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
  ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
  ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
  ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
  ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
  ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
  ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];
// console.table(_board);

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const arr = boardString.split('')
  console.log('arr>>>', arr)
  return arr
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
