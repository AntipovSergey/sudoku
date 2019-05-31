// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

};


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
	let boardArr = board.split('');
	let temp = [];
	for (let i = 0; i < 9; i++) {
		temp[i] = boardArr.splice(0, 9);
	};
	return temp;
}


module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
console.log(prettyBoard(boardString));