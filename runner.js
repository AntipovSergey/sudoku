// Используйте для решения судоку необходимые функции из файла sudoku.js
const fs = require('fs');

const filename = `${__dirname}/puzzles.txt`;

function toArray(filename) {
  const puzzles = fs
    .readFileSync(filename, 'utf-8')
    .split('\n');

  return puzzles;
}
console.log(toArray(filename));
module.exports = {};
