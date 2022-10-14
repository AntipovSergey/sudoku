const { log } = require('console');
const fs = require('fs');

function gameMenu() {
  console.log('**********************************');
  const warn1 = console.warn('Please, choose a board.\nEnter number (from "1" to "14")');
  return warn1;
}

function getBoards(sudokuNumber) {
  const readTxt = fs.readFileSync('./puzzles.txt', 'utf-8');
  const strings = readTxt.split('\n');
  strings.pop();
  const getArrays = strings.map((el) => el.split(''));

  return getArrays[sudokuNumber];
}

function createBoard() {
  const arr = getBoards(process.argv[2] || 1);
  if (process.argv[2] > 14) {
    gameMenu();
    return '**********************************';
  }
  const size = 9;
  const newArr = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i += 1) {
    newArr[i] = arr.slice((i * size), (i * size) + size);
  }
  return newArr;
}

// console.table(createBoard);

module.exports = {createBoard}
