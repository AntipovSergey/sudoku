// file = (string) filepath of the file to read
const fs = require("fs");
let fileContent = fs.readFileSync("sudoku-puzzles.txt", "utf8");


function createBoard(array, flag) {  // if flag == true func returns array of arrays, otherwise it returns single array
  if (flag === true) {
    let size = 9;
    let result = [];
    for (let i = 0; i < 9; i++) {
      result[i] = array.slice((i * size), (i * size) + size);
    }
    return result;
  }
  let result = [];
  for (let i = 0; i < 81; i++) {
    result[i] = array[i];
  }
  return result;
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

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

console.log(createBoard(fileContent, false));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
