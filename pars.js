const fs = require('fs');

// const array = [];
let pars = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function getArrayOfStrings(arr) {
  arr = pars.split('\n');
  arr.pop();
  return arr;
}

// console.log(getArrayOfStrings(pars));
const arrayOfPuzzles = getArrayOfStrings(pars)

function parsing(indexPuzzle) {
  const puzzle = arrayOfPuzzles[indexPuzzle-1]
  const arr = [];
  for (let i = 0; i < puzzle.length; i += 9) {
    arr.push(puzzle.slice(i, i+9).split(''))
  }
  console.log(arr);
  return arr
}

// parsing(13)
module.exports = {parsing}
