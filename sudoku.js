

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const arrEmpty = [];
  for (let i = 0; i < boardString.length; i += 1) {
    for (let j = 0; j < boardString.length; j += 1) {
      if (boardString[i][j] === '-') {
        arrEmpty.push([i][j])
      }
    }
  }
  return arrEmpty;
}
// console.log(solve(boardString));
  // console.log('test',boardString)



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
