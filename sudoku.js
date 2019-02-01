// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
	let count = 0;
	let str = [];
	let boardFirst = [];
	for(let i = 0; i <= boardString.length; i++){
		if(count == 9) {
			boardFirst.push(str.slice(0, 9))
			count = 0;
			str.splice(0, 81);
		}
		str.push(boardString[i]);
		count++;
	}	
	return boardFirst
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