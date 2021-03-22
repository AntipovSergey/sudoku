// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

const arrayStrSolve = boardString.split('');

const rowVerticale1 = arrayStrSolve.slice(0,9);
const rowVerticale2 = arrayStrSolve.slice(9,18);
const rowVerticale3 = arrayStrSolve.slice(18,27);
const rowVerticale4 = arrayStrSolve.slice(27,36);
const rowVerticale5 = arrayStrSolve.slice(36,45);
const rowVerticale6 = arrayStrSolve.slice(45,54);
const rowVerticale7 = arrayStrSolve.slice(54,63);
const rowVerticale8 = arrayStrSolve.slice(63,72);
const rowVerticale9 = arrayStrSolve.slice(72,81);

const resultArr = [];

resultArr.push(rowVerticale1, rowVerticale2, rowVerticale3, rowVerticale4, rowVerticale5, rowVerticale6, rowVerticale7, rowVerticale8, rowVerticale9)
return resultArr;
}
const board = solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');

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
	const prettyBord = board.map((item) => item.map((el) => {
		if (el === '-') {
			return '-'
        } else {
			return el = el}
        }).join(' ')).join('\n');
		// console.log(board);
        return prettyBord;
}
console.log(prettyBoard(board));

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}