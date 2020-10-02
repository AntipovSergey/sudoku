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

Object.defineProperty(Array.prototype, 'chunk', {
	value: function(chunkSize){
		var temporal = [];

		for (var i = 0; i < this.length; i+= chunkSize){
			temporal.push(this.slice(i,i+chunkSize));
		}

		return temporal;
	}
});

let input = ['1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'].join('').split('');
let array = input.chunk(9)
console.log(array)

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}