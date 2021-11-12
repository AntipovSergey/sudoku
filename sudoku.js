// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function isSolved(board) {

	const xBoard = board.Math.floor(x / 3) * 3
	const yBoard = board.Math.floor(y / 3) * 3
	
	  for (let y = 0; y <= yBoard; y += 1) {
		for (let x = 0; x <= xBoard; x += 1) {
		  if (xBoard[y][x] === n || yBoard[x][y] === n){
			return false
		  } else {
			return true 
		  }
		}
	  }
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