const { log } = require('console');
const fs = require('fs');

function gameMenu() {
  console.log('**********************************');
  const warn1 = console.warn('Please, choose a board.\nEnter number (from "1" to "14")')
  return warn1;
}

function getBoards(sudokuNumber) {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');
  const strings = readTxt.split('\n');
  strings.pop();
  const getArrays = strings.map((el) => el.split(''));
  if (process.argv[2] > 14) {
    gameMenu();
    return '**********************************';
  }
  return getArrays[sudokuNumber];
}
console.log(getBoards(process.argv[2] || 0));
