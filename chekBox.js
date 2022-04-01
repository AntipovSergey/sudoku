const fs = require('fs');
let content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(puzzleNumber = 2) {
  content = content.replaceAll(/-/gi, '.');
  const newArr = [];
  const puzzle = content.split('\n')[puzzleNumber];
  for (let i = 0; i < puzzle.length; i += 9) {
    newArr.push([puzzle.slice(i, i + 9)][0].split(''));
  }
  return newArr;
}
console.log(sudokuParse());

module.exports = sudokuParse;
