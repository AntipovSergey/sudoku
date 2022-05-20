const fs = require('fs');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {

  let mainArr = []
  
  for (let i = 0; i < 81; i+=9) {
    let arr1 = []
    for (let j = i; j < i + 9; j++) {
    arr1.push(sudoku[j])
  }
  mainArr.push(arr1)
  }

  return mainArr

  // console.log('first changes');
}



console.table(solve());

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
