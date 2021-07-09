// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

//  [ '105802000'], 
//   '090076405',
//   '200400819', 
//   '019007306',
//   '762083090', 
//   '000061050',
//   '007600030', 
//   '430020501',
//   '600308900']

function solve(boardString) {

}
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let newArr = str.replace(/-/gmi,"0")
let arr = newArr.match(/\d{9}/gmi);
console.log(arr)

// let columnArray = arr2[0].map((_, el) => arr2.map(arr2[0] => arr2[0][el]))
let arr2 = arr.map((el => el.split('')));
const column = arr2[0].map((_,i) => [arr2[0][i], arr2[1][i], arr2[2][i], arr2[3][i], 
arr2[4][i], arr2[5][i], arr2[6][i], arr2[7][i], arr2[8][i]])
let columnString = column.map(el => el.join(''))










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