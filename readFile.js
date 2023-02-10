const fs = require('fs');
const sudoku = require('./sudoku');

function readFile() {
  const readFileSudoku = fs.readFileSync('./puzzles.txt', 'utf-8').split('\n');
  const firstSudoku = readFileSudoku[0].split('').map((el) => (el !== '-' ? Number(el) : el));
  const res = [];
  for (let i = 0; i < firstSudoku.length; i += 9) {
    const chunk = firstSudoku.slice(i, i + 9);
    res.push(chunk);
  }
  return res;
}

module.exports = readFile;
