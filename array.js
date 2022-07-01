const fs = require('fs');
let puzzleString = (fs.readFileSync('puzzles.txt', 'utf-8')).split('\n');

const readPuzzles = () => {
  let puzzle = puzzleString[process.argv[2] - 1 || 0].split('');

  let puzzleMatix = [];
  for (let i = 0; i < 81; i += 9) {
 puzzleMatix.push(puzzle.slice(i, i + 9));
  }

  return puzzleMatix;
}

console.table(readPuzzles());
module.exports = readPuzzles;