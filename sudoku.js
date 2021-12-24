// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const { strictEqual } = require('assert');
const fs = require('fs');
const text = fs.readFileSync('./project-sudoku/sudoku-puzzles.txt', 'utf-8')
console.log(text)
// function solve(boardString) {
// 	const Array = [];
// 	for(let i = 0;i < 0; i+=1 )	({
// 		// Array.push(string.slice(i,i+8).split(''));
// 	}
// 	// console.table(Array);
// 	return Array

// }


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

function randomNum (str){
	let num = 0;
	for ( let i=0;i<str.length; i+=1 ){
		if (str[i] === '-'){
			 return Math.floor(Math.random()*9)
			}			
		}
	}
	console.log (randomNum('1-58-2----9-'))


// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
