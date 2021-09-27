// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(arrBoard) {
  const size = 9;
  const box = 3;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (arrBoard[r][c] === '-') {
        for (let num = 9; num >= 1; num--) {
          if (correctNum(arrBoard, num) === true) {
            arrBoard[r][c] = num;
            solve(arrBoard)
          }
        }
      }
    }
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

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
