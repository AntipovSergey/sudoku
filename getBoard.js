const { log } = require('console');
const fs = require('fs');

function getBoards() {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');
  const firstBoard = readTxt.slice(0, 81).split('');
  // To Get Main Board?
  const sizeOfArray = 9;
  const readyFirstBoard = [];
  for (let i = 0; i < Math.ceil(firstBoard.length/sizeOfArray); i++) {
    readyFirstBoard[i] = firstBoard.slice((i * sizeOfArray), (i * sizeOfArray) + sizeOfArray);
  }
  return readyFirstBoard;
}

console.table(getBoards());

