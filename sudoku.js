// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let result = [...board];
  while (!isSolved(result)) {
    for (let i = 0; i < result.length; i++) {
      for (let y = 0; y < result[i].length; y++) {
        if (result[i][y] === '-') {
          for (let x = 1; x <= 9; x++) {
            let possibleResults = [];
            if (
              checkRow(result, x, i) &&
              checkColumn(result, x, y) &&
              searchBox(result, i, y, x)
            ) {
              possibleResults.push(x);
              if (possibleResults.length === 1) {
                result[i][y] == x;
              } else {
                continue;
              }
            } else {
              continue;
            }
          }
        }
        continue;
      }
    }
  }
  return result;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let y = 0; y < board[i].length; y++) {
      if (board[i][y] === '-') return false;
      continue;
    }
  }
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
