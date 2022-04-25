// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(text) {
  function valid(n, cord, sudoku) {
    const [a, b] = cord;
    for (let i = 0; i < sudoku.length; i += 1) {
      if (sudoku[i][b] === n && i !== a) {
        return false;
      }
    }
    for (let i = 0; i < sudoku.length; i += 1) {
      if (sudoku[a][i] === n && i !== b) {
        return false;
      }
    }
    const cubeA = Math.floor(a / sudoku.length) * sudoku.length;
    const cubeB = Math.floor(b / sudoku.length) * sudoku.length;
    for (let i = cubeA; i < cubeA + 9; i += 1) {
      for (let g = cubeB; g < cubeB + 9; g += 1) {
        if (sudoku[i][g] === n && i !== a && g !== b) {
          return false;
        }
      }
    }
    return true;
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
  solve,
  isSolved,
  prettyBoard,
};
