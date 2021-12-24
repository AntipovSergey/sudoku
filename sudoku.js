// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const { strictEqual } = require('assert');
const fs = require('fs');


const text = fs.readFileSync('./project-sudoku/sudoku-puzzles.txt', 'utf-8').split('\n')[0]
function solve(boardString) {
  let arr = []
  for(let i = 0; i < boardString.length; i+=9){
 arr.push(boardString.split('').slice(i,i+9))
  }
return console.table(arr);
}
solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')



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
