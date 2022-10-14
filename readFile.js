const fs = require('fs');

function readFile(path) {
  // for ()
  const sudoku15 = fs.readFileSync(path, 'utf-8').split('\n');
  sudoku15.pop();
  console.log(sudoku15);
  return sudoku15;
}
console.log(readFile('./puzzles.txt'));
module.exports = readFile;
