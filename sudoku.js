let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function createSudokuBoard(string) {
	let board = [];
	let boardArr = string.split('');

	for (let i = 0; i < 9; i++) {
		let row = [];
		for (let j = 0; j < 9; j++) {
			row.push(boardArr[j]);
		}
		boardArr = boardArr.slice(9, );
		board.push(row);
	}
	return board;
}
console.log(createSudokuBoard(boardString));

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(board = createSudokuBoard(boardString)) {
	for (let row of board) {
		for (let i = 0; i < row.length; i++) {
			if (row[i] === '-') {
				searchNums(row[i]);
			}

		}
	}
}

function findSquare(board, elem) {
	let coords = {
		1: [
			[],
			[]
		],
		2: [
			[],
			[]
		],
		3: [
			[],
			[]
		],
		4: [
			[],
			[]
		],
		5: [
			[],
			[]
		],
		6: [
			[],
			[]
		],
		7: [
			[],
			[]
		],
		8: [
			[],
			[]
		],
		9: [
			[],
			[]
		]
	};


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
