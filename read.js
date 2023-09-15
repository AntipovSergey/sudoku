const fs = require('fs');

function read() {
  const readingFile = fs.readFileSync('./puzzles.txt', 'utf8').trim().split('\n');
  const sudoku = readingFile.map((el) => Array.from(el));
  // console.log(sudoku);
}
read();

module.exports = { read };
