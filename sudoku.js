// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {
for (let i = 0; i < boardString.length; i++){

}
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
let str = '';
for (let i = 0; i < board.length; i++){
  str += `${board[i].join('  ')}\n` +`\n`
}
return str;
}
console.log(prettyBoard([[1,4,'-',3,2,4,2,4,4],[1,2,4,5,6,6,],[4,5],[4,5]]));
// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
