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

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

function getSquare(arr, row, col) {
	let newArr = [];
	xSquare = Math.floor(row / 3)
	ySquare = Math.floor(col / 3)
  
	for (let r = 0; r < 9; r++) {
	  if (Math.floor(r / 3) === xSquare) {
		for (let c = 0; c < 9; c++) {
		  if (Math.floor(c / 3) === ySquare) {
			newArr.push(arr[r][c])
		  }
		}
	  }
	}
	return newArr;
  }