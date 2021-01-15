// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function arr_diff (a1, a2) {

	let a = [], diff = [];

	for (let i = 0; i < a1.length; i++) {
			a[a1[i]] = true;
	}

	for (let i = 0; i < a2.length; i++) {
			if (a[a2[i]]) {
					delete a[a2[i]];
			} else {
					a[a2[i]] = true;
			}
	}

	for (let k in a) {
			diff.push(+k);
	}

	return diff;
}


function solve(boardString) {
	let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let boardArr = boardString.replace(/\-/gm, 0).match(/.{9}/gm);
	let board = [];


	let numbersHor = [];
	let numbersVert = [];
	let boardVert = new Array(9).fill('');
	
	for (let i = 0; i < boardArr.length; i++) {
		board[i] = boardArr[i].split('');
		for (let j = 0; j < boardArr.length; j++) {
			board[i][j] = Number(board[i][j]);
		}
	}

for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === 0) {
				numbersHor[i] = arr_diff(numbers, board[i].filter(n => n != 0));
				// board[i][j] = numbersHor[i][Math.floor(Math.random() * numbersHor[i].length)]
			} 
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			boardVert[j] += board[i][j];
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[j][i] === 0) {
				numbersVert = numbersHor[i].filter(n => n != board[i][j])
			} 
		}
	}
	
	for (let i = 0; i < boardVert.length; i++) {
		boardVert[i] = boardVert[i].split('');
		for (let j = 0; j < boardVert[i].length; j++) {
			boardVert[i][j] = +boardVert[i][j];
		}
	}

	for (let i = 0; i < boardVert.length; i++) {
		for (let j = 0; j < boardVert.length; j++) {
			if (boardVert[i][j] === 0) {
				console.log(boardVert[i][j]);
				numbersVert[i] = arr_diff(numbersHor[i], boardVert[i].filter(n => n != 0));
				// board[i][j] = numbersVert[i][Math.floor(Math.random() * numbersHor[i].length)]
			} 
		}
	}

	// console.log(numbersVert[1])

	
	// console.log(numbersVert);


	// return board;

	// console.log(numbersHor[0]);
	// console.log(board[0][0], board[1][0],board[2][0],board[3][0],board[4][0],board[5][0],board[6][0]);

	// console.log(boardArr);
	// console.log(board);
	// console.log(numbersHor[0]);
}


console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].diff([1, 2]);


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