const fs = require('fs');
const { join } = require('path');
const path = require('path');
const dirPath = path.join(__dirname, './sudoku-puzzles.txt');
const crew = fs.readFileSync(dirPath, 'utf-8');


function prettyBoard() {
  return crew.slice(0, -1).split('\n');
}

function findFirste(arr) {
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      if (arr[r][c] === '-') {
        arr[r][c] = Math.random

      }
    }
  }

}

module.exports = {
  prettyBoard,
  findFirste
};
