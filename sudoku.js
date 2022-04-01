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
  counter = 1;
  for (i = 0; i < 9; i += 3){
    for (j = 0; j < 9; j += 3){
    squareArr = [];
    for (k = 0; k < 3; k++)
      for (l = 0; l < 3; l++){
        for (let element of newArr){
          if (element.join('') == [k+j,l+i].join('')) {
            arrOfPositions.push(counter);
          }
        }
      }
      counter++;
  }
}
  console.log('first changes', sudokuGrid, newArr, newArr.length, arrOfPositions, arrOfPositions.length, counter);
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
