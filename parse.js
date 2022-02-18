const fs = require('fs');
const { join } = require('path');
const path = require('path');
const dirPath = path.join(__dirname, './sudoku-puzzles.txt');
const crew = fs.readFileSync(dirPath, 'utf-8');

function prettyBoard() {
  return crew.slice(0, -1).split('\n');
}

module.exports = {
  prettyBoard,
};
