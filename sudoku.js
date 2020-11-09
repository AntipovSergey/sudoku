const { stringToArr } = require('./egor');
const { comparisonSquare } = require('./alexander')

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// console.table(stringToArr('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))


function solve(puzzle) {
  console.log(puzzle);
  let board = stringToArr(puzzle);
  console.table(board);
  solveSolve(board);
}

function solveSolve(board) {
  console.table(board);
  let isSolv = false;
  for (let i = 0; i < board.length; i += 1) {
    let def = board[i].indexOf('-');
    if (def === -1) { continue; };
    let arrayNumber = [];
    for (let k = 1; k <= 9; k += 1) {
        if (comparisonSquare(board, i, def, k)) {
        arrayNumber.push(k);
      }
    }
    if (arrayNumber.length === 1) {
      board[i][def] = String(arrayNumber[0]);
      isSolv = true;
      if (isSolved(board)) { return board };
    }
  }
  if (!isSolv) { return false; }
  return solveSolve(board);
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
