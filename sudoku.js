// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}
solve(boardString)

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



  let allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let arrayOfExtraElements = []
  let extra = [3, 8, 9, 2]


function comparison(extra) {
	// i - элемент 
	for (let i = 0; i < extra.length; i++) {
		for (let k = 0; k < allowedValues.length; k++) {
			if (allowedValues[k] === extra[i]) {
				// arrayOfExtraElements.push(allowedValues[k])
				allowedValues.splice(k, 1)
			}
		}
	}
	return arrayOfExtraElements
}
comparison(extra)
// console.log(allowedValues);
console.log(extra);