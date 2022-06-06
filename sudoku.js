// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
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
  let arr = board.split('');
  arr.splice(0, 0, '\n');
  arr.splice(10, 0, '\n');
  arr.splice(20, 0, '\n');
  arr.splice(30, 0, '\n');
  arr.splice(40, 0, '\n');
  arr.splice(50, 0, '\n');
  arr.splice(60, 0, '\n');
  arr.splice(70, 0, '\n');
  arr.splice(80, 0, '\n');
  const result = arr.join(' ');
  return result;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
