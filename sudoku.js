const fs = require('fs');
const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const sudokuParse = require('./runner');
const sampleArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
//console.log(sudokuParse(sudokuPuzzles, 1));
// console.table(sudokuGrid);
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const massives = 9;
  const massiveNumber = 9;
  const sudokuGrid = [];
  for (let i = 0; i < 9; i++) {
    const arr = [];
    for (let j = 0; j < 9; j++) {
      arr.push(boardString[i * 9 + j]);
    }
    sudokuGrid.push(arr);
  }
  const newArr = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudokuGrid[i][j] === '-') {
        newArr.push([i, j]);
      }
      else{
        continue;
      }
    }
  }
  const arrOfPositions = [];
  let counter = 1;
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
    const squareArr = [];
    for (let k = 0; k < 3; k += 1) {
      for (let l = 0; l < 3; l += 1) {
        for (let element of newArr) {
          if (element.join('') == [k + j,l + i].join('')) {
            squareArr.push(element);
          }
        } 
      }
    }
  arrOfPositions.push(squareArr);
  counter++;
}
}
  console.log(newArr, newArr.length, arrOfPositions, arrOfPositions.length);
  console.table(sudokuGrid);
  console.log(newArr);
}
solve(sudokuParse(sudokuPuzzles, 0));
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
// function prettyBoard(board) {
// }
// Exports all the functions to use them in another file.
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
