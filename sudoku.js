// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const fs = require("fs");
const boardString = fs.readFileSync('./sudoku-puzzles.txt','utf-8');

function boardToArray(boardString, n) {
  const boardChanged = boardString.replace(/-/gmi, 0);
  const kek = boardChanged.match(/.{81}/gmi);
  const boardArr = kek[n].match(/(\d{9})/gmi);
  return boardArr.map((el) => el.split(''));
}

// function boardToColumnSearch() {
//   const arr = boardToArray(boardString);
//   const resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       resultArr.push(arr[j][i]);
//     }
//   }
//   return resultArr.join('').match(/(\d{9})/gmi);
}

// const result = boardToArray(boardString);

// console.log(result.split(''));

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
