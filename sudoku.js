// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
	let board = [];
		let arrFirst = boardString.split("");
	 board = [[arrFirst.slice(0, 9)], [arrFirst.slice(9, 18)],[arrFirst.slice(18, 27)], [arrFirst.slice(27, 36)],
		[arrFirst.slice(36, 45)], [arrFirst.slice(45, 54)], [arrFirst.slice(54, 63)], [arrFirst.slice(63, 72)],
		[arrFirst.slice(72, 81)]];

}

function name(param) {
	let result = param + 'some text'
	return result
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
	board.reduce(function(sum, current) {
		return sum.concat(current + '\n');
	}, "");
}


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}