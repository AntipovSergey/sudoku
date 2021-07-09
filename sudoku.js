const fs = require("fs")
let boardString = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')

function solve(boardString) {
  let newStr =  boardString.replace(/\-/gm, 0)

  return newStr.match(/.{9}/gm).map(el => el.split(''))
}
 console.log(solve(boardString))


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
