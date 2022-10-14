const fs = require('fs');

function readFile(path) {
  const file = fs.readFileSync(path, 'utf-8');
  // for ()
  const sudoku15 = file.split('\n');
  const sudoku = sudoku15[0];
  return sudoku;
}
console.log(readFile('./puzzles.txt'));
module.exports = readFile;
