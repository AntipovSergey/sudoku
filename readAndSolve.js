// Подключить функции из файла sudoku.js.
const fs = require('fs');
const sudoku = require('./sudoku');

const puzzles = fs.readFileSync('./puzzles.txt', 'utf8');
function readAndSolve(puzzles) {
  const clearPuzzles = puzzles.split('\n').filter((line) => line !== '');
  const puzzleNumber = Number(process.argv[2]) || 1;
  const size = 9;
  const squareSize = 3;

  let arr = [];
  const table = [];
  const str = clearPuzzles[puzzleNumber].replaceAll('-', '0');
  for (let j = 1; j <= 81; j += 1) {
    arr.push(Number(str[j - 1]));
    if ((j % 9 === 0) && (j !== 0)) {
      table.push(arr);
      arr = [];
    }
  }
  return table;
}

console.table(readAndSolve(puzzles));

module.exports = readAndSolve;
