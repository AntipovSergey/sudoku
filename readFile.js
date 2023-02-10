const fs = require('fs');

const horizontal = require('./horizontalSearch');
const vert = require('./vertical');

function readFile() {
  const readFileSudoku = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');
  const firstSudoku = readFileSudoku[0].split('')
    .map((el) => (el !== '-' ? Number(el) : el));
  const res = [];
  for (let i = 0; i < firstSudoku.length; i += 9) {
    const chunk = firstSudoku.slice(i, i + 9);
    res.push(chunk);
  }
  return res;
}

const sudoku = readFile();

console.table(readFile());

console.log(horizontal(sudoku, 9));
console.log(vert(sudoku, 7));

module.exports = readFile;
