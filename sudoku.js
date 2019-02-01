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

function isSolved(argSolvedBoard) {
	for (i = 0; i < argSolvedBoard.length; i++) {
		for (j = 0; j < argSolvedBoard.length; j++) {
			if (testPassed(checkLine(j, argSolvedBoard))) {
				if (testPassed(checkColumn(i, argSolvedBoard))) {
					if (testPassed(checkSquare(makeSquare(argSolvedBoard, i, j)))) {


					}
				}
				else return false;
			}
			else return false;
		}
	}
	return true;
}

function testPassed(solvedArray) {
	for (let key in solvedArray) {
		if (solvedArray[key] > 1) {
			return false
		}
	}
	return true
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


// let boartToEnter = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
// function niceBoard(board) {
// 	let result = [];
// 	for (i = 0; i < 81; i += 9) {
// 		result = board.substr(i, 9);
// 		console.log(result);
// 	}
// 	return result;
// }
// niceBoard(boartToEnter);

// console.log('');
// console.log('');
// console.log('');

function isSolved1(board) {



}

function stringToArray(boardString) {
	let boardArray = [];
	for (let i = 9; i < 81; i += 9) {
		boardArray.push(boardString.slice(i - 9, i));
	}
	return boardArray;
}

// console.log(stringToArray('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))

// Djpdhfoztv wbahs rjnjhst yt bcgjkmpoe.ncz
// возвращаем цифры которые не испощьуются

// strinToEnter = "1-58-2---";
// function checkLine(argString) {
// 	let baseDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 	let result = [];
// 	for (i = 0; i < argString.length; i++) {
// 		// let temp = baseDigits[i];
// 		// console.log(`   ${baseDigits[i]}      ${argString[i]}   ${argString[i]}`);
// 		if (argString.indexOf(baseDigits[i]) >= 0) {
// 			result.push(baseDigits[i]);
// 		}
// 	}
// 	return result
// }
// console.log(checkLine(strinToEnter));





function checkColumn(ColumnNumber, InputArray) {
	let result = {};
	let baseDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (let i = 0; i < baseDigits.length; i++) {
		for (let j = 0; j < InputArray.length; j++) {
			if (baseDigits[i] == InputArray[j][ColumnNumber]) {
				if (isNaN(result[baseDigits[i]])) {
					result[baseDigits[i]] = 1;
				}
				else {
					result[baseDigits[i]] = result[baseDigits[i]] + 1;
				}
			}
		}
	}
	return result;
}

let bigArray = stringToArray('1-5822----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');

function checkLine(NumberOfString, InputArray) {
	let baseDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let result = {};
	for (i = 0; i < baseDigits.length; i++) {
		for (let j = 0; j < InputArray[NumberOfString].length; j++) {
			if (baseDigits[i] == InputArray[NumberOfString][j]) {
				if (isNaN(result[baseDigits[i]])) {

					result[baseDigits[i]] = 1;
				}
				else {
					result[baseDigits[i]] = result[baseDigits[i]] + 1;
				}

			}
		}
	}
	return result
}

console.log(bigArray);
console.log("");
console.log(checkColumn(4, bigArray));
console.log("");
console.log(checkLine(0, bigArray));


