const { log } = require('console');
const fs = require('fs');

function getBoards() {
  const readtxt = fs.readFileSync('./puzzles.txt', 'utf-8');
  return readtxt;
}

console.log(getBoards());

