const fs = require('fs');
const { join } = require('path');
const path = require('path');
const dirPath = path.join(__dirname, './sudoku-puzzles.txt');
const crew = fs.readFileSync(dirPath, 'utf-8');

function prettyBoard(board) {
  const number = []
  number.push(crew.split('\n'))
  return number
}

module.exports = {
  prettyBoard,
};
