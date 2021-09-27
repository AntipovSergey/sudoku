//Takes an index of sudoku from .txt file
//Converts into nested arrays with 9 elem-s
//Returns result [[1, '-', 2, 3, 4, '-', 6, '-', 8, 9], [...]]
function pars(index) {
	const fs = require("fs");

	let filePath = "./sudoku-puzzles.txt";
	let allSudoku = fs.readFileSync(filePath, "utf8").split("\n");
	let count = [0,0];
	let res = [[], [], [], [], [], [], [], [], []];

	for (let i of allSudoku[index]) {
		console.log(typeof(i));
		(i != '-') ? res[count[1]].push(Number(i)) : res[count[1]].push(i);
		count[0]++;
		(count[0] % 9 === 0) ? count[1]++ : null;
	}
	return res
}

console.log(pars(0));

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
