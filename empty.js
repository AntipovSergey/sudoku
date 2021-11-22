const fs = require('fs');
const sudokuParse = require('./runner');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

const board = sudokuParse(content, 1);

function empty(boar) {
  for (let i = 0; i < boar.length; i++) {
    for (let k = 0; k < boar[i].length; k++) {
      if (boar[i][k] === 0) {
        return [i, k];
      }
    }
  }
  return null;
}
console.log(empty(board));
module.exports = empty;

