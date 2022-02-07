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

let input = [
  ["5", "3", "-", "-", "7", "-", "-", "-", "-"],
  ["6", "-", "-", "1", "9", "5", "-", "-", "-"],
  ["-", "9", "8", "-", "-", "-", "-", "6", "-"],
  ["8", "-", "-", "-", "6", "-", "-", "-", "3"],
  ["4", "-", "-", "8", "-", "3", "-", "-", "1"],
  ["7", "-", "-", "-", "2", "-", "-", "-", "6"],
  ["-", "6", "-", "-", "-", "-", "2", "8", "-"],
  ["-", "-", "-", "4", "1", "9", "-", "-", "5"],
  ["-", "-", "-", "-", "8", "-", "-", "7", "9"]
];

function prettyBoard(board) {
  let result = [];
  for (let i = 0; i < board.length; i++){
    result.push(board[i].join(' ') + '\n')
  }
  return result.join('')
}

console.log(prettyBoard(input))

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
