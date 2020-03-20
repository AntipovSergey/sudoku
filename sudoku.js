let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const defaultNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const coords = [
	[
		[0, 0],
		[2, 2]
	],
	[
		[0, 3],
		[2, 5]
	],
	[
		[0, 6],
		[2, 8]
	],
	[
		[3, 0],
		[5, 2]
	],
	[
		[3, 3],
		[5, 5]
	],
	[
		[3, 6],
		[5, 8]
	],
	[
		[6, 0],
		[8, 2]
	],
	[
		[6, 3],
		[8, 5]
	],
	[
		[6, 6],
		[8, 8]
	]
];



let boardArr = function (string) {
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
};



function solve(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j] === '-') {
				let square = findSquare([i, j]);
				let numbers = findAllNumbersInSquare(square);
				console.log(numbers);
			}
		}
	}
}

function findSquare(elemCoords) {
	for (let i = 0; i < coords.length; i++) {
		if (elemCoords[0] >= coords[i][0][0] && elemCoords[0] <= coords[i][1][0] && elemCoords[1] >= coords[i][0][1] && elemCoords[1] <= coords[i][1][1]) return i;
	}
}

function findAllNumbersInSquare(position) {
	let needeedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let coordsSquare = coords[position];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (needeedNumbers.includes(boardArr[coordsSquare[0][0]][coordsSquare[0][1]])) {
				needeedNumbers = needeedNumbers.splice(needeedNumbers.indexOf(boardArr[coordsSquare[0][0]][coordsSquare[0][1]], 1));
			}
		}
	}
	return needeedNumbers;
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
