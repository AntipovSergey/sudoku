// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
	let parsedArray = parse(boardString)

	return parsedArray;
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

// преобразователь строчки в массив

 function parse (string) {
	 // let newStr =  string.replace(/\-/gm, 0);
	 let arraySudoku = string.match(/.{9}/gm).map(el => el.split(''));
	 return arraySudoku;
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}