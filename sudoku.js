function checkRow(arr, pos, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[pos[0]][i] === num) {
      return false;
    }
  }
  return true;
}

function checkColumn(arr, pos, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][pos[1]] === num) {
      return false;
    }
  }
  return true;
}

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

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
