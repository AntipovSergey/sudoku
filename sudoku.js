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

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}















function reWrite(array) {
	for (let i = 0; i < array.length; i += 1) {
		for (let j = 0; j < array[i].length; j += 1) {
			if (array[i][j] === 0) {
				array[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		}
	}
	return array
}
console.log(reWrite(test))

