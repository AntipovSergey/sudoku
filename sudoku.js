const fs = require('fs');
const contentFromTextFile = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let string =
  "29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9";

function solve(boardString) {
  let newArr = [];
  for (let i = 0; i < boardString.length; i += 9) {
    newArr.push(boardString.slice(i, i + 9).split(""));
  }
  return newArr;
}
console.log(solve(string));

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
